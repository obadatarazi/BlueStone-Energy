import usaImage from '@/assets/locations/USA.jpeg'
import koreaImage from '@/assets/locations/Korea.jpeg'
import ksaImage from '@/assets/locations/KSA.jpeg'
import syriaImage from '@/assets/locations/Syria.jpeg'

export const officeLocations = [
  {
    id: 'usa',
    countryKey: 'location_usa',
    cityKey: 'location_usa_city',
    footerShortKey: 'location_footer_usa',
    image: usaImage,
    imageAlt: 'Houston, Texas skyline',
    offices: [
      {
        labelKey: 'location_usa_office',
        lines: [
          'TX, Houston - Energy Corridor',
          '11111 Katy Freeway, Suite 910',
          'Houston, Texas 77079',
        ],
        mapsQuery: '11111 Katy Freeway, Suite 910, Houston, TX 77079',
      },
    ],
  },
  {
    id: 'korea',
    countryKey: 'location_korea',
    cityKey: 'location_korea_city',
    footerShortKey: 'location_footer_korea',
    image: koreaImage,
    imageAlt: 'Seoul, Korea',
    offices: [
      {
        lines: [
          '11F., Chenggechoen-ro 447,',
          'Dong Dae Moon Gu- Seoul, Korea',
        ],
        mapsQuery: 'Chenggechoen-ro 447, Dongdaemun-gu, Seoul, Korea',
      },
    ],
  },
  {
    id: 'ksa',
    countryKey: 'location_ksa',
    cityKey: 'location_ksa_city',
    footerShortKey: 'location_footer_ksa',
    image: ksaImage,
    imageAlt: 'Riyadh, Saudi Arabia',
    offices: [
      {
        lines: [
          '7151, Al Takassusi Street, Al Olaya',
          'Dist, Riyadh,',
          'Kingdom of Saudi Arabia',
        ],
        mapsQuery: '7151 Al Takassusi Street, Al Olaya, Riyadh, Saudi Arabia',
      },
    ],
  },
  {
    id: 'syria',
    countryKey: 'location_syria',
    cityKey: 'location_syria_city',
    footerShortKey: 'location_footer_syria',
    image: syriaImage,
    imageAlt: 'Syria',
    offices: [
      {
        labelKey: 'location_syria_deir',
        lines: [
          "Deir ez-Zor - Al-Qusour - Opposite Al-Ba'aj Mosque",
        ],
        mapsQuery: "Al-Qusour, Deir ez-Zor, Syria",
      },
      {
        labelKey: 'location_syria_damascus',
        lines: [
          'Damascus - Yafour - Gate 8 - Roya 4, 2nd Floor',
        ],
        mapsQuery: 'Yafour, Damascus, Syria',
      },
    ],
  },
]
