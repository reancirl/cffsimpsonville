// Helpers that build reusable schema.org objects for per-page JSON-LD.
import { SITE } from './site';

// Normalize to NO trailing slash to match the routes + sitemap (root stays "/").
const abs = (path: string) => {
  const norm = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return new URL(norm, SITE.url).toString();
};

/** BreadcrumbList: pass ordered [name, path] pairs (Home is added implicitly). */
export function breadcrumb(trail: { name: string; path: string }[]) {
  const items = [{ name: 'Home', path: '/' }, ...trail];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

/** WebPage schema tying a page to the Restaurant entity. */
export function webPage(name: string, path: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: abs(path),
    isPartOf: { '@id': `${SITE.url}/#restaurant` },
  };
}
