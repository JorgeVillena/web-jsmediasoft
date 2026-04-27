import { labels, type Locale } from "@/lib/i18n/config";

type ByTheNumbersProps = {
  locale: Locale;
};

export function ByTheNumbers({ locale }: ByTheNumbersProps) {
  const t = labels[locale];

  return (
    <section className="section section-dark relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden />
      <div
        className="absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.55), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-width relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="eyebrow">{t.numbers.eyebrow}</span>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-5xl">
              {t.numbers.title}
            </h2>
          </div>
          <p className="text-base text-white/65 lg:text-lg">
            {locale === "en"
              ? "We track outcomes, not deliverables. Every engagement is measured against the metrics that matter to your business."
              : "Medimos resultados, no entregables. Cada engagement se evalúa contra las métricas que importan a tu negocio."}
          </p>
        </div>

        <dl className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.numbers.items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <dt className="text-sm uppercase tracking-[0.18em] text-white/55">
                {item.label}
              </dt>
              <dd className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-6xl">
                <span className="gradient-text">{item.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
