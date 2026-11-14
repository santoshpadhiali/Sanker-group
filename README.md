# NovaPulse AI — Autonomous Workflow & Intelligence Platform

> **SANKAR GROUP | Front-End Development Internship Assignment (48-Hour Deadline)**  
> Built to Make History.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-100%25_Responsive-6366F1?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

## 🌟 1. Project Overview & Product Concept

**NovaPulse AI** is a modern, high-converting SaaS landing page designed for an enterprise-grade autonomous workflow orchestration platform. It enables engineering, product, and operations teams to connect 100+ enterprise data sources, orchestrate cooperating AI agent swarms, and automate mission-critical tasks with millimeter precision and SOC-2 Type II security.

This project was built to satisfy all evaluation criteria of the **Sankar Group Front-End Development Internship Assessment**:
- **Clean Visual Hierarchy & Modern SaaS Aesthetic:** High-end dark/light theme, glassmorphism backdrops, subtle glow accents, and crisp typography.
- **100% Responsive Design:** Smooth fluid scaling across mobile (320px–480px), tablet (768px–1024px), and desktop (1280px+).
- **Rich Working Interactions:** Live interactive SaaS dashboard simulation, monthly/annual pricing recalculator, dynamic ROI team calculator, expandable FAQ accordion, mobile slide-in drawer, full client-side form validation with accessible error messaging, and floating toast notifications.
- **Zero-Dependency Core:** Runs natively in any browser with pure vanilla HTML5, CSS3, and JavaScript — no build steps, bundlers, or heavy external frameworks required to view and test.

---

## 📸 2. Screenshots & Layout Previews

All high-resolution preview screenshots are stored in the [`screenshots/`](screenshots/) directory:

| Viewport | Preview File | Description |
| :--- | :--- | :--- |
| **Desktop Hero & Navbar** | [`screenshots/desktop-preview.png`](screenshots/desktop-preview.png) | High-definition desktop layout showing sticky glassmorphic navigation, hero typography, CTA buttons, and ambient background glow. |
| **Desktop Full-Page** | [`screenshots/fullpage-desktop.png`](screenshots/fullpage-desktop.png) | Complete desktop journey: Hero, Interactive Dashboard, Logos, Features, How It Works, ROI Calculator, Pricing, Testimonials, FAQ, Contact Form, and Footer. |
| **Mobile Viewport** | [`screenshots/mobile-preview.png`](screenshots/mobile-preview.png) | Mobile-optimized layout (390px/iPhone) featuring responsive hamburger menu, stacked CTAs, and wrapped notification badge. |
| **Tablet Viewport** | [`screenshots/tablet-preview.png`](screenshots/tablet-preview.png) | Tablet layout (820px/iPad) demonstrating fluid grid adaptation. |
| **Interactive Pricing & Features** | [`screenshots/desktop-features-pricing.png`](screenshots/desktop-features-pricing.png) | Detailed view of the 6 core feature cards and the interactive SaaS dashboard mockup. |

---

## 🚀 3. Quick Start & Local Run Instructions

This project was engineered to provide **zero-friction evaluation**. You can run it immediately using any of the methods below:

### Option A: Direct Browser Launch (Simplest & Instant)
No server or build process required!
1. Navigate to the project folder: `d:\INternshalll\Sankar Group`
2. Double-click **`index.html`** or right-click and choose **Open with Google Chrome / Microsoft Edge / Safari / Firefox**.

### Option B: Local Server via Python 3
```bash
# From the project directory:
python -m http.server 3000
```
Open your browser at: **`http://localhost:3000`**

### Option C: Local Server via Node.js / NPM
```bash
# Using npx (no install needed):
npx serve -l 3000 .

# Or using npm:
npm start
```
Open your browser at: **`http://localhost:3000`**

### Option D: One-Click Online Deployment
This project is 100% static and ready for instant drag-and-drop or Git deployment to:
- **GitHub Pages:** Push to repository and enable GitHub Pages on `main` branch.
- **Vercel:** Run `vercel` or import the GitHub repository.
- **Netlify:** Drag and drop the folder directly onto Netlify Drop.

---

## 📑 4. Required Website Sections Implemented

| Required Section | Implementation Details in NovaPulse AI |
| :--- | :--- |
| **1. Navigation Bar** | Sticky header with `backdrop-filter: blur(14px)`, custom SVG glowing logo, desktop links (Features, How It Works, ROI, Pricing, Customers, FAQ), Dark/Light theme toggle, "Sign In" and "Request Demo" action buttons, plus mobile hamburger toggle with animated transition. |
| **2. Hero Section** | Eye-catching headline with electric indigo-to-magenta gradient text, value proposition subheadline, dual CTAs ("Start Free 14-Day Trial" & "Watch 2-Min Interactive Demo"), micro-copy guarantee items, and an **interactive SaaS Dashboard visual mockup** with live counters, operational status indicator, and animated workflow pipeline. |
| **3. Features Section** | 6 distinct interactive cards arranged in a responsive grid, showcasing: Autonomous Multi-Agent Swarms, 100+ Enterprise Connectors, SOC-2 Security & Guardrails, Real-Time Predictive Analytics, Natural Language Workflow Builder, and Human-in-the-Loop Governance. Hover micro-interactions include gradient top border reveals, elevation lifts, and icon rotations. |
| **4. About / How It Works** | 3-step interactive tabbed workflow (1. Connect & Ingest → 2. Define AI Playbooks → 3. Deploy, Monitor & Scale). Clicking each step dynamically swaps the live visual preview card on the right with a smooth fade-in animation. |
| **5. Pricing Section** | 3 transparent plans: **Starter** ($29/mo), **Professional** (Most Popular glowing card, $79/mo), and **Enterprise** ($199/mo). Includes an interactive **Monthly vs Annual toggle switch** that dynamically calculates and displays a **20% discount** with smooth numeric transitions. Selecting any plan opens the booking modal with that plan pre-filled! |
| **6. Interactive ROI Calculator** | Built-in interactive slider allowing teams to adjust headcount (5 to 250 members) and instantly see calculated monthly hours saved, annual cost savings, and speed-to-market multiplier. |
| **7. Testimonials & Social Proof** | Real customer testimonials with 5-star ratings, author credentials, company badges, and a trusted-by brand logo strip (TechFlow, CloudVect, Nexus Data, PulseLine, Hyperscale). |
| **8. Interactive FAQ Accordion** | Expandable/collapsible accordion answering 5 key customer concerns (deployment time, data privacy/zero AI training policy, human approvals, free trial terms, and custom API connections). Smooth CSS height transitions and ARIA attributes. |
| **9. Contact & Demo Request Section** | Comprehensive request form with dual-column layout: direct company contact info (email, phone, SF headquarters) on the left, and an interactive form on the right with full client-side validation (name, email regex, company, team size, use case, terms agreement), loading simulation, and instant confirmation success banner. |
| **10. Footer** | 4-column structured footer with brand overview, product links, resources, company/legal pages, working newsletter subscription form with validation, social links (GitHub, X, LinkedIn, Discord), and copyright notice. |

---

## ⚡ 5. Functional & Interactive Features

1. **Dark & Light Mode Theme Switcher:**
   - Seamlessly toggles between sleek modern SaaS dark mode (`#07090E`) and crisp light mode (`#F8FAFC`).
   - Automatically detects OS system preferences (`prefers-color-scheme`) and persists user preference in `localStorage`.
2. **Interactive Hero Simulation:**
   - Click the **"Run Simulation"** button inside the hero dashboard canvas to observe real-time pipeline node transitions from Data Ingest to AI Reasoning to Action Dispatch, with live console output updates and ops throughput metric spikes.
3. **Interactive ROI Estimator:**
   - Dynamically recomputes monthly hours saved and dollar savings based on team size via slider input.
4. **Billing Toggle Recalculation:**
   - Monthly / Annual toggle dynamically modifies all price tags ($29 → $24, $79 → $64, $199 → $159) with smooth CSS transforms and updates the selected billing state.
5. **Modal System:**
   - Tabbed modal supporting both "Book a Demo" and "Start Free Trial" views.
   - Accessible dialog with ESC key close, click-outside backdrop dismissal, and auto-focus management.
6. **Robust Client-Side Form Validation:**
   - Real-time inline validation removing error states as soon as valid input is entered.
   - RFC 5322 compatible email format regex verification.
   - Name character minimums and required selection dropdown checks.
   - Simulated loading spinner on submit (800ms) followed by an accessible confirmation banner.
7. **Global Toast Notification System:**
   - Floating notifications at the bottom-right confirming user actions (e.g., plan selection, demo booking, theme switch, newsletter subscription).
8. **Floating Back-to-Top Button:**
   - Appears dynamically after scrolling past 450px and smoothly scrolls back to the top.

---

## 🛠️ 6. Technologies Used

- **HTML5:** Semantic document structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>`), SEO meta tags, OpenGraph data, and accessible ARIA attributes (`aria-expanded`, `aria-label`, `aria-live`, `role="tab"`).
- **CSS3:** Custom modular architecture (`style.css`, `responsive.css`), CSS Custom Properties (Design Tokens), Flexbox, CSS Grid, `clamp()` fluid typography, glassmorphism (`backdrop-filter`), CSS keyframe animations, and custom scrollbars.
- **Modern Vanilla JavaScript (ES6+):**
  - Modular structure (`app.js`, `pricing-toggle.js`, `form-validation.js`).
  - `IntersectionObserver` API for active navigation tracking.
  - Event delegation, DOM manipulation, and input regex validation.
  - `localStorage` API for theme persistence.

---

## 📁 7. File Structure

```
d:\INternshalll\Sankar Group\
├── index.html                       # Primary semantic HTML5 landing page
├── package.json                     # NPM configuration and local run scripts
├── README.md                        # Complete project documentation and guide
├── submission-explanation.txt        # 5-8 line design choice and challenge summary
├── css/
│   ├── style.css                    # Main design system tokens, layout, and component styles
│   └── responsive.css               # Mobile and tablet responsive breakpoint refinements
├── js/
│   ├── app.js                       # Theme toggle, smooth scroll, mobile drawer, ROI calculator, FAQ
│   ├── form-validation.js           # Real-time input validation, modal submission, toast alerts
│   └── pricing-toggle.js            # Monthly/Annual billing recalculation logic
├── screenshots/
│   ├── desktop-preview.png          # High-resolution desktop hero preview
│   ├── desktop-features-pricing.png # Desktop feature grid and dashboard preview
│   ├── fullpage-desktop.png         # Full-length continuous desktop layout
│   ├── mobile-preview.png           # Mobile viewport preview (390px/iPhone)
│   ├── fullpage-mobile.png          # Full-length continuous mobile layout
│   └── tablet-preview.png           # Tablet viewport preview (820px/iPad)
└── assets/
    └── icons/                       # SVG icon assets
```

---

## 💡 8. Submission Explanation (Design Choices & Challenges Solved)

> *As required by Section 5 of the Internship Assignment:*
>
> 1. **Visual Hierarchy & Product Identity:** I designed **NovaPulse AI** with a high-contrast dark aesthetic inspired by modern enterprise leaders (Linear, Supabase, Vercel), pairing deep slate backgrounds with electric indigo/magenta gradients to establish immediate technical credibility and focus visitor attention on primary calls-to-action.
> 2. **Modular Architecture:** Instead of relying on heavy third-party CSS or JS frameworks, I built a pure vanilla CSS design token system with custom variables and decoupled JavaScript modules (`app.js`, `form-validation.js`, `pricing-toggle.js`), guaranteeing blazing-fast load times, zero compilation steps, and seamless cross-browser rendering.
> 3. **Conversion-Driven Interactions:** Beyond static mockups, I implemented active micro-interactions including a live workflow pipeline simulation, an interactive ROI team slider, dynamic monthly/annual price recalculations, and accessible modal dialogs with client-side regex validation and toast confirmations.
> 4. **Responsive Challenge Solved:** During mobile testing on sub-400px viewports, pseudo-element glow transforms and wide window chrome headers caused subtle horizontal overflow. I resolved this by applying GPU-accelerated linear-gradient shine masks with paint containment (`contain: paint`), wrapping top notifications, and switching pipeline nodes into an adaptive vertical sequence with animated connector dots.

---

## 👨‍💻 9. Evaluation Checklist

- [x] **Navigation Bar:** Logo, navigation links, Sign In / Get Started CTAs, Theme toggle, Mobile drawer.
- [x] **Hero Section:** High-converting headline, subheadline, dual CTAs, guarantees, interactive dashboard visual.
- [x] **Features:** 6 distinct feature blocks with icons, tags, and hover micro-interactions.
- [x] **About / How It Works:** 3-step interactive tabs with dynamic live visual preview panels.
- [x] **Pricing:** 3 scalable tiers with interactive Monthly/Annual billing toggle and 20% discount calculation.
- [x] **Contact & Footer:** Validated demo request form with error states and success banner, plus 4-column footer with newsletter.
- [x] **Working Navigation:** Smooth anchor scrolling with sticky header offset and active link highlighting.
- [x] **Interactive Buttons & Forms:** Real-time client-side regex input validation, loading spinner simulation, toast notifications.
- [x] **100% Responsive:** Tested across mobile (390px), tablet (820px), and desktop (1440px).
- [x] **Screenshots:** Desktop, mobile, tablet, and full-page previews captured and linked.
- [x] **Submission Package:** Source code, README, package.json, and submission summary ready for evaluation.

---
*Built with passion for the **Sankar Group Front-End Development Internship Evaluation**.*
