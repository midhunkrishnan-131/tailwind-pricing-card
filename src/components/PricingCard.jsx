// Part C: React component extraction.
export function PricingCard({ plan, variant = "tailwind" }) {
  return (
    <article className={variant === "apply" ? "pricing-card-apply" : "pricing-card-apply"}>
      {plan.highlighted && <span className="pricing-card-apply__badge">Most popular</span>}
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-300">{plan.description}</p>
      <div className="mt-6 text-4xl font-extrabold">{plan.price}<span className="text-sm font-medium text-slate-500">/month</span></div>
      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
      </ul>
      <button className="pricing-card-apply__button">{plan.highlighted ? "Start Pro" : "Choose plan"}</button>
    </article>
  );
}
