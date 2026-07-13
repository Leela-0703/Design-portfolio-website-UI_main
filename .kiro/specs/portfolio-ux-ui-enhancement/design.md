# Design Document: Portfolio UX/UI Enhancement

## 1. Introduction

This design document outlines the technical architecture and implementation strategy for transforming the "INK & IMAGINATION" portfolio website into an industry-leading professional showcase. The enhancement focuses on sophisticated visual refinement through an expanded color system, complete hero section redesign, and premium interaction patterns while maintaining the existing technology stack.

### 1.1 Technology Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Animation**: Framer Motion (motion 12.23.24)
- **Routing**: React Router 7.13.0
- **Typography**: Playfair Display (serif) for brand, system sans-serif for UI

### 1.2 Design Principles

1. **Sophisticated Visual Refinement**: Move away from overused gradients to a multi-color palette with selective gradient application
2. **Premium Interactions**: Custom cursor, parallax effects, and micro-animations create tactile feedback
3. **Progressive Enhancement**: Core content accessible without JavaScript, interactions enhance experience
4. **Performance First**: Hardware-accelerated animations, lazy loading, and optimized assets
5. **Accessibility by Design**: WCAG 2.1 Level AA compliance with keyboard navigation and reduced motion support

## 2. Architecture Overview

### 2.1 System Architecture

```
Portfolio_System
├── Presentation Layer
│   ├── Hero_Section (full viewport landing)
│   ├── Project_Showcase (featured & supporting work)
│   ├── Navigation_Component (fixed header)
│   └── Footer_Component (contact & CTA)
├── Interaction Layer
│   ├── Cursor_Interaction (custom cursor system)
│   ├── Parallax_Effect (depth perception)
│   ├── Scroll_Progress_Indicator
│   └── Animation_Orchestrator
├── Design System Layer
│   ├── Color_System (multi-color palette)
│   ├── Typography_Hierarchy
│   ├── Spacing_Scale (4px-based)
│   └── Animation_Timing (duration & easing tokens)
└── Accessibility Layer
    ├── Keyboard Navigation
    ├── Screen Reader Support
    ├── Reduced Motion Handling
    └── Focus Management
```

### 2.2 Component Hierarchy

```
App
├── ScrollProgressIndicator
├── CustomCursor (desktop only)
├── Navigation
│   ├── Logo
│   ├── NavLinks
│   └── ResumeButton
├── HeroSection
│   ├── BrandLogo
│   ├── DesignerInfo
│   ├── RoleBadges
│   ├── Tagline
│   ├── CTAButtons
│   ├── ParallaxBackground
│   └── ScrollIndicator
├── ProjectShowcase
│   ├── FeaturedProjects[]
│   │   ├── ProjectImage (with parallax)
│   │   ├── ProjectInfo
│   │   └── ViewCaseStudyButton
│   └── SupportingWork[]
└── Footer
    ├── SocialLinks[]
    ├── DownloadButtons
    ├── GradientLine
    ├── RotatingDiamond
    └── NavigationLinks
```


## 3. Color System Enhancement

### 3.1 Multi-Color Palette

The expanded color system moves beyond the current purple-blue-cyan scheme to provide rich visual variety while maintaining coherence.

#### 3.1.1 Base Colors

```typescript
const baseColors = {
  // Brand core (existing refinement)
  brandIndigo: '#4F46E5',
  brandBlue: '#3B82F6',
  brandCyan: '#06B6D4',
  
  // Expanded palette
  brandViolet: '#8B5CF6',
  brandPink: '#EC4899',
  brandRose: '#F43F5E',
  brandAmber: '#F59E0B',
  brandEmerald: '#10B981',
  brandTeal: '#14B8A6',
  brandSky: '#0EA5E9',
  brandOrange: '#F97316',
  brandLime: '#84CC16',
} as const;
```

#### 3.1.2 Semantic Colors

```typescript
const semanticColors = {
  success: '#10B981',      // Emerald
  warning: '#F59E0B',      // Amber
  error: '#EF4444',        // Red
  info: '#3B82F6',         // Blue
} as const;
```

#### 3.1.3 Opacity Variants

Each base color provides opacity variants using Tailwind's opacity utilities:
- 100% (default, /100)
- 80% (/80)
- 60% (/60)
- 40% (/40)
- 20% (/20)
- 10% (/10)
- 5% (/5)

Implementation:
```tsx
<div className="bg-brandIndigo/10">    // 10% opacity
<div className="text-brandPink/80">    // 80% opacity
<div className="border-brandTeal/40">  // 40% opacity
```

### 3.2 Selective Gradient Application

Gradients are limited to **5 designated zones maximum per page** with **3 colors maximum per gradient**.

#### 3.2.1 Designated Gradient Zones

1. **Hero Section Background** (subtle, 10-20% opacity)
2. **Ampersand Character** (brand signature element)
3. **Scroll Progress Indicator** (single gradient)
4. **Footer Vertical Line** (representing shared "I")
5. **Project Card Hover Overlays** (40% opacity)

#### 3.2.2 Gradient Definitions

```typescript
const gradients = {
  heroBackground: 'bg-gradient-to-br from-brandIndigo/10 via-brandBlue/10 to-brandCyan/10',
  ampersand: 'bg-gradient-to-r from-brandViolet via-brandBlue to-brandCyan',
  scrollProgress: 'bg-gradient-to-r from-brandIndigo to-brandCyan',
  footerLine: 'bg-gradient-to-b from-brandViolet/0 via-brandBlue to-brandCyan/0',
  projectOverlay: 'bg-gradient-to-t from-background/90 via-background/50 to-background/0',
} as const;
```

### 3.3 Contrast Requirements

All color combinations maintain WCAG 2.1 Level AA standards:
- Normal text (< 18px): **4.5:1 minimum**
- Large text (≥ 18px): **3:1 minimum**
- Interactive elements: **3:1 minimum**

Implementation uses Tailwind's built-in color system which provides accessible defaults for dark mode.


## 4. Hero Section Redesign

### 4.1 New Layout Structure

The hero section transitions from a centered vertical arrangement to a **dynamic asymmetric layout** with spatial hierarchy.

```
┌─────────────────────────────────────────────────────┐
│ [Parallax Background Layer -0.5x]                   │
│                                                      │
│  ┌──────────────────┐                               │
│  │  INK             │  [Animated Particles]          │
│  │   &              │                                │
│  │  IMAGINATION     │                                │
│  └──────────────────┘                               │
│                                                      │
│         Leela Sri Harshini                          │
│                                                      │
│    [UI/UX]  [Brand]  [Illustrator]  [Campaign]     │
│                                                      │
│  Product design, brand systems, and visual          │
│  storytelling for meaningful connections.           │
│                                                      │
│  [View Featured Work]  [About Me]  [Get in Touch]  │
│                                                      │
│             ↓ Scroll to explore                     │
└─────────────────────────────────────────────────────┘
```

### 4.2 Component Breakdown

#### 4.2.1 Brand Logo Treatment

```tsx
<div className="relative z-10 mb-16">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="font-playfair text-7xl md:text-8xl lg:text-9xl tracking-[0.2em]"
  >
    INK
  </motion.div>
  
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className="text-8xl md:text-9xl lg:text-[10rem] font-bold 
               bg-gradient-to-r from-brandViolet via-brandBlue to-brandCyan 
               bg-clip-text text-transparent"
  >
    &
  </motion.div>
  
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 1.1 }}
    className="font-playfair text-7xl md:text-8xl lg:text-9xl tracking-[0.2em]"
  >
    IMAGINATION
  </motion.div>
</div>
```

#### 4.2.2 Designer Name and Roles

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1.6 }}
  className="max-w-4xl mx-auto text-center space-y-8"
>
  <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-semibold">
    Leela Sri Harshini
  </h1>
  
  <div className="flex flex-wrap justify-center gap-4">
    {[
      { label: 'UI/UX Designer', color: 'brandIndigo' },
      { label: 'Brand Designer', color: 'brandViolet' },
      { label: 'Illustrator', color: 'brandCyan' },
      { label: 'Campaign Designer', color: 'brandPink' },
    ].map(({ label, color }, i) => (
      <motion.span
        key={label}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.8 + i * 0.1 }}
        className={`px-6 py-3 text-lg bg-${color}/10 border border-${color}/30 
                    rounded-full backdrop-blur-sm`}
      >
        {label}
      </motion.span>
    ))}
  </div>
</motion.div>
```

#### 4.2.3 Tagline

```tsx
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 2.2 }}
  className="font-playfair text-xl md:text-2xl lg:text-3xl 
             text-foreground/80 max-w-3xl mx-auto leading-relaxed italic"
>
  Product design, brand systems, and visual storytelling for meaningful connections.
</motion.p>
```

#### 4.2.4 Call-to-Action Buttons

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 2.4 }}
  className="flex flex-wrap justify-center gap-6"
>
  {/* Primary CTA - Prominent gradient */}
  <Button
    size="lg"
    className="px-8 py-6 text-lg bg-gradient-to-r from-brandIndigo 
               via-brandBlue to-brandCyan text-white rounded-full 
               shadow-lg hover:shadow-brandBlue/50 hover:shadow-2xl
               transform hover:scale-105 active:scale-95
               transition-all duration-300"
  >
    View Featured Work
  </Button>
  
  {/* Secondary CTAs - Outlined */}
  <Button
    size="lg"
    variant="outline"
    className="px-8 py-6 text-lg border-2 border-foreground/20 rounded-full
               hover:border-brandBlue/50 hover:bg-brandBlue/5
               transform hover:scale-105 active:scale-95
               transition-all duration-300"
  >
    About Me
  </Button>
  
  <Button
    size="lg"
    variant="outline"
    className="px-8 py-6 text-lg border-2 border-foreground/20 rounded-full
               hover:border-brandCyan/50 hover:bg-brandCyan/5
               transform hover:scale-105 active:scale-95
               transition-all duration-300"
  >
    Get in Touch
  </Button>
</motion.div>
```

### 4.3 Parallax Background

```tsx
const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -500]); // 0.5x scroll speed
  
  return (
    <motion.div
      style={{ y }}
      className="absolute inset-0 z-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br 
                      from-brandIndigo/10 via-brandBlue/10 to-brandCyan/10" />
      
      {/* Floating particles with continuous loop */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
          style={{
            left: `${(i * 17 + 5) % 100}%`,
            top: `${(i * 13 + 10) % 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 12 + (i % 6) * 2,
            repeat: Infinity,
            delay: (i % 6) * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};
```

### 4.4 Animation Orchestration

Total animation sequence: **2.4 seconds**

| Element | Delay | Duration | Total Time |
|---------|-------|----------|------------|
| "INK" text | 0.3s | 0.8s | 1.1s |
| Ampersand "&" | 0.8s | 0.6s | 1.4s |
| "IMAGINATION" text | 1.1s | 0.8s | 1.9s |
| Designer name & roles | 1.6s | 0.8s | 2.4s |
| Role badges (staggered) | 1.8s | 0.4s each | 2.2s |
| Tagline | 2.2s | 0.8s | 3.0s |
| CTA buttons | 2.4s | 0.8s | 3.2s |


## 5. Typography System

### 5.1 Typography Hierarchy

```typescript
const typography = {
  // Heading levels
  h1: {
    fontSize: '4.5rem',      // 72px
    lineHeight: '1.1',
    fontWeight: '600',
    letterSpacing: '-0.02em',
    fontFamily: 'Playfair Display',
  },
  h2: {
    fontSize: '3.75rem',     // 60px
    lineHeight: '1.15',
    fontWeight: '600',
    letterSpacing: '-0.015em',
    fontFamily: 'Playfair Display',
  },
  h3: {
    fontSize: '3rem',        // 48px
    lineHeight: '1.2',
    fontWeight: '600',
    letterSpacing: '-0.01em',
    fontFamily: 'Playfair Display',
  },
  h4: {
    fontSize: '2.25rem',     // 36px
    lineHeight: '1.3',
    fontWeight: '500',
    letterSpacing: '0',
    fontFamily: 'Playfair Display',
  },
  h5: {
    fontSize: '1.875rem',    // 30px
    lineHeight: '1.4',
    fontWeight: '500',
    letterSpacing: '0',
    fontFamily: 'Playfair Display',
  },
  h6: {
    fontSize: '1.5rem',      // 24px
    lineHeight: '1.4',
    fontWeight: '500',
    letterSpacing: '0',
    fontFamily: 'Playfair Display',
  },
  
  // Body text
  bodyLarge: {
    fontSize: '1.25rem',     // 20px
    lineHeight: '1.6',
    fontWeight: '400',
    fontFamily: 'system-ui',
  },
  bodyMedium: {
    fontSize: '1rem',        // 16px
    lineHeight: '1.6',
    fontWeight: '400',
    fontFamily: 'system-ui',
  },
  bodySmall: {
    fontSize: '0.875rem',    // 14px
    lineHeight: '1.5',
    fontWeight: '400',
    fontFamily: 'system-ui',
  },
  
  // Special treatments
  display: {
    fontSize: '6rem',        // 96px
    lineHeight: '1',
    fontWeight: '700',
    letterSpacing: '0.2em',
    fontFamily: 'Playfair Display',
  },
  caption: {
    fontSize: '0.75rem',     // 12px
    lineHeight: '1.4',
    fontWeight: '400',
    letterSpacing: '0.05em',
    fontFamily: 'system-ui',
  },
} as const;
```

### 5.2 Tailwind Configuration

```typescript
// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['6rem', { lineHeight: '1', letterSpacing: '0.2em' }],
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
    },
  },
};
```

### 5.3 Line Length and Readability

```tsx
// Content container with optimal line length
<div className="max-w-prose mx-auto">  {/* max-w-prose = 65ch ≈ 70 characters */}
  <p className="text-lg leading-relaxed">
    Body text content with optimal readability...
  </p>
</div>

// Paragraph spacing
<p className="mb-4">  {/* 1em spacing between paragraphs */}
  First paragraph...
</p>
<p className="mb-4">
  Second paragraph...
</p>
```

### 5.4 Responsive Typography

```tsx
// Mobile: 30-40% reduction in heading sizes
<h1 className="text-4xl md:text-6xl lg:text-7xl">  {/* 36px → 60px → 72px */}
  Responsive Heading
</h1>

<h2 className="text-3xl md:text-5xl lg:text-6xl">  {/* 30px → 48px → 60px */}
  Section Title
</h2>

// Body text scales moderately
<p className="text-base md:text-lg lg:text-xl">   {/* 16px → 20px → 24px */}
  Body content with responsive sizing
</p>
```


## 6. Spacing and Layout System

### 6.1 Spacing Scale

Based on 4px increments for mathematical consistency:

```typescript
const spacing = {
  xs: '4px',      // 0.25rem
  sm: '8px',      // 0.5rem
  md: '12px',     // 0.75rem
  base: '16px',   // 1rem
  lg: '24px',     // 1.5rem
  xl: '32px',     // 2rem
  '2xl': '48px',  // 3rem
  '3xl': '64px',  // 4rem
  '4xl': '96px',  // 6rem
  '5xl': '128px', // 8rem
} as const;
```

### 6.2 Section Spacing

```tsx
// Section padding patterns
<section className="py-24 md:py-32 lg:py-48">  {/* Vertical rhythm */}
  <div className="container mx-auto px-6 max-w-7xl">  {/* Horizontal containment */}
    {/* Content */}
  </div>
</section>

// Responsive section spacing
mobile (< 768px):  py-16  (64px)
tablet (768-1024): py-24  (96px)
desktop (> 1024):  py-32  (128px)
large (> 1280):    py-48  (192px)
```

### 6.3 Grid System

```tsx
// Featured projects grid with alternating layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
  {projects.map((project, index) => (
    <div
      key={project.id}
      className={cn(
        "grid gap-8",
        index % 2 === 0 
          ? "lg:grid-cols-[1fr_1.5fr]"  // Image left, text right
          : "lg:grid-cols-[1.5fr_1fr]"  // Text left, image right
      )}
    >
      {/* Project content */}
    </div>
  ))}
</div>

// Supporting work grid
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
  {supportingWork.map((work) => (
    <ProjectCard key={work.id} {...work} />
  ))}
</div>
```

### 6.4 Responsive Breakpoints

```typescript
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
```

### 6.5 Container Constraints

```tsx
// Maximum content width for readability
<div className="container mx-auto max-w-7xl">  {/* 1280px */}
  {/* Main content */}
</div>

// Prose content (optimal reading width)
<div className="max-w-prose mx-auto">  {/* ~65ch ≈ 70 characters */}
  {/* Article or long-form text */}
</div>

// Full bleed sections for visual impact
<section className="w-full">
  <div className="container mx-auto max-w-7xl px-6">
    {/* Contained content within full-width section */}
  </div>
</section>
```

### 6.6 Gap Consistency

```tsx
// Component gaps using spacing scale
<div className="flex flex-col gap-6">        {/* 24px vertical gap */}
<div className="flex flex-wrap gap-4">      {/* 16px wrap gap */}
<div className="grid grid-cols-3 gap-8">    {/* 32px grid gap */}
<div className="space-y-12">                {/* 48px stacked spacing */}
```


## 7. Cursor Interaction System

### 7.1 Custom Cursor Component

```tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface CursorState {
  scale: number;
  variant: 'default' | 'link' | 'view' | 'hidden';
}

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring animation for cursor position
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [cursorState, setCursorState] = useState<CursorState>({
    scale: 1,
    variant: 'default',
  });
  
  useEffect(() => {
    // Only activate on hover-capable devices
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('a, button, [role="button"]')) {
        setCursorState({ scale: 1.8, variant: 'link' });
      } else if (target.matches('[data-cursor="view"]')) {
        setCursorState({ scale: 2.5, variant: 'view' });
      }
    };
    
    const handleMouseLeave = () => {
      setCursorState({ scale: 1, variant: 'default' });
    };
    
    window.addEventListener('mousemove', moveCursor);
    
    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], [data-cursor]'
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);
  
  return (
    <>
      {/* Hide default cursor on hover-capable devices */}
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
      
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] 
                   mix-blend-difference hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: cursorState.scale,
            backgroundColor:
              cursorState.variant === 'link'
                ? 'rgba(59, 130, 246, 0.8)'    // Blue for links
                : cursorState.variant === 'view'
                ? 'rgba(139, 92, 246, 0.8)'    // Violet for view
                : 'rgba(255, 255, 255, 0.8)',  // White default
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="w-full h-full rounded-full border-2 border-white/40 backdrop-blur-sm"
        />
        
        {cursorState.variant === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       text-white text-xs font-medium whitespace-nowrap"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
```

### 7.2 Cursor States

| State | Scale | Color | Duration | Trigger |
|-------|-------|-------|----------|---------|
| Default | 1.0x | White/80% | - | Default |
| Link Hover | 1.8x | Blue/80% | 200ms | Links, buttons |
| View Hover | 2.5x | Violet/80% | 250ms | Project images |
| Active | 0.8x | Blue/100% | 150ms | Click/tap |

### 7.3 Integration with Components

```tsx
// Mark project images for custom cursor
<div
  data-cursor="view"
  className="relative overflow-hidden rounded-lg group"
>
  <img src={project.image} alt={project.title} />
</div>

// Links automatically get cursor interaction
<Link to="/about" className="text-brandBlue hover:text-brandCyan">
  Learn More
</Link>
```


## 8. Parallax Effects System

### 8.1 Parallax Hook

```tsx
'use client';

import { useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef } from 'react';

interface ParallaxConfig {
  speed: number;        // Multiplier for scroll speed (0.5 = half speed)
  maxOffset?: number;   // Maximum offset in pixels (default: 100)
  direction?: 'y' | 'x'; // Scroll direction
}

export const useParallax = (config: ParallaxConfig) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const maxOffset = config.maxOffset ?? 100;
  const range = [-maxOffset * config.speed, maxOffset * config.speed];
  
  const offset = useTransform(scrollYProgress, [0, 1], range);
  
  // Clamp to max offset
  const clampedOffset = useTransform(offset, (value) =>
    Math.max(-maxOffset, Math.min(maxOffset, value))
  );
  
  return { ref, offset: clampedOffset };
};
```

### 8.2 Hero Section Parallax

```tsx
export const HeroSection = () => {
  const { ref, offset } = useParallax({ speed: 0.5, maxOffset: 80 });
  
  return (
    <section ref={ref} className="relative min-h-screen">
      {/* Background layer - moves at 0.5x scroll speed */}
      <motion.div
        style={{ y: offset }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br 
                        from-brandIndigo/10 via-brandBlue/10 to-brandCyan/10" />
        {/* Particles */}
      </motion.div>
      
      {/* Foreground content - scrolls normally */}
      <div className="relative z-10">
        {/* Hero content */}
      </div>
    </section>
  );
};
```

### 8.3 Project Showcase Parallax

```tsx
export const ProjectCard = ({ project }: { project: Project }) => {
  const imageParallax = useParallax({ speed: 0.3, maxOffset: 60 });
  const textParallax = useParallax({ speed: 0.15, maxOffset: 30 });
  
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Image moves faster */}
      <motion.div
        ref={imageParallax.ref}
        style={{ y: imageParallax.offset }}
        className="relative overflow-hidden rounded-xl"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Text moves slower for depth */}
      <motion.div
        ref={textParallax.ref}
        style={{ y: textParallax.offset }}
        className="flex flex-col justify-center"
      >
        <h3 className="font-playfair text-4xl mb-4">{project.title}</h3>
        <p className="text-lg text-foreground/70">{project.description}</p>
      </motion.div>
    </div>
  );
};
```

### 8.4 Parallax Layers

Three distinct layers with different scroll speeds:

| Layer | Speed | Max Offset | Usage |
|-------|-------|------------|-------|
| Background | 0.5x | 80px | Hero gradient, decorative elements |
| Midground | 0.7x | 60px | Project images, large content blocks |
| Foreground | 0.85x | 40px | Text content, UI elements |

### 8.5 Reduced Motion Handling

```tsx
export const useParallax = (config: ParallaxConfig) => {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  // Disable parallax if user prefers reduced motion
  const maxOffset = prefersReducedMotion ? 0 : (config.maxOffset ?? 100);
  const range = [-maxOffset * config.speed, maxOffset * config.speed];
  
  const offset = useTransform(scrollYProgress, [0, 1], range);
  
  return { ref, offset };
};
```


## 9. Scroll Progress Indicator

### 9.1 Component Implementation

```tsx
'use client';

import { useScroll, motion, useSpring } from 'motion/react';

export const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 
                 bg-gradient-to-r from-brandIndigo to-brandCyan
                 origin-left"
      style={{ scaleX }}
    />
  );
};
```

### 9.2 Visual Specifications

- **Position**: Fixed at top edge (top: 0)
- **Height**: 3px for subtle visibility
- **Z-index**: 50 (above content, below navigation)
- **Color**: Gradient from brandIndigo to brandCyan
- **Animation**: Smooth spring with stiffness: 100, damping: 30

### 9.3 Integration

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgressIndicator />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

## 10. Navigation Enhancement

### 10.1 Adaptive Navigation

```tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg py-4 shadow-lg'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-brandIndigo to-brandCyan 
                            rounded-full rotate-45 transform hover:rotate-[50deg] 
                            transition-transform duration-300" />
            <span className="font-playfair text-xl font-semibold hidden md:inline">
              INK & IMAGINATION
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Work', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="relative text-foreground/70 hover:text-foreground 
                           transition-colors duration-200 group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 
                             bg-gradient-to-r from-brandIndigo to-brandCyan"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                {activeSection === item.toLowerCase() && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 
                               bg-gradient-to-r from-brandIndigo to-brandCyan"
                  />
                )}
              </Link>
            ))}
            
            <a
              href="/resume.pdf"
              download
              className="px-6 py-2 bg-gradient-to-r from-brandIndigo to-brandBlue 
                         text-white rounded-full hover:shadow-lg 
                         hover:shadow-brandBlue/30 transition-all duration-300
                         transform hover:scale-105"
            >
              Resume
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {['Work', 'About', 'Contact'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="block text-lg text-foreground/70 hover:text-foreground 
                               py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              
              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="px-6 py-3 bg-gradient-to-r from-brandIndigo to-brandBlue 
                           text-white rounded-full text-center"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
```

### 10.2 Navigation States

| State | Padding | Background | Blur | Shadow |
|-------|---------|------------|------|--------|
| Top (scroll < 50px) | py-6 (24px) | Transparent | None | None |
| Scrolled (scroll > 50px) | py-4 (16px) | bg/80% | backdrop-blur-lg | shadow-lg |

### 10.3 Active Link Indicator

Uses Framer Motion's `layoutId` for smooth transitions between active states:

```tsx
{activeSection === item.toLowerCase() && (
  <motion.span
    layoutId="activeSection"
    className="absolute -bottom-1 left-0 right-0 h-0.5 
               bg-gradient-to-r from-brandIndigo to-brandCyan"
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
  />
)}
```


## 11. Project Showcase Enhancement

### 11.1 Project Card Component

```tsx
'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  color: string;
}

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  
  const imageParallax = useParallax({ speed: 0.3, maxOffset: 60 });
  const textParallax = useParallax({ speed: 0.15, maxOffset: 30 });
  
  // Category color mapping
  const categoryColors = {
    'UI/UX': 'brandIndigo',
    'Branding': 'brandViolet',
    'Illustration': 'brandCyan',
    'Campaign': 'brandPink',
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className={cn(
        'grid gap-8 group',
        index % 2 === 0 
          ? 'lg:grid-cols-[1.5fr_1fr]'  // Image dominant
          : 'lg:grid-cols-[1fr_1.5fr]'  // Text dominant
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <motion.div
        ref={imageParallax.ref}
        style={{ y: imageParallax.offset }}
        className={cn(
          'relative overflow-hidden rounded-2xl',
          index % 2 !== 0 && 'lg:order-2'
        )}
        data-cursor="view"
      >
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="aspect-[4/3]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        
        {/* Hover Overlay */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t 
                     from-background/90 via-background/50 to-background/0
                     flex items-end justify-center pb-8"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link
              to={`/work/${project.slug}`}
              className="px-8 py-4 bg-white text-background rounded-full
                         font-medium hover:scale-105 transition-transform"
            >
              View Case Study
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Accent Border on Hover */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95,
          }}
          transition={{ duration: 0.3 }}
          className={cn(
            'absolute inset-0 rounded-2xl pointer-events-none',
            `border-4 border-${project.color}`
          )}
        />
      </motion.div>
      
      {/* Content Section */}
      <motion.div
        ref={textParallax.ref}
        style={{ y: textParallax.offset }}
        className="flex flex-col justify-center space-y-6"
      >
        {/* Category Badge */}
        <div>
          <span
            className={cn(
              'inline-block px-4 py-2 rounded-full text-sm font-medium',
              `bg-${categoryColors[project.category]}/10`,
              `border border-${categoryColors[project.category]}/30`,
              `text-${categoryColors[project.category]}`
            )}
          >
            {project.category}
          </span>
        </div>
        
        <h3 className="font-playfair text-4xl lg:text-5xl font-semibold">
          {project.title}
        </h3>
        
        <p className="text-lg text-foreground/70 leading-relaxed">
          {project.description}
        </p>
        
        <Link
          to={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 text-brandBlue 
                     hover:text-brandCyan transition-colors group"
        >
          <span className="font-medium">Explore Project</span>
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path
              d="M4 10h12m0 0l-4-4m4 4l-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </Link>
      </motion.div>
    </motion.div>
  );
};
```

### 11.2 Supporting Work Grid

```tsx
export const SupportingWork = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-playfair text-5xl lg:text-6xl font-semibold 
                     text-center mb-16"
        >
          More Work
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/work/${project.slug}`}>
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    loading="lazy"
                  />
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t 
                               from-background/80 to-background/0"
                  />
                </div>
                
                <div className="space-y-2">
                  <span className={cn(
                    'inline-block px-3 py-1 rounded-full text-xs',
                    `bg-${project.color}/10 border border-${project.color}/30`
                  )}>
                    {project.category}
                  </span>
                  
                  <h3 className="font-playfair text-2xl font-semibold 
                                 group-hover:text-brandBlue transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/60 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### 11.3 Animation Timing

| Element | Trigger | Delay | Duration | Stagger |
|---------|---------|-------|----------|---------|
| Featured Card | 30% visible | Base | 600ms | 100ms/card |
| Image Scale | Hover | 0ms | 400ms | - |
| Overlay | Hover | 0ms | 300ms | - |
| CTA Button | Hover | 100ms | 300ms | - |
| Accent Border | Hover | 0ms | 300ms | - |


## 12. Footer Enhancement

### 12.1 Footer Component

```tsx
'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Instagram, Download, FileText } from 'lucide-react';

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const socialLinks = [
    { name: 'Email', icon: Mail, href: 'mailto:leela@example.com', color: 'brandIndigo' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/leela', color: 'brandBlue' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/leela', color: 'brandViolet' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/leela', color: 'brandPink' },
  ];
  
  const navLinks = ['Work', 'About', 'Contact', 'Resume'];
  
  return (
    <footer ref={ref} className="relative py-24 overflow-hidden">
      {/* Gradient Line - Representing shared "I" */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full
                   bg-gradient-to-b from-brandViolet/0 via-brandBlue to-brandCyan/0
                   origin-top"
      />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Brand & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Rotating Diamond Logo */}
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 bg-gradient-to-br from-brandIndigo to-brandCyan 
                           rounded-full rotate-45"
              />
              <span className="font-playfair text-2xl font-semibold">
                INK & IMAGINATION
              </span>
            </div>
            
            <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
              Creating meaningful digital experiences through thoughtful design, 
              brand systems, and visual storytelling.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 
                           px-6 py-3 bg-gradient-to-r from-brandIndigo to-brandBlue 
                           text-white rounded-full font-medium
                           hover:shadow-lg hover:shadow-brandBlue/30
                           transform hover:scale-105 active:scale-95
                           transition-all duration-300"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
              
              <a
                href="/portfolio.pdf"
                download
                className="inline-flex items-center justify-center gap-2 
                           px-6 py-3 border-2 border-foreground/20 rounded-full 
                           font-medium hover:border-brandCyan/50 hover:bg-brandCyan/5
                           transform hover:scale-105 active:scale-95
                           transition-all duration-300"
              >
                <FileText size={20} />
                <span>Portfolio PDF</span>
              </a>
            </div>
          </motion.div>
          
          {/* Center Spacer */}
          <div className="lg:col-span-2" />
          
          {/* Right Column - Links & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Navigation Links */}
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4">
                Navigate
              </h3>
              <div className="flex flex-wrap gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="text-foreground/70 hover:text-foreground 
                               transition-colors duration-200"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4">
                Connect
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map(({ name, icon: Icon, href, color }, index) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className={cn(
                      'flex items-center gap-3 p-4 rounded-lg',
                      'border border-foreground/10',
                      'hover:border-${color}/50 hover:bg-${color}/5',
                      'transition-all duration-300 group'
                    )}
                  >
                    <Icon
                      size={20}
                      className={cn(
                        'text-foreground/60',
                        `group-hover:text-${color} transition-colors`
                      )}
                    />
                    <span className="text-sm font-medium">{name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 pt-8 border-t border-foreground/10 
                     flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-foreground/40">
            © {new Date().getFullYear()} Leela Sri Harshini. All rights reserved.
          </p>
          <p className="text-sm text-foreground/40">
            Designed & Developed with ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
```

### 12.2 Social Link Hover Colors

| Platform | Base Color | Hover Color | Border |
|----------|------------|-------------|--------|
| Email | foreground/60 | brandIndigo | brandIndigo/50 |
| LinkedIn | foreground/60 | brandBlue | brandBlue/50 |
| GitHub | foreground/60 | brandViolet | brandViolet/50 |
| Instagram | foreground/60 | brandPink | brandPink/50 |

### 12.3 Animation Sequence

| Element | Delay | Duration | Effect |
|---------|-------|----------|--------|
| Gradient Line | 0.1s | 1000ms | Scale Y from 0 to 1 |
| Left Column | 0.1s | 600ms | Fade in + slide from left |
| Right Column | 0.3s | 600ms | Fade in + slide from right |
| Nav Links | 0.5s | 300ms | Staggered 50ms |
| Social Links | 0.7s | 300ms | Staggered 100ms |
| Bottom Bar | 1.0s | 600ms | Fade in |


## 13. Animation System

### 13.1 Animation Tokens

```typescript
export const animationTokens = {
  // Durations
  duration: {
    fast: 150,      // Quick feedback
    normal: 300,    // Standard transitions
    slow: 500,      // Deliberate motion
    slowest: 800,   // Entrance animations
  },
  
  // Easing functions
  easing: {
    easeOut: [0.16, 1, 0.3, 1],          // Natural deceleration (entrances)
    easeIn: [0.7, 0, 0.84, 0],           // Natural acceleration (exits)
    easeInOut: [0.45, 0, 0.55, 1],       // Bidirectional (hovers)
    spring: { stiffness: 300, damping: 30 }, // Bouncy spring
  },
  
  // Stagger timing
  stagger: {
    fast: 50,       // Rapid sequential
    normal: 100,    // Standard sequential
    slow: 150,      // Deliberate sequential
  },
} as const;
```

### 13.2 Common Animation Variants

```typescript
// Fade in + slide up (entrance)
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: animationTokens.duration.slowest / 1000,
    ease: animationTokens.easing.easeOut,
  },
};

// Fade in + slide down (entrance from top)
export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: animationTokens.duration.normal / 1000,
    ease: animationTokens.easing.easeOut,
  },
};

// Scale + fade (for modals, popups)
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { 
    duration: animationTokens.duration.normal / 1000,
    ease: animationTokens.easing.easeInOut,
  },
};

// Stagger children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: animationTokens.stagger.normal / 1000,
    },
  },
};

// Hover lift
export const hoverLift = {
  whileHover: { 
    scale: 1.05,
    transition: { 
      duration: animationTokens.duration.normal / 1000,
      ease: animationTokens.easing.easeInOut,
    },
  },
  whileTap: { scale: 0.95 },
};
```

### 13.3 Scroll-Triggered Animations

```tsx
'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export const ScrollReveal = ({ 
  children, 
  delay = 0, 
  threshold = 0.3,
  once = true 
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

// Usage
<ScrollReveal>
  <h2>This animates when scrolled into view</h2>
</ScrollReveal>

<ScrollReveal delay={0.2}>
  <p>This animates 200ms after the heading</p>
</ScrollReveal>
```

### 13.4 Reduced Motion Support

```tsx
'use client';

import { useEffect, useState } from 'react';

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return prefersReducedMotion;
};

// Apply to animations
const MyComponent = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={prefersReducedMotion ? {} : { y: [0, -20, 0] }}
      transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity }}
    >
      Content
    </motion.div>
  );
};
```

### 13.5 Animation Orchestration Rules

1. **Hero Sequence**: Total ≤ 2.5 seconds
2. **Stagger Delays**: 50-150ms between items
3. **Hover Effects**: 150-300ms duration
4. **Scroll Triggers**: Activate at 80% visibility (0.8 threshold)
5. **Parallax**: Max 100px offset
6. **Concurrent Animations**: Max 10 elements simultaneously

### 13.6 Performance Optimization

```tsx
// Use will-change for frequently animated properties
<motion.div
  style={{ willChange: 'transform, opacity' }}
  animate={{ x: 100, opacity: 0.5 }}
>
  Content
</motion.div>

// Prefer transform and opacity for hardware acceleration
// ✅ Good (GPU accelerated)
animate={{ x: 100, scale: 1.2, opacity: 0.5 }}

// ❌ Avoid (triggers layout/paint)
animate={{ width: 200, height: 300, backgroundColor: 'red' }}

// Debounce scroll handlers
import { debounce } from 'lodash';

const handleScroll = debounce(() => {
  // Scroll calculations
}, 16); // ~60fps

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```


## 14. Accessibility Implementation

### 14.1 Keyboard Navigation

```tsx
// Focus management for modal/dialog
import { useEffect, useRef } from 'react';

export const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      // Store previously focused element
      previousFocusRef.current = document.activeElement as HTMLElement;
      
      // Focus first focusable element in modal
      const firstFocusable = modalRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
      
      // Trap focus within modal
      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;
        
        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (!focusableElements || focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      };
      
      document.addEventListener('keydown', handleTab);
      return () => document.removeEventListener('keydown', handleTab);
    } else {
      // Restore focus on close
      previousFocusRef.current?.focus();
    }
  }, [isOpen]);
  
  return isOpen ? (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50"
    >
      {children}
    </div>
  ) : null;
};
```

### 14.2 Focus Indicators

```css
/* Global focus styles */
*:focus-visible {
  outline: 2px solid theme('colors.brandBlue');
  outline-offset: 2px;
  border-radius: 4px;
}

/* Button focus with ring */
.btn:focus-visible {
  @apply ring-2 ring-brandBlue ring-offset-2 ring-offset-background;
}

/* Link focus with underline */
a:focus-visible {
  @apply underline decoration-2 underline-offset-4;
}
```

```tsx
// Custom Button with accessible focus
export const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-6 py-3 rounded-full
                 focus-visible:ring-2 focus-visible:ring-brandBlue 
                 focus-visible:ring-offset-2 focus-visible:ring-offset-background
                 focus-visible:outline-none
                 transition-all duration-200"
      {...props}
    >
      {children}
    </button>
  );
};
```

### 14.3 Screen Reader Support

```tsx
// Skip to main content link
export const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 
                 focus:left-4 focus:z-50 focus:px-6 focus:py-3 
                 focus:bg-brandBlue focus:text-white focus:rounded-full"
    >
      Skip to main content
    </a>
  );
};

// Layout with skip link
export const Layout = ({ children }) => {
  return (
    <>
      <SkipLink />
      <Navigation />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
};
```

```tsx
// ARIA labels for icon-only buttons
<button
  aria-label="Open mobile menu"
  onClick={() => setMenuOpen(true)}
>
  <Menu size={24} aria-hidden="true" />
</button>

// Image alt text
<img
  src={project.image}
  alt={`${project.title} - ${project.category} project showcasing ${project.description}`}
  loading="lazy"
/>

// Decorative images
<div
  className="w-12 h-12 bg-gradient-to-br from-brandIndigo to-brandCyan"
  role="presentation"
  aria-hidden="true"
/>
```

### 14.4 Heading Hierarchy

```tsx
// Correct heading structure
export const HomePage = () => {
  return (
    <>
      <h1>Leela Sri Harshini</h1>  {/* Page title */}
      
      <section>
        <h2>Featured Work</h2>     {/* Section heading */}
        
        <article>
          <h3>Project Title</h3>   {/* Subsection */}
          <h4>Details</h4>         {/* Sub-subsection */}
        </article>
      </section>
      
      <section>
        <h2>About Me</h2>          {/* Section heading */}
      </section>
    </>
  );
};
```

### 14.5 Color Contrast Compliance

```typescript
// Ensure WCAG 2.1 Level AA compliance
const contrastRatios = {
  // Normal text (< 18px or < 14px bold)
  normalText: {
    minimum: 4.5,
    enhanced: 7.0,
  },
  // Large text (≥ 18px or ≥ 14px bold)
  largeText: {
    minimum: 3.0,
    enhanced: 4.5,
  },
  // UI components and graphics
  nonText: {
    minimum: 3.0,
  },
};

// Example compliant combinations (dark mode)
const accessibleColors = {
  // White text on dark backgrounds
  'text-white on bg-background': '15:1',        // ✅ AAA
  'text-foreground on bg-background': '12:1',   // ✅ AAA
  
  // Colored text on dark backgrounds
  'text-brandBlue on bg-background': '8:1',     // ✅ AAA
  'text-brandCyan on bg-background': '7:1',     // ✅ AAA
  
  // Ensure interactive elements meet 3:1
  'border-brandBlue/30 on bg-background': '3.2:1', // ✅ AA
};
```

### 14.6 Touch Targets

```tsx
// Minimum 44x44px touch targets for mobile
<button
  className="min-w-[44px] min-h-[44px] flex items-center justify-center
             md:min-w-0 md:min-h-0 md:px-6 md:py-3"
>
  {/* Icon or text */}
</button>

// Adequate spacing between touch targets
<div className="flex gap-4">  {/* 16px minimum spacing */}
  <button className="min-w-[44px] min-h-[44px]">1</button>
  <button className="min-w-[44px] min-h-[44px]">2</button>
  <button className="min-w-[44px] min-h-[44px]">3</button>
</div>
```

### 14.7 Responsive Motion Preferences

```tsx
// Global reduced motion styles
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

```tsx
// Component-level reduced motion
export const AnimatedComponent = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
    >
      Content
    </motion.div>
  );
};
```


## 15. Performance Optimization

### 15.1 Image Optimization

```tsx
// Lazy loading with placeholder
import { useState } from 'react';

export const OptimizedImage = ({ src, alt, placeholder }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="relative overflow-hidden">
      {/* Blurred placeholder */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
          aria-hidden="true"
        />
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  );
};

// Use modern image formats
<picture>
  <source srcSet="/images/project.avif" type="image/avif" />
  <source srcSet="/images/project.webp" type="image/webp" />
  <img src="/images/project.jpg" alt="Project" loading="lazy" />
</picture>
```

### 15.2 Code Splitting

```tsx
// Lazy load heavy components
import { lazy, Suspense } from 'react';

const ProjectShowcase = lazy(() => import('./components/ProjectShowcase'));
const Footer = lazy(() => import('./components/Footer'));

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      
      <Suspense fallback={<LoadingSpinner />}>
        <ProjectShowcase />
      </Suspense>
      
      <Suspense fallback={<div className="h-96" />}>
        <Footer />
      </Suspense>
    </>
  );
};

// Route-based code splitting with React Router
import { lazy } from 'react';

const routes = [
  {
    path: '/',
    element: lazy(() => import('./pages/Home')),
  },
  {
    path: '/about',
    element: lazy(() => import('./pages/About')),
  },
  {
    path: '/work/:slug',
    element: lazy(() => import('./pages/ProjectDetail')),
  },
];
```

### 15.3 Animation Performance

```tsx
// Use transform and opacity for 60fps animations
// ✅ Good - GPU accelerated
<motion.div
  animate={{
    x: 100,                    // transform: translateX(100px)
    y: 50,                     // transform: translateY(50px)
    scale: 1.5,                // transform: scale(1.5)
    rotate: 45,                // transform: rotate(45deg)
    opacity: 0.5,              // opacity: 0.5
  }}
/>

// ❌ Avoid - triggers layout/paint
<motion.div
  animate={{
    width: 200,                // Triggers layout
    height: 300,               // Triggers layout
    backgroundColor: 'red',    // Triggers paint
    margin: 20,                // Triggers layout
  }}
/>

// Optimize with will-change
<motion.div
  style={{ willChange: 'transform, opacity' }}
  animate={{ x: 100, opacity: 0.5 }}
/>
```

### 15.4 Scroll Performance

```tsx
// Debounce scroll handlers
import { useEffect, useRef } from 'react';

export const useScrollThrottle = (callback: () => void, delay = 16) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  
  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) return;
      
      timeoutRef.current = setTimeout(() => {
        callback();
        timeoutRef.current = undefined;
      }, delay);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback, delay]);
};

// Usage
const MyComponent = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useScrollThrottle(() => {
    setScrollY(window.scrollY);
  }, 16); // ~60fps
  
  return <div>{/* Content */}</div>;
};
```

### 15.5 Loading States

```tsx
// Initial page load
export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 bg-gradient-to-br from-brandIndigo to-brandCyan 
                   rounded-full rotate-45"
      />
    </motion.div>
  );
};

// Skeleton loading for content
export const ProjectCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-foreground/10 aspect-[4/3] rounded-xl mb-4" />
      <div className="h-8 bg-foreground/10 rounded w-3/4 mb-2" />
      <div className="h-4 bg-foreground/10 rounded w-full mb-1" />
      <div className="h-4 bg-foreground/10 rounded w-5/6" />
    </div>
  );
};
```

### 15.6 Bundle Size Optimization

```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router'],
          'motion': ['motion/react'],
          'ui': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
  },
  // Tree shaking
  optimizeDeps: {
    include: ['motion/react', 'react-router'],
  },
};
```

### 15.7 Resource Hints

```html
<!-- index.html -->
<head>
  <!-- Preconnect to external domains -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  
  <!-- Preload critical assets -->
  <link rel="preload" href="/fonts/PlayfairDisplay-Regular.woff2" as="font" type="font/woff2" crossorigin />
  
  <!-- DNS prefetch for analytics/tracking -->
  <link rel="dns-prefetch" href="https://www.google-analytics.com" />
</head>
```

### 15.8 Performance Monitoring

```typescript
// Monitor Core Web Vitals
export const reportWebVitals = (metric: any) => {
  console.log(metric);
  
  // Send to analytics
  if (metric.label === 'web-vital') {
    // Track LCP, FID, CLS, FCP, TTFB
    switch (metric.name) {
      case 'LCP':
        console.log('Largest Contentful Paint:', metric.value);
        break;
      case 'FID':
        console.log('First Input Delay:', metric.value);
        break;
      case 'CLS':
        console.log('Cumulative Layout Shift:', metric.value);
        break;
    }
  }
};
```

### 15.9 Performance Budget

| Metric | Target | Maximum |
|--------|--------|---------|
| Initial Load | < 2s | < 3s |
| Time to Interactive | < 3s | < 4s |
| First Contentful Paint | < 1.5s | < 2s |
| Largest Contentful Paint | < 2.5s | < 4s |
| Cumulative Layout Shift | < 0.1 | < 0.25 |
| Total Bundle Size | < 300KB | < 500KB |
| Image Sizes | < 200KB each | < 500KB each |


## 16. Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Color Opacity Variants Produce Valid Alpha Values

*For any* base color from the Color_System, applying opacity levels (100%, 80%, 60%, 40%, 20%, 10%, 5%) SHALL produce valid color values with correct alpha channel values.

**Validates: Requirements 1.3**

### Property 2: Gradient Color Count Constraint

*For any* gradient definition in the Color_System, the gradient SHALL contain no more than 3 colors.

**Validates: Requirements 1.5**

### Property 3: Text-Background Contrast Ratios

*For any* text-background color combination from the Color_System, the contrast ratio SHALL be at least 4.5:1 for normal text and at least 3:1 for large text.

**Validates: Requirements 1.6, 15.4**

### Property 4: Typography Line Height Bounds

*For any* body text element, the line-height value SHALL be between 1.4 and 1.8.

**Validates: Requirements 3.4**

### Property 5: Typography Letter Spacing Hierarchy

*For any* heading element and small-caps element, the heading's letter-spacing SHALL be tighter than the small-caps letter-spacing.

**Validates: Requirements 3.5**

### Property 6: Content Line Length Limit

*For any* body text block, the line length SHALL not exceed 70 characters.

**Validates: Requirements 3.6**

### Property 7: Paragraph Spacing Minimum

*For any* paragraph element, the margin value SHALL be at least 1em.

**Validates: Requirements 3.7**

### Property 8: Section Padding Uses Spacing Scale

*For any* section element, the padding values SHALL match values from the spacing scale (4px multiples).

**Validates: Requirements 4.2**

### Property 9: Gap Values From Spacing Scale

*For any* container with gaps, the gap value SHALL be from the defined spacing scale.

**Validates: Requirements 4.3**

### Property 10: Container Max-Width Constraint

*For any* container element, the max-width SHALL be 1280px or less.

**Validates: Requirements 4.7**

### Property 11: Cursor Position Tracking

*For any* mouse position on hover-capable devices, the custom cursor element SHALL be positioned at the mouse coordinates.

**Validates: Requirements 5.1**

### Property 12: Cursor Scale on Interactive Hover

*For any* interactive element hover, the cursor scale SHALL be at least 1.5x the default size.

**Validates: Requirements 5.2**

### Property 13: Cursor State Change on Link Hover

*For any* link hover event, the cursor visual state SHALL change from default.

**Validates: Requirements 5.3**

### Property 14: Cursor Indicator on Project Image Hover

*For any* project image hover, the cursor SHALL display a viewability indicator.

**Validates: Requirements 5.4**

### Property 15: Cursor Transition Duration

*For any* cursor state change, the transition duration SHALL be between 150ms and 300ms.

**Validates: Requirements 5.5**

### Property 16: Hero Parallax Scroll Speed

*For any* scroll position, the hero background offset SHALL be scroll position multiplied by 0.5.

**Validates: Requirements 6.1**

### Property 17: Project Showcase Parallax Speed Differential

*For any* scroll position in project showcase, images and text SHALL move at different parallax speeds.

**Validates: Requirements 6.2**

### Property 18: Parallax Offset Calculation

*For any* scroll position relative to viewport trigger, the parallax offset SHALL be calculated correctly based on scroll position and speed multiplier.

**Validates: Requirements 6.3**

### Property 19: Parallax Maximum Offset Constraint

*For any* parallax element at any scroll position, the maximum offset SHALL not exceed 100px.

**Validates: Requirements 6.4**

### Property 20: Scroll Progress Width Calculation

*For any* scroll position, the progress bar width SHALL reflect the percentage of page scrolled (0% to 100%).

**Validates: Requirements 7.1, 7.3**

### Property 21: Navigation Link Hover Transition

*For any* navigation link hover, the color transition SHALL complete within 200ms.

**Validates: Requirements 8.5**

### Property 22: Project Image Scale on Hover

*For any* project image hover, the scale transform SHALL be 110% (1.1x).

**Validates: Requirements 9.2**

### Property 23: Project Overlay Opacity on Hover

*For any* project image hover, the overlay gradient opacity SHALL be 40%.

**Validates: Requirements 9.3**

### Property 24: View Case Study Button Fade-In

*For any* project card hover, the "View Case Study" button SHALL fade in with animation.

**Validates: Requirements 9.4**

### Property 25: Category Badge Unique Colors

*For any* category badge, the color SHALL be from the Color_System and SHALL be unique per category.

**Validates: Requirements 9.5**

### Property 26: Project Card Accent Border

*For any* project card hover, the border color SHALL match the project-specific color.

**Validates: Requirements 9.6**

### Property 27: Social Link Platform-Specific Hover Colors

*For any* social link hover, the color SHALL match the platform's brand color.

**Validates: Requirements 10.2**

### Property 28: Interactive Element Hover Effects

*For any* interactive element (button, link, card), hover SHALL apply visual effects.

**Validates: Requirements 11.1**

### Property 29: Button Scale Transform on Hover

*For any* button hover, the scale transform SHALL be between 1.03x and 1.08x.

**Validates: Requirements 11.2**

### Property 30: Button Scale Transform on Click

*For any* button click, the scale transform SHALL be 0.95x.

**Validates: Requirements 11.3**

### Property 31: Hover Transition Duration Range

*For any* hover state transition, the duration SHALL be between 150ms and 300ms.

**Validates: Requirements 11.4**

### Property 32: Focus Indicator Visibility

*For any* keyboard-focused interactive element, a visible focus indicator SHALL be displayed.

**Validates: Requirements 11.6, 15.3**

### Property 33: Icon Animation on Hover

*For any* icon hover, rotation, translation, or opacity SHALL change.

**Validates: Requirements 11.8**

### Property 34: Hover Effect Maximum Duration

*For any* hover effect, the total duration SHALL not exceed 500ms.

**Validates: Requirements 11.9**

### Property 35: Viewport Entry Fade-In

*For any* content element entering the viewport, opacity SHALL animate from 0 to 1.

**Validates: Requirements 12.1**

### Property 36: Viewport Entry Slide Distance

*For any* content element entering the viewport, the y-transform distance SHALL be between 30px and 60px.

**Validates: Requirements 12.2**

### Property 37: Grouped Element Animation Stagger

*For any* grouped elements, animation delays SHALL be between 50ms and 150ms apart.

**Validates: Requirements 12.5**

### Property 38: Image Alt Attribute Presence

*For any* image element, an alt attribute SHALL exist and be non-empty.

**Validates: Requirements 15.1**

### Property 39: Keyboard Accessibility

*For any* interactive element, it SHALL be reachable and operable via keyboard navigation.

**Validates: Requirements 15.2, 15.7**

### Property 40: Focus Indicator Minimum Width

*For any* focused interactive element, the outline width SHALL be at least 2px.

**Validates: Requirements 15.3**

### Property 41: ARIA Labels for Unlabeled Components

*For any* interactive component without visible text labels, an ARIA label or aria-labelledby attribute SHALL exist.

**Validates: Requirements 15.6**

### Property 42: Heading Hierarchy Correctness

*For any* page, heading levels SHALL follow proper nesting order without skipping levels (e.g., h1 → h2 → h3, not h1 → h3).

**Validates: Requirements 15.9**

### Property 43: Playfair Display for Brand Elements

*For any* element marked as brand, heading, or display text, the font-family SHALL be Playfair Display.

**Validates: Requirements 3.3, 17.1, 17.4**

### Property 44: Responsive Spacing Hierarchy

*For any* breakpoint, spacing ratios SHALL maintain relative hierarchy.

**Validates: Requirements 14.6**

### Property 45: Mobile Touch Target Minimum Size

*For any* interactive element on mobile viewports (< 768px), the minimum size SHALL be 44px by 44px.

**Validates: Requirements 14.7**

### Property 46: Serif vs Sans-Serif Typography

*For any* brand element, the font SHALL be serif, and for any UI element, the font SHALL be sans-serif.

**Validates: Requirements 17.6**

### Property 47: Section Whitespace Separation

*For any* section element, margins SHALL use spacing scale values to separate from adjacent sections.

**Validates: Requirements 18.3**

### Property 48: Content Container Max-Width

*For any* content container, a max-width SHALL be set for readability optimization.

**Validates: Requirements 18.5**

### Property 49: Z-Index Hierarchy for Overlapping Elements

*For any* overlapping elements, z-index values SHALL create clear depth relationships.

**Validates: Requirements 18.7**


## 17. Data Models

### 17.1 Project Data Structure

```typescript
interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'UI/UX' | 'Branding' | 'Illustration' | 'Campaign';
  color: keyof typeof brandColors;
  image: string;
  thumbnail: string;
  placeholder: string; // Low-quality placeholder for loading
  isFeatured: boolean;
  order: number;
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
    images: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
  tags: string[];
  year: number;
  client?: string;
  link?: string;
}
```

### 17.2 Navigation State

```typescript
interface NavigationState {
  isScrolled: boolean;
  activeSection: string;
  mobileMenuOpen: boolean;
}
```

### 17.3 Cursor State

```typescript
interface CursorState {
  x: number;
  y: number;
  scale: number;
  variant: 'default' | 'link' | 'view' | 'hidden';
}
```

### 17.4 Animation Configuration

```typescript
interface AnimationConfig {
  duration: number;
  delay: number;
  easing: [number, number, number, number] | string;
  stagger?: number;
  repeat?: number | 'infinite';
}
```

## 18. Error Handling

### 18.1 Image Loading Errors

```tsx
export const RobustImage = ({ src, alt, fallback }) => {
  const [error, setError] = useState(false);
  
  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      onError={() => setError(true)}
      className="w-full h-full object-cover"
    />
  );
};
```

### 18.2 Animation Errors

```tsx
// Graceful degradation for animation failures
export const SafeMotionDiv = ({ children, ...motionProps }) => {
  const prefersReducedMotion = useReducedMotion();
  
  if (prefersReducedMotion) {
    return <div>{children}</div>;
  }
  
  try {
    return <motion.div {...motionProps}>{children}</motion.div>;
  } catch (error) {
    console.warn('Animation failed, rendering static:', error);
    return <div>{children}</div>;
  }
};
```

### 18.3 Route Errors

```tsx
// Error boundary for route errors
export const ErrorBoundary = ({ error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="font-playfair text-6xl font-semibold">Oops!</h1>
        <p className="text-xl text-foreground/70">
          Something went wrong. Please try again.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r 
                     from-brandIndigo to-brandBlue text-white rounded-full"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};
```

## 19. Testing Strategy

### 19.1 Unit Testing

Focus on utility functions, hooks, and isolated component logic:

```typescript
// Example: Test color contrast calculation
describe('Color Contrast', () => {
  it('should calculate correct contrast ratio', () => {
    const ratio = getContrastRatio('#3B82F6', '#000000');
    expect(ratio).toBeGreaterThanOrEqual(4.5);
  });
  
  it('should validate WCAG AA compliance', () => {
    const colors = [
      { text: '#FFFFFF', bg: '#000000' }, // Should pass
      { text: '#888888', bg: '#000000' }, // Should fail
    ];
    
    colors.forEach(({ text, bg }) => {
      const ratio = getContrastRatio(text, bg);
      const passes = ratio >= 4.5;
      console.log(`${text} on ${bg}: ${ratio}:1 - ${passes ? 'PASS' : 'FAIL'}`);
    });
  });
});

// Example: Test spacing scale
describe('Spacing Scale', () => {
  it('should use 4px multiples', () => {
    const scale = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128];
    scale.forEach(value => {
      expect(value % 4).toBe(0);
    });
  });
});
```

### 19.2 Property-Based Testing

Test universal properties across generated inputs:

```typescript
import fc from 'fast-check';

describe('Property: Color Opacity Variants', () => {
  it('should produce valid alpha values for any base color', () => {
    fc.assert(
      fc.property(
        fc.hexaString({ minLength: 6, maxLength: 6 }),
        fc.constantFrom(100, 80, 60, 40, 20, 10, 5),
        (hexColor, opacityPercent) => {
          const result = applyOpacity(`#${hexColor}`, opacityPercent);
          const alpha = getAlphaChannel(result);
          const expectedAlpha = opacityPercent / 100;
          expect(alpha).toBeCloseTo(expectedAlpha, 2);
        }
      ),
      { numRuns: 100 } // Minimum 100 iterations
    );
  });
});

describe('Property: Parallax Maximum Offset', () => {
  it('should not exceed 100px for any scroll position', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 10000 }),
        fc.double({ min: 0.1, max: 1.0 }),
        (scrollPos, speed) => {
          const offset = calculateParallaxOffset(scrollPos, speed, 100);
          expect(Math.abs(offset)).toBeLessThanOrEqual(100);
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Property: Button Scale on Hover', () => {
  it('should scale between 1.03x and 1.08x', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('primary', 'secondary', 'outline'),
        (variant) => {
          const scale = getButtonHoverScale(variant);
          expect(scale).toBeGreaterThanOrEqual(1.03);
          expect(scale).toBeLessThanOrEqual(1.08);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

Each property test references its design document property:
- **Feature: portfolio-ux-ui-enhancement, Property 1**: Color Opacity Variants Produce Valid Alpha Values
- **Feature: portfolio-ux-ui-enhancement, Property 19**: Parallax Maximum Offset Constraint
- **Feature: portfolio-ux-ui-enhancement, Property 29**: Button Scale Transform on Hover

### 19.3 Integration Testing

Test component interactions and user flows:

```typescript
describe('Navigation Integration', () => {
  it('should apply backdrop blur when scrolled past 50px', async () => {
    render(<Navigation />);
    
    // Scroll to trigger state change
    window.scrollY = 60;
    window.dispatchEvent(new Event('scroll'));
    
    await waitFor(() => {
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('backdrop-blur-lg');
    });
  });
});

describe('Project Showcase Integration', () => {
  it('should display hover overlay on project image hover', async () => {
    render(<ProjectCard project={mockProject} index={0} />);
    
    const image = screen.getByRole('img');
    fireEvent.mouseEnter(image);
    
    await waitFor(() => {
      const button = screen.getByText('View Case Study');
      expect(button).toBeVisible();
    });
  });
});
```

### 19.4 Accessibility Testing

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('should have no WCAG violations on home page', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('should support keyboard navigation', () => {
    render(<Navigation />);
    
    const links = screen.getAllByRole('link');
    links[0].focus();
    
    expect(document.activeElement).toBe(links[0]);
    
    userEvent.tab();
    expect(document.activeElement).toBe(links[1]);
  });
});
```

### 19.5 Visual Regression Testing

```typescript
describe('Visual Regression', () => {
  it('should match hero section snapshot', async () => {
    const { container } = render(<HeroSection />);
    await waitForAnimations();
    
    expect(container).toMatchSnapshot();
  });
  
  it('should match project card hover state', async () => {
    const { container } = render(<ProjectCard project={mockProject} index={0} />);
    
    const card = screen.getByTestId('project-card');
    fireEvent.mouseEnter(card);
    await waitFor(() => expect(screen.getByText('View Case Study')).toBeVisible());
    
    expect(container).toMatchSnapshot();
  });
});
```


## 20. Implementation Plan

### 20.1 Phase 1: Foundation (Week 1)

**Goal**: Establish design system foundation

**Tasks**:
1. Configure color system with extended palette and opacity variants
2. Set up typography hierarchy with Playfair Display and system fonts
3. Implement spacing scale (4px-based) in Tailwind configuration
4. Create animation tokens (durations, easings, stagger timings)
5. Set up accessibility utilities (focus indicators, reduced motion detection)

**Deliverables**:
- `src/lib/design-tokens.ts` - Color, typography, spacing, animation tokens
- Updated `tailwind.config.js` with custom theme
- `src/hooks/useReducedMotion.ts` - Accessibility hook
- Unit tests for design token validation

### 20.2 Phase 2: Core Interactions (Week 2)

**Goal**: Implement premium interaction layer

**Tasks**:
1. Build custom cursor system with hover states
2. Implement parallax effects hook and components
3. Create scroll progress indicator
4. Build scroll-triggered animation system
5. Implement animation orchestration utilities

**Deliverables**:
- `src/components/CustomCursor.tsx`
- `src/hooks/useParallax.ts`
- `src/components/ScrollProgressIndicator.tsx`
- `src/components/ScrollReveal.tsx`
- Property tests for cursor tracking, parallax offsets, scroll calculations

### 20.3 Phase 3: Hero Section Redesign (Week 3)

**Goal**: Complete hero section with new layout and animations

**Tasks**:
1. Redesign hero layout structure (asymmetric composition)
2. Update brand logo animation sequence
3. Create new role badge layout with color mapping
4. Implement tagline with refined typography
5. Design CTA button hierarchy with visual treatments
6. Add parallax background with floating particles
7. Create coordinated animation sequence

**Deliverables**:
- `src/components/HeroSection.tsx` (complete rewrite)
- `src/components/ParallaxBackground.tsx`
- Integration tests for animation timing
- Visual regression tests for hero states

### 20.4 Phase 4: Navigation Enhancement (Week 3)

**Goal**: Adaptive navigation with smooth interactions

**Tasks**:
1. Implement scroll-aware navigation states
2. Add active link indicator with shared layout animation
3. Create mobile menu with staggered animations
4. Add backdrop blur effect on scroll
5. Update logo with new styling

**Deliverables**:
- `src/components/Navigation.tsx` (enhanced)
- `src/components/MobileMenu.tsx`
- Unit tests for scroll threshold detection
- Integration tests for navigation interactions

### 20.5 Phase 5: Project Showcase (Week 4)

**Goal**: Enhanced project cards with premium interactions

**Tasks**:
1. Build new project card component with alternating layout
2. Implement image parallax effects
3. Add hover interactions (scale, overlay, border accent)
4. Create viewport-triggered animations
5. Build supporting work grid layout
6. Implement category badge color system

**Deliverables**:
- `src/components/ProjectCard.tsx`
- `src/components/ProjectShowcase.tsx`
- `src/components/SupportingWork.tsx`
- Property tests for hover effects, image scaling
- Visual regression tests for card states

### 20.6 Phase 6: Footer Enhancement (Week 4)

**Goal**: Refined footer with branded elements

**Tasks**:
1. Design footer layout with gradient line element
2. Add rotating diamond animation
3. Implement social links with platform-specific hover colors
4. Create download button treatments
5. Add sequential animation on viewport entry

**Deliverables**:
- `src/components/Footer.tsx` (complete redesign)
- Integration tests for social link interactions
- Visual regression tests for footer animations

### 20.7 Phase 7: Performance & Optimization (Week 5)

**Goal**: Optimize for performance and accessibility

**Tasks**:
1. Implement image lazy loading with placeholders
2. Add code splitting for routes and heavy components
3. Optimize animation performance (GPU acceleration)
4. Implement scroll event debouncing
5. Set up loading states and skeletons
6. Configure bundle optimization

**Deliverables**:
- `src/components/OptimizedImage.tsx`
- `src/components/LoadingScreen.tsx`
- `src/components/skeletons/*` - Loading skeletons
- Performance benchmarks meeting budget targets

### 20.8 Phase 8: Testing & Polish (Week 6)

**Goal**: Comprehensive testing and refinement

**Tasks**:
1. Write property-based tests for all correctness properties
2. Complete unit test coverage for utilities and hooks
3. Run accessibility audits with axe-core
4. Perform cross-browser testing
5. Conduct performance profiling
6. Visual regression testing across breakpoints
7. User testing for interaction patterns

**Deliverables**:
- Complete test suite with >80% coverage
- Accessibility audit report (WCAG 2.1 Level AA)
- Performance audit report (Core Web Vitals)
- Cross-browser compatibility matrix
- Final polish and bug fixes

### 20.9 Phase 9: Documentation & Handoff (Week 6)

**Goal**: Document implementation and create usage guides

**Tasks**:
1. Write component documentation with Storybook
2. Create design system documentation
3. Document animation patterns and usage
4. Create deployment guide
5. Write maintenance documentation

**Deliverables**:
- Storybook with all component examples
- `docs/DESIGN_SYSTEM.md` - Design system guide
- `docs/ANIMATIONS.md` - Animation patterns
- `docs/DEPLOYMENT.md` - Deployment instructions
- `docs/MAINTENANCE.md` - Ongoing maintenance guide

## 21. Technology Stack Configuration

### 21.1 Tailwind CSS Configuration

```javascript
// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandIndigo: '#4F46E5',
        brandBlue: '#3B82F6',
        brandCyan: '#06B6D4',
        brandViolet: '#8B5CF6',
        brandPink: '#EC4899',
        brandRose: '#F43F5E',
        brandAmber: '#F59E0B',
        brandEmerald: '#10B981',
        brandTeal: '#14B8A6',
        brandSky: '#0EA5E9',
        brandOrange: '#F97316',
        brandLime: '#84CC16',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
```

### 21.2 Vite Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router'],
          'motion': ['motion/react'],
          'ui': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
          ],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['motion/react', 'react-router'],
  },
});
```

### 21.3 TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 22. Deployment Considerations

### 22.1 Build Optimization

```bash
# Production build with optimizations
npm run build

# Analyze bundle size
npm install -D rollup-plugin-visualizer
# Add to vite.config.js for bundle analysis
```

### 22.2 Hosting Recommendations

- **Vercel**: Optimal for React + Vite with automatic deployments
- **Netlify**: Excellent for static sites with form handling
- **Cloudflare Pages**: Fast global CDN with edge optimization

### 22.3 Environment Variables

```bash
# .env.production
VITE_SITE_URL=https://portfolio.example.com
VITE_ANALYTICS_ID=your_analytics_id
```

### 22.4 SEO Optimization

```tsx
// Add meta tags in index.html
<head>
  <title>Leela Sri Harshini - UI/UX Designer, Brand Designer</title>
  <meta name="description" content="Portfolio of Leela Sri Harshini showcasing UI/UX design, branding, illustration, and campaign design work." />
  <meta property="og:title" content="Leela Sri Harshini - Portfolio" />
  <meta property="og:description" content="Product design, brand systems, and visual storytelling." />
  <meta property="og:image" content="/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

## 23. Maintenance and Future Enhancements

### 23.1 Monitoring

- Track Core Web Vitals (LCP, FID, CLS)
- Monitor bundle size over time
- Track error rates and user feedback
- Analytics for interaction patterns

### 23.2 Future Enhancements

1. **Case Study Templates**: Standardized layouts for project deep-dives
2. **Content Management**: Integration with headless CMS for easy updates
3. **Dark/Light Mode Toggle**: User-controlled theme switching
4. **Blog Section**: Thought leadership and process documentation
5. **3D Elements**: Three.js integrations for portfolio pieces
6. **Contact Form**: Direct inquiry handling with validation
7. **Internationalization**: Multi-language support
8. **Advanced Filtering**: Project filtering by category, year, technology

### 23.3 Version Control Strategy

```
main (production)
├── develop (staging)
├── feature/hero-redesign
├── feature/navigation-enhancement
└── feature/project-showcase
```

Use semantic versioning: `v1.0.0` → `v2.0.0` for major redesign

---

## Summary

This design document provides a comprehensive technical blueprint for transforming the "INK & IMAGINATION" portfolio into an industry-leading showcase. The implementation follows modern web development best practices with a focus on:

1. **Sophisticated Visual Design**: Multi-color palette with selective gradient usage
2. **Premium Interactions**: Custom cursor, parallax, and micro-animations
3. **Performance**: Hardware-accelerated animations, lazy loading, code splitting
4. **Accessibility**: WCAG 2.1 Level AA compliance with keyboard navigation and reduced motion support
5. **Maintainability**: Component-based architecture with comprehensive testing

The phased implementation plan ensures systematic delivery over 6 weeks, with each phase building upon the previous foundation. Property-based testing validates universal correctness properties, while integration and visual regression tests ensure cohesive user experience across all interactions.

