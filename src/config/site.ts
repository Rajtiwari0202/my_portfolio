export type Project = {
  id: string;
  title: string;
  category: "AI & ML" | "Fullstack" | "Fintech & SaaS" | "Commerce";
  summary: string;
  impact: string;
  proof: string;
  stack: string[];
  year: string;
  featured: boolean;
  accent: string;
  status?: string;
  links: {
    live?: string;
    source?: string;
  };
  gallery?: {
    src: string;
    label: string;
  }[];
};

export type Achievement = {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
};

export type Credential = {
  title: string;
  issuer: string;
  url: string;
};

export type SkillCategory = {
  name: string;
  description: string;
  skills: { name: string; icon?: string }[];
};

export const site = {
  name: "Raj Tiwari",
  firstName: "Raj",
  initials: "RT",
  role: "Full-Stack & Applied AI Developer",
  location: "Kanpur, India",
  timezone: "Asia/Kolkata",
  email: "rajtiwari16916@gmail.com",
  url: "https://rajtiwari0202.github.io/my_portfolio/",
  avatar: "raj-tiwari-suit.jpeg",
  bannerImage: "cover.jpg",
  profileImages: [
    "raj-tiwari-suit.jpeg",
    "MyPicture5PieceSuitCropped.jpg",
  ],
  quote: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  tagline:
    "LeetCode Knight (1,973 Rating • Top 2.98% • 600+ Solved) and Full-Stack Engineer building agentic AI and production web systems.",
  about: [
    "I'm a Computer Science undergraduate at Pranveer Singh Institute of Technology (PSIT), Kanpur (CGPA: 8.55/10), building production-ready full-stack applications, agentic workflows, and scalable backend infrastructure.",
    "As a LeetCode Knight with a 1,973 contest rating (Top 2.98% globally) and 600+ DSA problems solved, I combine algorithmic depth with practical software engineering—having achieved Global Rank 205 in a Weekly Contest, a 93-day max streak, and 224 total active days.",
    "My work spans browser-based dev environments with WebContainers (Forge Editor), multi-agent systems (AI Travel Planner), AI evaluation platforms (PrepWise AI), cybersecurity gap analyzers (HackIITK Finalist), and rapid-response safety tech (ResQ-Her).",
  ],
  tldr: [
    "LeetCode Knight (1973 Rating • Top 2.98%).",
    "600+ DSA Problems Solved • Rank 205 Weekly.",
    "B.Tech CSE at PSIT Kanpur (CGPA 8.55/10).",
    "Full-Stack, Agentic AI & Scalable Systems.",
  ],
  status: {
    available: true,
    availableText: "Open to opportunities & internships",
    nowLearning: "Distributed Systems • Kubernetes & Kafka • Advanced System Design",
    nowBuilding: "Forge Editor (WebContainers) & Agentic AI",
  },
  stats: [
    { label: "LeetCode Solved", value: "600+" },
    { label: "Contest Rating", value: "1973 (Knight)" },
    { label: "Global Standing", value: "Top 2.98%" },
    { label: "Weekly Best", value: "Rank 205" },
  ],
  socials: {
    github: "https://github.com/Rajtiwari0202",
    linkedin: "https://www.linkedin.com/in/rajtiwari02",
    leetcode: "https://leetcode.com/u/RajTiwari2007/",
    email: "mailto:rajtiwari16916@gmail.com",
    resume: "RajTiwari_Resume.pdf",
  },
  headlineTitles: [
    "LeetCode Knight • 1973 Rating (Top 2.98%)",
    "600+ DSA Problems Solved",
    "Full-Stack & Applied AI Engineer",
    "HackIITK 2025 Finalist",
    "Next.js, FastAPI & Agentic AI Systems",
  ],
  skillsCategories: [
    {
      name: "Languages",
      description: "Core programming languages for competitive programming and systems development.",
      skills: [
        { name: "C++" },
        { name: "Python" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Java" },
        { name: "SQL" },
      ],
    },
    {
      name: "Frontend & Full-Stack",
      description: "Modern web UI frameworks, editors, and interactive interfaces.",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "FastAPI" },
        { name: "Django" },
        { name: "WebSockets" },
        { name: "REST APIs" },
        { name: "GraphQL" },
      ],
    },
    {
      name: "AI & Agentic Systems",
      description: "LLM APIs, multi-agent collaboration, vector retrieval, and offline inference.",
      skills: [
        { name: "Gemini API" },
        { name: "OpenAI API" },
        { name: "Agent Workflows" },
        { name: "Vector Retrieval" },
        { name: "Ollama / Local LLMs" },
        { name: "PyTorch" },
        { name: "Scikit-Learn" },
        { name: "NumPy & Pandas" },
      ],
    },
    {
      name: "Databases, Cloud & DevOps",
      description: "Containerization, orchestration, persistent databases, and CI/CD pipelines.",
      skills: [
        { name: "PostgreSQL" },
        { name: "MongoDB / Atlas" },
        { name: "Redis" },
        { name: "MySQL" },
        { name: "Prisma" },
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "Kafka" },
        { name: "AWS" },
        { name: "GitHub Actions" },
        { name: "CI/CD" },
        { name: "WebContainers" },
      ],
    },
  ] as SkillCategory[],
  achievements: [
    {
      id: "leetcode-knight",
      number: "01",
      title: "LeetCode Knight (Rating 1973 • Top 2.98%)",
      description: "Knight badge holder with 1,973 contest rating, Top 2.98% globally (25,114 rank), 600+ DSA problems solved, Global Rank 205 in a Weekly Contest, 93-day max streak, and 224 total active days.",
      tag: "Knight Badge",
    },
    {
      id: "hackwithup",
      number: "02",
      title: "HackWithUttarPradesh 2025",
      description: "Secured 3rd place in an Agentic AI hackathon by building an autonomous AI-agent based solution under strict product constraints.",
      tag: "3rd Place Winner",
    },
    {
      id: "hackiitk",
      number: "03",
      title: "HackIITK 2025 Finalist",
      description: "Reached cybersecurity finals at IIT Kanpur with PolicyGuard, an offline local LLM-powered policy gap analyzer.",
      tag: "Finalist",
    },
    {
      id: "google-campus",
      number: "04",
      title: "Google Campus Contest & Algo Club",
      description: "Secured 2nd in Google Campus Contest & Debugging Competition; won multiple college Algo Club competitive programming contests.",
      tag: "2nd Place",
    },
  ] as Achievement[],
  credentials: [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI — Stanford University (Coursera)",
      url: "https://coursera.org/share/d81d6618a51c0e7ceb6bc920921f8bd5",
    },
    {
      title: "Supervised Machine Learning: Regression & Classification",
      issuer: "DeepLearning.AI — Stanford University (Coursera)",
      url: "https://coursera.org/share/eab7e64205196df17c2514078cf62b5a",
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI (Coursera)",
      url: "https://coursera.org/share/8a2b00deb6f4439355e2513d477f0f6f",
    },
    {
      title: "Unsupervised Learning, Recommenders & Reinforcement Learning",
      issuer: "DeepLearning.AI (Coursera)",
      url: "https://coursera.org/share/467c0ac8d789b9e4a6421fe7761c831c",
    },
  ] as Credential[],
  projects: [
    {
      id: "forge-editor",
      title: "Forge Editor",
      category: "Fullstack",
      accent: "AI Code Editor",
      summary:
        "A browser-based AI development environment enabling developers to create, execute, and persist full-stack projects entirely in the browser.",
      impact:
        "Engineered with Next.js, Monaco Editor, WebContainers, Prisma, and MongoDB. Implemented authentication, project lifecycle management, AI-assisted coding, and cloud persistence supporting 50+ users and 1,000+ files with automated GitHub Actions CI/CD, Dependabot, and CodeQL.",
      proof: "In-browser WebContainer runtime, Monaco editor, AI code generation, and automated test pipelines.",
      stack: ["Next.js", "Monaco Editor", "WebContainers", "Prisma", "MongoDB", "Tailwind CSS", "GitHub Actions"],
      year: "2026",
      featured: true,
      status: "Production Ready",
      links: {
        source: "https://github.com/Rajtiwari0202",
      },
    },
    {
      id: "prepwise-ai",
      title: "PrepWise AI",
      category: "AI & ML",
      accent: "AI Interview Platform",
      summary:
        "An AI interview preparation platform generating role-specific technical mock interviews, resume analysis, and multi-dimensional candidate evaluation.",
      impact:
        "Built using Next.js, Express, Gemini API, and vector-based retrieval. Designed a resume analysis pipeline and evaluation engine scoring technical accuracy, communication, and problem-solving, with provider-fallback architecture ensuring zero downtime.",
      proof: "Role-specific interview generation, resume scoring engine, vector retrieval, and fallback resilience.",
      stack: ["Next.js", "Express.js", "Gemini API", "Vector Retrieval", "Tailwind CSS"],
      year: "2026",
      featured: true,
      links: {
        source: "https://github.com/Rajtiwari0202",
      },
    },
    {
      id: "ai-travel-planner",
      title: "AI Travel Planner",
      category: "AI & ML",
      accent: "Multi-Agent Systems",
      summary:
        "A multi-agent autonomous travel planning system that synthesizes personalized day-by-day itineraries based on budget, traveler preferences, and weather forecasts.",
      impact:
        "Orchestrates multi-agent collaboration where ResearchAgent crawls options and OptimizerAgent ranks itineraries across cost, ratings, and preference-matching signals. Integrated interactive maps and budget analytics.",
      proof: "Multi-agent negotiation workflows, weather forecasting integration, interactive maps, and budget analytics.",
      stack: ["FastAPI", "React", "OpenAI APIs", "Agent Workflows", "Tailwind CSS"],
      year: "2025",
      featured: true,
      links: {
        source: "https://github.com/Rajtiwari0202",
      },
    },
    {
      id: "resq-her",
      title: "ResQ-Her",
      category: "AI & ML",
      accent: "Safety Tech",
      summary:
        "A rapid-response emergency platform featuring silent SOS triggers, live location streaming, evidence capture, and an AI-driven trauma-informed survivor care companion.",
      impact:
        "Engineered for high-stakes emergency situations where discretion, low-latency alert dispatch, and end-to-end privacy take precedence over visual clutter.",
      proof: "Silent SOS, automated incident packaging, AI companion, and legal advisory flows.",
      stack: ["Next.js", "FastAPI", "MongoDB", "AI Support Workflows", "Tailwind CSS"],
      year: "2025",
      featured: true,
      links: {
        source: "https://github.com/Rajtiwari0202/ResQ-Her",
      },
      gallery: [
        { src: "projects/resq-her/dashboard.png", label: "Dashboard" },
        { src: "projects/resq-her/silent-sos.png", label: "Silent SOS" },
        { src: "projects/resq-her/legal-bot.png", label: "Legal Bot" },
        { src: "projects/resq-her/care-companion.png", label: "Care Companion" },
      ],
    },
    {
      id: "vestora",
      title: "Vestora",
      category: "Fintech & SaaS",
      accent: "Fintech",
      summary:
        "A full-stack trading and portfolio analytics platform with multi-asset watchlists, real-time simulated order executions, holdings tracking, and charted analytics.",
      impact:
        "Engineered like a production financial application: separated landing gateway, authenticated user dashboard, RESTful micro-endpoints, and MongoDB Atlas persistence.",
      proof: "JWT auth, portfolio equity curves, order lifecycle state machines, and Chart.js integration.",
      stack: ["React", "Express.js", "Node.js", "MongoDB Atlas", "Chart.js"],
      year: "2025",
      featured: true,
      links: {
        live: "https://vestora-trading-platform.vercel.app",
        source: "https://github.com/Rajtiwari0202/vestora-trading-platform",
      },
      gallery: [
        { src: "projects/vestora/landing.png", label: "Landing Gateway" },
        { src: "projects/vestora/dashboard.png", label: "Trading Dashboard" },
        { src: "projects/vestora/pricing.png", label: "Pricing Model" },
        { src: "projects/vestora/signup.png", label: "Authentication" },
      ],
    },
    {
      id: "policyguard",
      title: "PolicyGuard",
      category: "AI & ML",
      accent: "Cybersecurity AI",
      summary:
        "An offline cybersecurity policy gap analyzer powered by local LLMs, developed as a finalist submission for HackIITK 2025.",
      impact:
        "Evaluates organizational policy documents against NIST/ISO cybersecurity frameworks, generates an actionable gap register, and crafts remediated policies 100% offline.",
      proof: "HackIITK 2025 finalist demo, automated compliance scoring, and offline inference pipeline.",
      stack: ["Python", "Streamlit", "Local LLMs", "Cybersecurity", "NIST Controls"],
      year: "2025",
      featured: true,
      links: {
        source: "https://github.com/Rajtiwari0202/PolicyGuard-Local-LLM-Powered-Policy-Gap-Analyzer-",
      },
      gallery: [
        { src: "projects/policyguard/dashboard.png", label: "Compliance Dashboard" },
        { src: "projects/policyguard/gap-register.png", label: "Gap Register" },
        { src: "projects/policyguard/exports.png", label: "Audit Exports" },
        { src: "projects/policyguard/improved-policy.png", label: "Policy Synthesis" },
      ],
    },
    {
      id: "flowpilot-ai",
      title: "FlowPilot AI",
      category: "Fintech & SaaS",
      accent: "SaaS Automation",
      summary:
        "An AI workflow automation workspace for operations teams, with incoming lead ingestion, automated AI follow-up drafting, manager approval queues, and safe public sandbox demo mode.",
      impact:
        "Full SaaS architecture: role-based state, human-in-the-loop approvals, billing setup, and a preloaded interactive sandbox for recruiter evaluation.",
      proof: "Live interactive sandbox workspace, lead automations, approval queues, and activity tracking.",
      status: "Live Sandbox",
      stack: ["Next.js", "Node.js", "Render API", "Groq AI", "Tailwind CSS"],
      year: "2025",
      featured: true,
      links: {
        live: "https://flowpilot-ai-web.vercel.app",
      },
      gallery: [
        { src: "projects/flowpilot/dashboard.png", label: "Automation Hub" },
        { src: "projects/flowpilot/approvals.png", label: "Approval Queues" },
        { src: "projects/flowpilot/automations.png", label: "Workflow Triggers" },
        { src: "projects/flowpilot/activity.png", label: "Audit Log" },
      ],
    },
    {
      id: "pyshop",
      title: "PyShop",
      category: "Commerce",
      accent: "E-Commerce",
      summary:
        "A full-featured Django e-commerce platform with buyer accounts, interactive cart, product reviews, catalog filtering, checkout, Razorpay payments, and automated PDF invoices.",
      impact:
        "Demonstrates solid backend fundamentals: relational schema design, transactional integrity during checkout, order state machines, and invoice generation.",
      proof: "Storefront catalog, cart state, order workflows, and automated invoice delivery.",
      stack: ["Django", "Python", "SQLite", "Razorpay", "Bootstrap 5"],
      year: "2024",
      featured: false,
      links: {
        source: "https://github.com/Rajtiwari0202/PyShop-Ecommerce",
      },
      gallery: [
        { src: "projects/pyshop/storefront.png", label: "Storefront" },
        { src: "projects/pyshop/product-detail.png", label: "Product Detail" },
        { src: "projects/pyshop/cart.png", label: "Cart & Checkout" },
        { src: "projects/pyshop/orders.png", label: "Order History" },
        { src: "projects/pyshop/login.png", label: "Authentication" },
      ],
    },
  ] as Project[],
};
