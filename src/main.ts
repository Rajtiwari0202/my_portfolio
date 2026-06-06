import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

type Project = {
  name: string
  summary: string
  impact: string
  stack: string[]
  repo?: string
  live?: string
  accent: string
  proof: string
  status?: string
  gallery?: {
    src: string
    label: string
  }[]
}

type Credential = {
  title: string
  issuer: string
  url: string
}

const projects: Project[] = [
  {
    name: 'ResQ-Her',
    summary:
      'A rapid-response safety platform for silent SOS, live location sharing, emergency alerts, evidence capture, and survivor support flows.',
    impact:
      'Built around privacy-sensitive emergency workflows where speed, discretion, and trust matter more than visual noise.',
    stack: ['Next.js', 'FastAPI', 'MongoDB', 'AI support flows'],
    repo: 'https://github.com/Rajtiwari0202/ResQ-Her',
    accent: 'Safety tech',
    proof: 'Silent SOS, care companion, and legal guidance workflows',
    gallery: [
      { src: asset('projects/resq-her/dashboard.png'), label: 'Dashboard' },
      { src: asset('projects/resq-her/silent-sos.png'), label: 'Silent SOS' },
      { src: asset('projects/resq-her/legal-bot.png'), label: 'Legal bot' },
      { src: asset('projects/resq-her/care-companion.png'), label: 'Care companion' },
    ],
  },
  {
    name: 'Vestora',
    summary:
      'A full-stack trading and portfolio analytics platform with authentication, watchlists, orders, holdings, positions, and dashboard charts.',
    impact:
      'Designed like a production fintech surface: split landing app, dashboard, REST API, and MongoDB-backed data flows.',
    stack: ['React', 'Express.js', 'MongoDB Atlas', 'Chart.js'],
    repo: 'https://github.com/Rajtiwari0202/vestora-trading-platform',
    live: 'https://vestora-trading-platform.vercel.app',
    accent: 'Fintech',
    proof: 'Authentication, watchlists, orders, holdings, and charted dashboards',
    gallery: [
      { src: asset('projects/vestora/landing.png'), label: 'Landing page' },
      { src: asset('projects/vestora/dashboard.png'), label: 'Dashboard' },
      { src: asset('projects/vestora/pricing.png'), label: 'Pricing' },
      { src: asset('projects/vestora/signup.png'), label: 'Sign up' },
    ],
  },
  {
    name: 'PyShop',
    summary:
      'A Django e-commerce platform with authentication, cart, wishlist, reviews, search/filtering, order history, invoices, and tracking.',
    impact:
      'Shows backend fundamentals through models, payment verification, order workflows, and responsive product browsing.',
    stack: ['Django', 'SQLite', 'Razorpay', 'Bootstrap 5'],
    repo: 'https://github.com/Rajtiwari0202/PyShop-Ecommerce',
    accent: 'Commerce',
    proof: 'Storefront, cart, checkout, account, order, and invoice flows',
    gallery: [
      { src: asset('projects/pyshop/storefront.png'), label: 'Storefront' },
      { src: asset('projects/pyshop/product-detail.png'), label: 'Product detail' },
      { src: asset('projects/pyshop/cart.png'), label: 'Cart' },
      { src: asset('projects/pyshop/checkout.png'), label: 'Checkout' },
      { src: asset('projects/pyshop/orders.png'), label: 'Orders' },
      { src: asset('projects/pyshop/login.png'), label: 'Login' },
    ],
  },
  {
    name: 'FlowPilot AI',
    summary:
      'An AI workflow automation workspace for small businesses, with lead intake, AI follow-up drafts, approvals, activity logs, and sandbox demo data.',
    impact:
      'Adds a SaaS/product-ops signal: authentication, workflow state, approval queues, provider setup, billing readiness, and a safe public sandbox mode.',
    stack: ['Next.js', 'Node.js', 'Render API', 'Groq/local AI', 'Vercel'],
    live: 'https://flowpilot-ai-web.vercel.app',
    accent: 'SaaS automation',
    proof: 'Sandbox workspace, lead follow-up automation, approvals, and activity tracking',
    status: 'Live sandbox',
    gallery: [
      { src: asset('projects/flowpilot/dashboard.png'), label: 'Dashboard' },
      { src: asset('projects/flowpilot/approvals.png'), label: 'Approvals' },
      { src: asset('projects/flowpilot/automations.png'), label: 'Automations' },
      { src: asset('projects/flowpilot/activity.png'), label: 'Activity' },
    ],
  },
  {
    name: 'PolicyGuard',
    summary:
      'A local LLM-powered cybersecurity policy gap analyzer built for HackIITK 2025 finalist work.',
    impact:
      'Maps policy documents against NIST-style controls, identifies missing sections, and drafts an improvement roadmap offline.',
    stack: ['Python', 'Streamlit', 'Local LLM', 'Cybersecurity'],
    repo: 'https://github.com/Rajtiwari0202/PolicyGuard-Local-LLM-Powered-Policy-Gap-Analyzer-',
    accent: 'Security AI',
    proof: 'Policy gap register, exports, and improved policy generation',
    gallery: [
      { src: asset('projects/policyguard/dashboard.png'), label: 'Dashboard' },
      { src: asset('projects/policyguard/gap-register.png'), label: 'Gap register' },
      { src: asset('projects/policyguard/exports.png'), label: 'Exports' },
      { src: asset('projects/policyguard/improved-policy.png'), label: 'Improved policy' },
    ],
  },
]

const credentials: Credential[] = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI - Stanford University - Coursera',
    url: 'https://coursera.org/share/d81d6618a51c0e7ceb6bc920921f8bd5',
  },
  {
    title: 'Supervised Machine Learning',
    issuer: 'Regression and Classification',
    url: 'https://coursera.org/share/eab7e64205196df17c2514078cf62b5a',
  },
  {
    title: 'Advanced Learning Algorithms',
    issuer: 'DeepLearning.AI - Coursera',
    url: 'https://coursera.org/share/8a2b00deb6f4439355e2513d477f0f6f',
  },
  {
    title: 'Unsupervised Learning, Recommenders & RL',
    issuer: 'DeepLearning.AI - Coursera',
    url: 'https://coursera.org/share/467c0ac8d789b9e4a6421fe7761c831c',
  },
]

const projectCards = projects
  .map(
    (project, index) => `
      <article class="project-card ${index === 0 ? 'featured' : ''}">
        ${
          project.gallery
            ? `<div class="project-gallery" aria-label="${project.name} screenshots">
                <img class="gallery-hero" src="${project.gallery[0].src}" alt="${project.name} ${project.gallery[0].label} screenshot" />
                <div class="gallery-thumbs">
                  ${project.gallery
                    .slice(1)
                    .map(
                      (shot) => `
                        <figure>
                          <img src="${shot.src}" alt="${project.name} ${shot.label} screenshot" />
                          <figcaption>${shot.label}</figcaption>
                        </figure>
                      `,
                    )
                    .join('')}
                </div>
              </div>`
            : `<div class="project-visual" aria-hidden="true">
                <span>${project.accent}</span>
                <strong>${project.name}</strong>
              </div>`
        }
        <div class="project-body">
          <div class="project-topline">
            <h3>${project.name}</h3>
            <span>${project.accent}</span>
          </div>
          <p class="project-proof">${project.proof}</p>
          <p>${project.summary}</p>
          <p class="impact">${project.impact}</p>
          <ul class="chip-list" aria-label="${project.name} technologies">
            ${project.stack.map((item) => `<li>${item}</li>`).join('')}
          </ul>
          <div class="card-actions">
            ${project.repo ? `<a href="${project.repo}" target="_blank" rel="noreferrer">View code</a>` : ''}
            ${project.live ? `<a href="${project.live}" target="_blank" rel="noreferrer">Open live app</a>` : ''}
            ${project.status ? `<span>${project.status}</span>` : ''}
          </div>
        </div>
      </article>
    `,
  )
  .join('')

const credentialCards = credentials
  .map(
    (credential) => `
      <a class="credential-card" href="${credential.url}" target="_blank" rel="noreferrer">
        <span>Certificate</span>
        <strong>${credential.title}</strong>
        <small>${credential.issuer}</small>
      </a>
    `,
  )
  .join('')

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Raj Tiwari home">
      <span class="brand-mark">RT</span>
      <span>Raj Tiwari</span>
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="#work">Work</a>
      <a href="#proof">Proof</a>
      <a href="#stack">Stack</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero-section" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Raj Tiwari - Full-stack developer</p>
        <h1 id="hero-title">Building practical AI and web products.</h1>
        <p class="hero-lede">
          Computer Science undergraduate from Kanpur working across MERN, Python, Django, and machine learning.
          I like projects with clear workflows, useful interfaces, and measurable engineering depth.
        </p>
        <div class="hero-actions" aria-label="Primary links">
          <a class="button primary" href="#work">View projects</a>
          <a class="button" href="${asset('RajTiwari_Resume.pdf')}" download="RajTiwari_Resume.pdf">Resume</a>
          <a class="button" href="https://github.com/Rajtiwari0202" target="_blank" rel="noreferrer">GitHub</a>
          <a class="button" href="https://leetcode.com/u/RajTiwari2007/" target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </div>
      <aside class="hero-panel" aria-label="Profile summary">
        <img class="portrait" src="${asset('raj-tiwari-suit.jpeg')}" alt="Raj Tiwari wearing a blue suit" />
        <div>
          <p class="panel-label">Current focus</p>
          <h2>Applied AI systems, production web apps, and competitive programming.</h2>
        </div>
        <dl class="stat-grid">
          <div>
            <dt>LeetCode</dt>
            <dd>350+ solved</dd>
          </div>
          <div>
            <dt>Contest rating</dt>
            <dd>1742</dd>
          </div>
          <div>
            <dt>GitHub repos</dt>
            <dd>46 public</dd>
          </div>
          <div>
            <dt>Best rank</dt>
            <dd>205 weekly</dd>
          </div>
        </dl>
      </aside>
    </section>

    <section class="section intro-strip" aria-label="Portfolio positioning">
      <p>
        A compact record of projects, screenshots, contest signals, and verified learning.
        Each project includes the interface, the workflow, the stack, and the proof behind it.
      </p>
    </section>

    <section class="section placeholder-section" id="work" aria-labelledby="work-title">
      <div class="section-heading">
        <p class="eyebrow">Selected work</p>
        <h2 id="work-title">Selected projects with working product flows.</h2>
      </div>
      <div class="project-grid">
        ${projectCards}
      </div>
    </section>

    <section class="section proof-section" id="proof" aria-labelledby="proof-title">
      <div class="section-heading">
        <p class="eyebrow">Proof</p>
        <h2 id="proof-title">Proof beyond coursework.</h2>
      </div>
      <div class="proof-grid">
        <article class="proof-card">
          <span>01</span>
          <h3>HackWithUttarPradesh 2025</h3>
          <p>Secured 3rd place in an Agentic AI hackathon by building under real product constraints.</p>
        </article>
        <article class="proof-card">
          <span>02</span>
          <h3>HackIITK 2025 finalist</h3>
          <p>Reached the cybersecurity finals with PolicyGuard, a local LLM-powered policy gap analyzer.</p>
        </article>
        <article class="proof-card">
          <span>03</span>
          <h3>Debugging and Algo Club</h3>
          <p>Secured 2nd in a Google Campus contest and debugging competition, with multiple Algo Club wins.</p>
        </article>
      </div>
      <div class="credentials-grid">
        ${credentialCards}
      </div>
    </section>

    <section class="section stack-section" id="stack" aria-labelledby="stack-title">
      <div class="section-heading">
        <p class="eyebrow">Stack</p>
        <h2 id="stack-title">Comfortable across product, backend, and ML layers.</h2>
      </div>
      <div class="stack-board">
        <div>
          <h3>Frontend</h3>
          <p>React, TypeScript, JavaScript, Tailwind CSS, Bootstrap, Material UI</p>
        </div>
        <div>
          <h3>Backend</h3>
          <p>Node.js, Express.js, FastAPI, Django, REST APIs, authentication workflows</p>
        </div>
        <div>
          <h3>Data and ML</h3>
          <p>Python, NumPy, Pandas, Matplotlib, scikit-learn, local LLM experiments</p>
        </div>
        <div>
          <h3>Databases and tools</h3>
          <p>MongoDB, MongoDB Atlas, SQLite, MySQL, Git, GitHub, Vercel, Render</p>
        </div>
      </div>
    </section>

    <section class="section contact-section" id="contact" aria-labelledby="contact-title">
      <div>
        <p class="eyebrow">Contact</p>
        <h2 id="contact-title">Open to internships, hackathons, and product-minded teams.</h2>
      </div>
      <div class="contact-card">
        <a href="mailto:rajtiwari16916@gmail.com">rajtiwari16916@gmail.com</a>
        <a href="${asset('RajTiwari_Resume.pdf')}" download="RajTiwari_Resume.pdf">Download resume</a>
        <a href="https://www.linkedin.com/in/rajtiwari02" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/Rajtiwari0202" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://leetcode.com/u/RajTiwari2007/" target="_blank" rel="noreferrer">LeetCode</a>
      </div>
    </section>

    <footer class="site-footer" aria-label="Footer">
      <div class="footer-main">
        <div>
          <p class="footer-kicker">Available for internships and product builds</p>
          <h2>Have a role, hackathon, or useful idea?</h2>
          <p>
            I am most interested in full-stack engineering, applied AI systems,
            backend-heavy products, and teams that care about shipping usable software.
          </p>
        </div>
        <div class="footer-actions" aria-label="Footer links">
          <a href="mailto:rajtiwari16916@gmail.com">Email me</a>
          <a href="${asset('RajTiwari_Resume.pdf')}" download="RajTiwari_Resume.pdf">Resume</a>
          <a href="https://github.com/Rajtiwari0202" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/rajtiwari02" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>Raj Tiwari</span>
        <span>Kanpur, India</span>
        <span>Full-stack and AI engineering</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  </main>
`
