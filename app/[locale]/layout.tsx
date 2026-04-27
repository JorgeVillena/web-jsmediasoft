import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

type Params = Promise<{ locale: string }>;

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const isSpanish = locale === "es";

  return {
    title: isSpanish
      ? "Consultora digital — Web, Shopify y modernización"
      : "Digital consultancy — Web, Shopify and modernization",
    description: isSpanish
      ? "JSMediaSoft: consultora digital basada en EE.UU. (Omaha). Desarrollo web, e-commerce, Shopify y modernización de sistemas."
      : "JSMediaSoft: US-based digital consultancy in Omaha. Web development, e-commerce, Shopify and legacy modernization.",
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", es: "/es" },
    },
    openGraph: {
      url: `/${locale}`,
      locale: isSpanish ? "es_US" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <SiteHeader locale={locale as Locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale as Locale} />
    </>
  );
}
