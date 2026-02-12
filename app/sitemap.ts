import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vac.rw'
  
  // Static routes
  const routes = [
    '',
    '/contact',
    '/services',
    '/solutions',
    '/team',
    '/services/business-intelligence',
    '/services/data-analytics',
    '/services/strategic-consulting',
    '/solutions/ai-machine-learning',
    '/solutions/data-engineering',
    '/solutions/data-science',
    '/solutions/digital-creative',
    '/solutions/market-research',
    '/solutions/software-engineering',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
 
  return routes
}
