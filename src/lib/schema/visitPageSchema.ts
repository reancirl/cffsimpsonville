import { RESTAURANT_ID, restaurantSchema } from './restaurantSchema';

const SITE_URL = 'https://www.cffsimpsonville.com';
const WEBSITE_ID = `${SITE_URL}/#website`;
const VISIT_URL = `${SITE_URL}/visit`;
const VISIT_WEBPAGE_ID = `${VISIT_URL}#webpage`;

export function visitWebPageSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': VISIT_WEBPAGE_ID,
    name,
    description,
    url: VISIT_URL,
    about: { '@id': RESTAURANT_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function visitPageSchema(name: string, description: string) {
  return [restaurantSchema(), visitWebPageSchema(name, description)];
}
