export const profile = {
  name: "Krishiv Modi",
  role: "AI/ML & Full-Stack Developer",
  tagline: "B.Tech IT student specializing in Artificial Intelligence, Machine Learning, and building decoupled full-stack products.",
  location: "Changa, Gujarat, India",
  email: "krishivmodi21@gmail.com",
  phone: "+91 8511851167",
  github: "https://github.com/krishiv2006",
  linkedin: "https://linkedin.com/in/krishiv-modi-2ba42b2bb",
};

export const skills = {
  Languages: ["C", "C++", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  "Frameworks / Libraries": ["React 19", "Next.js", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS", "Framer Motion", "Vite"],
  "Backend / Database": ["PHP", "MySQL", "MongoDB"],
  "Deployment & DevOps": ["Vercel", "Render", "Git", "GitHub", "VS Code"],
  "APIs & Integrations": ["iTunes Search API", "Apple Music RSS", "youtube-dl-exec", "Lyrics APIs"],
};

export const projects = [
  {
    id: "supply-chain-forecasting",
    name: "Supply Chain Demand Forecasting",
    tag: "Machine Learning",
    file: "demand-forecasting.ipynb",
    lang: "Python",
    color: "amber",
    description:
      "An AI-powered forecasting project that predicts supply chain demand to optimize inventory using historical data and ML models.",
    bullets: [
      "Data preprocessing and feature engineering for time-series demand patterns",
      "Model training and evaluation using Python and Jupyter Notebooks",
      "Analysis of historical trends to detect seasonality and optimize stock management",
    ],
    stack: ["Python", "Jupyter Notebook", "Pandas", "Scikit-Learn"],
    github: "https://github.com/krishiv2006/Supply-chain-demand-forecasting",
    status: "shipped",
  },
  {
    id: "sonic-immersive",
    name: "The Sonic Immersive",
    tag: "Music Player",
    file: "sonic-immersive.tsx",
    lang: "TypeScript",
    color: "amber",
    description:
      "A premium Hi-Fi music player with a decoupled full-stack architecture — frontend on Vercel, backend API on Render, zero API key required.",
    bullets: [
      "Full-length audio streaming via a custom YouTube-DL backend proxy with zero-lag preloading",
      "Multi-provider lyrics lookup with dynamic fallback to Google Search",
      "Live track search & cover art via the iTunes Search API",
      "Trending tracks pulled from Apple Music's Most Played RSS feed",
      "Shuffle, repeat, and full queue management — responsive across mobile, tablet, desktop",
    ],
    stack: ["React 19", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/krishiv2006",
    demo: "#",
    status: "live",
  },
  {
    id: "resume-analyzer",
    name: "Resume Analyzer & Enhancer",
    tag: "Web Application",
    file: "resume-analyzer.php",
    lang: "PHP",
    color: "teal",
    description:
      "Analyzes uploaded resumes, identifies technology gaps, and surfaces the skills a candidate profile is missing.",
    bullets: [
      "Resume parsing to extract and evaluate technical skills",
      "Responsive Bootstrap + custom CSS frontend for a seamless UX",
      "Git & GitHub workflows for version control and collaboration",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    github: "https://github.com/krishiv2006",
    status: "shipped",
  },
  {
    id: "stonestories",
    name: "StoneStories",
    tag: "GenAI Platform",
    file: "stonestories.jsx",
    lang: "JavaScript",
    color: "rose",
    description:
      "A GenAI-powered platform surfacing detailed information about heritage and historical sites worldwide.",
    bullets: [
      "Classification feature to determine whether a location qualifies as a heritage site",
      "Responsive frontend in React.js + Next.js with Tailwind CSS",
      "Deployed on Vercel with continuous integration via GitHub",
    ],
    stack: ["React.js", "Next.js", "Tailwind CSS", "Git", "Vercel"],
    github: "https://github.com/krishiv2006",
    status: "in-progress",
  },
];

export const education = [
  {
    degree: "B.Tech, Information Technology",
    institute: "Charusat University, Changa",
    meta: "Sem 1: 7.49 · Sem 2: 7.55 · Sem 3: 6.66 · Sem 4: 7.36",
    year: "2024 – 2028",
  },
  {
    degree: "Higher Secondary (Science)",
    institute: "The National High School",
    meta: "88%",
    year: "2022 – 2024",
  },
  {
    degree: "10th Secondary",
    institute: "Amrita Vidyalayam",
    meta: "82%",
    year: "2021 – 2022",
  },
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
  },
];
