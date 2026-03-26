import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { CheckCircle2, Globe, DollarSign, Truck, FileCheck } from 'lucide-react'
import TradingActivitiesImg from '../../assets/Trading Activities.png'

export const TradingPage = ({ mode = 'industries' }) => {
  const { t } = useLanguage()

  const products = [
    {
      title: 'Oil & Gas',
      items: [
        'Upstream',
        'Midstream',
        'Downstream',
      ],
    },
    {
      title: 'Power, Electricity & Water',
      items: [
        'Generation',
        'Grid',
        'Desalination',
      ],
    },
    {
      title: 'Renewable Energy',
      items: [
        'Solar',
        'Wind',
        'Hybrid',
        'Storage',
      ],
    },
    {
      title: 'LNG & Gas Infrastructure',
      items: [
        'Terminals',
        'Regasification',
      ],
    },
    {
      title: 'Mining & Industrial Development',
      items: [
        'Resource to industry',
      ],
    },
  ]

  const capabilities = [
    {
      icon: Globe,
      title: 'Large-scale refinery projects',
      description: 'Refinery development',
    },
    {
      icon: DollarSign,
      title: 'LNG and regasification',
      description: 'LNG terminals and regasification infrastructure',
    },
    {
      icon: Truck,
      title: 'Pipeline development',
      description: 'Pipeline and midstream infrastructure',
    },
    {
      icon: FileCheck,
      title: 'Power and water infrastructure',
      description: 'Power generation and water projects',
    },
    {
      icon: FileCheck,
      title: 'Renewable energy',
      description: 'Renewable integration and energy transition initiatives',
    },
    {
      icon: FileCheck,
      title: 'Oil field optimization',
      description: 'Optimization and performance improvement programs',
    },
    {
      icon: FileCheck,
      title: 'Industrial projects',
      description: 'Industrial and strategic infrastructure development',
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
