import { useLanguage } from '@/contexts/LanguageContext'
import { motion } from 'framer-motion'
import { Shield, Target, Users, Award } from 'lucide-react'

export const AboutPage = () => {
  const { t } = useLanguage()

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and adherence to the highest ethical standards. Our word is our bond, and we honor our commitments without exception.',
    },
    {
      icon: Target,
      title: 'Discipline',
      description: 'We approach every engagement with rigor, attention to detail, and a systematic methodology that ensures consistent, reliable outcomes.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build long-term relationships based on mutual respect, aligned interests, and shared success. Your objectives become our objectives.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver work of institutional quality, combining deep expertise with a commitment to continuous improvement and innovation in our field.',
    },
  ]

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
            {t('about_title')}
          </motion.h1>
          <div className="section-divider"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-secondary">
                  {t('about_who_we_are')}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed text-foreground mb-6">
                  {t('about_who_text')}
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-foreground">
                  {t('about_who_text2')}
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
                  alt="Professional Team" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 mb-16 p-12 bg-muted rounded-lg"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-secondary">
              {t('about_vision')}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground italic">
              {t('about_vision_text')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-secondary">
              {t('about_mission')}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              {t('about_mission_text')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-8 text-secondary">
              {t('about_values')}
            </h2>
            <div className="grid gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 border-l-4 border-accent bg-white shadow-sm rounded"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-2xl font-semibold mb-3 text-primary">
                          {value.title}
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
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
