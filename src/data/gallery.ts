export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  span: 'tall' | 'wide' | 'normal';
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/images/honest.webp',
    alt: 'Honest. Wholesome. Quality.',
    caption: 'Honest. Wholesome. Quality.',
    span: 'tall',
  },
  {
    src: '/images/dish-1.webp',
    alt: 'Southern plated dish',
    caption: 'Made by hand, every morning',
    span: 'normal',
  },
  {
    src: '/images/fresh-hot.webp',
    alt: 'Fresh hot served buffet',
    caption: 'Fresh & hot — straight to the table',
    span: 'normal',
  },
  {
    src: '/images/dish-3.webp',
    alt: 'Carolina Fine Foods signature plate',
    caption: "Grandma's recipe, kept exactly",
    span: 'wide',
  },
  {
    src: '/images/zinger.webp',
    alt: 'Zinger fried chicken',
    caption: 'Crisp, golden, never frozen',
    span: 'normal',
  },
  {
    src: '/images/buffet.webp',
    alt: 'The Carolina Fine Foods buffet line',
    caption: 'Two hundred dishes on the line',
    span: 'normal',
  },
  {
    src: '/images/grilled-chicken.webp',
    alt: 'A heaping Southern platter with all the fixings',
    caption: 'Piled high, with all the sides',
    span: 'normal',
  },
  {
    src: '/images/banner.webp',
    alt: 'Carolina Fine Foods banner',
    caption: 'A table set for everyone',
    span: 'normal',
  },
];
