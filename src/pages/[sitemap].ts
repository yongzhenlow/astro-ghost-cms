import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params }) => {
  const apiURL = new URL(import.meta.env.GHOST_CONTENT_API_URL);
  const siteURL = new URL(import.meta.env.SITE_URL ?? import.meta.env.SITE);
  const res = await fetch(new URL(`${params.sitemap}`, apiURL));
  const raw = await res.text();
  const body = raw
    .replaceAll(apiURL.href, siteURL.href)
    .replaceAll(apiURL.host, siteURL.host);

  return new Response(body, {
    status: 200,
    headers: { 'content-type': `application/xml` },
  });
};

export function getStaticPaths() {
  return [
    'sitemap.xml',
    'sitemap.xsl',
    'sitemap-pages.xml',
    'sitemap-posts.xml',
    'sitemap-authors.xml',
    'sitemap-tags.xml',
  ].map((sitemap) => ({ params: { sitemap } }));
}
