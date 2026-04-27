import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactCta } from "@/components/sections/contact-cta";
import { getProjects } from "@/lib/content";
import { isLocale, labels, locales, type Locale } from "@/lib/i18n/config";

type Params = Promise<{ locale: string }>;

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function ProjectsPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const typedLocale = locale as Locale;
  const projects = await getProjects(typedLocale);
  const t = labels[typedLocale];

  return (
    <>
      <section className="relative overflow-hidden text-white hero-grid-bg">
        <div className="absolute inset-0 dot-grid opacity-40" aria-hidden />
        <div className="container-width relative z-10 py-24 md:py-28">
          <span className="eyebrow">{t.menu.projects}</span>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight">
            <span className="gradient-text">{t.pages.projects.title}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            {t.pages.projects.subtitle}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-width">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project._id}
                className={`card-hover group flex flex-col overflow-hidden rounded-3xl border border-[var(--color-border-light)] bg-white shadow-[0_30px_80px_-50px_rgba(10,27,51,0.4)] ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {project.coverImage ? (
                  <div
                    className={`relative w-full overflow-hidden ${
                      index === 0 ? "h-[420px]" : "h-[300px]"
                    }`}
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      priority={index === 0}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--color-primary-navy)]/85 to-transparent" />
                    <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4 text-white">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                          {project.category ?? project.client}
                        </p>
                        <h2 className="mt-1 text-2xl font-semibold lg:text-3xl">
                          {project.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="grid flex-1 gap-6 p-7 md:grid-cols-[1fr_1fr]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {locale === "en" ? "Challenge" : "Desafío"}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dark)]/85">
                      {project.challenge}
                    </p>
                    <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {locale === "en" ? "Solution" : "Solución"}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dark)]/85">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent-blue)]">
                      {locale === "en" ? "Outcome" : "Resultado"}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dark)]/85">
                      {project.results}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2 text-xs">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-[var(--color-border-light)] px-2.5 py-1 text-[var(--color-muted)]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent-blue)] transition hover:gap-2"
                    >
                      {t.pages.projects.visit}
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="text-base text-[var(--color-muted)]">
              {locale === "en"
                ? "Want to be the next case study?"
                : "¿Quieres ser el próximo caso de estudio?"}
            </p>
            <Link href={`/${locale}/contact`} className="btn-primary">
              {t.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactCta locale={typedLocale} />
    </>
  );
}
