# Part B — Dynamic class bug

## Reproduction

The problematic pattern is:

```jsx
<div className={`bg-${color}-500 text-white p-4 rounded-lg`}>
  Dynamic color
</div>
```

If `color` is `"red"`, the browser eventually receives `bg-red-500`.

### Why development can appear to work

During development, the Tailwind development process watches source files and rebuilds its generated CSS as files change. Depending on the setup and what classes are present in the source, a dynamic class may appear to work or may be present through other discovered content.

The important point is that Tailwind's class detection is not a JavaScript evaluator. It does not execute `color` and generate every possible value of `${color}`.

### Why production breaks

Tailwind generates CSS by scanning source files for complete class candidates. A string such as:

```text
bg-${color}-500
```

does not contain the complete candidates `bg-red-500`, `bg-blue-500`, etc. If those complete class strings never appear in scanned source, the production build can omit their CSS. The browser then gets a class name with no corresponding CSS rule.

This is why dynamic construction of Tailwind utility names is unsafe.

## Fix 1 — map complete class names

```jsx
const colorClasses = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500"
};

function ColorBox({ color }) {
  return (
    <div className={`${colorClasses[color] ?? colorClasses.blue} text-white p-4 rounded-lg`}>
      Color
    </div>
  );
}
```

Now Tailwind can see the complete class candidates in source.

## Fix 2 — safelist finite dynamic classes

In `tailwind.config.js`:

```js
safelist: [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500"
]
```

This tells Tailwind to include those classes even if its normal content scan does not find them.

Use the mapping approach when the allowed choices are part of application logic. Use a safelist when classes are generated from a controlled external source and the finite set is known.
