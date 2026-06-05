import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Raj Tiwari home">
      <span class="brand-mark">RT</span>
      <span>Raj Tiwari</span>
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="#work">Work</a>
      <a href="#proof">Proof</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero-section" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Full-stack developer · AI systems · Competitive programming</p>
        <h1 id="hero-title">I build applied AI products that feel useful before they feel flashy.</h1>
        <p class="hero-lede">
          Computer Science undergraduate from Kanpur, building MERN, Python, and ML projects
          across safety, fintech, e-commerce, policy analysis, and developer tooling.
        </p>
        <div class="hero-actions" aria-label="Primary links">
          <a class="button primary" href="#work">View projects</a>
          <a class="button" href="https://github.com/Rajtiwari0202" target="_blank" rel="noreferrer">GitHub</a>
          <a class="button" href="https://leetcode.com/u/RajTiwari2007/" target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </div>
      <aside class="hero-panel" aria-label="Profile summary">
        <img class="avatar" src="https://avatars.githubusercontent.com/u/185112065?v=4" alt="Raj Tiwari" />
        <div>
          <p class="panel-label">Current focus</p>
          <h2>Agentic AI, production web apps, and stronger DSA fundamentals.</h2>
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
        This portfolio is being rebuilt around project evidence: what the product does,
        what stack powered it, and why it matters.
      </p>
    </section>

    <section class="section placeholder-section" id="work" aria-labelledby="work-title">
      <div class="section-heading">
        <p class="eyebrow">Selected work</p>
        <h2 id="work-title">Flagship projects are coming next.</h2>
      </div>
    </section>
  </main>
`
