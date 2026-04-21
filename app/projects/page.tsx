import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <header className="mb-8">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mt-2 text-gray-700 max-w-2xl">
          Check out my projects! They are focused on common business problems.
          Each project comes with a full description. I also include links to GitHub repos if available.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Container>
  );
}
