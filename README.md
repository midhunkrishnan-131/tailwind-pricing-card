# 🎨 Tailwind CSS vs Plain CSS — Pricing Component Lab

A comprehensive comparative study and interactive lab evaluating **Tailwind CSS** versus **Plain CSS** through the implementation of a modern, responsive, 3-tier SaaS pricing component in React and Vite.

---

## 📌 Project Overview

This project was built to explore the developer experience, maintainability, performance, and architecture of utility-first CSS compared to semantic vanilla CSS.

Both styling paradigms are implemented side-by-side to render identical UI specifications:
- **Part A:** Direct UI parity — 3 pricing tiers (Starter, Pro, Scale) with featured tier emphasis, responsive grid, interactive hover states, and dark mode toggle.
- **Part B:** Explanation and fixes for Tailwind's class detection mechanism and dynamic class generation bug.
- **Part C:** Architecture comparison: React component extraction vs. Tailwind `@apply` abstraction.
- **Part D:** Custom design system tokens (`theme.extend`) in Tailwind configuration (colors, fonts, spacing).
- **Part E:** In-depth evaluation report detailing maintainability, performance, design consistency, and DX.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- `npm`

### Installation

```bash
# Clone the repository
git clone https://github.com/midhunkrishnan-131/tailwind-pricing-card.git

# Navigate into the project folder
cd tailwind-pricing-card

# Install dependencies
npm install
```

### Running Locally

```bash
# Start Vite development server
npm run dev
```

Visit the local server address displayed in your terminal (typically `http://localhost:5173`).

### Production Build

```bash
# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Repository Structure

```text
├── src/
│   ├── components/
│   │   └── PricingCard.jsx              # Reusable React component extraction
│   ├── dynamic-bug.jsx                  # Demonstration of dynamic class bug + fixes
│   ├── main.jsx                         # Main app rendering side-by-side implementations
│   ├── plain.css                        # Semantic plain CSS styling & CSS variables
│   └── tailwind.css                     # Tailwind entry point + @apply examples
├── DYNAMIC_CLASS_BUG.md                 # Detailed breakdown of Tailwind compilation engine
├── MEASUREMENTS.md                      # Build and bundle size metrics
├── PART_C_COMPARISON.md                 # Component extraction vs @apply comparison
├── PART_D_CONFIGURATION.md              # Theme customization documentation
├── PART_E_300_WORDS.md                  # Comprehensive comparative analysis
├── SUBMISSION_CHECKLIST.md              # Requirements and completion checklist
├── tailwind.config.js                   # Extended Tailwind design tokens (brand, fonts, spacing)
├── tailwind.config.dynamic-example.js   # Safelist configuration example
├── vite.config.js                       # Vite configuration
└── package.json                         # Project scripts and dependencies
```

---

## ✨ Features & Assignment Breakdown

### 1. Part A — UI Implementation Parity
- **Tier Structure:** Starter ($9), Pro ($29, highlighted/featured), Scale ($79).
- **Dark Mode:** Built-in theme switcher toggling between light and dark modes across both Plain CSS and Tailwind implementations.
- **Responsive Layout:** Mobile-first vertical card stack transitioning to a 3-column desktop layout.
- **Micro-interactions:** Smooth translation, elevation, and button hover states.

### 2. Part B — Dynamic Class Bug & Fixes
Tailwind purges unused CSS using static regex scanning at build time. Dynamic string interpolation like:
```jsx
// ❌ Broken: Tailwind's regex cannot find this at build time
<div className={`bg-${tone}-500`} />
```
This repository explains why this fails and demonstrates two idiomatic solutions:
1. **Object / Map Lookup:** Full, un-interpolated class names mapped to props.
2. **Configuration Safelist:** Explicitly declared pattern safelist in `tailwind.config.js`.

### 3. Part C — Component Extraction vs `@apply`
Compares maintainability when scaling utility classes:
- **Component Abstraction (Recommended):** Encapsulating utilities inside React components (`PricingCard.jsx`).
- **`@apply` Utility Bundle:** Creating semantic classes using `@apply` in CSS (`tailwind.css`), highlighting the trade-offs in CSS bundle size and abstraction leakage.

### 4. Part D — Design Token Configuration
Custom tokens configured in `tailwind.config.js`:
- **Brand Palette:** 10-shade custom brand color system.
- **Typography:** Custom font family mappings.
- **Spacing Token:** Dedicated design system spacing increment.

### 5. Part E — Comparative Analysis
A structured written evaluation contrasting:
- Developer Velocity & Context Switching
- CSS Bundle Overhead & Scalability
- Design System Consistency & Token Enforcement
- Long-term Codebase Maintainability

---

## 🛠️ Built With

- **[React](https://react.dev/)** — UI Library
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** — Frontend build tool and dev server
- **[PostCSS](https://postcss.org/)** & **[Autoprefixer](https://github.com/postcss/autoprefixer)** — CSS transformation and vendor prefixing

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
