import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-gray-600">
          Check out my projects! They are focused on common business problems.
          Each project includes a detailed problem, data, analysis, and results. I also include links to GitHub repos and dashboards when available.
        </p>
      </header>

      <div className="grid gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Container>
  );
}
