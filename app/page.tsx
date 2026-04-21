import Container from "@/components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      {/* HERO */}
      <section className="grid gap-10 lg:grid-cols-2 items-start">
        {/* Left */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border border-[#0f172a]/15 bg-white/80 flex items-center justify-center text-xs font-semibold">
              HN
            </div>
            <p className="text-sm text-gray-600">Hung Nguyen</p>
          </div>

          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Hello! I’m Hung Nguyen
          </h1>
        </div>

        {/* Right */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-[#0f172a]">
            A Data & Business Analyst based in Nashville, Tennessee.
          </h2>
          <p className="text-sm text-gray-600 max-w-md">
            Passionate about data science, machine learning, approaching business questions and decisions from 
            a data-driven point of view
          </p>

          <div className="flex gap-3">
            <button className="rounded-full bg-[#0f172a] text-[#f7f2e8] px-5 py-2 text-sm font-medium hover:bg-[#020617]">
              Connect with me
            </button>
            <button className="rounded-full border border-[#0f172a]/15 px-5 py-2 text-sm font-medium hover:bg-[#0f172a]/5">
              See my projects
            </button>
          </div>
        </div>
      </section>

      {/* 2-COLUMN SECTIONS */}
      <section className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#0f172a]/10 bg-white/85 p-6">
          <h3 className="text-lg font-semibold">Working experience</h3>
          <div className="mt-5 space-y-4">
            <ExperienceItem
              title="Teaching Assistant"
              org="University of Colorado Denver - Business School"
              dates="01/2024 – 12/2025"
            />
            <ExperienceItem
              title="Student Program Assistant"
              org="Jake Jabs Center for Entrepreneurship"
              dates="5/2024 – 8/2024"
            />
            <ExperienceItem
              title="Corporate VC & Business Analytics Extern"
              org="HP Tech Ventures"
              dates="9/2023 – 11/2023"
            />
            <ExperienceItem
              title="Research & Planning Intern"
              org="VKX. Co.Ltd.,"
              dates="2/2023 - 8/2023"
            />
            <ExperienceItem
              title="Research & Data Analytics Extern"
              org="Energy Innovation Capital"
              dates="3/2023 – 5/2023"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-[#0f172a]/10 bg-white/85 p-6">
          <h3 className="text-lg font-semibold">Education</h3>
          <div className="mt-5 space-y-4">
            <EducationItem
              title="Master of Science in Business Analytics"
              org="University of Colorado Denver"
              dates="01/2024 - 12/2025"
            />
            <EducationItem
              title="Bachelor in Business Administration"
              org="Hanoi University"
              dates="09/2019 - 12/2023"
            />
          </div>
        </div>
      </section>

      {/* I CAN HELP YOU WITH */}
      <section className="mt-14">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">I can help you with</h3>
          <button className="rounded-full border border-[#0f172a]/15 px-4 py-2 text-sm hover:bg-[#0f172a]/5">
            See my work
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <ServiceBlock
            number="01"
            title="Exploratory Data Analysis"
            description="Investigate datasets to uncover patterns, anomalies, and relationships between variables that help guide deeper analysis and business decisions."
            sideText="I explore data distributions, correlations, and trends using Python, SQL, and visualization techniques to transform raw data into meaningful insights."
            images={[
              "/images/services/boxplot.png",
              "/images/services/correlation heatmap.png",
            ]}
          />

          <ServiceBlock
            number="02"
            title="Business Data Analysis"
            description="Analyze operational and business performance data to answer stakeholder questions, identify drivers, and support practical, data-informed decisions."
            sideText="I connect business goals with the right metrics, investigate what is changing and why, and translate findings into recommendations that stakeholders can act on."
            images={[
              "/images/services/boxplot.png",
              "/images/services/correlation heatmap.png",
            ]}
          />

          <ServiceBlock
            number="03"
            title="Data Visualization & Reporting"
            description="Create clear dashboards and visual reports that simplify complex data and help teams monitor performance more effectively."
            sideText="I design stakeholder-friendly visuals and reporting views that make trends, KPIs, and outcomes easier to interpret, communicate, and use in decision-making."
            images={[
              "/images/services/boxplot.png",
              "/images/services/correlation heatmap.png",
            ]}
          />
        </div>
      </section>
    </Container>
  );
}

function ExperienceItem({
  title,
  org,
  dates,
}: {
  title: string;
  org: string;
  dates: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-[#0f172a]/10 pt-4 first:border-t-0 first:pt-0">
      <div>
        <p className="font-medium text-[#0f172a]">{title}</p>
        <p className="text-sm text-gray-600">{org}</p>
      </div>
      <p className="text-sm text-gray-600">{dates}</p>
    </div>
  );
}

function EducationItem({
  title,
  org,
  dates,
}: {
  title: string;
  org: string;
  dates: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-[#0f172a]/10 pt-4 first:border-t-0 first:pt-0">
      <div>
        <p className="font-medium text-[#0f172a]">{title}</p>
        <p className="text-sm text-gray-600">{org}</p>
      </div>
      <p className="text-sm text-gray-600">{dates}</p>
    </div>
  );
}

function ServiceBlock({
  number,
  title,
  description,
  sideText,
  images,
}: {
  number: string;
  title: string;
  description: string;
  sideText: string;
  images: string[];
}) {
  return (
    <div className="rounded-2xl border border-[#0f172a]/10 bg-white/85 p-6">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-sm text-gray-600">{number}</p>
          <h4 className="mt-2 text-lg font-semibold text-[#0f172a]">
            {title}
          </h4>
          <p className="mt-3 text-sm text-gray-600 leading-7">
            {description}
          </p>
        </div>

        <div className="max-w-md text-sm text-gray-600 leading-7">
          {sideText}
        </div>
      </div>

      <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
        {images
          .filter((img) => img && img.trim() !== "")
          .map((img, index) => (
            <GalleryCard
              key={index}
              src={img}
              alt={`${title} example ${index + 1}`}
            />
          ))}
      </div>
    </div>
  );
}

function GalleryCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="min-w-[260px] rounded-2xl border border-[#0f172a]/10 bg-white/85 overflow-hidden">
      <div className="relative h-[170px] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
