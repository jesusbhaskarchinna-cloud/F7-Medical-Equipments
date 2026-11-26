import React, { createContext, useContext, useState, useEffect, ReactNode, AnchorHTMLAttributes } from 'react';

export interface RouteMatch {
  name: string;
  params: Record<string, string>;
  pathname: string;
}

interface RouterContextType {
  pathname: string;
  navigate: (to: string) => void;
  match: RouteMatch;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function parseRoute(rawPath: string): RouteMatch {
  // Normalize path: strip origin if present, remove trailing slash except root
  let path = rawPath.split('?')[0].split('#')[0];
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }
  if (!path.startsWith('/')) {
    path = '/' + path;
  }

  // Exact matches
  if (path === '' || path === '/') {
    return { name: 'home', params: {}, pathname: path };
  }
  if (path === '/products-services') {
    return { name: 'products-services', params: {}, pathname: path };
  }
  if (path === '/about-us') {
    return { name: 'about-us', params: {}, pathname: path };
  }
  if (path === '/blog') {
    return { name: 'blog', params: {}, pathname: path };
  }
  if (path === '/contact-us') {
    return { name: 'contact-us', params: {}, pathname: path };
  }
  if (path === '/privacy-policy') {
    return { name: 'privacy-policy', params: {}, pathname: path };
  }
  if (path === '/terms-and-conditions') {
    return { name: 'terms-and-conditions', params: {}, pathname: path };
  }
  if (path === '/disclaimer') {
    return { name: 'disclaimer', params: {}, pathname: path };
  }
  if (path === '/sitemap' || path === '/sitemap.xml') {
    return { name: 'sitemap', params: {}, pathname: path };
  }

  // Dynamic route: /locations/:city or direct /:city (for the 7 official branches)
  const locationMatch = path.match(/^\/locations\/([^/]+)$/);
  if (locationMatch) {
    return { name: 'location', params: { citySlug: locationMatch[1] }, pathname: path };
  }

  const directCityMatch = path.match(/^\/(hyderabad|delhi|vijayawada|visakhapatnam|chennai|bangalore|pune)$/);
  if (directCityMatch) {
    return { name: 'location', params: { citySlug: directCityMatch[1] }, pathname: path };
  }

  // Dynamic route: /categories/:category
  const categoryMatch = path.match(/^\/categories\/([^/]+)$/);
  if (categoryMatch) {
    return { name: 'category', params: { categorySlug: categoryMatch[1] }, pathname: path };
  }

  // Dynamic route: /products/:product
  const productMatch = path.match(/^\/products\/([^/]+)$/);
  if (productMatch) {
    return { name: 'product', params: { productSlug: productMatch[1] }, pathname: path };
  }

  // Primary URL Structure: /{product-slug}-for-rent-in-{city-slug}
  const rentInCityMatch = path.match(/^\/([a-z0-9-]+)-for-rent-in-([a-z0-9-]+)$/);
  if (rentInCityMatch) {
    return {
      name: 'rent-city',
      params: { productSlug: rentInCityMatch[1], citySlug: rentInCityMatch[2] },
      pathname: path,
    };
  }

  // Primary URL Structure: /{product-slug}-for-sale-in-{city-slug}
  const saleInCityMatch = path.match(/^\/([a-z0-9-]+)-for-sale-in-([a-z0-9-]+)$/);
  if (saleInCityMatch) {
    return {
      name: 'buy-city',
      params: { productSlug: saleInCityMatch[1], citySlug: saleInCityMatch[2] },
      pathname: path,
    };
  }

  // Fallback alias: /rent/:product/:city
  const rentMatch = path.match(/^\/rent\/([^/]+)\/([^/]+)$/);
  if (rentMatch) {
    return { name: 'rent-city', params: { productSlug: rentMatch[1], citySlug: rentMatch[2] }, pathname: path };
  }

  // Fallback alias: /buy/:product/:city
  const buyMatch = path.match(/^\/buy\/([^/]+)\/([^/]+)$/);
  if (buyMatch) {
    return { name: 'buy-city', params: { productSlug: buyMatch[1], citySlug: buyMatch[2] }, pathname: path };
  }

  // Dynamic route: /blog/:slug
  const blogDetailMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogDetailMatch) {
    return { name: 'blog-detail', params: { postSlug: blogDetailMatch[1] }, pathname: path };
  }

  return { name: 'not-found', params: {}, pathname: path };
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState<string>(() => {
    let p = window.location.pathname || '/';
    const locMatch = p.match(/^\/locations\/([^/]+)\/?$/);
    if (locMatch) {
      const canonical = `/${locMatch[1]}/`;
      window.history.replaceState({}, '', canonical);
      return canonical;
    }
    return p;
  });

  useEffect(() => {
    const locMatch = window.location.pathname.match(/^\/locations\/([^/]+)\/?$/);
    if (locMatch) {
      const canonical = `/${locMatch[1]}/`;
      window.history.replaceState({}, '', canonical);
      setPathname(canonical);
    }

    const handlePopState = () => {
      let p = window.location.pathname || '/';
      const m = p.match(/^\/locations\/([^/]+)\/?$/);
      if (m) {
        p = `/${m[1]}/`;
        window.history.replaceState({}, '', p);
      }
      setPathname(p);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (to === pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', to);
    setPathname(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const match = parseRoute(pathname);

  return (
    <RouterContext.Provider value={{ pathname, navigate, match }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  className?: string;
}

export function Link({ to, children, className = '', onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    // Let browser handle modifier keys (Cmd/Ctrl + click to open in new tab)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
      return;
    }
    // If it's external or tel: or mailto: or https: let normal behavior happen
    if (to.startsWith('http') || to.startsWith('tel:') || to.startsWith('mailto:')) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}

export function getRentalUrl(productSlug: string, citySlug: string): string {
  return `/rent/${productSlug}/${citySlug}/`;
}

export function getSaleUrl(productSlug: string, citySlug: string): string {
  return `/buy/${productSlug}/${citySlug}/`;
}

export function getLocationUrl(citySlug: string): string {
  return `/${citySlug}/`;
}

