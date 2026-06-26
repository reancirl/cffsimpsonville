import { RESTAURANT_ID } from './restaurantSchema';

const SITE_URL = 'https://www.cffsimpsonville.com';
const WEBSITE_ID = `${SITE_URL}/#website`;
const REVIEWS_URL = `${SITE_URL}/reviews`;
const REVIEWS_WEBPAGE_ID = `${REVIEWS_URL}#webpage`;
const REVIEWS_ID = `${REVIEWS_URL}#reviews`;

export function reviewsCollectionSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': REVIEWS_ID,
    name,
    description,
    url: REVIEWS_URL,
    about: { '@id': RESTAURANT_ID },
  };
}

export function reviewsWebPageSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': REVIEWS_WEBPAGE_ID,
    name,
    description,
    url: REVIEWS_URL,
    about: { '@id': REVIEWS_ID },
    mainEntity: { '@id': REVIEWS_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function reviewsPageSchema(name: string, description: string) {
  return [
    reviewsCollectionSchema(name, description),
    reviewsWebPageSchema(name, description),
  ];
}
