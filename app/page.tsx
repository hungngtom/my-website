import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <section className="py-8">
        <h1 className="text-4xl font-bold mb-4 text-black">Hung Nguyen</h1>
        <p className="mt-3 text-lg text-gray-600">
          Data & Business Analyst | Aspiring Data Scientist | Tech & AI Enthusiast
          The data whisperer. What stories are the data and metrics trying to tell? I’m on a mission to find out and share it in a way that drives impact.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm" href="/projects">
            View Projects
          </Link>
          <Link className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm" href="/resume">
            Resume
          </Link>
          <Link className="rounded-xl border px-4 py-2 text-sm hover:shadow-sm" href="/blog">
            Blog
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold">Take a look at the projects I have done</h2>
          <p className="mt-2 text-gray-600">
            The business case studies, dashboards, and write-ups that focus on impact and decision-making.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="font-semibold">My focus</h2>
          <p className="mt-2 text-gray-600">
            SQL-driven analysis, forecasting/variance analysis, predictive modeling, ETL pipelines, automation and AI
          </p>
        </div>
      </section>
    </Container>
  );
}
