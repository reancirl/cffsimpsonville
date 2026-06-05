// ─────────────────────────────────────────────────────────────────────────
// Central site + business configuration.
// When the production domain is registered, update SITE_URL here (and the
// matching `site` value in astro.config.mjs) — everything else derives from it.
// ─────────────────────────────────────────────────────────────────────────

export const SITE_URL = 'https://www.carolinafinefoods.com';

export const SITE = {
  name: 'Carolina Fine Foods',
  shortName: 'Carolina Fine Foods',
  url: SITE_URL,
  // Default social-share image (used when a page doesn't set its own).
  ogImage: '/images/banner.jpg',
  locale: 'en_US',
  twitter: '', // add @handle if/when one exists
};

export const BUSINESS = {
  name: 'Carolina Fine Foods',
  legalName: 'Carolina Fine Foods',
  founded: '1983',
  phone: '+1-864-967-3335',
  phoneDisplay: '864-967-3335',
  email: 'cffsimpsonville@gmail.com',
  priceRange: '$$',
  cuisine: ['Southern', 'American', 'Comfort Food'],
  address: {
    street: '625 SE Main Street',
    city: 'Simpsonville',
    region: 'SC',
    regionName: 'South Carolina',
    postalCode: '29681',
    country: 'US',
  },
  geo: {
    // Approximate coordinates for 625 SE Main St, Simpsonville, SC.
    latitude: 34.7298,
    longitude: -82.2543,
  },
  mapUrl: 'https://maps.google.com/?q=625+SE+Main+St+Simpsonville+SC+29681',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=625+SE+Main+St+Simpsonville+SC+29681',
  orderUrl:
    'https://order.online/business/-166132?visitorId=288f419e8b49d0ac588708',
  reviewUrl: 'https://g.co/kgs/u9zrz3P',
  // Schema.org openingHoursSpecification.
  hours: [
    {
      label: 'Lunch Buffet',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '11:00',
      closes: '14:30',
    },
    {
      label: 'Breakfast Buffet',
      days: ['Saturday', 'Sunday'],
      opens: '07:00',
      closes: '11:00',
    },
  ],
};

// Primary navigation — single source of truth for Nav + Footer.
export const NAV_LINKS = [
  { label: 'Our Story', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Visit', href: '/visit' },
];
