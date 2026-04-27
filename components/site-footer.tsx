import Link from "next/link";

import { getServices, getSiteSettings } from "@/lib/content";
import { labels, type Locale } from "@/lib/i18n/config";

type SiteFooterProps = {
  locale: Locale;
};

export async function SiteFooter({ locale }: SiteFooterProps) {
  const t = labels[locale];
  const [settings, services] = await Promise.all([
    getSiteSettings(),
    getServices(locale),
  ]);

  const companyLinks = [
    { href: `/${locale}/about`, label: t.menu.about },
    { href: `/${locale}/projects`, label: t.menu.projects },
    { href: `/${locale}/services`, label: t.menu.services },
    { href: `/${locale}/contact`, label: t.menu.contact },
  ];

  return (
    <footer className="mt-0 bg-[var(--color-deep-navy)] text-white">
      <div className="container-width grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href={`/${locale}`} className="flex items-center gap-2 text-lg font-semibold">
            <span
              className="grid h-9 w-9 place-items-center rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent-blue), var(--color-cyan-glow))",
              }}
              aria-hidden
            >
              <span className="text-sm font-bold">JS</span>
            </span>
            JSMediaSoft
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {t.footer.tagline}
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/50">
            {t.location}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            {t.footer.services}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            {services.slice(0, 6).map((service) => (
              <li key={service._id}>
                <Link
                  href={`/${locale}/services`}
                  className="transition hover:text-[var(--color-cyan-glow)]"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            {t.footer.company}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-[var(--color-cyan-glow)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            {t.footer.contact}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/85">
            <li>
              <a
                href={`mailto:${settings.email}`}
                className="transition hover:text-[var(--color-cyan-glow)]"
              >
                {settings.email}
              </a>
            </li>
            {settings.phone ? (
              <li>
                <a
                  href={`tel:${settings.phone.replace(/[^+\d]/g, "")}`}
                  className="transition hover:text-[var(--color-cyan-glow)]"
                >
                  {settings.phone}
                </a>
              </li>
            ) : null}
            <li className="text-white/60">jsmediasoft.com</li>
          </ul>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white/60">
            {t.footer.social}
          </h3>
          <ul className="mt-3 flex gap-3 text-xs">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com" },
              { label: "Instagram", href: "https://www.instagram.com" },
              { label: "GitHub", href: "https://github.com" },
            ].map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 px-3 py-1.5 text-white/80 transition hover:border-white/40 hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-width flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} JSMediaSoft. {t.allRights}
          </p>
          <p className="uppercase tracking-[0.2em]">jsmediasoft.com</p>
        </div>
      </div>
    </footer>
  );
}
