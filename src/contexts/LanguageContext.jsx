import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      industries: "Industries",
      why: "Why Blue Stone",
      contact: "Contact",
    },
    company_name: "BLUE STONE ENERGY LLC",
    hero_headline: "Enabling Energy, Infrastructure, and Industrial Projects in Strategic Markets",
    hero_subheadline:
      "Blue Stone Energy LLC supports governments, investors, and international partners in developing, structuring, and delivering complex energy, oil & gas, power, water, and infrastructure projects.",
    cta_button_text: "Discuss an Opportunity",
    cta_button_secondary_text: "Our Services",
    footer_tagline:
      "Blue Stone Energy LLC is a strategic advisory and project development firm focused on energy and infrastructure in high-growth markets.",
    copyright: "© 2026 BlueStone Energy. All rights reserved.",
    about_title: "About Blue Stone Energy",
    about_who_we_are: "About Blue Stone Energy",
    about_vision: "Vision",
    about_mission: "Mission",
    about_values: "Approach",
    advisory_title: "Services",
    trading_title: "Industries",
    contact_title: "Let’s Build the Next Energy Project Together",
    contact_subtitle: "Blue Stone Energy LLC — Houston Energy Corridor, Texas",
    form_name: "Name *",
    form_company: "Company *",
    form_email: "Email *",
    form_phone: "Phone",
    form_message: "Message *",
    form_submit: "Send Message",
    form_sending: "Sending...",
    form_success: "Thank you for your inquiry. A member of our team will respond within 24-48 business hours.",
    disclaimer: "Disclaimer: Blue Stone Energy LLC engages exclusively with qualified corporate, governmental, and institutional clients. Inquiries from individuals or entities seeking retail transactions will not receive a response. All communications are confidential and subject to our standard engagement terms.",
    // Home page content
    about_overview_title: "From Strategy to Execution — With Intelligence Built In",
    about_overview_text:
      "We operate at the intersection of strategic advisory, project development, investment structuring, and digital integration.",
    about_overview_text2:
      "We enable projects not only to be designed—but to be financed, delivered, and optimized for long-term performance.",
    global_presence_title: "Core Capabilities",
    stats_barrels: "Barrels Traded Annually",
    stats_countries: "Countries Served",
    stats_value: "Annual Transaction Value",
    stats_coverage: "Market Coverage",
    services_advisory_title: "Strategic Advisory",
    services_advisory_desc:
      "Market entry, sector transformation, infrastructure strategy",
    services_trading_title: "Project Origination & Development",
    services_trading_desc:
      "Oil & gas, LNG, pipelines, power, water, renewables",
    services_global_title: "Market Access & Execution Enablement",
    services_global_desc:
      "Stakeholder engagement, consortium building, delivery coordination",
    learn_more: "Learn More",
    why_bluestone_title: "Why Blue Stone Energy",
    value_integrity: "Strategy + Execution",
    value_integrity_desc: "We support projects from concept through execution readiness.",
    value_discipline: "Local Presence + Global Standards",
    value_discipline_desc:
      "We combine international expertise with on-the-ground execution capability.",
    value_partnership: "Market Access",
    value_partnership_desc:
      "We enable international partners to operate effectively in complex markets.",
    value_excellence: "Technology Integration",
    value_excellence_desc:
      "We embed AI and digital systems into infrastructure.",
    products_title: "Industries Overview",
    products_subtitle: "Selected sectors where we enable project development and execution",
    product_crude_title: "Oil & Gas",
    product_crude_desc: "Upstream, midstream, downstream",
    product_diesel_title: "Power, Electricity & Water",
    product_diesel_desc: "Generation, grid, desalination",
    product_refined_title: "Renewable Energy",
    product_refined_desc: "Solar, wind, hybrid, storage",
    product_industrial_title: "LNG & Gas Infrastructure",
    product_industrial_desc: "Terminals, regasification",
    product_industrial2_title: "Industrial & Mining",
    product_industrial2_desc: "Resource to industry",
    product_infra_title: "Strategic Infrastructure",
    product_infra_desc: "Strategic infrastructure development",
    // About page
    about_who_text:
      "Blue Stone Energy LLC is a strategic advisory and project development firm focused on energy, infrastructure, and industrial sectors in high-growth markets.",
    about_who_text2:
      "We support clients in transforming opportunities into structured and executable projects by combining strategy, commercial structuring, and local execution capability.",
    about_vision_text:
      "To become a trusted platform for energy and infrastructure development across emerging and strategic markets.",
    about_mission_text:
      "To enable high-impact energy and infrastructure projects through strategy, execution support, and intelligent integration.",
    // Advisory page
    advisory_subtitle:
      "Blue Stone Energy provides integrated advisory, development, and execution enablement services for complex energy and infrastructure initiatives.",
    strategic_title: "Strategic Advisory",
    commercial_title: "Project Development",
    investment_title: "Investment & Transaction Advisory",
    partnerships_title: "Market Access & Partnerships",
    execution_enablement_title: "Execution Enablement",
    digital_ai_title: "Digital & AI Integration",
    ai_driven_title: "AI-Driven Energy & Infrastructure",
    ai_driven_text:
      "We integrate advanced digital technologies and artificial intelligence into energy and infrastructure projects to enhance performance, resilience, and decision-making.",
    ai_key_applications: "Key Applications",
    ai_outcomes: "Outcomes",
    ai_app_1: "Predictive maintenance",
    ai_app_2: "Smart grid systems",
    ai_app_3: "AI-driven forecasting",
    ai_app_4: "Digital twins",
    ai_app_5: "Intelligent monitoring systems",
    ai_app_6: "Automation of operations",
    ai_app_7: "Data-driven platforms",
    ai_out_1: "Reduced costs",
    ai_out_2: "Increased reliability",
    ai_out_3: "Improved safety",
    ai_out_4: "Real-time insights",
    integrated_energy_title: "Integrated Energy: Oil, Gas, Power, Water & Renewables",
    integrated_energy_text:
      "We support the development of balanced energy systems combining traditional and renewable sources.",
    integrated_energy_capabilities: "Capabilities",
    int_cap_1: "Power generation",
    int_cap_2: "Water desalination and treatment",
    int_cap_3: "Renewable energy systems",
    int_cap_4: "Energy storage",
    int_cap_5: "Industrial energy optimization",
    int_cap_6: "Transition strategies",
    // Trading page
    trading_subtitle:
      "We support energy and infrastructure development across key sectors and identify high-impact opportunity areas aligned with partner priorities.",
    portfolio_title: "Industries",
    capabilities_title: "Selected Opportunity Areas",
    execution_title: "From Opportunity to Execution",
    execution_text:
      "We support projects across strategy, structuring, alignment, and execution readiness.",
    card_name: "Anas Chbib",
    card_title: "CEO & Founder — BlueStone Energy",
    card_call: "Call",
    card_email: "Email",
    card_download_vcard: "Download vCard",
    card_photo_alt: "Anas Chbib",
    card_linkedin_line: "Anas Chbib / LinkedIn",
    card_x_line: "Anas Chbib / X",
    card_meta_title: "Anas Chbib | BlueStone Energy",
    card_meta_description:
      "Digital business card for Anas Chbib, CEO & Founder of BlueStone Energy. Phone, email, LinkedIn, and X.",
    card_lang_aria: "Switch language",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      industries: "القطاعات",
      why: "لماذا بلو ستون",
      contact: "اتصل بنا",
    },
    company_name: "بلو ستون للطاقة ذ.م.م",
    hero_headline: "تمكين مشاريع الطاقة والبنية التحتية والصناعة في الأسواق الاستراتيجية",
    hero_subheadline:
      "تدعم بلو ستون للطاقة الحكومات والمستثمرين والشركاء الدوليين في تطوير وهيكلة وتنفيذ مشاريع الطاقة والنفط والغاز والكهرباء والمياه والبنية التحتية المعقدة.",
    cta_button_text: "ناقش فرصة",
    cta_button_secondary_text: "خدماتنا",
    footer_tagline:
      "بلو ستون للطاقة ذ.م.م هي شركة استشارية وتطوير مشاريع تركز على الطاقة والبنية التحتية في الأسواق عالية النمو.",
    copyright: "© 2026 بلو ستون للطاقة. جميع الحقوق محفوظة.",
    about_title: "من نحن - بلو ستون للطاقة",
    about_who_we_are: "نبذة عن بلو ستون للطاقة",
    about_vision: "الرؤية",
    about_mission: "المهمة",
    about_values: "النهج",
    advisory_title: "الخدمات",
    trading_title: "القطاعات",
    contact_title: "لنبنِ مشروع الطاقة القادم معًا",
    contact_subtitle: "بلو ستون للطاقة ذ.م.م — هيوستن، ممر الطاقة، تكساس",
    form_name: "الاسم *",
    form_company: "الشركة *",
    form_email: "البريد الإلكتروني *",
    form_phone: "الهاتف",
    form_message: "الرسالة *",
    form_submit: "إرسال الرسالة",
    form_sending: "جاري الإرسال...",
    form_success: "شكرًا لاستفسارك. سيرد أحد أعضاء فريقنا خلال 24-48 ساعة عمل.",
    disclaimer: "تنويه: تتعامل بلو ستون للطاقة ذ.م.م حصريًا مع العملاء المؤسسيين والحكوميين والمؤسسات المؤهلة. لن يتم الرد على الاستفسارات من الأفراد أو الكيانات التي تسعى إلى معاملات تجزئة. جميع الاتصالات سرية وتخضع لشروط التعامل القياسية لدينا.",
    // Home page content
    about_overview_title: "من الاستراتيجية إلى التنفيذ — مع دمج الذكاء",
    about_overview_text:
      "نعمل عند تقاطع الاستشارات الاستراتيجية وتطوير المشاريع وهيكلة الاستثمار والتكامل الرقمي.",
    about_overview_text2:
      "نُمكّن المشاريع ليس فقط من حيث التصميم، بل من حيث التمويل والتنفيذ والتحسين لأداء طويل الأمد.",
    global_presence_title: "القدرات الأساسية",
    stats_barrels: "برميل متداول سنويًا",
    stats_countries: "دولة يتم خدمتها",
    stats_value: "قيمة المعاملات السنوية",
    stats_coverage: "تغطية السوق",
    services_advisory_title: "الاستشارات الاستراتيجية",
    services_advisory_desc: "دخول الأسواق، تحول القطاعات، استراتيجية البنية التحتية",
    services_trading_title: "منشأ المشاريع والتطوير",
    services_trading_desc: "النفط والغاز، الغاز الطبيعي المسال، الأنابيب، الكهرباء، المياه، الطاقة المتجددة",
    services_global_title: "الوصول إلى الأسواق وتمكين التنفيذ",
    services_global_desc: "إشراك أصحاب المصلحة، بناء التحالفات، تنسيق التسليم",
    learn_more: "اعرف المزيد",
    why_bluestone_title: "لماذا بلو ستون للطاقة",
    value_integrity: "الاستراتيجية + التنفيذ",
    value_integrity_desc: "ندعم المشاريع من الفكرة حتى الجاهزية للتنفيذ.",
    value_discipline: "حضور محلي + معايير عالمية",
    value_discipline_desc: "نجمع بين الخبرة الدولية والقدرة التنفيذية على الأرض.",
    value_partnership: "الوصول إلى الأسواق",
    value_partnership_desc: "نُمكّن الشركاء الدوليين من العمل بفعالية في الأسواق المعقدة.",
    value_excellence: "تكامل التكنولوجيا",
    value_excellence_desc: "نُدمج أنظمة الذكاء الاصطناعي والرقمنة ضمن البنية التحتية.",
    products_title: "نظرة عامة على القطاعات",
    products_subtitle: "قطاعات مختارة نُمكّن فيها تطوير المشاريع وجاهزيتها للتنفيذ",
    product_crude_title: "النفط والغاز",
    product_crude_desc: "المنبع والوسط والمصب",
    product_diesel_title: "الكهرباء والمياه",
    product_diesel_desc: "التوليد، الشبكات، التحلية",
    product_refined_title: "الطاقة المتجددة",
    product_refined_desc: "الطاقة الشمسية والرياح والهجينة والتخزين",
    product_industrial_title: "بنية الغاز والغاز الطبيعي المسال",
    product_industrial_desc: "المحطات وإعادة التغويز",
    product_industrial2_title: "الصناعة والتعدين",
    product_industrial2_desc: "من الموارد إلى الصناعة",
    product_infra_title: "البنية التحتية الاستراتيجية",
    product_infra_desc: "تطوير البنية التحتية الاستراتيجية",
    // About page
    about_who_text:
      "بلو ستون للطاقة ذ.م.م هي شركة استشارية استراتيجية وتطوير مشاريع تركز على قطاعات الطاقة والبنية التحتية والصناعة في الأسواق عالية النمو.",
    about_who_text2:
      "ندعم العملاء في تحويل الفرص إلى مشاريع مُهيكلة وقابلة للتنفيذ عبر الجمع بين الاستراتيجية والهيكلة التجارية والقدرة التنفيذية المحلية.",
    about_vision_text:
      "أن نصبح منصة موثوقة لتطوير الطاقة والبنية التحتية عبر الأسواق الناشئة والاستراتيجية.",
    about_mission_text:
      "تمكين مشاريع الطاقة والبنية التحتية عالية الأثر عبر الاستراتيجية ودعم التنفيذ والتكامل الذكي.",
    // Advisory page
    advisory_subtitle:
      "تقدم بلو ستون للطاقة خدمات متكاملة للاستشارات والتطوير وتمكين التنفيذ لمبادرات الطاقة والبنية التحتية المعقدة.",
    strategic_title: "الاستشارات الاستراتيجية",
    commercial_title: "تطوير المشاريع",
    investment_title: "استشارات الاستثمار والمعاملات",
    partnerships_title: "الوصول إلى الأسواق والشراكات",
    execution_enablement_title: "تمكين التنفيذ",
    digital_ai_title: "التكامل الرقمي والذكاء الاصطناعي",
    ai_driven_title: "طاقة وبنية تحتية مدعومة بالذكاء الاصطناعي",
    ai_driven_text:
      "نُدمج التقنيات الرقمية المتقدمة والذكاء الاصطناعي في مشاريع الطاقة والبنية التحتية لتعزيز الأداء والمرونة ودعم اتخاذ القرار.",
    ai_key_applications: "التطبيقات الرئيسية",
    ai_outcomes: "النتائج",
    ai_app_1: "الصيانة التنبؤية",
    ai_app_2: "أنظمة الشبكات الذكية",
    ai_app_3: "التنبؤ المدعوم بالذكاء الاصطناعي",
    ai_app_4: "التوائم الرقمية",
    ai_app_5: "أنظمة المراقبة الذكية",
    ai_app_6: "أتمتة العمليات",
    ai_app_7: "منصات قائمة على البيانات",
    ai_out_1: "خفض التكاليف",
    ai_out_2: "زيادة الموثوقية",
    ai_out_3: "تحسين السلامة",
    ai_out_4: "رؤى فورية",
    integrated_energy_title: "طاقة متكاملة: نفط وغاز وكهرباء ومياه ومتجددة",
    integrated_energy_text:
      "ندعم تطوير أنظمة طاقة متوازنة تجمع بين المصادر التقليدية والمتجددة.",
    integrated_energy_capabilities: "القدرات",
    int_cap_1: "توليد الطاقة",
    int_cap_2: "تحلية المياه ومعالجتها",
    int_cap_3: "أنظمة الطاقة المتجددة",
    int_cap_4: "تخزين الطاقة",
    int_cap_5: "تحسين الطاقة الصناعية",
    int_cap_6: "استراتيجيات التحول",
    // Trading page
    trading_subtitle:
      "ندعم تطوير الطاقة والبنية التحتية عبر قطاعات رئيسية ونحدد مجالات فرص عالية الأثر بما يتماشى مع أولويات الشركاء.",
    portfolio_title: "القطاعات",
    capabilities_title: "مجالات فرص مختارة",
    execution_title: "من الفرصة إلى التنفيذ",
    execution_text:
      "ندعم المشاريع عبر الاستراتيجية والهيكلة والمواءمة والجاهزية للتنفيذ.",
    card_name: "أنس شبيب",
    card_title: "الرئيس التنفيذي والمؤسس — بلو ستون للطاقة",
    card_call: "اتصال",
    card_email: "بريد",
    card_download_vcard: "تنزيل vCard",
    card_photo_alt: "أنس شبيب",
    card_linkedin_line: "أنس شبيب / LinkedIn",
    card_x_line: "أنس شبيب / X",
    card_meta_title: "أنس شبيب | بلو ستون للطاقة",
    card_meta_description:
      "بطاقة تعارف رقمية لأنس شبيب، الرئيس التنفيذي والمؤسس لبلو ستون للطاقة. الهاتف، البريد، لينكد إن وX.",
    card_lang_aria: "تغيير اللغة",
  }
}

export const LanguageProvider = ({ children }) => {
  // Load saved language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('bluestone-language')
    return savedLanguage || 'en'
  })

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en'
    setLanguage(newLanguage)
    // Save to localStorage
    localStorage.setItem('bluestone-language', newLanguage)
  }

  useEffect(() => {
    document.documentElement.setAttribute('lang', language)
    document.body.classList.toggle('rtl', language === 'ar')
    document.body.style.fontFamily = language === 'ar'
      ? "'IBM Plex Sans Arabic', sans-serif"
      : "'Inter', sans-serif"
  }, [language])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
