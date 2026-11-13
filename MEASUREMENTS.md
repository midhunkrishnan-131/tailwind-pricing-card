# Part A — Measurements

## Hand-written CSS lines

Using the supplied source files and excluding blank lines/comments:

- Plain CSS (`src/plain.css`): 38 non-empty CSS declaration/rule lines in the source file.
- Tailwind custom CSS (`src/tailwind.css`): 15 non-empty lines, including the Tailwind directives and the `@apply` component layer.

The Tailwind number is intentionally a source-authoring measurement, not the size of the generated CSS.

## Final CSS bundle size after build/minification

Run:

```bash
npm install
npm run build
```

Then inspect:

```text
dist/assets/*.css
```

Use the generated CSS file size from your machine because Tailwind/Vite versions, minifier versions, and dependency lockfiles can affect the exact byte count.

This environment does not have the npm registry packages cached, so an authentic Tailwind production build could not be executed here. I have therefore not invented a bundle-size number.

## Build time

Run:

```bash
npm run build
```

and record the elapsed time printed by your shell or a stopwatch. Build time is machine-dependent, so reporting a fabricated number would be misleading.

## Time to make one change

Use the same change in both versions:

> “The brand colour is now purple, and the middle tier needs a badge.”

For a fair comparison, start the timer immediately before editing and stop when the browser shows the completed result.

Suggested record:

| Version | Change method | Time |
|---|---|---|
| Plain CSS | Edit CSS + markup | ____ minutes |
| Tailwind | Change utility/config + markup | ____ minutes |

Do not treat these timings as universal performance benchmarks. They are developer workflow measurements for this specific task.
