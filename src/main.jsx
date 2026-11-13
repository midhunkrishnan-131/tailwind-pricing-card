import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./plain.css";
import "./tailwind.css";

const plans = [
  {
    name: "Starter",
    price: "$9",
    description: "For individuals testing the workflow.",
    features: ["1 project", "Basic analytics", "Community support"],
    tone: "slate"
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing teams that need more power.",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "Team roles"],
    tone: "brand",
    highlighted: true
  },
  {
    name: "Scale",
    price: "$79",
    description: "For teams shipping at enterprise pace.",
    features: ["Everything in Pro", "SSO & audit logs", "Dedicated support"],
    tone: "slate"
  }
];

function Header({ dark, setDark }) {
  return (
    <header className="site-header">
      <div>
        <p className="eyebrow">UI BUILD LAB</p>
        <h1>Pricing that scales with you.</h1>
        <p className="subtitle">The same component is implemented once with plain CSS and once with Tailwind CSS.</p>
      </div>
      <button className="theme-toggle" onClick={() => setDark(!dark)}>
        {dark ? "☀ Light" : "☾ Dark"}
      </button>
    </header>
  );
}

function PlainPricingCard({ plan }) {
  return (
    <article className={`plain-card ${plan.highlighted ? "plain-card--featured" : ""}`}>
      {plan.highlighted && <span className="plain-badge">Most popular</span>}
      <div className="plain-card-top">
        <h3>{plan.name}</h3>
        <p>{plan.description}</p>
      </div>
      <div className="plain-price">{plan.price}<span>/month</span></div>
      <ul>{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
      <button className="plain-cta">{plan.highlighted ? "Start Pro" : "Choose plan"}</button>
    </article>
  );
}

function TailwindPricingCard({ plan }) {
  const featured = plan.highlighted;
  return (
    <article className={[
      "relative flex flex-col rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl",
      "bg-white text-slate-900 dark:bg-slate-900 dark:text-white",
      featured
        ? "border-brand-500 ring-2 ring-brand-500/20 lg:-translate-y-2"
        : "border-slate-200 dark:border-slate-700",
    ].join(" ")}>
      {featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white shadow">
          Most popular
        </span>
      )}
      <div>
        <h3 className="text-xl font-bold">{plan.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-300">{plan.description}</p>
      </div>
      <div className="mt-6 text-4xl font-extrabold tracking-tight">{plan.price}<span className="text-sm font-medium text-slate-500">/month</span></div>
      <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
        {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
      </ul>
      <button className={[
        "mt-8 rounded-xl px-4 py-3 font-semibold transition hover:brightness-110",
        featured ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
      ].join(" ")}>
        {featured ? "Start Pro" : "Choose plan"}
      </button>
    </article>
  );
}

function PricingSection({ mode }) {
  const Card = mode === "plain" ? PlainPricingCard : TailwindPricingCard;
  return (
    <section className={mode === "plain" ? "pricing-section" : "tw-section"}>
      <div className={mode === "plain" ? "pricing-grid" : "mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:items-stretch"}>
        {plans.map((plan) => <Card key={plan.name} plan={plan} />)}
      </div>
    </section>
  );
}

// Part C: reusable React component version.
// The repeated pricing-card markup is extracted into PlainPricingCard/TailwindPricingCard.
// Part C's @apply solution is in src/components/pricing-card.css.
function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "app dark" : "app"}>
      <Header dark={dark} setDark={setDark} />
      <main>
        <div className="section-label">A — Plain CSS</div>
        <PricingSection mode="plain" />
        <div className="section-label">A — Tailwind CSS</div>
        <PricingSection mode="tailwind" />
      </main>
      <footer>React + Vite · Pricing UI lab</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
