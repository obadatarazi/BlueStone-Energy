import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const PAGE_TITLE_KEYS = {
  about: 'about_title',
  why: 'why_bluestone_title',
  services: 'advisory_title',
  advisory: 'advisory_title',
  industries: 'trading_title',
  trading: 'trading_title',
  contact: 'contact_title',
}

function upsertMeta(attr, key, content) {
  const selector =
    attr === 'property'
      ? `meta[data-site-meta][property="${key}"]`
      : `meta[data-site-meta][name="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    el.setAttribute('data-site-meta', '1')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Updates document title, description, and social meta tags for main site pages (EN/AR). */
export function useSiteMeta(pageId) {
  const { t, language } = useLanguage()

  useEffect(() => {
    const pageTitleKey = PAGE_TITLE_KEYS[pageId]
    const title = pageTitleKey
      ? `${t(pageTitleKey)} | ${t('site_title')}`
      : `${t('site_title')} — ${t('site_tagline')}`

    const description = t('site_description')

    document.title = title

    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:site_name', t('site_title'))
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', language === 'ar' ? 'ar_SA' : 'en_US')

    if (typeof window !== 'undefined') {
      upsertMeta('property', 'og:url', window.location.href)
    }

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
  }, [pageId, language])
}
