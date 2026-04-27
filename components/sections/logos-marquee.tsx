import { getClients } from "@/lib/content";
import { labels, type Locale } from "@/lib/i18n/config";

type LogosMarqueeProps = {
  locale: Locale;
};

export function LogosMarquee({ locale }: LogosMarqueeProps) {
  const clients = getClients();
  const t = labels[locale];
  const loop = [...clients, ...clients];

  return (
    <section className="border-y border-[var(--color-border-light)] bg-white">
      <div className="container-width py-14">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="eyebrow eyebrow-dark">{t.logos.eyebrow}</span>
          <h3 className="text-2xl font-semibold text-[var(--color-primary-navy)] md:text-3xl">
            {t.logos.title}
          </h3>
        </div>

        <div
          className="marquee mt-10"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent 0, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="marquee-track">
            {loop.map((client, idx) => (
              <span
                key={`${client._id}-${idx}`}
                className="text-xl font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-navy)]/70"
              >
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
