import { useLanguage } from '@/contexts/LanguageContext'
import { DigitalBusinessCard } from '../DigitalBusinessCard'
import { images } from '@/config/images'
import { anasChbibPhone } from '@/config/contactInfo'

const EMAIL = 'ach@bluestoneenergy.energy'

export const AnasChbibPage = () => {
  const { t } = useLanguage()

  return (
    <DigitalBusinessCard
      patternId="anasCardGrid"
      phone={anasChbibPhone}
      email={EMAIL}
      photoUrl={images.anasChbib}
      photoAlt={t('card_photo_alt')}
      name={t('card_name')}
      title={t('card_title')}
      metaTitle={t('card_meta_title')}
      metaDescription={t('card_meta_description')}
      vcard={{
        fileName: 'anas-chbib.vcf',
        fn: 'Anas Chbib',
        n: 'Chbib;Anas;;;',
        title: 'CEO & Founder',
        org: 'BlueStone Energy',
      }}
    />
  )
}
