import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { CheckCircle2, Globe, DollarSign, Truck, FileCheck } from 'lucide-react'
import TradingActivitiesImg from '../../assets/Trading Activities.png'

export const TradingPage = () => {
  const { t } = useLanguage()

  const products = [
    {
      title: 'Crude Oil',
      items: [
        'Brent, WTI, Dubai Crude',
        'Light & Heavy Grades',
        'Sweet & Sour Varieties',
        'Regional Benchmark Grades',
      ],
    },
    {
      title: 'Diesel (EN590)',
      items: [
        'Ultra-Low Sulfur Diesel',
        'EN590 10ppm Standard',
        'Automotive Grade',
        'Marine Gas Oil (MGO)',
      ],
    },
    {
      title: 'Refined Products',
      items: [
        'Gasoline (RON 91/95/97)',
        'Jet Fuel (Jet A-1)',
        'Naphtha & Condensate',
        'Kerosene & LPG',
      ],
    },
    {
      title: 'Industrial Fuel',
      items: [
        'Heavy Fuel Oil (HFO)',
        'Marine Bunker Fuel',
        'Power Generation Fuel',
        'Custom Industrial Blends',
      ],
    },
  ]

  const capabilities = [
    {
      icon: Globe,
      title: 'Global Sourcing',
      description: 'Access to established producer relationships across major exporting regions, enabling reliable supply at competitive terms.',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Market-aligned pricing structures with transparent benchmarking and flexible payment terms tailored to client requirements.',
    },
    {
      icon: Truck,
      title: 'Logistics Management',
      description: 'Comprehensive execution across FOB, CIF, and delivered terms, including vessel chartering, insurance, and destination support.',
    },
    {
      icon: FileCheck,
      title: 'Compliance & Documentation',
      description: 'Full regulatory compliance, quality certificates, and complete documentation packages prepared to international standards.',
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
    <div className="w-full pt-24">
      <section className="page-section py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl md:text-6xl font-bold text-center mb-4 text-primary"
          >
            {t('trading_title')}
          </motion.h1>
          <div className="section-divider"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xl leading-relaxed text-secondary">
                  {t('trading_subtitle')}
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={TradingActivitiesImg}
                  alt="Trading Operations"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-8 text-secondary">
              {t('portfolio_title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-10 bg-primary rounded-lg border-l-5 border-accent"
                >
                  <h3 className="font-playfair text-2xl font-semibold mb-6 text-white">
                    {product.title}
                  </h3>
                  <ul className="space-y-3">
                    {product.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-white text-base flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-8 text-secondary">
              {t('capabilities_title')}
            </h2>
            <div className="grid gap-6">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="p-8 border-2 border-accent">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-primary">
                            {capability.title}
                          </h3>
                          <p className="text-base leading-relaxed text-foreground">
                            {capability.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-12 bg-muted rounded-lg text-center"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-primary">
              {t('execution_title')}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground max-w-3xl mx-auto">
              {t('execution_text')}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
