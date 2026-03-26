import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, Twitter, Download } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useAnasPageMeta } from '@/hooks/useAnasPageMeta'
import { Button } from '../ui/Button'
import headshotUrl from '../../../Image/anas-chbib-768x904.jpg'

const PHONE_DISPLAY = '+1 713 282 7648'
const PHONE_TEL = '+17132827648'
const EMAIL = 'ach@bluestoneenergy.energy'
// const LINKEDIN = 'https://www.linkedin.com/in/anaschbib'
// const X_URL = 'https://x.com/ChbibAnas'

function downloadVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN:Anas Chbib',
    'N:Chbib;Anas;;;',
    'ORG:BlueStone Energy',
    'TITLE:CEO & Founder',
    `TEL;TYPE=CELL,VOICE:${PHONE_TEL}`,
    `EMAIL;TYPE=WORK:${EMAIL}`,
    // `URL:${LINKEDIN}`,
    // `NOTE:X: ${X_URL}`,
    'END:VCARD',
    '',
  ].join('\r\n')

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'anas-chbib.vcf'
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

function NetworkPattern() {
  return (
    <svg
      className="absolute inset-0 h-full w-full text-accent/25"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern id="anasCardGrid" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.25" fill="currentColor" />
          <circle cx="28" cy="20" r="1" fill="currentColor" />
          <circle cx="40" cy="40" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#anasCardGrid)" />
      <g stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.35">
        <line x1="0" y1="120" x2="100%" y2="40" />
        <line x1="10%" y1="0" x2="90%" y2="100%" />
        <line x1="0" y1="60%" x2="100%" y2="70%" />
      </g>
    </svg>
  )
}

export const AnasChbibPage = () => {
  const { t, language, toggleLanguage } = useLanguage()
  const [ogImageUrl, setOgImageUrl] = useState('')

  useEffect(() => {
    setOgImageUrl(new URL(headshotUrl, window.location.href).href)
  }, [])

  useAnasPageMeta({
    title: t('card_meta_title'),
    description: t('card_meta_description'),
    imageAbsoluteUrl: ogImageUrl,
    language,
  })

  const rows = [
    {
      key: 'phone',
      icon: Phone,
      href: `tel:${PHONE_TEL}`,
      label: PHONE_DISPLAY,
      external: false,
    },
    // {
    //   key: 'linkedin',
    //   icon: Linkedin,
    //   href: LINKEDIN,
    //   label: t('card_linkedin_line'),
    //   external: true,
    // },
    // {
    //   key: 'x',
    //   icon: Twitter,
    //   href: X_URL,
    //   label: t('card_x_line'),
    //   external: true,
    // },
    {
      key: 'email',
      icon: Mail,
      href: `mailto:${EMAIL}`,
      label: EMAIL,
      external: false,
    },
  ]

  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col bg-muted sm:min-h-screen sm:items-center sm:justify-center sm:py-16">
      <div
        className="fixed z-[100] flex items-center gap-0.5 rounded-full border border-white/20 bg-primary/90 px-1 py-0.5 text-[11px] font-semibold text-white shadow-md backdrop-blur-sm max-sm:top-[max(0.75rem,env(safe-area-inset-top))] max-sm:right-[max(0.75rem,env(safe-area-inset-right))] sm:right-6 sm:top-6"
        role="group"
        aria-label={t('card_lang_aria')}
      >
        <button
          type="button"
          onClick={() => language !== 'en' && toggleLanguage()}
          className={`rounded-full px-2 py-1 transition-colors ${
            language === 'en' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'
          }`}
        >
          EN
        </button>
        <span className="text-white/35" aria-hidden>
          |
        </span>
        <button
          type="button"
          onClick={() => language !== 'ar' && toggleLanguage()}
          className={`rounded-full px-2 py-1 transition-colors ${
            language === 'ar' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'
          }`}
        >
          AR
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-full min-h-0 flex-1 flex-col sm:max-w-md sm:flex-none sm:px-6">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-none border-y border-primary/10 bg-white shadow-xl sm:h-auto sm:flex-none sm:rounded-2xl sm:border sm:border-primary/10"
        >
          <div className="relative bg-primary px-8 pb-10 pt-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-secondary/90" />
            <NetworkPattern />
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-5 h-36 w-36 overflow-hidden rounded-full ring-4 ring-accent/50 ring-offset-4 ring-offset-primary">
                <img
                  src={headshotUrl}
                  alt={t('card_photo_alt')}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h1 className="font-playfair text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t('card_name')}
              </h1>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/85 sm:text-base">
                {t('card_title')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 bg-accent-dark">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center justify-center gap-2 border-r border-white/15 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-black/10"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
              {t('card_call')}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-2 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-black/10"
            >
              <Mail className="h-5 w-5 shrink-0" aria-hidden />
              {t('card_email')}
            </a>
          </div>

          <ul className="divide-y divide-muted bg-white max-sm:flex max-sm:min-h-0 max-sm:flex-1 max-sm:flex-col">
            {rows.map(({ key, icon: Icon, href, label, external }) => (
              <li key={key}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted/60"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1 text-start text-sm font-medium text-secondary break-all sm:text-base">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto shrink-0 border-t border-muted bg-white px-5 py-6 sm:mt-0">
            <Button
              type="button"
              onClick={downloadVCard}
              className="w-full gap-3 bg-accent-dark py-3.5 text-base font-semibold uppercase tracking-wide text-white hover:bg-accent-dark/90"
            >
              <Download className="h-7 w-7 shrink-0" strokeWidth={2} aria-hidden />
              {t('card_download_vcard')}
            </Button>
          </div>
        </motion.article>
      </div>
    </div>
  )
}
