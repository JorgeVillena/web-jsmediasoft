import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getProjects, getServices, getSiteSettings } from "@/lib/content";
import { isLocale, labels } from "@/lib/i18n/config";

type Params = Promise<{ locale: string }>;

export default async function LocalizedHome({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const [settings, services, projects] = await Promise.all([
    getSiteSettings(),
    getServices(locale),
    getProjects(locale),
  ]);

  const t = labels[locale];
  const isSpanish = locale === "es";

  return (
    <div>
      <section className="bg-gradient-to-br from-[var(--color-primary-navy)] to-[var(--color-secondary-navy)] text-white">
        <div className="container-width grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-blue-200">JSMediaSoft</p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {isSpanish
                ? "Construimos soluciones web elegantes para empresas que quieren escalar"
                : "We build elegant web solutions for companies ready to scale"}
            </h1>
            <p className="mt-5 max-w-xl text-blue-100">{isSpanish ? settings.taglineEs : settings.taglineEn}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/contact`}
                className="rounded-lg bg-white px-5 py-3 font-semibold text-[var(--color-primary-navy)] transition hover:-translate-y-0.5"
              >
                {t.cta}
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="rounded-lg border border-blue-200 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {t.menu.projects}
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-200/30 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">
              {isSpanish ? "Servicios principales" : "Core services"}
            </h2>
            <ul className="mt-4 space-y-3 text-blue-100">
              {services.slice(0, 5).map((service) => (
                <li key={service._id} className="rounded-lg border border-blue-200/20 px-3 py-2">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-width py-16">
        <h2 className="text-3xl font-bold text-[var(--color-primary-navy)]">
          {isSpanish ? "Trabajos realizados" : "Recent projects"}
        </h2>
        <p className="mt-2 text-[var(--color-muted)]">
          {isSpanish
            ? "Experiencias reales desarrolladas por nuestro equipo."
            : "Real-world websites delivered by our team."}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project._id} className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-sm">
              {project.coverImage ? (
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="h-44 w-full object-cover"
                />
              ) : null}
              <div className="p-5">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{project.solution}</p>
                <a
                  href={project.liveUrl}
                  className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent-blue)]"
                  target="_blank"
                  rel="noreferrer"
                >
                  {isSpanish ? "Visitar sitio" : "Visit website"} {"->"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
