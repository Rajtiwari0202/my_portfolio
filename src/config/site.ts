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
    "LeetCode Knight (1,979 Rating • Top 2.98% • 819+ Solved) and Backend & Applied AI Engineer building distributed dispatch systems, event-driven services, and optimization pipelines.",
  about: [
    "I'm a Computer Science undergraduate at Pranveer Singh Institute of Technology (PSIT), Kanpur (CGPA: 8.1/10 till 4th Sem), building event-driven backend services, real-time dispatch systems, and constraint-based optimization applications.",
    "As a LeetCode Knight with a 1,979 contest rating (Top 2.98% peak, Top 4% globally) and 819+ DSA problems solved (116 Hard, 405 Medium), I combine algorithmic depth with practical software engineering—having achieved Global Rank 205 in Weekly Contest 402, a 93-day max streak, and 224 total active days.",
    "My work spans real-time ride-hailing and distributed dispatch platforms (RideFlow), asynchronous SRE incident-triage responders (FlowForge AI — Zerops Challenge Winner), multi-agent constraint satisfaction planners (TravelAgenticAI), and cybersecurity compliance analyzers (HackIITK Finalist).",
  ],
  tldr: [
    "LeetCode Knight (1979 Rating • Top 2.98%).",
    "819+ DSA Problems Solved (116 Hard, 405 Medium).",
    "B.Tech CSE at PSIT Kanpur (CGPA 8.1/10 till 4th Sem).",
    "Event-Driven Backend, Distributed Systems & Applied AI.",
  ],
  status: {
    available: true,
    availableText: "Open to opportunities & internships",
    nowLearning: "Distributed Systems • Concurrency Control & Event-Driven Architecture • System Design",
    nowBuilding: "RideFlow (Distributed Dispatch) & FlowForge AI (SRE Incident Responder)",
  },
  stats: [
    { label: "LeetCode Solved", value: "819+" },
    { label: "Contest Rating", value: "1979 (Knight)" },
    { label: "Global Standing", value: "Top 2.98%" },
    { label: "Weekly Best", value: "Rank 205 (WC 402)" },
  ],
  socials: {
    github: "https://github.com/Rajtiwari0202",
    linkedin: "https://www.linkedin.com/in/rajtiwari02",
    leetcode: "https://leetcode.com/u/RajTiwari2007/",
    email: "mailto:rajtiwari16916@gmail.com",
    resume: "RajTiwari_Resume.pdf",
  },
  headlineTitles: [
    "LeetCode Knight • 1979 Rating (Top 2.98%)",
    "819+ DSA Problems Solved (116 Hard, 405 Medium)",
    "1st Prize Winner — The Zerops Challenge",
    "Backend & Applied AI Engineer",
    "Distributed Dispatch & Constraint Optimization",
  ],
  skillsCategories: [
    {
      name: "Languages",
      description: "Core programming languages for competitive programming and high-performance backend systems.",
      skills: [
        { name: "C++" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Java" },
        { name: "SQL" },
      ],
    },
    {
      name: "Backend & Microservices",
      description: "Event-driven services, real-time dispatch pipelines, worker queues, and REST/RPC APIs.",
      skills: [
        { name: "Node.js" },
        { name: "Express 5.x" },
        { name: "Fastify" },
        { name: "FastAPI" },
        { name: "RESTful APIs" },
        { name: "WebSockets" },
        { name: "Socket.IO" },
        { name: "Server-Sent Events (SSE)" },
        { name: "BullMQ" },
        { name: "JWT" },
      ],
    },
    {
      name: "Databases & Caching",
      description: "Geospatial indexing, in-memory caching, message brokers, and relational/document persistence.",
      skills: [
        { name: "PostgreSQL" },
        { name: "MongoDB (2dsphere)" },
        { name: "Redis / Valkey" },
        { name: "Pub/Sub & Caching" },
        { name: "MySQL" },
        { name: "Prisma" },
        { name: "SQLAlchemy" },
      ],
    },
    {
      name: "Cloud, DevOps & Infra",
      description: "Containerization, private networking, VPC security, PaaS deployment, and CI/CD pipelines.",
      skills: [
        { name: "Docker" },
        { name: "Kubernetes" },
        { name: "AWS" },
        { name: "WireGuard VPC" },
        { name: "Zerops PaaS" },
        { name: "Nginx" },
        { name: "GitHub Actions (CI/CD)" },
        { name: "Vercel" },
        { name: "Render" },
      ],
    },
    {
      name: "AI / ML & Optimization",
      description: "Constraint satisfaction solvers, multi-agent orchestration, LLM telemetry, and local inference.",
      skills: [
        { name: "Google OR-Tools (CP-SAT)" },
        { name: "PyTorch" },
        { name: "OpenAI API" },
        { name: "Gemini API" },
        { name: "LangGraph" },
        { name: "Ollama" },
        { name: "Scikit-learn" },
      ],
    },
    {
      name: "Core Computer Science",
      description: "Fundamental computational principles, concurrency, system design, and algorithmic rigor.",
      skills: [
        { name: "Data Structures & Algorithms" },
        { name: "Concurrency Control" },
        { name: "System Design" },
        { name: "Operating Systems" },
        { name: "DBMS" },
        { name: "Computer Networks" },
        { name: "OOP" },
      ],
    },
  ] as SkillCategory[],
  achievements: [
    {
      id: "zerops-challenge",
      number: "01",
      title: "1st Prize, The Zerops Challenge",
      description:
        "Awarded First Prize & Logitech MX Master 4 for developing FlowForge AI, an asynchronous SRE incident-triage platform with live telemetry diagnostics and automated autoscale recommendations.",
      tag: "1st Place Winner",
    },
    {
      id: "leetcode-knight",
      number: "02",
      title: "LeetCode Knight (Rating 1979 • Top 2.98%)",
      description:
        "Knight badge holder with 1,979 contest rating (Top 2.98% peak, Top 4% globally), 819+ DSA problems solved (116 Hard, 405 Medium), Global Rank 205 in Weekly Contest 402, 93-day max streak, and 224 total active days.",
      tag: "Knight Badge",
    },
    {
      id: "gdsc-campus",
      number: "03",
      title: "2nd Place, GDSC Algorithm & Debugging Contest",
      description:
        "Ranked 2nd across university contestants in algorithmic problem solving, logic bug detection, and memory leak triage; won multiple college Algo Club competitions.",
      tag: "2nd Place",
    },
    {
      id: "hackwithup",
      number: "04",
      title: "3rd Place, HackWithUttarPradesh 2025",
      description:
        "Awarded ₹10,000 in state-level 36-hour hackathon for building an autonomous agentic AI operational platform under strict product constraints.",
      tag: "3rd Place Winner",
    },
    {
      id: "hackiitk",
      number: "05",
      title: "National Finalist, HackIITK 2025",
      description:
        "Selected as national finalist in Cybersecurity track at IIT Kanpur for PolicyGuard, an offline local LLM-driven compliance gap analyzer.",
      tag: "Finalist",
    },
  ] as Achievement[],
  credentials: [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford University (Andrew Ng)",
      url: "https://coursera.org/share/d81d6618a51c0e7ceb6bc920921f8bd5",
    },
    {
      title: "CS50: Introduction to Computer Science",
      issuer: "Harvard University",
      url: "https://cs50.harvard.edu/certificates/",
    },
    {
      title: "Generative AI Fundamentals Accredited",
      issuer: "Databricks",
      url: "https://credentials.databricks.com/",
    },
    {
      title: "AWS Academy: ML Foundations Trained",
      issuer: "AWS Academy (Credly)",
      url: "https://www.credly.com/",
    },
    {
      title: "Redis for JavaScript Developers",
      issuer: "Redis University",
      url: "https://university.redis.com/",
    },
    {
      title: "SQL to Document Model",
      issuer: "MongoDB (Credly)",
      url: "https://www.credly.com/",
    },
    {
      title: "Database Management System (DBMS)",
      issuer: "NPTEL / IIT (ID: NPTEL26CS117S359300043)",
      url: "https://nptel.ac.in/",
    },
    {
      title: "Data Analysis with Python",
      issuer: "freeCodeCamp",
      url: "https://freecodecamp.org/",
    },
  ] as Credential[],
  projects: [
    {
      id: "rideflow",
      title: "RideFlow",
      category: "Fullstack",
      accent: "Distributed Dispatch",
      summary:
        "A real-time ride-hailing and distributed dispatch platform architected with bidirectional Socket.IO pipelines, geospatial proximity indexing, and atomic trip acquisition.",
      impact:
        "Architected an event-driven dispatch platform streaming real-time rider-driver GPS coordinates. Implemented cascading proximity driver discovery querying candidates within a 5 km radius via MongoDB 2dsphere spatial indexing with 15 s fallback. Engineered conditional atomic trip assignment using findOneAndUpdate (REQUESTED → ACCEPTED), validated with automated 10-request parallel contention testing recording 100% single-winner acquisition, zero duplicates, and sub-270 ms completion. Secured passenger OTP boarding verification using crypto.randomInt with restricted schema projections.",
      proof:
        "MongoDB 2dsphere geospatial indexing, bidirectional Socket.IO pipelines, sub-270ms atomic contention test, crypto.randomInt OTP verification.",
      stack: [
        "Node.js",
        "Express 5.x",
        "Socket.IO",
        "MongoDB (2dsphere)",
        "React 18",
        "Tailwind CSS",
        "Leaflet/OSM",
        "Haversine Engine",
      ],
      year: "2026",
      featured: true,
      status: "Production Architecture",
      links: {
        source: "https://github.com/Rajtiwari0202",
      },
    },
    {
      id: "flowforge-ai",
      title: "FlowForge AI",
      category: "AI & ML",
      accent: "Zerops Challenge Winner",
      summary:
        "An autonomous SRE incident-responder platform that won 1st Prize at The Zerops Challenge, reducing incident diagnostic response latency to under 2 seconds across telemetry pipelines.",
      impact:
        "Won 1st Prize at The Zerops Challenge. Engineered decoupled asynchronous telemetry ingestion utilizing Fastify APIs, Valkey message brokers, and BullMQ background workers, isolating LLM diagnostic reasoning loops from HTTP ingress. Maintained real-time telemetry streaming via a 15 s keep-alive heartbeat loop on backend Server-Sent Events (SSE), preventing idle-timeout disconnections through the reverse-proxy layer. Provisioned private network infrastructure deploying multi-container services inside WireGuard VPCs on Zerops PaaS.",
      proof:
        "1st Prize at The Zerops Challenge, sub-2s diagnostic latency, BullMQ + Valkey decoupled pipeline, WireGuard VPC private network isolation.",
      stack: [
        "Fastify",
        "Valkey",
        "BullMQ",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Google Gemini AI",
        "Zerops PaaS",
        "WireGuard VPC",
      ],
      year: "2026",
      featured: true,
      status: "1st Prize Winner",
      links: {
        source: "https://github.com/Rajtiwari0202",
      },
    },
    {
      id: "travel-agentic-ai",
      title: "TravelAgenticAI",
      category: "AI & ML",
      accent: "CP-SAT Constraint Optimization",
      summary:
        "A multi-agent itinerary optimization platform orchestrating 6 coordinated modules with constraint satisfaction optimization using Google OR-Tools CP-SAT.",
      impact:
        "Engineered a multi-stage planning pipeline orchestrating 6 coordinated modules (Intent, Routing, Lodging, Weather, Critic, Budget) with SSE streaming real-time stage progression. Formulated constraint satisfaction optimization using Google OR-Tools CP-SAT to search budget-feasible, time-ordered itineraries across multimodal transport and lodging with deterministic fallback heuristics. Benchmarked 5 optimization models across 12 scenarios: CP-SAT produced a 50.1 km average route vs 75.5 km for weather-unaware baseline with zero weather conflicts and 51.8 ms mean solver latency.",
      proof:
        "Google OR-Tools CP-SAT solver (51.8 ms mean latency), 50.1 km route vs 75.5 km baseline, 6-agent SSE pipeline, Docker + Alembic migrations.",
      stack: [
        "FastAPI",
        "Google OR-Tools (CP-SAT)",
        "Neon PostgreSQL",
        "React",
        "TypeScript",
        "Vite",
        "Server-Sent Events (SSE)",
        "Docker",
      ],
      year: "2026",
      featured: true,
      status: "Production Ready",
      links: {
        source: "https://github.com/Rajtiwari0202",
      },
    },
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
