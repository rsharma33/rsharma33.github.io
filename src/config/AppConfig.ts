const appConfig = {
  name: "Rajesh Sharma",
  title: "Senior Software Engineer",
  location: "Helsingborg, Skåne County, Sweden",
  email: "raajeshsh85+portfolio@gmail.com",
  phone: "+1-555-123-4567",
  website: "https://raajeshsharma.github.io",
  summary: "Senior Software Engineer at Capgemini with deep experience in front-end architecture and full-stack delivery. I build React and Next.js applications on Node, Express and Azure, with a strong focus on cross-browser compatibility, accessibility and performance tuning.",
  social: [
    { label: "GitHub", url: "https://github.com/raajeshsharma" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/raajeshsharma/" }
  ],
  sections: {
    heroSection: true,
    aboutSection: true,
    experienceSection: true,
    skillsSection: true,
    skillsTabbedSection: false,
    projectsSection: true,
    githubProjectsSection: false,
    certificationSection: true,
    qualificationSection: true
  },
  theme: {
    defaultMode:  "light", // 'light', 'dark', or 'system'
    primaryColor: "#d32f2f",
    secondaryColor: "#18181b",
    background: "#faf4f1"
  }
};

// Predefined heights to mimic the provided masonry structure
const masonryHeights = [
  340,
  200,
  280,
  450
];

export { appConfig, masonryHeights };
