import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TrendingUp, BarChart3, Globe, Fuel, Droplet, Zap, Factory } from 'lucide-react'
import { OilParticles } from '../animations/OilParticles'
import { AnimatedNumber } from '../animations/AnimatedNumber'

export const HomePage = ({ onNavigate }) => {
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const stats = [
    { value: '150M+', labelKey: 'stats_barrels' },
    { value: '35+', labelKey: 'stats_countries' },
    { value: '$2B+', labelKey: 'stats_value' },
    { value: '24/7', labelKey: 'stats_coverage' },
  ]

  const services = [
    {
      icon: TrendingUp,
      titleKey: 'services_advisory_title',
      descriptionKey: 'services_advisory_desc',
      link: 'advisory',
    },
    {
      icon: BarChart3,
      titleKey: 'services_trading_title',
      descriptionKey: 'services_trading_desc',
      link: 'trading',
    },
    {
      icon: Globe,
      titleKey: 'services_global_title',
      descriptionKey: 'services_global_desc',
    },
  ]

  const values = [
    { titleKey: 'value_integrity', descriptionKey: 'value_integrity_desc' },
    { titleKey: 'value_discipline', descriptionKey: 'value_discipline_desc' },
    { titleKey: 'value_partnership', descriptionKey: 'value_partnership_desc' },
    { titleKey: 'value_excellence', descriptionKey: 'value_excellence_desc' },
  ]

  const products = [
    {
      icon: Droplet,
      titleKey: 'product_crude_title',
      descriptionKey: 'product_crude_desc',
    },
    {
      icon: Fuel,
      titleKey: 'product_diesel_title',
      descriptionKey: 'product_diesel_desc',
    },
    {
      icon: Zap,
      titleKey: 'product_refined_title',
      descriptionKey: 'product_refined_desc',
    },
    {
      icon: Factory,
      titleKey: 'product_industrial_title',
      descriptionKey: 'product_industrial_desc',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="hero-gradient page-section py-20 md:py-32 text-center relative overflow-hidden">
        <OilParticles />
        <div className="absolute inset-0 opacity-20">
          <motion.img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
            alt="Oil and Gas Industry" 
            className="w-full h-full object-cover"
            loading="eager"
            style={{ y: heroY, opacity: heroOpacity }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"></div>
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-wide will-change-transform"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t('hero_headline')}
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-wide mb-8 md:mb-12 px-4"
          >
            {t('hero_subheadline')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() => onNavigate('contact')}
              className="text-base md:text-lg px-8 md:px-12 py-3 md:py-4 pulse-glow"
            >
              {t('cta_button_text')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Overview */}
      <section className="page-section py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-4 text-primary">
                {t('about_overview_title')}
              </h2>
              <div className="section-divider mb-6"></div>
              <p className="text-lg md:text-xl leading-relaxed text-secondary font-light mb-6">
                {t('about_overview_text')}
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-secondary font-light">
                {t('about_overview_text2')}
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 lg:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-lg overflow-hidden shadow-2xl relative group">
                <motion.img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" 
                  alt="Energy Industry" 
                  className="w-full h-[300px] md:h-[400px] object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Presence */}
      <section className="page-section py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <motion.svg 
            width="100%" 
            height="100%" 
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <pattern id="oil-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="white" />
                <path d="M50,30 L50,70 M30,50 L70,50" stroke="white" strokeWidth="1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#oil-pattern)" />
          </motion.svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-semibold text-center mb-4 text-white"
          >
            {t('global_presence_title')}
          </motion.h2>
          <div className="w-15 h-0.5 bg-accent mx-auto mb-12"></div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mt-12 md:mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-white mb-2 pulse-glow"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                >
                  <AnimatedNumber 
                    value={stat.value} 
                    duration={2.5}
                    delay={index * 0.15}
                  />
                </motion.div>
                <motion.p 
                  className="text-white/90 text-sm md:text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {t(stat.labelKey)}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="page-section py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              const serviceImages = [
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
              ]
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="h-full"
                >
                  <Card hover className="h-full flex flex-col overflow-hidden p-0 group">
                    <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={serviceImages[index]} 
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover gpu-accelerated"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <motion.div 
                    className="absolute top-4 left-4 w-12 h-12 md:w-15 md:h-15 bg-accent rounded-lg flex items-center justify-center pulse-glow"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 360,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ 
                      duration: 0.5,
                      rotate: { duration: 0.6 }
                    }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                  </motion.div>
                  {/* Shimmer effect */}
                  <motion.div 
                    className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-playfair text-2xl font-semibold mb-4 text-primary">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-base leading-relaxed text-secondary mb-6 flex-grow">
                      {t(service.descriptionKey)}
                    </p>
                    {service.link && (
                      <a
                        href={`#${service.link}`}
                        onClick={(e) => {
                          e.preventDefault()
                          onNavigate(service.link)
                        }}
                        className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                      >
                        {t('learn_more')}
                        <span>→</span>
                      </a>
                    )}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why BlueStone */}
      <section className="page-section py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-semibold text-center mb-4 text-primary"
          >
            {t('why_bluestone_title')}
          </motion.h2>
          <div className="section-divider"></div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.h4 
                  className="font-playfair text-xl md:text-2xl font-semibold text-accent mb-3 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {t(value.titleKey)}
                </motion.h4>
                <motion.p 
                  className="text-sm md:text-base leading-relaxed text-secondary relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {t(value.descriptionKey)}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Focus */}
      <section className="page-section py-16 md:py-24 bg-gradient-to-b from-muted to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-semibold text-center mb-4 text-primary"
          >
            {t('products_title')}
          </motion.h2>
          <div className="section-divider"></div>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-16 text-secondary"
          >
            {t('products_subtitle')}
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {products.map((product, index) => {
              const Icon = product.icon
              const productImages = [
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
              ]
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-lg shadow-md border-t-4 border-accent overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <motion.img 
                      src={productImages[index]} 
                      alt={t(product.titleKey)}
                      className="w-full h-full object-cover gpu-accelerated"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    <motion.div 
                      className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center float-animation pulse-glow"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ 
                        duration: 0.5,
                        rotate: { duration: 0.6 }
                      }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 15, -15, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-primary">
                      {t(product.titleKey)}
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed text-secondary">
                      {t(product.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
