import Link from "next/link";

import { getServices } from "@/lib/content";
import { labels, type Locale } from "@/lib/i18n/config";

type ServicesStripProps = {
  locale: Locale;
};

const iconMap: Record<string, string> = {
  code: "</>",
  cart: "🛒",
  shopify: "S",
  system: "⚙",
  modernize: "↺",
  speed: "⚡",
};

export async function ServicesStrip({ locale }: ServicesStripProps) {
  const services = await getServices(locale);
  const t = labels[locale];

  return (
    <section className="section">
      <div className="container-width">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="eyebrow eyebrow-dark">{t.servicesStrip.eyebrow}</span>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[var(--color-primary-navy)] md:text-5xl">
              {t.servicesStrip.title}
            </h2>
          </div>
          <p className="text-base text-[var(--color-muted)] lg:text-lg">
            {t.servicesStrip.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <article
              key={service._id}
              className="card-hover group relative overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white p-7"
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

              <h3 className="mt-6 text-xl font-semibold text-[var(--color-primary-navy)]">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {service.summary}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-dark)]/80">
                {service.details}
              </p>

              <Link
                href={`/${locale}/services`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent-blue)] transition group-hover:gap-2"
              >
                {locale === "en" ? "Learn more" : "Ver más"}
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
