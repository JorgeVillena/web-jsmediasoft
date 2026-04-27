import Link from "next/link";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { labels, type Locale } from "@/lib/i18n/config";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const t = labels[locale];

  const navItems = [
    { href: `/${locale}`, label: t.menu.home },
    { href: `/${locale}/services`, label: t.menu.services },
    { href: `/${locale}/projects`, label: t.menu.projects },
    { href: `/${locale}/about`, label: t.menu.about },
    { href: `/${locale}/contact`, label: t.menu.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-light)] bg-white/85 backdrop-blur-xl">
      <div className="container-width flex items-center justify-between gap-6 py-4">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-[var(--color-primary-navy)]"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-lg text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent-blue), var(--color-cyan-glow))",
              boxShadow: "0 8px 20px -10px rgba(37, 99, 235, 0.7)",
            }}
            aria-hidden
          >
            <span className="text-sm font-bold">JS</span>
          </span>
          <span>
            JSMedia<span className="text-[var(--color-accent-blue)]">Soft</span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 text-sm font-medium text-[var(--color-text-dark)]/80 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--color-primary-navy)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher currentLocale={locale} variant="dark" />
          <Link href={`/${locale}/contact`} className="btn-primary hidden sm:inline-flex">
            {t.cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
