import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export const AnimatedNumber = ({ value, duration = 2.5, delay = 0 }) => {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState('0')
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) {
      setDisplayValue('0')
      return
    }

    // Parse the value to extract number and suffix
    const parseValue = (val) => {
      // Handle special cases like "24/7"
      if (val.includes('/')) {
        return { numeric: 0, prefix: '', suffix: val, isSpecial: true }
      }

      // Extract dollar sign if present
      const hasDollar = val.includes('$')
      const cleanVal = val.replace('$', '')

      // Extract number and suffix (M, B, K, +)
      const match = cleanVal.match(/([\d.]+)([MBK+]*)/)
      if (!match) return { numeric: 0, prefix: hasDollar ? '$' : '', suffix: val, isSpecial: true }

      const numeric = parseFloat(match[1])
      const suffix = match[2] || ''
      const prefix = hasDollar ? '$' : ''
      
      return { numeric, prefix, suffix, isSpecial: false }
    }

    const { numeric, prefix, suffix, isSpecial } = parseValue(value)

    // If it's a special value like "24/7", just display it after a short delay
    if (isSpecial) {
      const timer = setTimeout(() => {
        setDisplayValue(value)
      }, delay * 1000 + 200)
      return () => clearTimeout(timer)
    }

    // Start animation after delay
    let startTime = null
    let animationFrame = null

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp + (delay * 1000)
      }

      const elapsed = timestamp - startTime
      
      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / (duration * 1000), 1)

      if (progress >= 1) {
        // Animation complete
        setDisplayValue(`${prefix}${numeric}${suffix}`)
        return
      }

      // Easing function for smooth animation (easeOutCubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const current = numeric * easeOutCubic

      // Format based on suffix
      let formatted
      if (suffix.includes('M')) {
        formatted = Math.floor(current).toString()
      } else if (suffix.includes('B')) {
        formatted = current.toFixed(1)
        // Remove trailing .0
        if (formatted.endsWith('.0')) {
          formatted = formatted.slice(0, -2)
        }
      } else {
        formatted = Math.floor(current).toString()
      }

      setDisplayValue(`${prefix}${formatted}${suffix}`)
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, value, duration, delay])

  return <span ref={ref}>{displayValue}</span>
}
