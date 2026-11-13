# Part C — Reuse comparison

## React component extraction

A React component moves the repeated pricing-card markup into one reusable unit such as `PricingCard`. The parent supplies data through props, while the component owns the structure and behavior. This is a strong form of reuse because the abstraction is semantic: a pricing card is a real UI concept, not just a group of CSS declarations. Changes to markup, accessibility, event handling, or conditional rendering happen in one place. The same component can also be reused in other pages, tests, or product flows.

## `@apply`

`@apply` extracts repeated Tailwind utility groups into a custom CSS class. For example, the repeated card surface, badge, and button styles can be represented by `.pricing-card-apply` and related classes. This reduces long class attributes and is useful when the same visual pattern appears repeatedly. However, `@apply` primarily reuses styling; it does not create a reusable UI component or data boundary. Markup, behavior, accessibility logic, and conditional rendering still have to be managed elsewhere.

## What I would ship

For a React application, I would ship the React component extraction as the primary abstraction and use `@apply` selectively for genuinely repeated visual patterns. The component gives the team a clearer ownership boundary and scales better when the pricing card becomes interactive. `@apply` is useful as a styling tool, but I would not use it as a substitute for component architecture.
