import Link from "next/link";
import { notFound } from "next/navigation";

import { Process } from "@/components/sections/process";
import { ContactCta } from "@/components/sections/contact-cta";
import { getServices } from "@/lib/content";
import { isLocale, labels, locales, type Locale } from "@/lib/i18n/config";

type Params = Promise<{ locale: string }>;

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const iconMap: Record<string, string> = {
  code: "</>",
  cart: "🛒",
  shopify: "S",
  system: "⚙",
  modernize: "↺",
  speed: "⚡",
};

export default async function ServicesPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const services = await getServices(typedLocale);
  const t = labels[typedLocale];

  return (
    <>
      <section className="relative overflow-hidden text-white hero-grid-bg">
        <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />
        <div className="container-width relative z-10 py-24 md:py-28">
          <span className="eyebrow">{t.menu.services}</span>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight">
            <span className="gradient-text">{t.pages.services.title}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            {t.pages.services.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/contact`} className="btn-primary">
              {t.cta}
              <span aria-hidden>→</span>
            </Link>
            <Link href={`/${locale}/projects`} className="btn-ghost-light">
              {t.menu.projects}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-width">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service._id}
                className="card-hover group flex h-full flex-col rounded-2xl border border-[var(--color-border-light)] bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-primary-navy)] text-lg font-bold text-white"
                    aria-hidden
                  >
                    {iconMap[service.icon ?? ""] ?? `0${index + 1}`}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-6 text-xl font-semibold text-[var(--color-primary-navy)]">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {service.summary}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-text-dark)]/85">
                  {service.details}
                </p>
                <Link
                  href={`/${locale}/contact`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent-blue)] transition group-hover:gap-2"
                >
                  {locale === "en" ? "Talk to a strategist" : "Habla con un estratega"}
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Process locale={typedLocale} />
      <ContactCta locale={typedLocale} />
    </>
  );
}
