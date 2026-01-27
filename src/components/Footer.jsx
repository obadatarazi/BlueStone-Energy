import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import { footerConfig } from '@/config/footerConfig'

export const Footer = () => {
  const { t, language } = useLanguage()

  const socialIcons = [
    { icon: Linkedin, href: footerConfig.socialMedia.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: footerConfig.socialMedia.twitter, label: 'Twitter' },
    { icon: Facebook, href: footerConfig.socialMedia.facebook, label: 'Facebook' },
    { icon: Instagram, href: footerConfig.socialMedia.instagram, label: 'Instagram' },
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Company Info */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-4 text-white">
              {t('company_name')}
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
              {t('footer_tagline')}
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              {socialIcons.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h4 className="font-playfair text-xl font-semibold mb-4 text-white">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {footerConfig.quickLinks.map((link, index) => {
                const navKey = link.label.toLowerCase()
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        const pageId = link.href.replace('#', '')
                        window.location.hash = pageId
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className="text-white/70 hover:text-accent transition-colors duration-300 text-sm md:text-base flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all duration-300"></span>
                      {t(`nav.${navKey}`)}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="font-playfair text-xl font-semibold mb-4 text-white">
              {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
            </h4>
            <div className="space-y-4">
              <motion.a
                href={`tel:${footerConfig.contact.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-3 text-white/80 hover:text-accent transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm md:text-base">{footerConfig.contact.phone}</span>
              </motion.a>

              <motion.a
                href={`mailto:${footerConfig.contact.email}`}
                className="flex items-start gap-3 text-white/80 hover:text-accent transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm md:text-base break-all">{footerConfig.contact.email}</span>
              </motion.a>

              <motion.div
                className="flex items-start gap-3 text-white/80 group"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm md:text-base leading-relaxed">{footerConfig.contact.location}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/60 text-xs md:text-sm">
            {t('copyright')}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
