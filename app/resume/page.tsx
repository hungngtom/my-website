import Container from "@/components/Container";
import Timeline, { TimelineItem } from "@/components/Timeline";

const education: TimelineItem[] = [
  {
    title: "Master of Science in Business Analytics",
    org: "University of Colorado Denver",
    location: "Denver, CO",
    dateRange: "01/2024 – 12/2025",
    bullets: [
      "Relevant coursework: Data Analytics, Database Management, Regression Analysis, Machine Learning, Predictive Analytics",
      "Graduated with 3.8 GPA"
    ],
  },

  {
    title: "Bachelor of Business Administration",
    org: "Hanoi University",
    location: "Hanoi, Vietnam",
    dateRange: "09/2019 - 12/2023",
    bullets: [
      "Relevant coursework: Probability and Statistics, Business and Economics Statistics, Corporate Finance, Project Management",
      "Graduated with distinction",
    ],
  },
];

const experience: TimelineItem[] = [
  {
    title: "Teaching Assistant",
    org: "University of Colorado, Denver",
    location: "Denver, CO",
    dateRange: "01/2024 – 12/2025",
    bullets: [
      "Mentored undergraduate and graduate students in data analytics, statistical modeling, regression analysis.",
      "Provided technical guidance on machine learning concepts, data interpretation, and analytical problem-solving.",
      "Reviewed student work involving regression models, SQL queries, and data pipelines.",
      "Collaborated with instructors to improve course materials, enhancing technical understanding and application.",
    ],
  },

  {
    title: "Student Program Assistant",
    org: "Jake Jabs Center for Entrepreneurship",
    location: "Denver, CO",
    dateRange: "05/2024 - 08/2024",
    bullets: [
      "Supported planning and execution of weekly programs, coordinating schedules, logistics, and communications.",
      "Tracked and reported program performance metrics, supporting the evaluation of incubator initiative funded by EDA grants.",
      "Maintained organized records, reports, and documentation, ensuring data accuracy and audit readiness.",
      "Supported and facilitated seminars for 9 early-stage business ventures, helping improve participant engagement.",
      "Served as a liaison between staff, speakers, and participants, improving communication and program efficiency.",
    ],
  },

  {
    title: "Corporate VC & Business Analytics Extern",
    org: "HP Tech Ventures",
    location: "Remote",
    dateRange: "09/2023 - 11/2023",
    bullets: [
      "Cleaned and prepared AI image generation market players data, improving data quality for research and report purposes.",
      "Conducted market and competitive analysis, delivering 3 investment briefs with data-backed insights.",
      "Managed analysis deliverables within defined timelines, adapting to feedback from stakeholders.",
      "Documented methodologies, and findings to support decision transparency and knowledge sharing.",
    ]
  },

  {
    title: "Research & Data Analytics Extern",
    org: "Energy Innovation Capital",
    location: "Remote",
    dateRange: "03/2023 - 05/2023",
    bullets: [
      "Analyzed 20 early-stage startups within the Carbon Capture, Utilization and Storage sector, identifying 5 investment targets.",
      "Conducted structured due diligence using financial, operational, and market data to assess scalability and growth potential.",
      "Conducted structured due diligence using financial, operational, and market data to assess scalability and growth potential.",
      "Developed investment memos and presentation decks, delivering data-driven insights to support strategic decision-making.",
    ]
  },

  {
    title: "Research and Planning Intern",
    org: "VKX Co.Ltd.",
    location: "Hanoi, Vietnam",
    dateRange: "02/2023 - 08/2023",
    bullets: [
      "Supported outreach initiatives by collecting, organizing, and analyzing market and client data.",
      "Automated parts of client engagement processes, improving efficiency, contributing to the acquisition of 2 new clients.",
      "Coordinated with internal teams to align research goals with business needs.",
      "Assisted with cross-departmental planning and communication to fulfill orders and produce high-quality deliverables.",
      "Performed daily administrative tasks such as data maintenance and document organization to support operations.",
    ]
  }

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

       <section>
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <Timeline items={education} />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <Timeline items={experience} />
      </section>
    </Container>
  );
}
