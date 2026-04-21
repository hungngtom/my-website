import Link from "next/link";
import Tag from "@/components/Tag";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
    project: Project;
    variant?: "wide" | "compact";
};

export default function ProjectCard({ project, variant = "compact" }: ProjectCardProps) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-2xl border border-[#0f172a]/10 bg-white/80 p-5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-shadow">
      {children}
    </div>
  );

  if (variant === "wide") {
    return (
      <Wrapper>
        <div className="flex flex-col h-full">
          {/* Top: thumbnail / title */}
          <div className="flex-1 flex flex-col gap-3">
            {project.thumbnailUrl && (
              <div className="overflow-hidden rounded-xl border border-[#0f172a]/5 bg-gray-100 aspect-[16/9] mb-1">
                {/* You can replace with next/image later */}
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
                />
              </div>
            )}

            <div className="flex items-baseline justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-[#0f172a]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:underline"
                  >
                    {project.title}
                  </Link>
                </h3>
                {(project.company || project.dateLabel) && (
                  <p className="text-xs text-gray-600 mt-1">
                    {project.company}
                    {project.company && project.dateLabel ? " • " : ""}
                    {project.dateLabel}
                  </p>
                )}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="text-xs underline underline-offset-4 text-gray-700"
              >
                View detail
              </Link>
            </div>

            <p className="text-sm text-gray-700 mt-2">
              {project.summary}
            </p>
          </div>

          {/* Bottom: tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }

  // compact variant (for /projects page)
  return (
    <Wrapper>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-[#0f172a]">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:underline"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-gray-700">{project.summary}</p>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs underline underline-offset-4 text-gray-700"
        >
          View
        </Link> 
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </Wrapper>
  );
}