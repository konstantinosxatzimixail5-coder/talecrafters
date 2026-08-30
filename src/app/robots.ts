import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Everything except the CMS is open, deliberately. The glossary, the
      // pipelines and the free resources exist to be crawled.
      { userAgent: '*', allow: '/', disallow: ['/studio/', '/api/'] },
      // Answer engines get an explicit welcome rather than being left to the
      // wildcard, because several of them read a named rule first.
      { userAgent: 'GPTBot', allow: '/', disallow: ['/studio/', '/api/'] },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: ['/studio/', '/api/'] },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: ['/studio/', '/api/'] },
      { userAgent: 'ClaudeBot', allow: '/', disallow: ['/studio/', '/api/'] },
      { userAgent: 'Claude-Web', allow: '/', disallow: ['/studio/', '/api/'] },
      { userAgent: 'PerplexityBot', allow: '/', disallow: ['/studio/', '/api/'] },
      { userAgent: 'Google-Extended', allow: '/', disallow: ['/studio/', '/api/'] },
      { userAgent: 'Applebot-Extended', allow: '/', disallow: ['/studio/', '/api/'] },
      { userAgent: 'Bingbot', allow: '/', disallow: ['/studio/', '/api/'] },
      { userAgent: 'CCBot', allow: '/', disallow: ['/studio/', '/api/'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
