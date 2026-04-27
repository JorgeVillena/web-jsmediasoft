import Link from "next/link";
import { notFound } from "next/navigation";

import { ByTheNumbers } from "@/components/sections/by-the-numbers";
import { ContactCta } from "@/components/sections/contact-cta";
import { isLocale, labels, locales, type Locale } from "@/lib/i18n/config";

type Params = Promise<{ locale: string }>;

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const t = labels[typedLocale];

  return (
    <>
      <section className="relative overflow-hidden text-white hero-grid-bg">
        <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />
        <div className="container-width relative z-10 grid gap-12 py-24 md:grid-cols-[1.1fr_0.9fr] md:py-28 md:items-center">
          <div>
            <span className="eyebrow">{t.menu.about}</span>
            <h1 className="mt-4 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight">
              <span className="gradient-text">{t.pages.about.title}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              {t.pages.about.subtitle}
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

          <div className="glow-card relative rounded-3xl p-7">
            <p className="text-xs uppercase tracking-[0.18em] text-white/60">
              {locale === "en" ? "Headquarters" : "Sede"}
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">
              Omaha, Nebraska
            </p>
            <p className="mt-2 text-white/70">
              {locale === "en"
                ? "Serving brands and product teams across the United States."
                : "Sirviendo marcas y equipos de producto en Estados Unidos."}
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
              {[
                { k: locale === "en" ? "Time zone" : "Zona horaria", v: "CST · UTC -6" },
                { k: locale === "en" ? "Languages" : "Idiomas", v: "EN · ES" },
                { k: locale === "en" ? "Reply time" : "Respuesta", v: "< 24h" },
                { k: locale === "en" ? "Engagement" : "Engagement", v: locale === "en" ? "Senior team" : "Equipo senior" },
              ].map((item) => (
                <li key={item.k}>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                    {item.k}
                  </p>
                  <p className="mt-1 font-semibold text-white">{item.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-width grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow eyebrow-dark">{t.pages.about.missionTitle}</span>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[var(--color-primary-navy)] md:text-5xl">
              {t.pages.about.missionBody}
            </h2>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent-blue)]">
              {t.pages.about.valuesTitle}
            </p>
            <ul className="mt-6 grid gap-4">
              {t.pages.about.values.map((value, index) => (
                <li
                  key={value.title}
                  className="card-hover rounded-2xl border border-[var(--color-border-light)] bg-white p-6"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-border-light)] text-sm font-semibold text-[var(--color-primary-navy)]"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-primary-navy)]">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
                        {value.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ByTheNumbers locale={typedLocale} />
      <ContactCta locale={typedLocale} />
    </>
  );
}
