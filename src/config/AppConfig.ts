const appConfig = {
  name: "Rajesh Sharma",
  title: "FullStack Developer & UI/UX Designer",
  location: "Phoenix, Arizona, USA",
  email: "rajesh@example.com",
  phone: "+1-555-123-4567",
  website: "https://raajeshsharma.github.io",
  summary: "Experienced FullStack Developer and UI/UX Designer with 16+ years in web and app design, passionate about building modern, user-centric digital products.",
  social: [
    { label: "GitHub", url: "https://github.com/raajeshsharma" },
    { label: "LinkedIn", url: "https://linkedin.com/in/raajeshsharma" },
    { label: "Twitter", url: "https://twitter.com/rsharma33" } 
  ],
  sections: {
    hero: true,
    about: true,
    experience: true,
    skills: true,
    projects: true,
    certifications: true,
    qualification: true,
    contact: true
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
