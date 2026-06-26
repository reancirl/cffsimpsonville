import type { GalleryImage } from '../../data/gallery';
import { RESTAURANT_ID } from './restaurantSchema';

const SITE_URL = 'https://www.cffsimpsonville.com';
const WEBSITE_ID = `${SITE_URL}/#website`;
const GALLERY_URL = `${SITE_URL}/gallery`;
const GALLERY_WEBPAGE_ID = `${GALLERY_URL}#webpage`;
const GALLERY_ID = `${GALLERY_URL}#gallery`;

const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

export function galleryImageObjectSchema(image: GalleryImage) {
  const imageUrl = absoluteUrl(image.src);

  return {
    '@type': 'ImageObject',
    contentUrl: imageUrl,
    url: imageUrl,
    name: image.alt,
  };
}

export function imageGallerySchema(
  name: string,
  description: string,
  images: GalleryImage[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': GALLERY_ID,
    name,
    description,
    url: GALLERY_URL,
    about: { '@id': RESTAURANT_ID },
    associatedMedia: images.map(galleryImageObjectSchema),
  };
}

export function galleryWebPageSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': GALLERY_WEBPAGE_ID,
    name,
    description,
    url: GALLERY_URL,
    about: { '@id': GALLERY_ID },
    mainEntity: { '@id': GALLERY_ID },
    isPartOf: { '@id': WEBSITE_ID },
  };
}

export function galleryPageSchema(
  name: string,
  description: string,
  images: GalleryImage[],
) {
  return [
    imageGallerySchema(name, description, images),
    galleryWebPageSchema(name, description),
  ];
}
