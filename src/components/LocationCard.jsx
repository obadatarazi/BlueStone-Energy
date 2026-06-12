import { MapPin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Card } from './ui/Card'

export const LocationCard = ({ location }) => {
  const { t } = useLanguage()

  return (
    <Card className="overflow-hidden p-0 h-full">
      <img
        src={location.image}
        alt={location.imageAlt}
        className="h-44 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="font-playfair text-xl font-semibold text-primary">
          {t(location.countryKey)}
        </h3>
        <p className="mb-4 text-sm text-secondary">{t(location.cityKey)}</p>

        {location.offices.map((office, officeIndex) => (
          <div key={officeIndex} className={officeIndex > 0 ? 'mt-4 pt-4 border-t border-muted' : ''}>
            {office.labelKey && (
              <p className="mb-1 text-sm font-semibold text-primary">
                {t(office.labelKey)}
              </p>
            )}
            <div className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
              <address className="space-y-0.5 not-italic text-sm leading-relaxed text-secondary">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            {office.mapsQuery && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 ml-6 inline-block text-sm text-accent hover:underline"
              >
                {t('location_view_map')}
              </a>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}
