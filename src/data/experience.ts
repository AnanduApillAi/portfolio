export type Experience = {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: string;
  description: string;
};

// Shown in the Work section of the home page. Keep in sync with the resume PDF.
export const experiences: Experience[] = [
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    company: "Linnk Group India",
    companyUrl: "https://www.linnk.com/linnk-group-india/",
    type: "Onsite",
    description: "Building an AI-powered SaaS platform."
  },
  {
    period: "2023 - 2025",
    role: "Frontend Developer",
    company: "Extravelmoney",
    companyUrl: "https://www.extravelmoney.com/",
    type: "Onsite",
    description: "Building Extravelmoney website and internal tools."
  },
  {
    period: "2023 - 2025",
    role: "Frontend Developer (Consultant)",
    company: "Veeble",
    companyUrl: "https://www.veeble.com/",
    type: "Consulting",
    description: "Reworking the Veeble website."
  },
  {
    period: "2022 - 2023",
    role: "React.js Developer",
    company: "Tapclone",
    type: "Onsite",
    description: "Building websites and dashboards for clients."
  }
];
