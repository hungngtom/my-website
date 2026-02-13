import Container from "@/components/Container";
import Timeline, { TimelineItem } from "@/components/Timeline";

const experience: TimelineItem[] = [
  {
    title: "Data / Business Analyst (Example Role)",
    org: "Company Name",
    location: "City, ST",
    dateRange: "2025 – Present",
    bullets: [
      "Built KPI dashboards to support leadership decisions across operations.",
      "Automated recurring reporting using SQL + BI, reducing manual work.",
      "Partnered with stakeholders to define metrics and requirements."
    ],
  },
];

const education: TimelineItem[] = [
  {
    title: "Master’s Degree (Your Program)",
    org: "University of Colorado Denver",
    location: "Denver, CO",
    dateRange: "Year – Year",
    bullets: [
      "Relevant coursework: SQL, data visualization, analytics, statistics.",
      "Capstone: end-to-end analysis with executive-ready storytelling."
    ],
  },
];

export default function ResumePage() {
  return (
    <Container>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Resume</h1>
        <p className="mt-2 text-gray-600">
          Download a PDF version and view a condensed timeline below.
        </p>

        <div className="mt-4 flex gap-3">
          <a
            href="/resume.pdf"
            className="inline-flex items-center rounded-xl border px-4 py-2 text-sm hover:shadow-sm"
            download
          >
            Download Resume (PDF)
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center rounded-xl border px-4 py-2 text-sm hover:shadow-sm"
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <Timeline items={experience} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <Timeline items={education} />
      </section>
    </Container>
  );
}
