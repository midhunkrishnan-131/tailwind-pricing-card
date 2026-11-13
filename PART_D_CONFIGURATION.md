# Part D — Tailwind configuration

The theme is extended in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      brand: {
        50: "#f5f3ff",
        100: "#ede9fe",
        500: "#7c3aed",
        600: "#6d28d9",
        700: "#5b21b6"
      }
    },
    fontFamily: {
      display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
    },
    spacing: {
      18: "4.5rem"
    }
  }
}
```

This adds:

1. A `brand` purple palette.
2. A custom `display` font family.
3. A new `18` spacing value.

## Why `extend` matters

`theme.extend` adds values to Tailwind's existing design system. Existing utilities remain available.

For example, adding:

```js
spacing: {
  18: "4.5rem"
}
```

adds `p-18`, `m-18`, `gap-18`, etc., while keeping the normal spacing scale such as `p-4` and `p-8`.

If you replace the theme instead of extending it, you can overwrite Tailwind's defaults. That means standard colors, spacing values, font families, and other tokens may disappear unless you define them again.

For a team project, `extend` is normally the safer choice when you want to add a brand system without throwing away Tailwind's base design tokens.
