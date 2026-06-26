const SITE_URL = 'https://www.cffsimpsonville.com';

export const RESTAURANT_ID = `${SITE_URL}/#restaurant`;
export const MENU_URL = `${SITE_URL}/menu`;

export const RESTAURANT_DESCRIPTION =
  "Since 1983, Carolina Fine Foods has been a Simpsonville staple, offering a taste of authentic Southern comfort. This family-friendly restaurant provides a diverse dining experience, from hearty breakfast and lunch buffets to classic American diner fare. Enjoy seafood, soul food, jumbo salads, and a variety of homemade desserts. Whether you're craving a classic chili burger or a slice of homemade cake, Carolina Fine Foods is a go-to spot for a satisfying meal.";

export function restaurantSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': RESTAURANT_ID,
    name: 'Carolina Fine Foods',
    url: `${SITE_URL}/`,
    telephone: '+1-864-967-3335',
    description: RESTAURANT_DESCRIPTION,
    priceRange: '$',
    servesCuisine: [
      'Southern',
      'American',
      'Soul Food',
      'Seafood',
      'Homestyle Cooking',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '625 SE Main St',
      addressLocality: 'Simpsonville',
      addressRegion: 'SC',
      postalCode: '29681',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.7232917,
      longitude: -82.2536193,
    },
    hasMenu: MENU_URL,
    makesOffer: [
      'Dine-in',
      'Drive-thru',
      'Call-in',
      'Takeout',
      'Delivery',
      'Catering',
      'Buffet',
    ].map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service,
      },
    })),
    areaServed: [
      {
        '@type': 'City',
        name: 'Simpsonville, SC',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Greenville County',
      },
    ],
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/menu-img.webp`,
  };
}
