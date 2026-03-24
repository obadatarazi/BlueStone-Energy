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
      advisory: "Advisory",
      trading: "Trading",
      contact: "Contact"
    },
    company_name: "BlueStone Energy",
    hero_headline: "Strategic Energy Advisory & International Trading",
    hero_subheadline: "Trusted Insight. Disciplined Execution. Global Reach.",
    cta_button_text: "Contact Our Team",
    footer_tagline: "Strategic Energy Advisory & International Trading",
    copyright: "© 2026 BlueStone Energy. All rights reserved.",
    about_title: "About BlueStone Energy",
    about_who_we_are: "Who We Are",
    about_vision: "Vision",
    about_mission: "Mission",
    about_values: "Our Values",
    advisory_title: "Advisory Services",
    trading_title: "Trading Activities",
    contact_title: "Contact Us",
    contact_subtitle: "We welcome inquiries from qualified organizations and institutional clients. Please provide your details and a member of our team will respond promptly.",
    form_name: "Name *",
    form_company: "Company *",
    form_email: "Email *",
    form_phone: "Phone",
    form_message: "Message *",
    form_submit: "Send Message",
    form_sending: "Sending...",
    form_success: "Thank you for your inquiry. A member of our team will respond within 24-48 business hours.",
    disclaimer: "Disclaimer: BlueStone Energy engages exclusively with qualified corporate, governmental, and institutional clients. Inquiries from individuals or entities seeking retail transactions will not receive a response. All communications are confidential and subject to our standard engagement terms.",
    // Home page content
    about_overview_title: "About BlueStone Energy",
    about_overview_text: "BlueStone Energy is a premier international energy advisory and trading firm specializing in the global oil and gas sector. We combine deep market expertise with institutional-grade execution to serve governments, energy companies, and strategic investors worldwide.",
    about_overview_text2: "Our approach is built on discretion, integrity, and a commitment to delivering measurable value.",
    global_presence_title: "Global Market Presence",
    stats_barrels: "Barrels Traded Annually",
    stats_countries: "Countries Served",
    stats_value: "Annual Transaction Value",
    stats_coverage: "Market Coverage",
    services_advisory_title: "Advisory Services",
    services_advisory_desc: "Strategic counsel on oil & gas market positioning, investment strategies, regulatory compliance, and commercial structuring for the global energy sector.",
    services_trading_title: "Trading Activities",
    services_trading_desc: "International trading in crude oil, diesel (EN590), gasoline, jet fuel, and industrial fuels with comprehensive logistics, pricing, and compliance support.",
    services_global_title: "Global Reach",
    services_global_desc: "Operating across key oil & gas producing and consuming markets with established supplier relationships, logistics networks, and deep regional knowledge spanning continents.",
    learn_more: "Learn More",
    why_bluestone_title: "Why BlueStone",
    value_integrity: "Integrity",
    value_integrity_desc: "Unwavering ethical standards in every transaction and relationship",
    value_discipline: "Discipline",
    value_discipline_desc: "Rigorous analysis and methodical execution in complex markets",
    value_partnership: "Partnership",
    value_partnership_desc: "Long-term collaboration built on mutual trust and aligned interests",
    value_excellence: "Excellence",
    value_excellence_desc: "Institutional-grade expertise delivering measurable results",
    products_title: "Our Product Focus",
    products_subtitle: "Specializing in petroleum products and refined fuels traded across international markets",
    product_crude_title: "Crude Oil",
    product_crude_desc: "Multiple grades including Brent, WTI, Dubai, and regional varieties sourced from major producing regions",
    product_diesel_title: "Diesel (EN590)",
    product_diesel_desc: "Ultra-low sulfur diesel meeting EN590 and regional specifications for automotive and industrial use",
    product_refined_title: "Refined Products",
    product_refined_desc: "Gasoline (various octane ratings), jet fuel (Jet A-1), naphtha, and specialty refined petroleum products",
    product_industrial_title: "Industrial Fuel",
    product_industrial_desc: "Heavy fuel oil, marine bunker fuel, and custom blends for power generation and industrial applications",
    // About page
    about_who_text: "BlueStone Energy is an international energy advisory and trading firm serving sophisticated clients in the global oil and gas sector. We provide strategic counsel, market intelligence, and execution capabilities to governments, energy companies, industrial groups, and institutional investors.",
    about_who_text2: "Our team brings decades of combined experience in energy markets, international trade, and commercial structuring. We operate with the discretion expected at the highest levels of the industry, and our reputation is built on delivering results that matter to our clients' most critical objectives.",
    about_vision_text: "To be the trusted advisor and execution partner of choice for clients navigating the complexities of global energy markets, recognized for our integrity, insight, and impact.",
    about_mission_text: "BlueStone Energy delivers strategic energy advisory and international trading services that empower our clients to achieve their objectives with confidence. We combine deep market expertise, disciplined execution, and a commitment to the highest professional standards to create lasting value for the organizations and institutions we serve.",
    // Advisory page
    advisory_subtitle: "BlueStone Energy provides strategic counsel to governments, energy companies, and investors navigating the complexities of global oil and gas markets.",
    strategic_title: "Strategic Oil & Gas Advisory",
    commercial_title: "Commercial & Investment Advisory",
    // Trading page
    trading_subtitle: "BlueStone Energy conducts international energy trading with a focus on reliability, transparency, and comprehensive execution support.",
    portfolio_title: "Product Portfolio",
    capabilities_title: "Capabilities",
    execution_title: "Trade Execution",
    execution_text: "BlueStone Energy manages every aspect of the transaction lifecycle, from initial inquiry through final delivery and settlement. Our operational discipline ensures predictable outcomes and minimizes execution risk for our counterparties.",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      advisory: "الاستشارات",
      trading: "التداول",
      contact: "اتصل بنا"
    },
    company_name: "بلو ستون للطاقة",
    hero_headline: "استشارات استراتيجية وتجارة دولية في قطاع الطاقة",
    hero_subheadline: "رؤية موثوقة. تنفيذ منضبط. انتشار عالمي.",
    cta_button_text: "تواصل مع فريقنا",
    footer_tagline: "استشارات استراتيجية وتجارة دولية في قطاع الطاقة",
    copyright: "© 2026 بلو ستون للطاقة. جميع الحقوق محفوظة.",
    about_title: "من نحن - بلو ستون للطاقة",
    about_who_we_are: "من نحن",
    about_vision: "الرؤية",
    about_mission: "المهمة",
    about_values: "قيمنا",
    advisory_title: "خدمات الاستشارات",
    trading_title: "أنشطة التداول",
    contact_title: "اتصل بنا",
    contact_subtitle: "نرحب بالاستفسارات من المنظمات والمؤسسات المؤهلة. يرجى تقديم تفاصيلك وسيرد أحد أعضاء فريقنا في أقرب وقت.",
    form_name: "الاسم *",
    form_company: "الشركة *",
    form_email: "البريد الإلكتروني *",
    form_phone: "الهاتف",
    form_message: "الرسالة *",
    form_submit: "إرسال الرسالة",
    form_sending: "جاري الإرسال...",
    form_success: "شكرًا لاستفسارك. سيرد أحد أعضاء فريقنا خلال 24-48 ساعة عمل.",
    disclaimer: "تنويه: تتعامل بلو ستون للطاقة حصريًا مع العملاء المؤسسيين والحكوميين والمؤسسات المؤهلة. لن يتم الرد على الاستفسارات من الأفراد أو الكيانات التي تسعى إلى معاملات تجزئة. جميع الاتصالات سرية وتخضع لشروط التعامل القياسية لدينا.",
    // Home page content
    about_overview_title: "من نحن - بلو ستون للطاقة",
    about_overview_text: "بلو ستون للطاقة هي شركة استشارية وتجارية دولية رائدة متخصصة في قطاع النفط والغاز العالمي. نجمع بين الخبرة السوقية العميقة والتنفيذ على مستوى المؤسسات لخدمة الحكومات وشركات الطاقة والمستثمرين الاستراتيجيين في جميع أنحاء العالم.",
    about_overview_text2: "نهجنا مبني على الحذر والنزاهة والالتزام بتقديم قيمة قابلة للقياس.",
    global_presence_title: "الوجود العالمي في السوق",
    stats_barrels: "برميل متداول سنويًا",
    stats_countries: "دولة يتم خدمتها",
    stats_value: "قيمة المعاملات السنوية",
    stats_coverage: "تغطية السوق",
    services_advisory_title: "خدمات الاستشارات",
    services_advisory_desc: "مشورة استراتيجية حول وضع سوق النفط والغاز واستراتيجيات الاستثمار والامتثال التنظيمي والهيكلة التجارية لقطاع الطاقة العالمي.",
    services_trading_title: "أنشطة التداول",
    services_trading_desc: "التجارة الدولية في النفط الخام والديزل (EN590) والبنزين ووقود الطائرات والوقود الصناعي مع دعم شامل للخدمات اللوجستية والتسعير والامتثال.",
    services_global_title: "الانتشار العالمي",
    services_global_desc: "نعمل عبر أسواق إنتاج واستهلاك النفط والغاز الرئيسية مع علاقات موردين راسخة وشبكات لوجستية ومعرفة إقليمية عميقة تمتد عبر القارات.",
    learn_more: "اعرف المزيد",
    why_bluestone_title: "لماذا بلو ستون",
    value_integrity: "النزاهة",
    value_integrity_desc: "معايير أخلاقية ثابتة في كل معاملة وعلاقة",
    value_discipline: "الانضباط",
    value_discipline_desc: "تحليل صارم وتنفيذ منهجي في الأسواق المعقدة",
    value_partnership: "الشراكة",
    value_partnership_desc: "تعاون طويل الأمد مبني على الثقة المتبادلة والمصالح المتوافقة",
    value_excellence: "التميز",
    value_excellence_desc: "خبرة على مستوى المؤسسات تقدم نتائج قابلة للقياس",
    products_title: "تركيزنا على المنتجات",
    products_subtitle: "متخصصون في منتجات البترول والوقود المكرر المتداولة في الأسواق الدولية",
    product_crude_title: "النفط الخام",
    product_crude_desc: "درجات متعددة تشمل برنت وWTI ودبي ومجموعات إقليمية من مصادر المناطق المنتجة الرئيسية",
    product_diesel_title: "الديزل (EN590)",
    product_diesel_desc: "ديزل منخفض الكبريت للغاية يلبي مواصفات EN590 والإقليمية للاستخدامات السيارات والصناعية",
    product_refined_title: "المنتجات المكررة",
    product_refined_desc: "البنزين (درجات أوكتان مختلفة) ووقود الطائرات (Jet A-1) والنافتا ومنتجات بترولية مكررة متخصصة",
    product_industrial_title: "الوقود الصناعي",
    product_industrial_desc: "زيت الوقود الثقيل ووقود السفن البحري ومزيج مخصص لتوليد الطاقة والتطبيقات الصناعية",
    // About page
    about_who_text: "بلو ستون للطاقة هي شركة استشارية وتجارية دولية تخدم عملاء متطورين في قطاع النفط والغاز العالمي. نقدم المشورة الاستراتيجية وذكاء السوق وقدرات التنفيذ للحكومات وشركات الطاقة والمجموعات الصناعية والمستثمرين المؤسسيين.",
    about_who_text2: "يجلب فريقنا عقودًا من الخبرة المجمعة في أسواق الطاقة والتجارة الدولية والهيكلة التجارية. نعمل بالحذر المتوقع في أعلى مستويات الصناعة، وسمعتنا مبنية على تقديم النتائج التي تهم أهداف عملائنا الأكثر أهمية.",
    about_vision_text: "أن نكون المستشار الموثوق وشريك التنفيذ المختار للعملاء الذين يتنقلون في تعقيدات أسواق الطاقة العالمية، معترف بنا لنزاهتنا وبصيرتنا وتأثيرنا.",
    about_mission_text: "بلو ستون للطاقة تقدم خدمات استشارية استراتيجية وتجارة دولية تمكن عملاءنا من تحقيق أهدافهم بثقة. نجمع بين الخبرة السوقية العميقة والتنفيذ المنضبط والالتزام بأعلى المعايير المهنية لخلق قيمة دائمة للمنظمات والمؤسسات التي نخدمها.",
    // Advisory page
    advisory_subtitle: "بلو ستون للطاقة تقدم المشورة الاستراتيجية للحكومات وشركات الطاقة والمستثمرين الذين يتنقلون في تعقيدات أسواق النفط والغاز العالمية.",
    strategic_title: "الاستشارات الاستراتيجية للنفط والغاز",
    commercial_title: "الاستشارات التجارية والاستثمارية",
    // Trading page
    trading_subtitle: "بلو ستون للطاقة تجري تجارة الطاقة الدولية مع التركيز على الموثوقية والشفافية والدعم التنفيذي الشامل.",
    portfolio_title: "محفظة المنتجات",
    capabilities_title: "القدرات",
    execution_title: "تنفيذ التجارة",
    execution_text: "تدير بلو ستون للطاقة كل جانب من جوانب دورة حياة المعاملة، من الاستفسار الأولي حتى التسليم النهائي والتسوية. يضمن انضباطنا التشغيلي نتائج يمكن التنبؤ بها ويقلل من مخاطر التنفيذ لأطرافنا المقابلة.",
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
