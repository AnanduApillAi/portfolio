export type Experience = {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: string;
  description: string;
};

// Shared by the home page Work Experience section and the About page.
export const experiences: Experience[] = [
  {
    period: "2025 - Present",
    role: "React Js Developer",
    company: "Linnk Group India",
    companyUrl: "https://www.linnk.com/linnk-group-india/",
    type: "Onsite",
    description: "Building SaaS Platforms."
  },
  {
    period: "2023 - 2025",
    role: "Lead Front End Developer",
    company: "Extravelmoney",
    companyUrl: "https://www.extravelmoney.com/",
    type: "Onsite",
    description: "Building Extravelmoney website and internal tools."
  },
  {
    period: "2023 - 2025",
    role: "Front-End Developer",
    company: "Veeble",
    companyUrl: "https://www.veeble.com/",
    type: "Consulting",
    description: "Reworking the Veeble website."
  },
  {
    period: "2022 - 2023",
    role: "Front End Developer",
    company: "Tapclone",
    type: "Onsite",
    description: "Building websites and dashboards for clients."
  },
  {
    period: "2019 - Present",
    role: "Freelance Web Developer",
    company: "Freelance",
    type: "Remote",
    description: "Building websites and dashboards for clients around the world."
  }
];
