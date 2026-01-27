import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { TrendingUp, Map, Shield, FileText, Briefcase, Search, Settings, Users } from 'lucide-react'

export const AdvisoryPage = () => {
  const { t } = useLanguage()

  const strategicServices = [
    {
      icon: TrendingUp,
      title: 'Market Analysis & Intelligence',
      description: 'Comprehensive market assessments, price forecasting, and geopolitical risk analysis to inform strategic decision-making.',
    },
    {
      icon: Map,
      title: 'Strategic Positioning',
      description: 'Guidance on portfolio optimization, market entry strategies, and competitive positioning in evolving energy landscapes.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Development and implementation of hedging strategies, supply security frameworks, and operational risk mitigation.',
    },
    {
      icon: FileText,
      title: 'Regulatory & Compliance',
      description: 'Navigation of international regulations, sanctions compliance, and trade documentation requirements.',
    },
  ]

  const commercialServices = [
    {
      icon: Briefcase,
      title: 'Transaction Structuring',
      description: 'Design and negotiation of complex commercial agreements, joint ventures, and strategic partnerships.',
    },
    {
      icon: Search,
      title: 'Investment Strategy',
      description: 'Due diligence support, asset valuation, and investment thesis development for energy sector opportunities.',
    },
    {
      icon: Settings,
      title: 'Commercial Optimization',
      description: 'Enhancement of procurement strategies, contract negotiations, and supply chain efficiency.',
    },
    {
      icon: Users,
      title: 'Market Access',
      description: 'Facilitation of introductions, relationship development, and strategic partnership formation in key markets.',
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
            {t('advisory_title')}
          </motion.h1>
          <div className="section-divider"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
                  alt="Advisory Services" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
            <p className="text-xl leading-relaxed text-secondary">
              {t('advisory_subtitle')}
            </p>
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
              {t('strategic_title')}
            </h2>
            <div className="grid gap-6">
              {strategicServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-primary">
                            {service.title}
                          </h3>
                          <p className="text-base leading-relaxed text-foreground">
                            {service.description}
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-8 text-secondary">
              {t('commercial_title')}
            </h2>
            <div className="grid gap-6">
              {commercialServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-primary">
                            {service.title}
                          </h3>
                          <p className="text-base leading-relaxed text-foreground">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
