import { RESTAURANT_ID } from './restaurantSchema';

const SITE_URL = 'https://www.cffsimpsonville.com';
const WEBSITE_ID = `${SITE_URL}/#website`;
const PRIVATE_DINING_URL = `${SITE_URL}/private-dining`;
const PRIVATE_DINING_WEBPAGE_ID = `${PRIVATE_DINING_URL}#webpage`;
const PRIVATE_DINING_SERVICE_ID = `${PRIVATE_DINING_URL}#service`;

export function privateDiningServiceSchema(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': PRIVATE_DINING_SERVICE_ID,
    name: 'Private Dining Rooms',
    description,
    serviceType: 'Private dining',
    url: PRIVATE_DINING_URL,
    provider: { '@id': RESTAURANT_ID },
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
    image: `${SITE_URL}/images/dining-1.webp`,
  };
}

export function privateDiningWebPageSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': PRIVATE_DINING_WEBPAGE_ID,
    name,
    description,
    url: PRIVATE_DINING_URL,
    about: { '@id': PRIVATE_DINING_SERVICE_ID },
    mainEntity: { '@id': PRIVATE_DINING_SERVICE_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function privateDiningPageSchema(
  name: string,
  description: string,
  _faqs: { q: string; a: string }[] = [],
) {
  return [
    privateDiningServiceSchema(description),
    privateDiningWebPageSchema(name, description),
  ];
}
