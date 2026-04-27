import Link from "next/link";

import { getInsights } from "@/lib/content";
import { labels, type Locale } from "@/lib/i18n/config";

type InsightsTeaserProps = {
  locale: Locale;
};

export function InsightsTeaser({ locale }: InsightsTeaserProps) {
  const insights = getInsights(locale);
  const t = labels[locale];

  return (
    <section className="section bg-[var(--color-soft-bg)]">
      <div className="container-width">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="eyebrow eyebrow-dark">{t.insights.eyebrow}</span>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[var(--color-primary-navy)] md:text-5xl">
              {t.insights.title}
            </h2>
          </div>
          <p className="text-base text-[var(--color-muted)] lg:text-lg">
            {t.insights.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {insights.map((insight) => (
            <article
              key={insight._id}
              className="card-hover flex h-full flex-col rounded-2xl border border-[var(--color-border-light)] bg-white p-6"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                <span className="rounded-full bg-[var(--color-primary-navy)]/5 px-2.5 py-1 font-semibold text-[var(--color-primary-navy)]">
                  {insight.category}
                </span>
                <span>{insight.date}</span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[var(--color-primary-navy)]">
                {insight.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {insight.excerpt}
              </p>

              <Link
                href={`/${locale}/contact`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent-blue)] transition hover:gap-2"
              >
                {t.insights.readMore}
                <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
