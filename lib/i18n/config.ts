export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

type SectionLabels = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export const labels: Record<
  Locale,
  {
    menu: { home: string; services: string; projects: string; about: string; contact: string };
    cta: string;
    ctaShort: string;
    secondaryCta: string;
    allRights: string;
    location: string;
    languageSwitcher: { label: string; en: string; es: string };
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      badges: string[];
    };
    servicesStrip: SectionLabels;
    featuredWork: SectionLabels & { liveLink: string; result: string };
    numbers: SectionLabels & {
      items: { value: string; label: string }[];
    };
    process: SectionLabels & {
      steps: { title: string; description: string }[];
    };
    logos: SectionLabels;
    insights: SectionLabels & { readMore: string };
    contactCta: SectionLabels & {
      primary: string;
      secondary: string;
      emailLabel: string;
      phoneLabel: string;
    };
    footer: {
      tagline: string;
      services: string;
      company: string;
      contact: string;
      social: string;
    };
    pages: {
      services: { title: string; subtitle: string };
      projects: { title: string; subtitle: string; visit: string };
      about: { title: string; subtitle: string; missionTitle: string; missionBody: string; valuesTitle: string; values: { title: string; body: string }[] };
      contact: { title: string; subtitle: string; emailLabel: string; phoneLabel: string; locationLabel: string; locationValue: string };
    };
  }
> = {
  en: {
    menu: {
      home: "Home",
      services: "Services",
      projects: "Work",
      about: "About",
      contact: "Contact",
    },
    cta: "Request a quote",
    ctaShort: "Get in touch",
    secondaryCta: "See our work",
    allRights: "All rights reserved.",
    location: "Omaha, Nebraska — United States",
    languageSwitcher: { label: "Language", en: "EN", es: "ES" },
    hero: {
      eyebrow: "Digital consultancy · Based in the US",
      title: "Premium digital experiences",
      titleAccent: "engineered to grow your business.",
      subtitle:
        "We design, build and modernize web platforms, e-commerce and Shopify ecosystems for ambitious brands across the United States.",
      primaryCta: "Request a quote",
      secondaryCta: "See our work",
      badges: ["US Based · Omaha, NE", "Shopify Partners ready", "Next.js & Headless CMS"],
    },
    servicesStrip: {
      eyebrow: "What we do",
      title: "Six capabilities. One accountable team.",
      subtitle:
        "From the first wireframe to scaling at thousands of sessions per minute, we own the digital craftsmanship end to end.",
    },
    featuredWork: {
      eyebrow: "Featured work",
      title: "Real outcomes for real brands.",
      subtitle:
        "A snapshot of recent client engagements where strategy, design and engineering came together.",
      liveLink: "Visit live site",
      result: "Outcome",
    },
    numbers: {
      eyebrow: "By the numbers",
      title: "Measurable craft, repeatable results.",
      items: [
        { value: "10+", label: "Years building digital products" },
        { value: "120+", label: "Projects shipped" },
        { value: "40+", label: "Brands accelerated" },
        { value: "15+", label: "Technologies mastered" },
      ],
    },
    process: {
      eyebrow: "Our process",
      title: "A focused 4-step engagement.",
      subtitle:
        "We replace endless meetings with sharp deliverables — from discovery to growth — in transparent sprints.",
      steps: [
        { title: "Discover", description: "Audit, goals, KPIs and stakeholders. We map the playing field." },
        { title: "Design", description: "Architecture, UX wireframes and a brand-led visual system." },
        { title: "Develop", description: "Production-grade engineering, automated QA and content modeling." },
        { title: "Grow", description: "Launch, analytics, CRO experiments and a roadmap that compounds." },
      ],
    },
    logos: {
      eyebrow: "Tech stack & partners",
      title: "Modern tooling, battle-tested practices.",
    },
    insights: {
      eyebrow: "Insights",
      title: "Notes from our studio.",
      subtitle: "Practical playbooks for teams scaling their digital footprint.",
      readMore: "Read article",
    },
    contactCta: {
      eyebrow: "Let’s talk",
      title: "Have a project in mind? Tell us about it.",
      subtitle:
        "Most engagements start with a 30-minute call. We respond within one business day.",
      primary: "Request a quote",
      secondary: "Email us directly",
      emailLabel: "Email",
      phoneLabel: "Phone",
    },
    footer: {
      tagline: "US-based digital consultancy. Web, commerce and modernization.",
      services: "Services",
      company: "Company",
      contact: "Contact",
      social: "Social",
    },
    pages: {
      services: {
        title: "Services that move your business forward.",
        subtitle:
          "An integrated team — strategy, design and engineering — focused on tangible business results.",
      },
      projects: {
        title: "Selected work.",
        subtitle: "A look at what we have built for ambitious brands.",
        visit: "Visit website",
      },
      about: {
        title: "Engineering quality with a human approach.",
        subtitle:
          "JSMediaSoft is a senior consultancy partnering with brands and product teams that demand reliability, transparency and craft.",
        missionTitle: "Our mission",
        missionBody:
          "Help US-based teams ship modern, scalable and elegant digital products without the bloat of traditional agencies.",
        valuesTitle: "How we operate",
        values: [
          { title: "Senior-only delivery", body: "No juniors learning on your dime. Direct access to architects and engineers." },
          { title: "Outcome focused", body: "We track KPIs, not deliverables. Every sprint must move a real metric." },
          { title: "Long-term partners", body: "We stay after launch. Most clients work with us for years, not weeks." },
        ],
      },
      contact: {
        title: "Tell us where you want to go.",
        subtitle:
          "Share your goals and we will come back with a clear scope, timeline and investment proposal.",
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Location",
        locationValue: "Omaha, Nebraska — Serving the United States.",
      },
    },
  },
  es: {
    menu: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      about: "Nosotros",
      contact: "Contacto",
    },
    cta: "Solicitar cotización",
    ctaShort: "Contáctanos",
    secondaryCta: "Ver proyectos",
    allRights: "Todos los derechos reservados.",
    location: "Omaha, Nebraska — Estados Unidos",
    languageSwitcher: { label: "Idioma", en: "EN", es: "ES" },
    hero: {
      eyebrow: "Consultora digital · Basada en EE.UU.",
      title: "Experiencias digitales premium",
      titleAccent: "diseñadas para hacer crecer tu negocio.",
      subtitle:
        "Diseñamos, construimos y modernizamos plataformas web, e-commerce y ecosistemas Shopify para marcas ambiciosas en Estados Unidos.",
      primaryCta: "Solicitar cotización",
      secondaryCta: "Ver proyectos",
      badges: ["Basados en Omaha, NE", "Listos para Shopify Partners", "Next.js & Headless CMS"],
    },
    servicesStrip: {
      eyebrow: "Qué hacemos",
      title: "Seis capacidades. Un equipo responsable.",
      subtitle:
        "Del primer wireframe a escalar a miles de sesiones por minuto: nos hacemos cargo del producto digital de punta a punta.",
    },
    featuredWork: {
      eyebrow: "Trabajos destacados",
      title: "Resultados reales para marcas reales.",
      subtitle:
        "Una muestra de recientes proyectos donde estrategia, diseño e ingeniería caminaron juntos.",
      liveLink: "Visitar sitio",
      result: "Resultado",
    },
    numbers: {
      eyebrow: "En números",
      title: "Oficio medible, resultados consistentes.",
      items: [
        { value: "10+", label: "Años construyendo productos digitales" },
        { value: "120+", label: "Proyectos entregados" },
        { value: "40+", label: "Marcas aceleradas" },
        { value: "15+", label: "Tecnologías dominadas" },
      ],
    },
    process: {
      eyebrow: "Nuestro proceso",
      title: "Un engagement enfocado en 4 pasos.",
      subtitle:
        "Cambiamos reuniones interminables por entregables claros — desde el descubrimiento hasta el crecimiento — en sprints transparentes.",
      steps: [
        { title: "Descubrir", description: "Auditoría, objetivos, KPIs y stakeholders. Mapeamos el escenario." },
        { title: "Diseñar", description: "Arquitectura, wireframes UX y sistema visual liderado por marca." },
        { title: "Desarrollar", description: "Ingeniería de producción, QA automatizado y modelado de contenido." },
        { title: "Crecer", description: "Lanzamiento, analítica, experimentos CRO y un roadmap acumulativo." },
      ],
    },
    logos: {
      eyebrow: "Stack tecnológico y partners",
      title: "Herramientas modernas, prácticas probadas.",
    },
    insights: {
      eyebrow: "Insights",
      title: "Notas desde el estudio.",
      subtitle: "Playbooks prácticos para equipos que escalan su huella digital.",
      readMore: "Leer artículo",
    },
    contactCta: {
      eyebrow: "Conversemos",
      title: "¿Tienes un proyecto en mente? Cuéntanos.",
      subtitle:
        "La mayoría de los engagements empieza con una llamada de 30 minutos. Respondemos en menos de 1 día hábil.",
      primary: "Solicitar cotización",
      secondary: "Escríbenos por email",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
    },
    footer: {
      tagline: "Consultora digital basada en EE.UU. Web, e-commerce y modernización.",
      services: "Servicios",
      company: "Empresa",
      contact: "Contacto",
      social: "Social",
    },
    pages: {
      services: {
        title: "Servicios que mueven tu negocio hacia adelante.",
        subtitle:
          "Un equipo integrado — estrategia, diseño e ingeniería — enfocado en resultados de negocio tangibles.",
      },
      projects: {
        title: "Trabajos seleccionados.",
        subtitle: "Una mirada a lo que hemos construido para marcas ambiciosas.",
        visit: "Visitar sitio",
      },
      about: {
        title: "Ingeniería de calidad con enfoque humano.",
        subtitle:
          "JSMediaSoft es una consultora senior que se asocia con marcas y equipos de producto que exigen confiabilidad, transparencia y oficio.",
        missionTitle: "Nuestra misión",
        missionBody:
          "Ayudar a equipos en Estados Unidos a lanzar productos digitales modernos, escalables y elegantes sin la burocracia de las agencias tradicionales.",
        valuesTitle: "Cómo trabajamos",
        values: [
          { title: "Solo perfiles senior", body: "Acceso directo a arquitectos e ingenieros con años de experiencia." },
          { title: "Enfocados en resultados", body: "Trackeamos KPIs, no entregables. Cada sprint mueve una métrica real." },
          { title: "Partners de largo plazo", body: "Seguimos después del lanzamiento. La mayoría de clientes trabaja con nosotros por años." },
        ],
      },
      contact: {
        title: "Cuéntanos hacia dónde quieres ir.",
        subtitle:
          "Comparte tus objetivos y volvemos con un alcance claro, timeline y propuesta de inversión.",
        emailLabel: "Email",
        phoneLabel: "Teléfono",
        locationLabel: "Ubicación",
        locationValue: "Omaha, Nebraska — Sirviendo Estados Unidos.",
      },
    },
  },
};
