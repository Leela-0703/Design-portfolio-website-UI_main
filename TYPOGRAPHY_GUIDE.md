# Typography System Guide

## Overview

This guide documents the comprehensive typography system implemented for the INK & IMAGINATION portfolio website. The system defines 6 heading levels, body text styles, display typography, and caption styles with carefully tuned sizes, weights, line heights, and letter spacing.

## Implementation Details

### Technology Stack
- **React 18** + TypeScript
- **Vite 6.3.5** build tool
- **Tailwind CSS 4.1.12** with @tailwindcss/vite
- **Playfair Display** for brand/headings (serif)
- **System sans-serif** for UI elements

### Key Features
✅ 6 heading levels (h1-h6) with optimized typography  
✅ Body text variants (large, medium, small)  
✅ Display typography for hero sections  
✅ Caption styles for metadata and labels  
✅ Playfair Display for brand elements  
✅ System sans-serif for UI content  
✅ Line heights constrained between 1.4-1.8 for body text  
✅ Typography utilities available as Tailwind classes  

---

## Typography Specifications

### Heading Levels

All headings use **Playfair Display** serif font family for premium brand expression.

#### h1
```
Font Size: 4.5rem (72px)
Font Weight: 600
Line Height: 1.1
Letter Spacing: -0.02em (tight)
Font Family: Playfair Display, serif
```
**Usage**: Page titles, primary section headings
**Tailwind Class**: `text-h1`

#### h2
```
Font Size: 3.75rem (60px)
Font Weight: 600
Line Height: 1.15
Letter Spacing: -0.015em (tight)
Font Family: Playfair Display, serif
```
**Usage**: Major section headings
**Tailwind Class**: `text-h2`

#### h3
```
Font Size: 3rem (48px)
Font Weight: 600
Line Height: 1.2
Letter Spacing: -0.01em (tight)
Font Family: Playfair Display, serif
```
**Usage**: Subsection headings
**Tailwind Class**: `text-h3`

#### h4
```
Font Size: 2.25rem (36px)
Font Weight: 500
Line Height: 1.3
Letter Spacing: 0
Font Family: Playfair Display, serif
```
**Usage**: Minor section headings
**Tailwind Class**: `text-h4`

#### h5
```
Font Size: 1.875rem (30px)
Font Weight: 500
Line Height: 1.4
Letter Spacing: 0
Font Family: Playfair Display, serif
```
**Usage**: Card headings, labels
**Tailwind Class**: `text-h5`

#### h6
```
Font Size: 1.5rem (24px)
Font Weight: 500
Line Height: 1.4
Letter Spacing: 0
Font Family: Playfair Display, serif
```
**Usage**: Small headings, metadata headers
**Tailwind Class**: `text-h6`

---

### Body Text

All body text uses **system sans-serif** font family for excellent screen readability.
Line heights are constrained between 1.4 and 1.8 for optimal readability.

#### Body Large
```
Font Size: 1.25rem (20px)
Font Weight: 400
Line Height: 1.6
Font Family: system-ui, sans-serif
```
**Usage**: Lead paragraphs, feature descriptions
**Tailwind Class**: `text-body-lg` or `prose-lg`

#### Body Medium
```
Font Size: 1rem (16px)
Font Weight: 400
Line Height: 1.6
Font Family: system-ui, sans-serif
```
**Usage**: Default body text, paragraphs
**Tailwind Class**: `text-body-md` or `prose-md`

#### Body Small
```
Font Size: 0.875rem (14px)
Font Weight: 400
Line Height: 1.5
Font Family: system-ui, sans-serif
```
**Usage**: Secondary content, descriptions
**Tailwind Class**: `text-body-sm` or `prose-sm`

---

### Display Typography

For large, prominent text in hero sections and special presentations.

#### Display
```
Font Size: 6rem (96px)
Font Weight: 700
Line Height: 1
Letter Spacing: 0.2em (expanded)
Font Family: Playfair Display, serif
```
**Usage**: Hero text, large featured typography
**Tailwind Class**: `text-display`

---

### Caption/Small Text

For small, secondary information like labels and metadata.

#### Caption
```
Font Size: 0.75rem (12px)
Font Weight: 400
Line Height: 1.4
Letter Spacing: 0.05em (expanded)
Font Family: system-ui, sans-serif
```
**Usage**: Timestamps, small labels, metadata
**Tailwind Class**: `text-caption`

---

## Tailwind CSS Classes

The typography system is available as Tailwind utility classes:

### Heading Classes
```html
<!-- Use individual heading classes -->
<h1 class="text-h1">Large Title</h1>
<h2 class="text-h2">Section Heading</h2>
<h3 class="text-h3">Subsection</h3>
<h4 class="text-h4">Card Title</h4>
<h5 class="text-h5">Label</h5>
<h6 class="text-h6">Small Heading</h6>
```

### Body Text Classes
```html
<!-- Body text variants -->
<p class="text-body-lg">Lead paragraph with emphasis</p>
<p class="text-body-md">Default paragraph text</p>
<p class="text-body-sm">Secondary content</p>

<!-- Prose presets combine font size and line height -->
<article class="prose-md">
  <p>Default prose styling</p>
</article>
```

### Display Classes
```html
<!-- Display typography for hero sections -->
<div class="text-display">Featured Title</div>
```

### Caption Classes
```html
<!-- Small text for labels and metadata -->
<span class="text-caption">Updated 2 hours ago</span>
<label class="text-caption">Project Category</label>
```

---

## Design Tokens

The typography system is defined in `src/lib/design-tokens.ts` with TypeScript types for type safety.

### Accessing Design Tokens in Code

```typescript
import {
  headingTokens,
  bodyTokens,
  displayTokens,
  captionTokens,
  lineHeightTokens,
  letterSpacingTokens,
  fontFamilyTokens,
} from '@/lib/design-tokens';

// Access specific heading styles
const h1Styles = headingTokens.h1;
console.log(h1Styles.fontSize);     // '4.5rem'
console.log(h1Styles.lineHeight);   // 1.1
console.log(h1Styles.fontWeight);   // 600

// Access body text styles
const bodyStyles = bodyTokens.medium;
console.log(bodyStyles.fontSize);   // '1rem'
console.log(bodyStyles.lineHeight); // 1.6
```

### Validation Functions

The design tokens include validation functions:

```typescript
import {
  isValidBodyLineHeight,
  isValidSpacingValue,
  isValidLetterSpacing,
} from '@/lib/design-tokens';

// Validate body text line height (must be 1.4-1.8)
isValidBodyLineHeight(1.6);  // true
isValidBodyLineHeight(2.0);  // false

// Validate spacing is 4px multiple
isValidSpacingValue(16);     // true (16 % 4 === 0)
isValidSpacingValue(15);     // false (15 % 4 !== 0)

// Validate letter-spacing by category
isValidLetterSpacing('-0.02em', 'heading');   // true (tight)
isValidLetterSpacing('0.05em', 'caption');    // true (expanded)
```

---

## CSS Customization

### Direct CSS Approach

If you need to apply typography styles directly in CSS:

```css
@layer utilities {
  .my-custom-heading {
    font-size: 3rem;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.01em;
    font-family: 'Playfair Display', Georgia, serif;
  }
}
```

### Tailwind @apply Directive

Combine multiple typography utilities:

```css
@layer components {
  .featured-title {
    @apply text-h1 text-brandBlue mb-6;
  }
  
  .article-body {
    @apply max-w-prose prose-md space-y-4;
  }
}
```

---

## Responsive Typography

### Mobile Adjustments

For optimal mobile readability, adjust heading sizes on smaller screens:

```html
<h1 class="text-4xl md:text-6xl lg:text-7xl">
  Responsive Heading
</h1>

<p class="text-body-sm md:text-body-md lg:text-body-lg">
  Responsive body text
</p>
```

### Recommended Breakpoint Scale

```
Mobile (<768px):   30-40% reduction in heading sizes
Tablet (768-1024): Standard sizes from Tailwind config
Desktop (>1024):   Full-size typography
```

Example:
```html
<!-- h1: 72px → 48px on mobile → 60px on tablet → 72px on desktop -->
<h1 class="text-3xl md:text-5xl lg:text-7xl">
  Responsive Title
</h1>
```

---

## Line Length and Readability

### Optimal Content Width

For body text readability, constrain content to ~70 characters:

```html
<article class="max-w-prose mx-auto">
  <p class="prose-md">
    Content with optimal line length for reading...
  </p>
</article>
```

**Available Classes**:
- `max-w-prose` - Sets max-width to 65 characters
- `max-w-3xl` - 48rem (wider for UI layouts)
- `max-w-7xl` - 80rem (full content width)

---

## Font Import

The typography system uses two Google Fonts loaded in `src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
```

**Fonts Used**:
1. **Playfair Display** (serif) - weights: 400, 500, 600, 700, 800, 900
   - Used for brand elements, headings, display text
   
2. **Inter** (sans-serif) - weights: 300, 400, 500, 600, 700, 800, 900
   - Fallback for system sans-serif when exact font not needed

---

## Color Palette

The typography system integrates with the expanded color palette:

### Brand Colors
- `brandIndigo`: #4F46E5
- `brandBlue`: #3B82F6
- `brandCyan`: #06B6D4
- `brandViolet`: #8B5CF6
- `brandPink`: #EC4899

### Color Usage with Typography

```html
<!-- Colored headings -->
<h2 class="text-h2 text-brandBlue">Section with Color</h2>
<h3 class="text-h3 text-brandViolet">Subsection</h3>

<!-- Colored body text -->
<p class="prose-md text-foreground/70">Secondary text</p>
```

### Contrast Compliance

All typography combinations maintain WCAG 2.1 Level AA contrast requirements:
- Normal text: **4.5:1 minimum**
- Large text (≥18px): **3:1 minimum**

---

## Examples

### Hero Section

```jsx
<section className="space-y-8 text-center">
  <div className="text-display text-brandViolet">
    INK & IMAGINATION
  </div>
  
  <h1 className="text-h1 font-playfair">
    Leela Sri Harshini
  </h1>
  
  <p className="text-h5 text-foreground/80 max-w-3xl mx-auto">
    Product design, brand systems, and visual storytelling
  </p>
  
  <p className="prose-md text-foreground/60 max-w-prose mx-auto">
    Specialized in creating meaningful digital experiences 
    that combine thoughtful design with strategic branding.
  </p>
</section>
```

### Card Component

```jsx
<article className="space-y-4">
  <h3 className="text-h3 font-playfair">Project Title</h3>
  
  <div className="space-y-2">
    <p className="prose-md text-foreground/70">
      Project description and details
    </p>
  </div>
  
  <footer className="pt-4">
    <span className="text-caption text-foreground/50">
      UI/UX Design · 2024
    </span>
  </footer>
</article>
```

### Article Layout

```jsx
<article className="max-w-prose mx-auto space-y-8">
  <header>
    <h1 className="text-h1 mb-4">Article Title</h1>
    <p className="text-body-lg text-foreground/70">
      Lead paragraph with context
    </p>
  </header>
  
  <section className="space-y-4">
    <h2 className="text-h2 mt-8">Section Heading</h2>
    <p className="prose-md leading-relaxed">
      Body content with optimal line height and length
    </p>
  </section>
  
  <aside>
    <p className="text-caption text-foreground/50">
      Last updated: January 15, 2024
    </p>
  </aside>
</article>
```

---

## Configuration Files

### tailwind.config.ts

Main configuration file defining typography utilities:

```typescript
theme: {
  extend: {
    fontFamily: {
      playfair: ['"Playfair Display"', 'Georgia', 'serif'],
      sans: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
    },
    fontSize: {
      // Heading definitions
      'h1': ['4.5rem', { lineHeight: '1.1', ... }],
      'h2': ['3.75rem', { lineHeight: '1.15', ... }],
      // ... more headings
      
      // Body text
      'body-lg': ['1.25rem', { lineHeight: '1.6', ... }],
      'body-md': ['1rem', { lineHeight: '1.6', ... }],
      'body-sm': ['0.875rem', { lineHeight: '1.5', ... }],
    },
  },
}
```

### src/styles/theme.css

Defines base typography styles for HTML elements:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', Georgia, serif;
}

body {
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}
```

### src/styles/tailwind.css

Defines Tailwind utility classes for typography:

```css
@layer utilities {
  .text-h1 {
    font-size: 4.5rem;
    line-height: 1.1;
    letter-spacing: -0.02em;
    font-weight: 600;
    font-family: 'Playfair Display', Georgia, serif;
  }
  // ... more utilities
}
```

---

## Best Practices

### 1. Use Semantic HTML

```html
<!-- ✅ Good -->
<h1 class="text-h1">Page Title</h1>
<p class="prose-md">Body text</p>
<small class="text-caption">Metadata</small>

<!-- ❌ Avoid -->
<div class="text-h1">Page Title</div>
<div class="prose-md">Body text</div>
```

### 2. Respect Line Height Constraints

Body text line heights must be **1.4-1.8** for readability:

```html
<!-- ✅ Good -->
<p class="prose-md leading-relaxed">Content</p>

<!-- ❌ Avoid -->
<p class="text-body-md leading-tight">Content</p>
```

### 3. Use Font Families Appropriately

```html
<!-- ✅ Correct -->
<h1 class="font-playfair">Heading (serif)</h1>
<p class="font-sans">Body text (sans-serif)</p>

<!-- ❌ Wrong -->
<h1 class="font-sans">Heading (should be serif)</h1>
<p class="font-playfair">Body (should be sans-serif)</p>
```

### 4. Maintain Visual Hierarchy

```html
<!-- ✅ Good hierarchy -->
<h1 class="text-h1 font-bold">Main Title</h1>
<h2 class="text-h2 font-semibold">Subtitle</h2>
<p class="prose-md font-normal">Body text</p>

<!-- ❌ Poor hierarchy -->
<p class="prose-md">Main Title</p>
<h2 class="text-h1">Subtitle</h2>
<h3 class="text-body-lg">Body text</h3>
```

### 5. Optimize Content Width

```html
<!-- ✅ Optimal readability -->
<article class="max-w-prose mx-auto">
  <p class="prose-md">Content constrained to ~70 chars</p>
</article>

<!-- ❌ Too wide -->
<p class="prose-md">Content spans full viewport</p>
```

---

## Testing Typography

The design tokens include TypeScript tests validating:
- ✅ All heading levels defined with proper sizes
- ✅ Body text line heights between 1.4-1.8
- ✅ Letter spacing hierarchy (headings tighter than captions)
- ✅ Font family consistency (Playfair for headings, sans for body)
- ✅ Font weight appropriateness

See `src/lib/design-tokens.test.ts` for complete test coverage.

---

## Troubleshooting

### Typography Classes Not Applied

**Problem**: Tailwind classes like `text-h1` not working

**Solution**: 
1. Ensure `tailwind.css` is imported in your app
2. Check that `tailwind.config.ts` is properly configured
3. Rebuild the project: `npm run build`
4. Check browser console for CSS errors

### Fonts Not Loading

**Problem**: Playfair Display not displaying correctly

**Solution**:
1. Verify `src/styles/fonts.css` is imported
2. Check network tab in DevTools for font loading errors
3. Ensure Google Fonts CDN is accessible
4. Add local font fallbacks if needed

### Line Height Issues

**Problem**: Body text line height outside 1.4-1.8 range

**Solution**:
1. Use `text-body-*` classes which enforce constraints
2. Or use `leading-relaxed` (1.625) or `leading-loose` (2)
3. Avoid custom line heights outside the range
4. Test with `isValidBodyLineHeight()` function

---

## Additional Resources

- [Playfair Display on Google Fonts](https://fonts.google.com/specimen/Playfair+Display)
- [Tailwind Typography Plugin](https://tailwindcss.com/docs/typography-plugin)
- [WCAG 2.1 Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [Readability: Optimal Line Length](https://baymard.com/line-length-readability)

---

## Summary

The typography system provides a comprehensive, production-ready solution for consistent, accessible, and beautiful typography throughout the INK & IMAGINATION portfolio. By leveraging Tailwind CSS utilities and maintaining strict design token validation, the system ensures visual consistency while supporting rapid development and future enhancements.
