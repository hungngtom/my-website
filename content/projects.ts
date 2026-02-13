export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  tools: string[];
  timeframe: string;


  // Case study sections
  problem: string;
  stakeholders?: string[];
  data: string;
  approach: string[];
  deliverables?: string[];
  results: string[];
  impact: string[];
  nextSteps?: string[];

  links?: {
    github?: string;
    dashboard?: string;
    slides?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "forecast-accuracy-improvement",
    title: "Forecast Accuracy Improvement",
    summary: "Investigated drivers of forecast error and built a repeatable accuracy reporting workflow.",
    tags: ["SQL", "Power BI", "Excel", "Forecasting"],
    tools: ["SQL", "Power BI", "Excel"],
    timeframe: "2025",

    problem:
      "Leadership needed to understand forecast accuracy by buyer / category and prioritize where to intervene.",
    stakeholders: ["Supply Chain", "Finance", "Category Management"],
    data:
      "Forecast vs. actuals extracts, product hierarchy, and calendar periods. Joined across buyer → P-group → material.",
    approach: [
      "Built a clean grain definition (buyer, category, material, period).",
      "Created metrics: MAPE, bias, and impact-weighted accuracy.",
      "Designed a Power BI report with drill-down and exception flags.",
      "Documented refresh steps and data validation checks."
    ],
    deliverables: ["Power BI dashboard", "SQL queries / views", "Metric definitions"],
    results: [
      "Identified top contributors to error by category and material.",
      "Standardized a weekly accuracy report for stakeholders."
    ],
    impact: [
      "Improved decision speed by giving teams a single source of truth for accuracy.",
      "Enabled targeted actions on highest-impact items."
    ],
    nextSteps: ["Add automated alerts when accuracy drops below threshold."],
    links: {
      github: "https://github.com/yourname/forecast-project",
      dashboard: "https://app.powerbi.com/..."
    }
  },
];
