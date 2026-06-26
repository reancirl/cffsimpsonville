import { RESTAURANT_ID, restaurantSchema } from './restaurantSchema';

const SITE_URL = 'https://www.cffsimpsonville.com';
const WEBSITE_ID = `${SITE_URL}/#website`;
const HOMEPAGE_ID = `${SITE_URL}/#webpage`;
const HOMEPAGE_URL = `${SITE_URL}/`;

export const HOME_TITLE =
  'Carolina Fine Foods — Authentic Southern Cuisine in Simpsonville, SC';

export const HOME_DESCRIPTION =
  'Family-owned since 1983. Over 200 homemade Southern dishes — recipes passed down through generations. Lunch & breakfast buffet in Simpsonville, SC.';

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Carolina Fine Foods',
    url: HOMEPAGE_URL,
    publisher: { '@id': RESTAURANT_ID },
    about: { '@id': RESTAURANT_ID },
  };
}

export function homeWebPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': HOMEPAGE_ID,
    name: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: HOMEPAGE_URL,
    about: { '@id': RESTAURANT_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function homePageSchema() {
  return [restaurantSchema(), websiteSchema(), homeWebPageSchema()];
}
