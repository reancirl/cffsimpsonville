// Blog data access. Posts live in src/data/blog.json (a plain JSON import, like
// reviews.json) so the dev server hot-reloads edits instantly — no content-layer
// cache to go stale. This module is the single place that reads/sorts that file.
import blogData from '../data/blog.json';

export type BlogBlock =
  | { type: 'p' | 'h2' | 'h3' | 'quote'; text: string }
  | { type: 'ul' | 'ol'; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: string; // ISO date, "YYYY-MM-DD"
  updatedDate?: string;
  author: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  draft: boolean;
  body: BlogBlock[];
}

const posts = blogData.posts as BlogPost[];

/** Published posts, newest first. Drafts are excluded everywhere. */
export function getPosts(): BlogPost[] {
  return posts
    .filter((p) => !p.draft)
    .sort(
      (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
    );
}

/** A single published post by slug, or undefined if missing/draft. */
export function getPost(slug: string): BlogPost | undefined {
  return getPosts().find((p) => p.slug === slug);
}

// Parse "YYYY-MM-DD" as a LOCAL date. new Date("2026-05-28") is UTC midnight,
// which formats as the previous day in negative-UTC timezones — this avoids that.
function parseLocal(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

const dateFmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

/** Human date, e.g. "May 28, 2026". */
export function formatDate(iso: string): string {
  return dateFmt.format(parseLocal(iso));
}
