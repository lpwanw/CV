# CV Portfolio - Le Phuong Tay

**Full-Stack Ruby on Rails Engineer** | 4 Years Experience

[![Live CV](https://img.shields.io/badge/CV-Live-blue?style=flat-square)](https://cv.leewestern.com)
[![GitHub](https://img.shields.io/badge/GitHub-lpwanw-181717?style=flat-square&logo=github)](https://github.com/lpwanw)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-lpwanw-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/lpwanw/)

## Quick Start

```bash
npm install      # Install dependencies
npm run dev      # Start dev server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run typecheck # TypeScript validation
```

## About

Interactive React/TypeScript portfolio showcasing a Full-Stack Ruby on Rails Engineer's professional profile, skills, experience, and projects.

**Live:** [cv.leewestern.com](https://cv.leewestern.com)

**Features:**
- Dark/Light theme toggle with system preference support
- Responsive mobile-first design
- Smooth animations with accessibility support
- PDF CV export
- Skip links for keyboard navigation
- ATS-optimized structure

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19, TypeScript 5.6 |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4, CSS Variables |
| **Animations** | Framer Motion 11 |
| **Deployment** | Static SPA (dist/) |

## Documentation

Comprehensive documentation available in `docs/`:

- **[Project Overview & PDR](docs/project-overview-pdr.md)** - Purpose, features, requirements, tech stack
- **[Code Standards](docs/code-standards.md)** - Conventions, patterns, best practices
- **[Codebase Summary](docs/codebase-summary.md)** - Directory structure, component overview, file statistics
- **[System Architecture](docs/system-architecture.md)** - Component hierarchy, data flow, build pipeline

## Project Structure

```
src/
├── components/
│   ├── sections/      # Page sections (Hero, Skills, Experience, etc.)
│   ├── common/        # Reusable components (Button, Badge, Card, etc.)
│   └── layouts/       # Page layout wrapper
├── contexts/          # Theme context provider
├── hooks/             # Animation utilities
├── types/             # TypeScript interfaces
├── data/              # Profile data source
├── styles/            # Global CSS + Tailwind
├── App.tsx            # Root component
└── main.tsx           # Entry point

public/
├── icons/             # Custom SVG icons
└── LePhuongTay-CV.pdf # PDF export
```

## Navigation

Anchor-based navigation with smooth scrolling:
- `#about` - Hero section
- `#skills` - Skills showcase
- `#experience` - Work experience
- `#projects` - Freelance projects
- `#education` - Education & activities
- `#contact` - Contact section

## Contact

- **Email:** lp.wanw@gmail.com
- **Phone:** +84 393 203 261
- **GitHub:** [github.com/lpwanw](https://github.com/lpwanw)
- **LinkedIn:** [linkedin.com/in/lpwanw](https://www.linkedin.com/in/lpwanw/)
