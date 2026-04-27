import { labels, type Locale } from "@/lib/i18n/config";

type ProcessProps = {
  locale: Locale;
};

export function Process({ locale }: ProcessProps) {
  const t = labels[locale];

  return (
    <section className="section">
      <div className="container-width">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="eyebrow eyebrow-dark">{t.process.eyebrow}</span>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[var(--color-primary-navy)] md:text-5xl">
              {t.process.title}
            </h2>
          </div>
          <p className="text-base text-[var(--color-muted)] lg:text-lg">
            {t.process.subtitle}
          </p>
        </div>

        <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, index) => (
            <li
              key={step.title}
              className="card-hover relative overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-blue)]">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className="grid h-9 w-9 place-items-center rounded-full border border-[var(--color-border-light)] text-sm font-semibold text-[var(--color-primary-navy)]"
                  aria-hidden
                >
                  {index + 1}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-[var(--color-primary-navy)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {step.description}
              </p>

              <div
                className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full opacity-0 transition group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(37,99,235,0.18), transparent 70%)",
                }}
                aria-hidden
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
