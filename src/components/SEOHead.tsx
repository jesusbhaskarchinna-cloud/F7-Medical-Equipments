import { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'product';
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function SEOHead({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  schema,
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper for meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    // 3. Canonical URL
    const canonicalUrl = canonicalPath
      ? `${window.location.origin}${canonicalPath}`
      : `${window.location.origin}${window.location.pathname}`;
    setMeta('og:url', canonicalUrl, true);

    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Schema.org JSON-LD injection
    const existingScript = document.getElementById('seo-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'seo-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToClean = document.getElementById('seo-json-ld');
      if (scriptToClean) {
        scriptToClean.remove();
      }
    };
  }, [title, description, canonicalPath, ogType, schema]);

  return null;
}
