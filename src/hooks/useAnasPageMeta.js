import { useEffect } from 'react'

const DEFAULT_TITLE =
  'BlueStone Energy - Strategic Energy Advisory & International Trading'

function upsertMeta(attr, key, content) {
  const selector =
    attr === 'property'
      ? `meta[data-anas-page][property="${key}"]`
      : `meta[data-anas-page][name="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    el.setAttribute('data-anas-page', '1')
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function removeAnasMeta() {
  document.querySelectorAll('meta[data-anas-page]').forEach((node) => node.remove())
}

/**
 * Sets document title, html lang, and social/meta tags for /anaschbib; restores on unmount.
 */
export function useAnasPageMeta({ title, description, imageAbsoluteUrl, language }) {
  useEffect(() => {
    return () => {
      document.title = DEFAULT_TITLE
      document.documentElement.lang = 'en'
      removeAnasMeta()
    }
  }, [])

  useEffect(() => {
    document.title = title
    document.documentElement.lang = language === 'ar' ? 'ar' : 'en'

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', 'profile')
    upsertMeta('property', 'og:site_name', 'BlueStone Energy')

    if (typeof window !== 'undefined') {
      upsertMeta('property', 'og:url', window.location.href)
    }

    if (imageAbsoluteUrl) {
      upsertMeta('property', 'og:image', imageAbsoluteUrl)
      upsertMeta('name', 'twitter:image', imageAbsoluteUrl)
    }

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
  }, [title, description, imageAbsoluteUrl, language])
}
