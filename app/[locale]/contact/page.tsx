import Link from "next/link";
import { notFound } from "next/navigation";

import { getSiteSettings } from "@/lib/content";
import { isLocale, labels, locales, type Locale } from "@/lib/i18n/config";

type Params = Promise<{ locale: string }>;

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ContactPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const settings = await getSiteSettings();
  const t = labels[typedLocale];

  return (
    <>
      <section className="relative overflow-hidden text-white hero-grid-bg">
        <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />
        <div className="container-width relative z-10 py-24 md:py-28">
          <span className="eyebrow">{t.menu.contact}</span>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight">
            <span className="gradient-text">{t.pages.contact.title}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            {t.pages.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-width grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <article className="card-hover rounded-2xl border border-[var(--color-border-light)] bg-white p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent-blue)]">
                {t.pages.contact.emailLabel}
              </p>
              <a
                href={`mailto:${settings.email}`}
                className="mt-3 inline-block text-2xl font-semibold text-[var(--color-primary-navy)]"
              >
                {settings.email}
              </a>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {locale === "en"
                  ? "Send a brief and we will reply within one business day."
                  : "Envía un brief y respondemos dentro de un día hábil."}
              </p>
            </article>

            {settings.phone ? (
              <article className="card-hover rounded-2xl border border-[var(--color-border-light)] bg-white p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent-blue)]">
                  {t.pages.contact.phoneLabel}
                </p>
                <a
                  href={`tel:${settings.phone.replace(/[^+\d]/g, "")}`}
                  className="mt-3 inline-block text-2xl font-semibold text-[var(--color-primary-navy)]"
                >
                  {settings.phone}
                </a>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  {locale === "en"
                    ? "Mon-Fri, 9:00am – 6:00pm CST."
                    : "Lun-Vie, 9:00am – 6:00pm CST."}
                </p>
              </article>
            ) : null}

            <article className="card-hover rounded-2xl border border-[var(--color-border-light)] bg-white p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent-blue)]">
                {t.pages.contact.locationLabel}
              </p>
              <p className="mt-3 text-2xl font-semibold text-[var(--color-primary-navy)]">
                {t.pages.contact.locationValue}
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {locale === "en"
                  ? "Remote-first. Available for on-site workshops in the US."
                  : "Trabajo remoto. Disponibles para talleres on-site en EE.UU."}
              </p>
            </article>
          </div>

          <aside className="glow-card relative rounded-3xl p-8 text-white shadow-[0_40px_120px_-50px_rgba(10,27,51,0.6)]">
            <p className="text-xs uppercase tracking-[0.18em] text-white/60">
              {locale === "en" ? "Engagement" : "Engagement"}
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              {locale === "en"
                ? "Most engagements start with a 30-minute discovery call."
                : "La mayoría de proyectos empieza con una llamada de descubrimiento de 30 minutos."}
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-white/80">
              {(locale === "en"
                ? [
                    "Share goals, KPIs and timeline.",
                    "We propose a clear scope and pricing.",
                    "We start in days, not weeks.",
                  ]
                : [
                    "Compartes objetivos, KPIs y timeline.",
                    "Proponemos un alcance claro y un precio cerrado.",
                    "Arrancamos en días, no en semanas.",
                  ]
              ).map((line, index) => (
                <li key={line} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-accent-blue)]/30 text-xs font-semibold text-white"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <Link
              href={`mailto:${settings.email}`}
              className="btn-primary mt-8 inline-flex"
            >
              {t.cta}
              <span aria-hidden>→</span>
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
