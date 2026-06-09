import { useLanguage } from '@/contexts/LanguageContext'
import { DigitalBusinessCard } from '../DigitalBusinessCard'
import { kamiliaFawazContact } from '@/config/contactInfo'
import headshotUrl from '../../../Image/kamilia-fawaz.jpg'

export const KamiliaFawazPage = () => {
  const { t } = useLanguage()

  return (
    <DigitalBusinessCard
      patternId="kamiliaCardGrid"
      phone={kamiliaFawazContact.phone}
      email={kamiliaFawazContact.email}
      photoUrl={headshotUrl}
      photoAlt={t('kamilia_card_name')}
      name={t('kamilia_card_name')}
      title={t('kamilia_card_title')}
      metaTitle={t('kamilia_card_meta_title')}
      metaDescription={t('kamilia_card_meta_description')}
      vcard={{
        fileName: 'kamilia-fawaz.vcf',
        fn: 'Kamilia Ghada Fawaz',
        n: 'Fawaz;Kamilia Ghada;;;',
        title: 'BlueStone Energy',
        org: 'BlueStone Energy',
      }}
    />
  )
}
