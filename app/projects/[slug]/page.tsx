import Container from "@/components/Container";
import { projects } from "@/content/projects";
import Tag from "@/components/Tag";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <Container>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-2 text-gray-600">{project.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>

        <div className="mt-4 text-sm text-gray-600 flex flex-wrap gap-x-6 gap-y-2">
          {project.role && <div><span className="font-medium">Role:</span> {project.role}</div>}
          {project.timeframe && <div><span className="font-medium">Time:</span> {project.timeframe}</div>}
        </div>

        {project.links && (
          <div className="mt-4 flex gap-4 text-sm">
            {project.links.github && (
              <a className="underline underline-offset-4" href={project.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {project.links.dashboard && (
              <a className="underline underline-offset-4" href={project.links.dashboard} target="_blank" rel="noreferrer">
                Dashboard
              </a>
            )}
            {project.links.slides && (
              <a className="underline underline-offset-4" href={project.links.slides} target="_blank" rel="noreferrer">
                Slides
              </a>
            )}
          </div>
        )}
      </header>

      <div className="space-y-10">
        <Section title="Business Problem">
          <p className="text-gray-700">{project.problem}</p>
        </Section>

        {project.stakeholders?.length ? (
          <Section title="Stakeholders">
            <ul className="list-disc pl-5 text-gray-700">
              {project.stakeholders.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </Section>
        ) : null}

        <Section title="Data">
          <p className="text-gray-700">{project.data}</p>
        </Section>

        <Section title="Approach">
          <ul className="list-disc pl-5 text-gray-700">
            {project.approach.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </Section>

        {project.deliverables?.length ? (
          <Section title="Deliverables">
            <ul className="list-disc pl-5 text-gray-700">
              {project.deliverables.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </Section>
        ) : null}

        <Section title="Results">
          <ul className="list-disc pl-5 text-gray-700">
            {project.results.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </Section>

        <Section title="Impact">
          <ul className="list-disc pl-5 text-gray-700">
            {project.impact.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </Section>

        {project.nextSteps?.length ? (
          <Section title="Next Steps">
            <ul className="list-disc pl-5 text-gray-700">
              {project.nextSteps.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </Section>
        ) : null}
      </div>
    </Container>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}
