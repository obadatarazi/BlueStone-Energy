import { useLanguage } from '@/contexts/LanguageContext'
import { officeLocations } from '@/config/locations'
import { LocationCard } from './LocationCard'

export const LocationsSection = () => {
  const { t } = useLanguage()

  return (
    <div className="mb-16">
      <h2 className="font-playfair text-3xl font-semibold text-center text-primary mb-3">
        {t('locations_title')}
      </h2>
      <div className="section-divider" />
      <p className="text-center text-secondary mb-10 mt-4">
        {t('locations_subtitle')}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {officeLocations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  )
}
