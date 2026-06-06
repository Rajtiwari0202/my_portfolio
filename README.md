# Raj Tiwari Portfolio

A clean, static portfolio for Raj Tiwari focused on applied AI products, full-stack engineering, competitive programming proof, verified learning, and selected product screenshots.

Live site:

```text
https://rajtiwari0202.github.io/my_portfolio/
```

## What This Portfolio Showcases

- Selected projects with product-focused summaries, screenshots, and live/repo links.
- Competitive programming and hackathon achievements.
- Verified Coursera machine learning credentials.
- Resume download link.
- A minimal, professional interface designed for recruiters and technical reviewers.

## Featured Projects

| Project | Focus |
| --- | --- |
| ResQ-Her | Safety tech, silent SOS, AI support flows |
| Vestora | Trading dashboard, fintech UI, REST APIs |
| PyShop | Django commerce, checkout, invoices, order flows |
| FlowPilot AI | AI workflow automation, sandbox SaaS demo |
| PolicyGuard | Local LLM cybersecurity policy analysis |

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | TypeScript, Vite |
| Styling | Custom CSS |
| Assets | Local screenshots and resume PDF |
| Deployment | GitHub Pages with GitHub Actions |

## Repository Structure

```text
my_portfolio/
|-- .github/workflows/deploy.yml
|-- public/
|   |-- projects/          # Project screenshots
|   |-- RajTiwariImg3.jpeg
|   `-- RajTiwari_Resume.pdf
|-- src/
|   |-- main.ts            # Portfolio data and rendered markup
|   `-- style.css          # Visual system and responsive layout
|-- index.html
|-- vite.config.ts
|-- package.json
`-- README.md
```

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deployment

The repository includes a GitHub Pages workflow:

```text
.github/workflows/deploy.yml
```

On every push to `main`, GitHub Actions:

1. Installs dependencies.
2. Builds the Vite site.
3. Uploads `dist/`.
4. Deploys to GitHub Pages.

The Vite base path is configured in:

```text
vite.config.ts
```

## Updating Content

Most portfolio content lives in:

```text
src/main.ts
```

Project screenshots and downloadable files live in:

```text
public/
```

After editing content:

```bash
npm run build
git add .
git commit -m "update portfolio content"
git push
```

## Design Notes

- The layout is intentionally compact and professional rather than hero-heavy.
- Project cards prioritize proof: screenshots, links, stack, and clear product outcomes.
- Resume and credential links are placed where reviewers can act quickly.
- The site is static, fast, and simple to maintain.

## Author

Raj Tiwari  
GitHub: https://github.com/Rajtiwari0202  
Portfolio: https://rajtiwari0202.github.io/my_portfolio/
