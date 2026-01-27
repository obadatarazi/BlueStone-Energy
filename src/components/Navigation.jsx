import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from './ui/Button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const Navigation = ({ currentPage, onPageChange }) => {
  const { t, toggleLanguage, language } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'advisory', label: t('nav.advisory') },
    { id: 'trading', label: t('nav.trading') },
    { id: 'contact', label: t('nav.contact') },
  ]

  const handleNavClick = (pageId) => {
    onPageChange(pageId)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full bg-primary py-3 sm:py-4 md:py-6 fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 flex justify-between items-center gap-2 sm:gap-4">
        <motion.div 
          className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide flex-shrink-0 min-w-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="truncate block">{t('company_name')}</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.id)
              }}
              className={`nav-link text-white font-medium text-[0.95rem] ${
                currentPage === item.id ? 'text-white font-semibold' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="text-white border-white/30 hover:bg-white hover:text-primary"
          >
            {language === 'en' ? 'EN | AR' : 'AR | EN'}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="text-white border-white/30 hover:bg-white hover:text-primary text-xs sm:text-sm px-3 sm:px-4 py-2 min-h-[44px]"
          >
            {language === 'en' ? 'EN | AR' : 'AR | EN'}
          </Button>
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary border-t border-primary/20 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
                className={`text-white font-medium text-base py-3 px-2 rounded-md hover:bg-white/10 transition-colors min-h-[44px] flex items-center ${
                  currentPage === item.id ? 'text-white font-semibold bg-white/5' : ''
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.a>
            ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
