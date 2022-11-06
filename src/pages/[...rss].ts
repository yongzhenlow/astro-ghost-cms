import ghostClient from '@utils/ghost-client';
import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params }) => {
  const apiURL = new URL(import.meta.env.GHOST_CONTENT_API_URL);
  const siteURL = new URL(import.meta.env.SITE_URL ?? import.meta.env.SITE);
  const res = await fetch(new URL(params.rss as string, apiURL));
  const raw = await res.text();
  const body = raw
    .replaceAll(apiURL.href, siteURL.href)
    .replaceAll(apiURL.host, siteURL.host);

  return new Response(body, {
    status: 200,
    headers: {
      'content-type': `text/xml`, // using `text/xml` for compatibility @see https://stackoverflow.com/questions/595616/what-is-the-correct-mime-type-to-use-for-an-rss-feed
    },
  });
};

export async function getStaticPaths() {
  const tags = await ghostClient.tags.browse({
    fields: ['slug'],
    limit: 'all',
    filter: 'visibility:public',
  });
  const authors = await ghostClient.authors.browse({
    fields: ['slug'],
    limit: 'all',
  });

  return [
    'rss',
    ...authors.map((o) => `author/${o.slug}/rss`),
    ...tags.map((o) => `tag/${o.slug}/rss`),
  ].map((rss) => ({
    params: { rss },
  }));
}
