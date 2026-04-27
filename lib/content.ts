import type { Locale } from "@/lib/i18n/config";
import { sanityFetch } from "@/lib/sanity/client";
import { PROJECTS_QUERY, SERVICES_QUERY, SITE_SETTINGS_QUERY } from "@/lib/sanity/queries";

type ServiceItem = {
  _id: string;
  title: string;
  summary: string;
  details: string;
  icon?: string;
};

type ProjectItem = {
  _id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string;
  liveUrl: string;
  coverImage?: string;
  category?: string;
};

type SiteSettings = {
  companyName: string;
  taglineEs: string;
  taglineEn: string;
  email: string;
  phone?: string;
};

type InsightItem = {
  _id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

type ClientLogo = {
  _id: string;
  name: string;
};

const fallbackSite: SiteSettings = {
  companyName: "JSMediaSoft",
  taglineEs:
    "Consultora digital basada en EE.UU. Construimos web, e-commerce y modernización de sistemas.",
  taglineEn:
    "US-based digital consultancy. We build web, e-commerce and modernization of legacy systems.",
  email: "hello@jsmediasoft.com",
  phone: "+1 (402) 555-0144",
};

const fallbackServices: Record<Locale, ServiceItem[]> = {
  es: [
    {
      _id: "s1",
      title: "Desarrollo Web",
      summary: "Plataformas rápidas, accesibles y seguras.",
      details:
        "Sitios corporativos y aplicaciones web con Next.js, performance perfecto y SEO técnico desde el día uno.",
      icon: "code",
    },
    {
      _id: "s2",
      title: "E-commerce",
      summary: "Tiendas online listas para escalar.",
      details:
        "Diseño de catálogos, optimización de checkout, analítica comercial e integración con pasarelas locales y globales.",
      icon: "cart",
    },
    {
      _id: "s3",
      title: "Shopify & Headless",
      summary: "Implementaciones Shopify Plus y storefronts custom.",
      details:
        "Liquid, Hydrogen y Shopify Headless con Next.js. Integraciones con ERP, OMS y herramientas de marketing.",
      icon: "shopify",
    },
    {
      _id: "s4",
      title: "Sistemas empresariales",
      summary: "Software interno para operaciones críticas.",
      details:
        "Dashboards, paneles administrativos, automatizaciones y módulos de control diseñados para tu equipo.",
      icon: "system",
    },
    {
      _id: "s5",
      title: "Modernización legacy",
      summary: "Migración progresiva de sistemas antiguos.",
      details:
        "Reescritura por capas, integración con APIs y nube, sin detener la operación del negocio.",
      icon: "modernize",
    },
    {
      _id: "s6",
      title: "Performance & SEO técnico",
      summary: "Velocidad, accesibilidad y posicionamiento.",
      details:
        "Auditorías Core Web Vitals, optimización de Lighthouse y estrategia SEO técnica para crecer.",
      icon: "speed",
    },
  ],
  en: [
    {
      _id: "s1",
      title: "Web Development",
      summary: "Fast, accessible and secure platforms.",
      details:
        "Corporate websites and web apps built with Next.js. Pixel-perfect performance and SEO from day one.",
      icon: "code",
    },
    {
      _id: "s2",
      title: "E-commerce",
      summary: "Online stores built to scale.",
      details:
        "Catalog design, checkout optimization, commercial analytics and integrations with local and global gateways.",
      icon: "cart",
    },
    {
      _id: "s3",
      title: "Shopify & Headless",
      summary: "Shopify Plus implementations and custom storefronts.",
      details:
        "Liquid, Hydrogen and Shopify Headless with Next.js. Integrations with ERPs, OMS and marketing tools.",
      icon: "shopify",
    },
    {
      _id: "s4",
      title: "Business systems",
      summary: "Internal software for critical operations.",
      details:
        "Dashboards, admin panels, automations and control modules designed for your team.",
      icon: "system",
    },
    {
      _id: "s5",
      title: "Legacy modernization",
      summary: "Progressive migration of legacy systems.",
      details:
        "Strangler-pattern rewrites, API and cloud integration, without disrupting business operations.",
      icon: "modernize",
    },
    {
      _id: "s6",
      title: "Performance & technical SEO",
      summary: "Speed, accessibility and discoverability.",
      details:
        "Core Web Vitals audits, Lighthouse optimization and technical SEO strategy to compound growth.",
      icon: "speed",
    },
  ],
};

const fallbackProjects: Record<Locale, ProjectItem[]> = {
  es: [
    {
      _id: "p1",
      title: "Pawfect Choice",
      client: "Pawfect Choice",
      category: "Servicios premium para mascotas",
      challenge: "Posicionamiento digital de servicios pet premium.",
      solution: "Sitio moderno con jerarquía visual clara y enfoque comercial.",
      technologies: ["Next.js", "UI/UX", "Web corporativa"],
      results: "Mejor presentación de marca y mayor claridad en la oferta de servicios.",
      liveUrl: "https://pawfectchoice.com/",
      coverImage:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=80",
    },
    {
      _id: "p2",
      title: "Cinthya Villena Studio",
      client: "Cinthya Villena",
      category: "Beauty & wellness",
      challenge: "Transmitir estilo premium y confianza para tratamientos faciales y spa.",
      solution: "Web elegante con sistema visual centrado en la propuesta de valor.",
      technologies: ["Brand Web", "SEO base", "Performance"],
      results: "Presencia digital alineada con el posicionamiento premium del estudio.",
      liveUrl: "https://cinthyavillena.com/",
      coverImage:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    },
    {
      _id: "p3",
      title: "Chocobo Importaciones",
      client: "Chocobo",
      category: "Importaciones & comercial",
      challenge: "Mostrar catálogo y propuesta comercial de servicios de importación.",
      solution: "Sitio con servicios, productos, FAQ y testimonios estructurados.",
      technologies: ["Web corporativa", "Contenido comercial", "SEO"],
      results: "Mayor confianza y mejor comunicación de la oferta a clientes B2B.",
      liveUrl: "https://chocobo.pe/",
      coverImage:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    },
  ],
  en: [
    {
      _id: "p1",
      title: "Pawfect Choice",
      client: "Pawfect Choice",
      category: "Premium pet services",
      challenge: "Build a premium digital identity for pet services.",
      solution: "Modern website with strong hierarchy and commercial clarity.",
      technologies: ["Next.js", "UI/UX", "Corporate Web"],
      results: "Stronger brand perception and clearer service offering for prospects.",
      liveUrl: "https://pawfectchoice.com/",
      coverImage:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=80",
    },
    {
      _id: "p2",
      title: "Cinthya Villena Studio",
      client: "Cinthya Villena",
      category: "Beauty & wellness",
      challenge: "Express premium quality and trust for a beauty studio.",
      solution: "Elegant website with a value-led visual system.",
      technologies: ["Brand Web", "Foundational SEO", "Performance"],
      results: "Digital presence aligned with the studio premium positioning.",
      liveUrl: "https://cinthyavillena.com/",
      coverImage:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    },
    {
      _id: "p3",
      title: "Chocobo Imports",
      client: "Chocobo",
      category: "Imports & commercial",
      challenge: "Showcase catalog and commercial proposal for import services.",
      solution: "Website with structured services, products, FAQ and testimonials.",
      technologies: ["Corporate Web", "Commercial Content", "SEO"],
      results: "Better B2B trust and clearer communication of the company offering.",
      liveUrl: "https://chocobo.pe/",
      coverImage:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    },
  ],
};

const insights: Record<Locale, InsightItem[]> = {
  en: [
    {
      _id: "i1",
      title: "Headless Shopify: when it actually pays off",
      excerpt:
        "A pragmatic checklist to know if your storefront should switch to Hydrogen, Next.js Commerce or stay on Liquid.",
      date: "Apr 2026",
      category: "E-commerce",
    },
    {
      _id: "i2",
      title: "Legacy modernization without freezing the business",
      excerpt:
        "How we apply the strangler pattern to retire monolithic systems while shipping new value every sprint.",
      date: "Mar 2026",
      category: "Modernization",
    },
    {
      _id: "i3",
      title: "Web performance is a brand promise",
      excerpt:
        "What Core Web Vitals really mean for premium brands — and why a 1-second improvement is worth the investment.",
      date: "Feb 2026",
      category: "Performance",
    },
  ],
  es: [
    {
      _id: "i1",
      title: "Shopify Headless: cuándo realmente vale la pena",
      excerpt:
        "Un checklist pragmático para decidir si tu storefront debería migrar a Hydrogen, Next.js Commerce o seguir en Liquid.",
      date: "Abr 2026",
      category: "E-commerce",
    },
    {
      _id: "i2",
      title: "Modernizar legacy sin congelar el negocio",
      excerpt:
        "Cómo aplicamos el patrón strangler para retirar monolitos mientras entregamos valor en cada sprint.",
      date: "Mar 2026",
      category: "Modernización",
    },
    {
      _id: "i3",
      title: "El performance web es una promesa de marca",
      excerpt:
        "Qué significan los Core Web Vitals para marcas premium — y por qué 1 segundo de mejora ya justifica la inversión.",
      date: "Feb 2026",
      category: "Performance",
    },
  ],
};

const clients: ClientLogo[] = [
  { _id: "c1", name: "Pawfect Choice" },
  { _id: "c2", name: "Cinthya Villena" },
  { _id: "c3", name: "Chocobo" },
  { _id: "c4", name: "Next.js" },
  { _id: "c5", name: "Sanity" },
  { _id: "c6", name: "Shopify" },
  { _id: "c7", name: "Vercel" },
  { _id: "c8", name: "Tailwind" },
];

export async function getSiteSettings() {
  const data = await sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY);
  return data ?? fallbackSite;
}

export async function getServices(locale: Locale) {
  const data = await sanityFetch<ServiceItem[]>(SERVICES_QUERY, { locale });
  return data?.length ? data : fallbackServices[locale];
}

export async function getProjects(locale: Locale) {
  const data = await sanityFetch<ProjectItem[]>(PROJECTS_QUERY, { locale });
  return data?.length ? data : fallbackProjects[locale];
}

export function getInsights(locale: Locale) {
  return insights[locale];
}

export function getClients() {
  return clients;
}

export type { ServiceItem, ProjectItem, SiteSettings, InsightItem, ClientLogo };
