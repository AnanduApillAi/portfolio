export type Project = {
  title: string;
  description: string;
  liveLink: string;
  github: string;
};

// Selected work shown on the home page, in display order.
export const projects: Project[] = [
  {
    title: "Wall of Love",
    description: "Testimonials collected by email, sorted and scored by AI",
    liveLink: "https://wall-of-love.anandu.dev",
    github: "https://github.com/AnanduApillAi/postmark-challenge",
  },
  {
    title: "Form Builder",
    description: "Drag-and-drop KendoReact form builder with an AI assistant",
    liveLink: "https://kendo-forms.vercel.app",
    github: "https://github.com/AnanduApillAi/kendo-forms",
  },
  {
    title: "Codex",
    description: "Offline-first code snippet manager with live previews",
    liveLink: "https://codex.anandu.dev",
    github: "https://github.com/AnanduApillAi/codex",
  },
];
