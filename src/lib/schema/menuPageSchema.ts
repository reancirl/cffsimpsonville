import { menuCategories } from '../../data/menu';
import { MENU_URL, RESTAURANT_ID, restaurantSchema } from './restaurantSchema';

const SITE_URL = 'https://www.cffsimpsonville.com';

export function menuSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': `${MENU_URL}#menu`,
    name: 'Carolina Fine Foods Menu',
    url: MENU_URL,
    provider: { '@id': RESTAURANT_ID },
    hasMenuSection: menuCategories.map((category) => ({
      '@type': 'MenuSection',
      name: category.name,
      description: category.note,
      hasMenuItem: category.items.map((name) => ({
        '@type': 'MenuItem',
        name,
      })),
    })),
  };
}

export function menuWebPageSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${MENU_URL}#webpage`,
    name,
    description,
    url: MENU_URL,
    about: { '@id': RESTAURANT_ID },
    mainEntity: { '@id': `${MENU_URL}#menu` },
  };
}

export function menuBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Menu',
        item: MENU_URL,
      },
    ],
  };
}

export function menuPageSchema(name: string, description: string) {
  return [
    restaurantSchema(),
    menuWebPageSchema(name, description),
    menuBreadcrumbSchema(),
    menuSchema(),
  ];
}
