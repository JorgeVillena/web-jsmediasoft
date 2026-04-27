import { notFound } from "next/navigation";

import { ByTheNumbers } from "@/components/sections/by-the-numbers";
import { ContactCta } from "@/components/sections/contact-cta";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { InsightsTeaser } from "@/components/sections/insights-teaser";
import { LogosMarquee } from "@/components/sections/logos-marquee";
import { Process } from "@/components/sections/process";
import { ServicesStrip } from "@/components/sections/services-strip";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";

type Params = Promise<{ locale: string }>;

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedHome({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;

  return (
    <>
      <Hero locale={typedLocale} />
      <ServicesStrip locale={typedLocale} />
      <FeaturedWork locale={typedLocale} />
      <ByTheNumbers locale={typedLocale} />
      <Process locale={typedLocale} />
      <LogosMarquee locale={typedLocale} />
      <InsightsTeaser locale={typedLocale} />
      <ContactCta locale={typedLocale} />
    </>
  );
}
