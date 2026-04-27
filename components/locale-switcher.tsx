"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { labels, locales, type Locale } from "@/lib/i18n/config";

type LocaleSwitcherProps = {
  currentLocale: Locale;
  variant?: "light" | "dark";
};

export function LocaleSwitcher({ currentLocale, variant = "dark" }: LocaleSwitcherProps) {
  const pathname = usePathname() ?? `/${currentLocale}`;
  const t = labels[currentLocale];

  const replaceLocale = (target: Locale) => {
    const segments = pathname.split("/");
    if (segments[1] && (locales as readonly string[]).includes(segments[1])) {
      segments[1] = target;
    } else {
      segments.splice(1, 0, target);
    }
    const next = segments.join("/") || `/${target}`;
    return next;
  };

  const baseClass =
    variant === "light"
      ? "border-white/20 text-white/80"
      : "border-[var(--color-border-light)] text-[var(--color-primary-navy)]";

  const activeClass =
    variant === "light"
      ? "bg-white text-[var(--color-primary-navy)]"
      : "bg-[var(--color-primary-navy)] text-white";

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border px-1 py-1 text-xs font-semibold ${baseClass}`}
      aria-label={t.languageSwitcher.label}
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={replaceLocale(locale)}
            className={`rounded-full px-2.5 py-1 uppercase tracking-wider transition ${
              isActive ? activeClass : "hover:opacity-80"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {t.languageSwitcher[locale]}
          </Link>
        );
      })}
    </div>
  );
}
