export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO-ish for easy sorting
  summary: string;
  tags: string[];
  content: {
    intro: string;
    sections: { heading: string; body: string[] }[];
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-i-approach-a-business-analysis",
    title: "How I Approach a Business Analysis Case",
    date: "2026-02-01",
    summary: "A repeatable framework: problem → data → analysis → decision → impact.",
    tags: ["Business Analysis", "Framework", "Communication"],
    content: {
      intro:
        "When I start a BA or analytics request, I follow a simple structure to stay aligned with stakeholders and deliver results quickly.",
      sections: [
        {
          heading: "1) Clarify the decision",
          body: ["What decision will be made?", "What does success look like?"],
        },
        {
          heading: "2) Define metrics & constraints",
          body: ["Agree on KPIs and definitions early.", "Call out data limitations."],
        },
      ],
    },
  },
];