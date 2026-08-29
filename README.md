# Souryadipta Das — Personal Engineering & QA Portfolio

> **QA Analyst • Software Testing • Automation**  
> *Building reliable software through thoughtful testing, automation and engineering.*

A modern, dark, interactive, minimalist personal engineering portfolio for **Souryadipta Das**, QA Engineer at Coforge.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (`motion/react`)
- **Icons**: Lucide React
- **Deployment**: Static build ready for GitHub Pages or Vercel

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SyndicateSiD/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `5173`) in your browser.

### 4. Build for production
```bash
npm run build
```
The compiled, optimized static files will be generated in the `dist/` directory.

---

## 🌐 GitHub Pages Deployment

This project is configured out-of-the-box with `base: './'` in `vite.config.ts`, making it 100% compatible with both root domain deployments (`username.github.io`) and sub-path repository deployments (`username.github.io/repository-name/`).

### Automated Deployment (GitHub Actions)
1. Push your repository to GitHub (`main` branch).
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site whenever you push changes to `main`.

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions automated deployment workflow
├── public/
│   └── favicon.svg           # Dark mode monogram favicon
├── src/
│   ├── components/
│   │   ├── About.tsx               # QA philosophy and 4 core engineering pillars
│   │   ├── Certifications.tsx      # Verified credentials from AWS, IBM, Coursera, etc.
│   │   ├── Contact.tsx             # Interactive contact CTA with copy email/phone
│   │   ├── CustomCursor.tsx        # Subtle desktop custom cursor
│   │   ├── DataScienceSection.tsx  # "Beyond QA" ML, computer vision & research reviews
│   │   ├── Education.tsx           # KIIT B.Tech CSSE (8.81 CGPA)
│   │   ├── Experience.tsx          # Vertical career timeline (Coforge, Blu Cucoon, Salesforce)
│   │   ├── Footer.tsx              # Minimal footer with quick links & status
│   │   ├── Hero.tsx                # Hero with interactive QA telemetry simulation
│   │   ├── Navbar.tsx              # Sticky nav with scroll-spy & mobile drawer
│   │   ├── ProjectModal.tsx        # Project detail modal (problem, solution, architecture)
│   │   ├── Projects.tsx            # Interactive project cards with category filters
│   │   ├── ResumeModal.tsx         # In-browser printable & downloadable resume
│   │   └── TerminalEasterEgg.tsx   # Interactive developer CLI ($ whoami, $ role)
│   ├── data/
│   │   └── portfolioData.ts  # Central structured source of truth
│   ├── types.ts              # Global TypeScript interfaces
│   ├── App.tsx               # Primary layout component
│   ├── main.tsx              # React entry point
│   └── index.css             # Tailwind CSS & global styling
├── index.html                # HTML entry point with SEO & fonts
├── metadata.json             # Applet metadata
├── package.json              # Project dependencies & scripts
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration with relative base
```

---

## 👤 Contact

- **Email**: [souryadiptadas14102@gmail.com](mailto:souryadiptadas14102@gmail.com)
- **LinkedIn**: [linkedin.com/in/souryadipta-das-69667120a](https://linkedin.com/in/souryadipta-das-69667120a)
- **GitHub**: [github.com/SyndicateSiD](https://github.com/SyndicateSiD)
