import Link from "next/link";

import { labels, type Locale } from "@/lib/i18n/config";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const t = labels[locale];

  return (
    <section className="relative overflow-hidden text-white hero-grid-bg">
      <div className="absolute inset-0 dot-grid opacity-50" aria-hidden />
      <div
        className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.55), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-width relative z-10 grid gap-14 py-24 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20 lg:py-36">
        <div className="fade-up">
          <span className="eyebrow">
            <span
              className="h-1.5 w-1.5 rounded-full bg-[var(--color-cyan-glow)]"
              aria-hidden
            />
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-6 text-[clamp(2.4rem,5.4vw,4.4rem)] font-bold leading-[1.04] tracking-tight">
            {t.hero.title}{" "}
            <span className="gradient-text">{t.hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/75">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href={`/${locale}/contact`} className="btn-primary">
              {t.hero.primaryCta}
              <span aria-hidden>→</span>
            </Link>
            <Link href={`/${locale}/projects`} className="btn-ghost-light">
              {t.hero.secondaryCta}
            </Link>
          </div>

          <ul className="mt-12 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
            {t.hero.badges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"
              >
                <span
                  className="grid h-5 w-5 place-items-center rounded-full bg-[var(--color-accent-blue)]/30 text-[var(--color-cyan-glow)]"
                  aria-hidden
                >
                  ✓
                </span>
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="glow-card relative rounded-3xl p-7 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/60">
              <span>{locale === "en" ? "Live brief" : "Brief en vivo"}</span>
              <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                {locale === "en" ? "Active" : "Activo"}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-white">
              {locale === "en"
                ? "Headless commerce migration"
                : "Migración a commerce headless"}
            </h3>
            <p className="mt-2 text-sm text-white/70">
              {locale === "en"
                ? "Replatforming a US retailer to Shopify Headless + Next.js."
                : "Replatforming de un retailer en EE.UU. hacia Shopify Headless + Next.js."}
            </p>

            <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-5 text-center">
              {[
                {
                  k: locale === "en" ? "Speed" : "Velocidad",
                  v: "+38%",
                },
                {
                  k: locale === "en" ? "Conv." : "Conv.",
                  v: "+22%",
                },
                {
                  k: locale === "en" ? "Bounce" : "Bounce",
                  v: "-31%",
                },
              ].map((kpi) => (
                <div key={kpi.k}>
                  <dt className="text-xs uppercase tracking-wider text-white/50">
                    {kpi.k}
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-[var(--color-cyan-glow)]">
                    {kpi.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 space-y-3">
              {[
                "Discovery & KPIs",
                "Headless storefront",
                "ERP & OMS sync",
                "Launch & CRO",
              ].map((step, i) => (
                <div
                  key={step}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="grid h-6 w-6 place-items-center rounded-md bg-[var(--color-accent-blue)]/30 text-xs font-semibold text-white"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    {step}
                  </span>
                  <span className="text-xs text-white/40">
                    {i < 3 ? "✓" : "→"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
