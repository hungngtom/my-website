import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <header className="mb-10">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-2 text-gray-600">
          A quick overview of who I am, my background and my interests in data science, machine learning.
        </p>
      </header>

      <section className="rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">Hi, I’m Hung.</h2>
        <p className="mt-3 text-gray-700 leading-7">
          I’m an aspiring data/business analyst. I enjoy work that sits at the intersection of business context, analytical rigor, and communication.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">What I’m good at</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
              <li>Problem framing and metric definition</li>
              <li>SQL analysis and data validation</li>
              <li>Dashboarding (Power BI/Tableau) and storytelling</li>
              <li>Process improvement and stakeholder alignment</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">What I’m looking for</h3>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
              <li>Business Analyst / Data Analyst roles</li>
              <li>Teams that value collaboration and measurable impact</li>
              <li>Opportunities to build scalable project</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex gap-4 text-sm">
          <a className="underline underline-offset-4" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="underline underline-offset-4" href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="underline underline-offset-4" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </section>
    </Container>
  );
}
