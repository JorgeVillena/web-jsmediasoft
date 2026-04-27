import Link from "next/link";

import { getSiteSettings } from "@/lib/content";
import { labels, type Locale } from "@/lib/i18n/config";

type ContactCtaProps = {
  locale: Locale;
};

export async function ContactCta({ locale }: ContactCtaProps) {
  const settings = await getSiteSettings();
  const t = labels[locale];

  return (
    <section className="section">
      <div className="container-width">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary-navy)] px-8 py-16 text-white shadow-[0_40px_120px_-50px_rgba(10,27,51,0.55)] md:px-14 md:py-20">
          <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />
          <div
            className="absolute -right-24 -top-20 h-[360px] w-[360px] rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(34,211,238,0.45), transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="eyebrow">{t.contactCta.eyebrow}</span>
              <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
                {t.contactCta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-white/75">
                {t.contactCta.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/${locale}/contact`} className="btn-primary">
                  {t.contactCta.primary}
                  <span aria-hidden>→</span>
                </Link>
                <a
                  href={`mailto:${settings.email}`}
                  className="btn-ghost-light"
                >
                  {t.contactCta.secondary}
                </a>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                  {t.contactCta.emailLabel}
                </p>
                <a
                  href={`mailto:${settings.email}`}
                  className="mt-2 block text-lg font-semibold text-white transition hover:text-[var(--color-cyan-glow)]"
                >
                  {settings.email}
                </a>
              </li>
              {settings.phone ? (
                <li className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                    {t.contactCta.phoneLabel}
                  </p>
                  <a
                    href={`tel:${settings.phone.replace(/[^+\d]/g, "")}`}
                    className="mt-2 block text-lg font-semibold text-white transition hover:text-[var(--color-cyan-glow)]"
                  >
                    {settings.phone}
                  </a>
                </li>
              ) : null}
              <li className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2 lg:col-span-1">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                  {locale === "en" ? "Location" : "Ubicación"}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {t.location}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
