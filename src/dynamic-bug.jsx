import React from "react";

// Part B — intentionally broken pattern:
// Tailwind's production scanner cannot reliably see the final class because
// the class name is assembled dynamically.
export function BrokenColor({ color }) {
  return <div className={`bg-${color}-500 text-white p-4 rounded-lg`}>Dynamic color</div>;
}

// Fix 1: map complete class strings so Tailwind can statically detect them.
const colorClasses = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500"
};

export function MappedColor({ color }) {
  return <div className={`${colorClasses[color] ?? colorClasses.blue} text-white p-4 rounded-lg`}>Mapped color</div>;
}

// Fix 2: safelist the generated classes in tailwind.config.js.
// The component can keep its interpolation if the finite set of values is
// explicitly safelisted:
// safelist: ["bg-red-500", "bg-blue-500", "bg-green-500"]
export function SafelistedColor({ color }) {
  return <div className={`bg-${color}-500 text-white p-4 rounded-lg`}>Safelisted color</div>;
}
