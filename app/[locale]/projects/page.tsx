import Image from "next/image";
import { notFound } from "next/navigation";

import { getProjects } from "@/lib/content";
import { isLocale } from "@/lib/i18n/config";

type Params = Promise<{ locale: string }>;

export default async function ProjectsPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const projects = await getProjects(locale);
  const isSpanish = locale === "es";

  return (
    <section className="container-width py-14">
      <h1 className="text-4xl font-bold text-[var(--color-primary-navy)]">
        {isSpanish ? "Trabajos realizados" : "Delivered projects"}
      </h1>
      <p className="mt-2 text-[var(--color-muted)]">
        {isSpanish
          ? "Proyectos reales ejecutados por JSMediaSoft."
          : "Real websites designed and developed by JSMediaSoft."}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project._id} className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-white">
            {project.coverImage ? (
              <Image
                src={project.coverImage}
                alt={project.title}
                width={1200}
                height={700}
                className="h-56 w-full object-cover"
              />
            ) : null}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[var(--color-primary-navy)]">{project.title}</h2>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{project.challenge}</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{project.solution}</p>
              <p className="mt-3 text-sm font-medium text-[var(--color-secondary-navy)]">
                {project.technologies.join(" · ")}
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent-blue)]"
              >
                {isSpanish ? "Abrir proyecto" : "Open project"} {"->"}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
