const image = (path) => `${import.meta.env.BASE_URL}images/${path}`

export const images = {
  advisoryServices: image('Advisory Services.png'),
  tradingActivities: image('Trading Activities.png'),
  globalReach: image('Global Reach.png'),
  crudeOil: image('Crude Oil.png'),
  diesel: image('Diesel (EN590).png'),
  refinedProducts: image('Refined Products.png'),
  industrialFuel: image('Industrial Fuel.png'),
  heroSection: image('Herosection.png'),
  internationalEnergyAdvisory: image('international energy advisory.png'),
  logoDark: image('logo-full-dark.png'),
  logoWhite: image('logo-full-white.png'),
  anasChbib: image('anas-chbib-768x904.jpg'),
  kamiliaFawaz: image('kamilia-fawaz.jpg'),
  locations: {
    usa: image('locations/USA.jpeg'),
    korea: image('locations/Korea.jpeg'),
    ksa: image('locations/KSA.jpeg'),
    syria: image('locations/Syria.jpeg'),
  },
}
