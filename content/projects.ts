export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  tools?: string[];
  timeframe?: string;
  thumbnailUrl?: string;

  role?: string;
  company?: string;
  dateLabel?: string;

  // Case study sections
  problem: string;
  stakeholders?: string[];
  data: string;
  approach: string[];
  deliverables?: string[];
  results: string[];
  nextSteps?: string[];

  links?: {
    github?: string;
    dashboard?: string;
    slides?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "retail-sales-customer-analytics-dashboard",
    title: "Retail Sales and Customer Analytics Dashboard",
    summary: "Investigated business performance, customer behavior, and profitability drivers for a retail store, and built a dashboard for visualization. The project exemplifies a standard reporting workflow.",
    tags: ["Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "Business Analysis"],
    tools: ["SQL", "Power BI", "Python", "Matplotlib/Seaborn"],
    timeframe: "Updated 03/2026",

    problem:
      "Leadership needed to understand the overall business performance trends, what factors are driving revenue and profit, customer behavior etc and prioritize where to focus their efforts to improve performance markers.",
    data:
      "superstore.csv - sourced from Kaggle",
    approach: [
      "The dataset was evaluated for missing values, duplicate records, inconsistent formatting, and potential anomalies.",
      "Data was cleaned by standardizing formatting, removing duplicates, filtering invalid transactions, and correcting data types.",
      "Exploratory analysis was conducted to evaluate revenue trends, profitability drivers, customer behavior, and regional performance.",
      "An interactive Power BI dashboard was created to visualize key performance metrics and insights.",
    ],
    deliverables: ["Cleaned dataset", "Jupyter notebook", "Power BI dashboard"],
    results: [
      "Revenue is concentrated among a relatively small group of high-value customers.",
      "Higher discount levels are associated with lower profit margins.",
      "Certain states show high customer counts but lower revenue per customer.",
      "Customer retention opportunities exist due to a large share of one-time buyers.",
    ],
    nextSteps: ["Customer lifetime value modeling", "Customer segmentation clustering", "Predictive sales forecasting"],
    links: {
      github: "https://github.com/hungngtom/superstore-business-analysis",
      dashboard: "https://app.powerbi.com/..."
    }
  },

  {
    slug: "customer-churn-analysis-predictive-modeling",
    title: "Customer Churn Analysis and Predictive Modeling",
    summary: "Analyzed 10K+ customer records and developed churn prediction models using Logistic Regression, Random Forest, and Gradient Boosting with 80–87% accuracy.",
    tags: ["Exploratory Data Analysis", "Data Visualization", "Machine Learning", "Predictive Modeling"],
    tools: ["Python", "Matplotlib/Seaborn", "Scikit-learn", "Logistic Regression", "Random Forest", "Gradient Boosting"],
    timeframe: "05/2025",

    problem:
      "Customer churn directly affects revenue and retention strategy, so the goal was to identify the strongest churn drivers and build a model to support proactive retention efforts.",
    data:
      "10K+ customer records containing demographic, behavioral, and geographic variables used to analyze churn patterns and train predictive models.",
    approach: [
      "Performed exploratory data analysis and statistical testing to identify important churn-related factors.",
      "Built an end-to-end machine learning pipeline using Logistic Regression, Random Forest, and Gradient Boosting.",
      "Engineered features and optimized performance through cross-validation and hyperparameter tuning.",
      "Compared model results and translated outputs into business recommendations.",
    ],
    deliverables: [
      "EDA and statistical testing outputs",
      "Churn prediction models",
      "Model comparison summary",
      "Findings documentation",
    ],
    results: [
      "Identified top behavioral and geographic drivers of churn: age and number of products",
      "Achieved 80–87% predictive accuracy across tested models.",
      "Produced interpretable insights to support customer retention actions.",
    ],
    nextSteps: [
      "Incorporate probability-based customer risk segmentation.",
      "Hyperparameter tuning with GridSearchCV or Optuna.",
      "Include class imbalance techniques such as SMOTE.", 
      "Deploy model outputs into a dashboard for ongoing monitoring.",
    ],
    links: {
      github: "https://github.com/hungngtom/bank-churn-prediction",
    }
  },
];
