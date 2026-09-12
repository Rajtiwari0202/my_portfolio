# Raj Tiwari — Portfolio

A high-performance, responsive, and aesthetically premium developer portfolio for **Raj Tiwari**, built with **React 18**, **Vite**, **Tailwind CSS**, and **TypeScript**. Inspired by retro-minimalist terminal grids, dashed alignment layouts, and modern typographic hierarchy (modeled after [nodeanurag/my-portfolio](https://github.com/nodeanurag/my-portfolio)).

Live site:
```text
https://rajtiwari0202.github.io/my_portfolio/
```

---

## Features & Highlights

- **Typographic & CRT Dashed Grid Design**: Sleek retro layout system with dashed alignment borders (`max-w-[760px]`), corner crosshairs (`+`), diagonal stripe section headers (`bg-stripes`), and subtle scanline overlays.
- **Interactive Switchable Profile Avatar**: Click the avatar frame directly or the quick rotate trigger icon to cycle through profile photos.
- **Search Command Palette (`⌘K` / `Ctrl+K`)**: Dynamic keyboard-accessible command menu with shortcuts to jump directly to page sections, view specific projects, open external socials (GitHub, LeetCode, LinkedIn), download resume, or toggle dark/light theme.
- **Desktop Side Index**: Sticky floating table of contents tracking active sections during scroll.
- **Rotating Headline Ticker**: Smoothly animated cycling title showcasing roles across full-stack engineering, applied AI, and competitive programming.
- **Interactive Project Case Studies & Lightbox**: Rich cards showcasing **ResQ-Her**, **Vestora**, **PolicyGuard**, **FlowPilot AI**, and **PyShop** with screenshot carousels, full-size modal viewer, category filter tabs, and direct live/repo links.
- **Competitive Signals & Proof**: LeetCode (350+ solved, 1742 contest rating), HackIITK 2025 Finalist (PolicyGuard), HackWithUP 3rd place, and verified Coursera Machine Learning Specialization credentials.
- **Live Timezone Clock**: Real-time IST clock displaying current local time in Kanpur, India.
- **Direct Copy Email**: One-click clipboard copy for `rajtiwari16916@gmail.com` with instant visual feedback.

---

## Tech Stack

| Layer | Tools |
| :--- | :--- |
| **Framework & Build** | React 18, Vite 6, TypeScript |
| **Styling** | Tailwind CSS, PostCSS, Autoprefixer |
| **Typography** | Instrument Serif, Inter, JetBrains Mono |
| **Icons** | Lucide React |
| **Deployment** | GitHub Pages via GitHub Actions |

---

## Repository Structure

```text
my_portfolio/
|-- .github/workflows/deploy.yml
|-- public/
|   |-- projects/             # High-res project screenshots
|   |-- raj-tiwari-suit.jpeg  # Profile avatar
|   |-- RajTiwari_Resume.pdf  # Downloadable resume
|   `-- favicon.svg
|-- src/
|   |-- components/
|   |   |-- CommandPalette.tsx # ⌘K keyboard launcher dialog
|   |   |-- Footer.tsx         # Live clock, Dijkstra quote & back-to-top
|   |   |-- Layout.tsx         # Shell (760px dashed grid) & SectionHeader
|   |   |-- Nav.tsx            # Sticky top nav, quick links & theme toggle
|   |   |-- SideIndex.tsx      # Desktop floating table of contents
|   |   `-- ThemeProvider.tsx  # Dark & light theme context
|   |-- config/
|   |   `-- site.ts            # Central portfolio data & project configs
|   |-- sections/
|   |   |-- About.tsx          # Bio, philosophy & TL;DR cards
|   |   |-- Achievements.tsx   # Hackathons, LeetCode & Coursera ML certs
|   |   |-- Contact.tsx        # Email copy & social channels
|   |   |-- GithubActivity.tsx # GitHub contribution heatmap & repo stats
|   |   |-- Hero.tsx           # CRT banner, rotating ticker & stats grid
|   |   |-- ProjectCard.tsx    # Case study cards with screenshot preview
|   |   |-- Projects.tsx       # Categorized projects with lightbox modal
|   |   `-- TechStack.tsx      # Categorized skills matrix
|   |-- utils/
|   |   `-- asset.ts           # GitHub Pages base URL resolver
|   |-- App.tsx
|   |-- index.css              # Theme tokens, retro stripes & scanlines
|   `-- main.tsx
|-- index.html
|-- postcss.config.mjs
|-- tailwind.config.ts
|-- tsconfig.json
|-- vite.config.ts
`-- package.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open the local development URL printed in your terminal (usually `http://localhost:5173/my_portfolio/`).

---

## Production Build

```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Author

**Raj Tiwari**  
- **GitHub**: [Rajtiwari0202](https://github.com/Rajtiwari0202)  
- **LeetCode**: [RajTiwari2007](https://leetcode.com/u/RajTiwari2007/)  
- **LinkedIn**: [rajtiwari02](https://www.linkedin.com/in/rajtiwari02)  
- **Email**: rajtiwari16916@gmail.com
