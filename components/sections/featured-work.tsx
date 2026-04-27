import Image from "next/image";

import { getProjects } from "@/lib/content";
import { labels, type Locale } from "@/lib/i18n/config";

type FeaturedWorkProps = {
  locale: Locale;
};

export async function FeaturedWork({ locale }: FeaturedWorkProps) {
  const projects = await getProjects(locale);
  const t = labels[locale];

  return (
    <section className="section bg-white">
      <div className="container-width">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="eyebrow eyebrow-dark">{t.featuredWork.eyebrow}</span>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-[var(--color-primary-navy)] md:text-5xl">
              {t.featuredWork.title}
            </h2>
          </div>
          <p className="text-base text-[var(--color-muted)] lg:text-lg">
            {t.featuredWork.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project._id}
              className={`card-hover group overflow-hidden rounded-3xl border border-[var(--color-border-light)] bg-white shadow-[0_30px_80px_-50px_rgba(10,27,51,0.4)] ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {project.coverImage ? (
                <div
                  className={`relative w-full overflow-hidden ${
                    index === 0 ? "h-[360px]" : "h-[260px]"
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
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                        {project.category ?? project.client}
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold lg:text-3xl">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden rounded-full border border-white/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/10 sm:inline-flex"
                    >
                      {t.featuredWork.liveLink}
                    </a>
                  </div>
                </div>
              ) : null}

              <div className="grid gap-6 p-7 md:grid-cols-[1fr_1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {project.client}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-[var(--color-primary-navy)]">
                    {project.solution}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent-blue)]">
                    {t.featuredWork.result}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-dark)]/85">
                    {project.results}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2 text-xs">
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
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent-blue)] transition hover:gap-2"
                  >
                    {t.featuredWork.liveLink}
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
