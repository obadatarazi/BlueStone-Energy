<?php

session_set_cookie_params([
    'httponly' => true,
    'samesite' => 'Strict',
    'secure' => isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
]);
session_start();

header('Content-Type: application/json; charset=utf-8');
if (!empty($_SERVER['HTTP_ORIGIN'])) {
    header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['csrf'])) {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    echo json_encode(['success' => true, 'csrf_token' => $_SESSION['csrf_token']]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$csrfHeader = (string)($_SERVER['HTTP_X_CSRF_TOKEN'] ?? '');
$csrfBody = '';

$configPath = __DIR__ . '/mail_config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server mail config is missing.']);
    exit;
}

$config = require $configPath;

$rawInput = file_get_contents('php://input');
$payload = json_decode($rawInput, true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON payload.']);
    exit;
}

$csrfBody = (string)($payload['csrf_token'] ?? '');
$csrfToken = $csrfHeader !== '' ? $csrfHeader : $csrfBody;

if (empty($_SESSION['csrf_token']) || $csrfToken === '' || !hash_equals($_SESSION['csrf_token'], $csrfToken)) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Invalid CSRF token.']);
    exit;
}

function clean_text($value, $maxLen = 2000)
{
    $text = trim((string)($value ?? ''));
    $text = preg_replace('/[\r\n]+/', ' ', $text);
    return mb_substr($text, 0, $maxLen);
}

$name = clean_text($payload['name'] ?? '', 120);
$company = clean_text($payload['company'] ?? '', 180);
$email = trim((string)($payload['email'] ?? ''));
$phone = clean_text($payload['phone'] ?? '', 80);
$message = clean_text($payload['message'] ?? '', 4000);
$website = clean_text($payload['website'] ?? '', 200);

if ($website !== '') {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
    exit;
}

if ($name === '' || $company === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Required fields are missing.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

function smtp_read_line($socket)
{
    $line = '';
    while (($chunk = fgets($socket, 515)) !== false) {
        $line .= $chunk;
        if (preg_match('/^\d{3} /', $chunk)) {
            break;
        }
    }
    return $line;
}

function smtp_expect($socket, array $acceptedCodes)
{
    $response = smtp_read_line($socket);
    $code = (int)substr($response, 0, 3);
    if (!in_array($code, $acceptedCodes, true)) {
        throw new RuntimeException('SMTP error: ' . trim($response));
    }
    return $response;
}

function smtp_send($socket, $command)
{
    fwrite($socket, $command . "\r\n");
}

function send_via_smtp(array $cfg, array $mailData)
{
    $scheme = ($cfg['smtp_encryption'] ?? 'ssl') === 'ssl' ? 'ssl://' : '';
    $host = (string)$cfg['smtp_host'];
    $port = (int)$cfg['smtp_port'];
    $username = (string)$cfg['smtp_username'];
    $password = (string)$cfg['smtp_password'];
    $fromEmail = (string)$cfg['from_email'];
    $fromName = (string)$cfg['from_name'];
    $toEmail = (string)$cfg['to_email'];

    $socket = stream_socket_client(
        $scheme . $host . ':' . $port,
        $errno,
        $errstr,
        20,
        STREAM_CLIENT_CONNECT
    );

    if (!$socket) {
        throw new RuntimeException('SMTP connection failed: ' . $errstr . ' (' . $errno . ')');
    }

    stream_set_timeout($socket, 20);

    smtp_expect($socket, [220]);
    smtp_send($socket, 'EHLO bluestoneenergy.energy');
    smtp_expect($socket, [250]);

    smtp_send($socket, 'AUTH LOGIN');
    smtp_expect($socket, [334]);
    smtp_send($socket, base64_encode($username));
    smtp_expect($socket, [334]);
    smtp_send($socket, base64_encode($password));
    smtp_expect($socket, [235]);

    smtp_send($socket, 'MAIL FROM:<' . $fromEmail . '>');
    smtp_expect($socket, [250]);
    smtp_send($socket, 'RCPT TO:<' . $toEmail . '>');
    smtp_expect($socket, [250, 251]);
    smtp_send($socket, 'DATA');
    smtp_expect($socket, [354]);

    $subject = 'New Contact Form Submission - BlueStone Energy';
    $bodyLines = [
        'Name: ' . $mailData['name'],
        'Company: ' . $mailData['company'],
        'Email: ' . $mailData['email'],
        'Phone: ' . ($mailData['phone'] === '' ? 'N/A' : $mailData['phone']),
        '',
        'Message:',
        $mailData['message'],
    ];
    $bodyText = implode("\r\n", $bodyLines);

    $headers = [
        'From: ' . $fromName . ' <' . $fromEmail . '>',
        'Reply-To: ' . $mailData['email'],
        'To: <' . $toEmail . '>',
        'Subject: ' . $subject,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
    ];

    $data = implode("\r\n", $headers) . "\r\n\r\n" . $bodyText . "\r\n.";
    smtp_send($socket, $data);
    smtp_expect($socket, [250]);

    smtp_send($socket, 'QUIT');
    fclose($socket);
}

try {
    send_via_smtp($config, [
        'name' => $name,
        'company' => $company,
        'email' => $email,
        'phone' => $phone,
        'message' => $message,
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully.',
    ]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to send message right now.',
        'error' => $e->getMessage(),
    ]);
}
