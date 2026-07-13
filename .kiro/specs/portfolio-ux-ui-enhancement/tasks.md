# Implementation Plan: Portfolio UX/UI Enhancement

## Overview

This implementation plan transforms the "INK & IMAGINATION" portfolio website into an industry-leading professional showcase through a comprehensive enhancement of the visual design and interaction patterns. The implementation follows a phased approach across 9 major phases, building from foundational design systems through core interactions, UI components, and finishing with performance optimization and comprehensive testing.

**Technology Stack**: React 18 + TypeScript + Vite + Tailwind CSS 4 + Framer Motion + shadcn/ui

**Key Features**:
- Expanded 12-color palette with selective gradient application
- Complete hero section redesign with parallax and sequential animations
- Custom cursor system with contextual states
- Scroll progress indicator
- Enhanced navigation with adaptive states
- Premium project showcase interactions
- Performance-optimized animations
- WCAG 2.1 Level AA accessibility compliance

## Tasks

### Phase 1: Design System Foundation

- [ ] 1.1 Configure extended color system in Tailwind
  - Create `src/lib/design-tokens.ts` with color definitions
  - Add 12 base colors (indigo, blue, cyan, violet, pink, rose, amber, emerald, teal, sky, orange, lime)
  - Define semantic colors (success, warning, error, info)
  - Configure Tailwind with extended color palette and opacity variants
  - _Requirements: 1.1, 1.2, 1.3, 1.7_

- [ ]* 1.2 Write property test for color opacity variants
  - **Property 1: Color Opacity Variants Produce Valid Alpha Values**
  - **Validates: Requirements 1.3**
  - Test that applying opacity levels (100%, 80%, 60%, 40%, 20%, 10%, 5%) to any base color produces valid alpha channel values
  - Use fast-check or similar PBT library to generate color hex values
  - Verify alpha channel calculation accuracy

- [x] 1.3 Implement typography system
  - Define 6 heading levels (h1-h6) with size, weight, line-height, letter-spacing
  - Define body text styles (large, medium, small)
  - Configure Playfair Display font family for brand/headings
  - Configure system sans-serif for UI elements
  - Add typography utilities to Tailwind config
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 17.4_


- [ ]* 1.4 Write property tests for typography constraints
  - **Property 4: Typography Line Height Bounds**
  - **Property 5: Typography Letter Spacing Hierarchy**
  - **Property 6: Content Line Length Limit**
  - **Property 7: Paragraph Spacing Minimum**
  - **Validates: Requirements 3.4, 3.5, 3.6, 3.7**
  - Test line height ranges for body text (1.4-1.8)
  - Test letter-spacing relationships between headings and small-caps
  - Test line length limits (70 characters max)
  - Test paragraph margin minimums (1em)

- [ ] 1.5 Create spacing scale system
  - Define spacing tokens based on 4px increments (4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
  - Configure Tailwind with custom spacing values
  - Create utility functions for responsive spacing calculation
  - _Requirements: 4.1, 4.2, 4.3_

- [ ]* 1.6 Write property tests for spacing scale
  - **Property 8: Section Padding Uses Spacing Scale**
  - **Property 9: Gap Values From Spacing Scale**
  - **Property 10: Container Max-Width Constraint**
  - **Validates: Requirements 4.2, 4.3, 4.7**
  - Test that all section padding values are 4px multiples
  - Test that gap values come from defined spacing scale
  - Test container max-width doesn't exceed 1280px

- [ ] 1.7 Set up animation tokens
  - Define duration tokens (fast: 150ms, normal: 300ms, slow: 500ms, slowest: 800ms)
  - Define easing functions (easeOut, easeIn, easeInOut, spring)
  - Define stagger timing (fast: 50ms, normal: 100ms, slow: 150ms)
  - Create reusable animation variants (fadeInUp, fadeInDown, scaleIn, hoverLift)
  - _Requirements: 16.1, 16.2, 16.4, 16.5, 16.6_

- [ ] 1.8 Create accessibility utilities
  - Implement `useReducedMotion` hook for motion preferences
  - Create focus indicator styles with 2px minimum outline
  - Set up skip navigation link component
  - Configure ARIA label utilities
  - _Requirements: 15.3, 15.5, 15.6, 15.8_

- [ ] 1.9 Checkpoint - Verify design system foundation
  - Ensure all tests pass, ask the user if questions arise.


### Phase 2: Core Interaction Systems

- [ ] 2.1 Build custom cursor component
  - Create `src/components/CustomCursor.tsx`
  - Implement mouse position tracking with Framer Motion
  - Add smooth spring animation for cursor movement (stiffness: 300, damping: 30)
  - Define cursor states (default, link, view, hidden)
  - Implement cursor scaling on hover (1x default, 1.8x link, 2.5x view)
  - Add color changes per state (white default, blue links, violet view)
  - Apply mix-blend-difference for visibility on all backgrounds
  - Conditionally render only on hover-capable devices
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8_

- [ ]* 2.2 Write property tests for cursor system
  - **Property 11: Cursor Position Tracking**
  - **Property 12: Cursor Scale on Interactive Hover**
  - **Property 13: Cursor State Change on Link Hover**
  - **Property 14: Cursor Indicator on Project Image Hover**
  - **Property 15: Cursor Transition Duration**
  - **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**
  - Test cursor position matches mouse coordinates
  - Test cursor scale increases on interactive element hover
  - Test cursor state changes on link/button hover
  - Test viewability indicator appears on project image hover
  - Test transition durations are between 150ms-300ms

- [ ] 2.3 Implement parallax effects system
  - Create `src/hooks/useParallax.ts` hook
  - Implement scroll-based offset calculation using Framer Motion's useScroll and useTransform
  - Add configurable speed multiplier (0.5x background, 0.7x midground, 0.85x foreground)
  - Implement maximum offset constraint (100px default)
  - Add reduced motion support to disable parallax when preferred
  - Create reusable ParallaxContainer component
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7_

- [ ]* 2.4 Write property tests for parallax system
  - **Property 16: Hero Parallax Scroll Speed**
  - **Property 17: Project Showcase Parallax Speed Differential**
  - **Property 18: Parallax Offset Calculation**
  - **Property 19: Parallax Maximum Offset Constraint**
  - **Validates: Requirements 6.1, 6.2, 6.3, 6.4**
  - Test hero background moves at 0.5x scroll speed
  - Test images and text have different parallax speeds
  - Test offset calculation correctness
  - Test offsets never exceed 100px

- [ ] 2.5 Create scroll progress indicator
  - Create `src/components/ScrollProgressIndicator.tsx`
  - Implement scroll progress tracking with useScroll hook
  - Add smooth spring animation for progress bar (stiffness: 100, damping: 30)
  - Position fixed at top with 3px height
  - Apply gradient from brandIndigo to brandCyan
  - Set z-index: 50 (above content, below navigation)
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7_


- [ ]* 2.6 Write property test for scroll progress
  - **Property 20: Scroll Progress Width Calculation**
  - **Validates: Requirements 7.1, 7.3**
  - Test that progress bar width accurately reflects scroll percentage (0% to 100%)
  - Generate various scroll positions and verify width calculation

- [ ] 2.7 Build scroll-triggered animation system
  - Create `src/components/ScrollReveal.tsx` wrapper component
  - Implement viewport intersection detection with useInView hook
  - Add configurable visibility threshold (default: 0.3)
  - Create fade-in and slide-up animation variants
  - Add stagger timing support for grouped elements
  - Integrate reduced motion support
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7_

- [ ]* 2.8 Write property tests for scroll animations
  - **Property 35: Viewport Entry Fade-In**
  - **Property 36: Viewport Entry Slide Distance**
  - **Property 37: Grouped Element Animation Stagger**
  - **Validates: Requirements 12.1, 12.2, 12.5**
  - Test opacity animates from 0 to 1 on viewport entry
  - Test slide distance is between 30px-60px
  - Test stagger delays are between 50ms-150ms

- [ ] 2.9 Create animation orchestration utilities
  - Create animation composition functions for sequencing
  - Implement coordination timing calculator
  - Add performance optimization utilities (will-change, debouncing)
  - Create reusable animation presets library
  - _Requirements: 16.3, 16.7, 16.8_

- [ ] 2.10 Checkpoint - Verify interaction systems
  - Ensure all tests pass, ask the user if questions arise.

### Phase 3: Hero Section Redesign

- [ ] 3.1 Create new hero section layout structure
  - Update `src/app/components/HeroSection.tsx` with new hierarchical layout
  - Implement full viewport height container
  - Create asymmetric composition with spatial hierarchy
  - Add responsive layout adjustments for mobile (<768px)
  - _Requirements: 2.1, 2.8, 14.1_

- [ ] 3.2 Implement brand logo animation sequence
  - Create "INK" text animation (fade + slide from left, delay: 0.3s, duration: 0.8s)
  - Create ampersand "&" animation with gradient (fade + scale, delay: 0.8s, duration: 0.6s)
  - Apply gradient to ampersand: from-brandViolet via-brandBlue to-brandCyan
  - Create "IMAGINATION" text animation (fade + slide from right, delay: 1.1s, duration: 0.8s)
  - Use Playfair Display with 0.2em letter-spacing for wordmark
  - _Requirements: 2.2, 2.7, 17.1, 17.3_


- [ ] 3.3 Add designer name and role badges
  - Implement designer name "Leela Sri Harshini" with enhanced typography (text-6xl md:text-7xl lg:text-8xl, Playfair Display)
  - Animate name with fade + slide up (delay: 1.6s, duration: 0.8s)
  - Create 4 role badges layout (UI/UX Designer, Brand Designer, Illustrator, Campaign Designer)
  - Apply unique colors per badge (brandIndigo, brandViolet, brandCyan, brandPink)
  - Animate badges with staggered timing (delay: 1.8s base, 0.1s stagger)
  - Style badges with 10% opacity backgrounds and 30% opacity borders
  - _Requirements: 2.3, 2.4_

- [ ] 3.4 Create tagline with refined typography
  - Add tagline: "Product design, brand systems, and visual storytelling for meaningful connections."
  - Apply Playfair Display italic with text-xl md:text-2xl lg:text-3xl
  - Set text color to foreground/80 for subtle hierarchy
  - Animate with fade-in (delay: 2.2s, duration: 0.8s)
  - Limit max-width to 3xl for optimal readability
  - _Requirements: 2.5, 3.6_

- [ ] 3.5 Design CTA button hierarchy
  - Create primary CTA "View Featured Work" with gradient background (brandIndigo to brandCyan)
  - Create secondary CTAs "About Me" and "Get in Touch" with outlined style
  - Apply hover effects: scale 1.05x, shadow glow, 300ms duration
  - Apply active state: scale 0.95x for tactile feedback
  - Animate buttons with fade + slide up (delay: 2.4s, duration: 0.8s)
  - Stack vertically on mobile with full width
  - _Requirements: 2.6, 11.2, 11.3, 14.3, 18.2_

- [ ] 3.6 Implement parallax background
  - Create `src/components/ParallaxBackground.tsx`
  - Add gradient background (from-brandIndigo/10 via-brandBlue/10 to-brandCyan/10)
  - Implement parallax motion at 0.5x scroll speed using useParallax hook
  - Create 30 floating particle elements with continuous loop animations
  - Randomize particle positions and timing (12-20s durations)
  - Position as z-0 background layer
  - _Requirements: 2.9, 2.10, 6.1_

- [ ]* 3.7 Write integration tests for hero animations
  - Test animation sequence timing (total ≤ 2.5s for main sequence)
  - Test sequential delays are coordinated correctly
  - Test reduced motion disables all animations
  - _Requirements: 16.3, 16.8_

- [ ] 3.8 Checkpoint - Verify hero section
  - Ensure all tests pass, ask the user if questions arise.


### Phase 4: Navigation Enhancement

- [ ] 4.1 Implement adaptive navigation states
  - Update `src/app/components/Navigation.tsx` with scroll detection
  - Add state tracking for scroll position (threshold: 50px)
  - Apply backdrop blur and reduced padding when scrolled
  - Transition between states with 300ms duration
  - Maintain fixed positioning at top (z-index: 40)
  - _Requirements: 8.1, 8.2, 8.3_

- [ ]* 4.2 Write property test for navigation transitions
  - **Property 21: Navigation Link Hover Transition**
  - **Validates: Requirements 8.5**
  - Test that navigation link color transitions complete within 200ms

- [ ] 4.3 Create active link indicator with layout animation
  - Implement animated underline using Framer Motion's layoutId
  - Apply gradient from brandIndigo to brandCyan
  - Position absolute with -bottom-1 offset and 0.5 height
  - Transition with spring animation (stiffness: 300, damping: 30)
  - Track active section based on scroll position
  - _Requirements: 8.4_

- [ ] 4.4 Update brand logo styling
  - Maintain blue diamond logo with new Color_System colors
  - Add gradient background (from-brandIndigo to-brandCyan)
  - Implement rotate-45 transform with hover interaction (rotate-[50deg])
  - Add smooth transition (300ms duration)
  - Display "INK & IMAGINATION" text next to logo (hidden on mobile)
  - _Requirements: 8.6, 17.2_

- [ ] 4.5 Design resume download button
  - Create prominent button with gradient background (brandIndigo to brandBlue)
  - Add hover effects: shadow glow, scale 1.05x
  - Apply rounded-full styling with appropriate padding (px-6 py-2)
  - Link to `/resume.pdf` with download attribute
  - _Requirements: 8.7_

- [ ] 4.6 Build mobile menu with animations
  - Add hamburger menu icon for viewports <768px
  - Create mobile menu overlay with backdrop blur
  - Animate menu items with staggered timing (100ms delays)
  - Implement slide-in animation for menu panel
  - Add close functionality with exit animations
  - _Requirements: 8.8, 8.9, 14.4_

- [ ]* 4.7 Write integration tests for navigation
  - Test scroll threshold triggers state change
  - Test mobile menu opens/closes correctly
  - Test keyboard navigation through menu items
  - _Requirements: 8.2, 15.2_

- [ ] 4.8 Checkpoint - Verify navigation
  - Ensure all tests pass, ask the user if questions arise.


### Phase 5: Project Showcase Enhancement

- [ ] 5.1 Create enhanced project card component
  - Build new `src/app/components/ProjectCard.tsx`
  - Implement alternating layout grid (image-text orientation switches per card)
  - Add viewport-triggered animations (fade-in + slide-up, 0.6s duration)
  - Implement staggered animation delays (100ms between cards)
  - Apply data-cursor="view" attribute to images for custom cursor
  - _Requirements: 9.1, 9.7, 9.8, 12.7_

- [ ] 5.2 Implement project image interactions
  - Add hover scale transform (1.1x) with 400ms ease-out duration
  - Apply parallax motion to images (0.3x speed, 60px max offset)
  - Create hover overlay gradient (from-background/90 via-background/50 to-background/0)
  - Animate overlay opacity from 0 to 1 on hover (300ms duration)
  - _Requirements: 9.2, 9.3, 6.2_

- [ ]* 5.3 Write property tests for project interactions
  - **Property 22: Project Image Scale on Hover**
  - **Property 23: Project Overlay Opacity on Hover**
  - **Property 24: View Case Study Button Fade-In**
  - **Validates: Requirements 9.2, 9.3, 9.4**
  - Test image scales to 110% on hover
  - Test overlay gradient opacity is 40%
  - Test CTA button fades in on hover

- [ ] 5.4 Add category badges and accent borders
  - Create category color mapping (UI/UX: brandIndigo, Branding: brandViolet, Illustration: brandCyan, Campaign: brandPink)
  - Style badges with 10% opacity backgrounds and 30% opacity borders
  - Implement accent border on hover (4px border with project color)
  - Animate border opacity and scale on hover (300ms duration)
  - _Requirements: 9.5, 9.6_

- [ ]* 5.5 Write property tests for category styling
  - **Property 25: Category Badge Unique Colors**
  - **Property 26: Project Card Accent Border**
  - **Validates: Requirements 9.5, 9.6**
  - Test each category has unique color from Color_System
  - Test border color matches project-specific color on hover

- [ ] 5.6 Create "View Case Study" button
  - Position button in overlay center with fade-in animation
  - Style with white background, rounded-full, appropriate padding
  - Animate entrance with y: 20 to y: 0 and opacity: 0 to 1
  - Add delay of 100ms after overlay appears
  - Apply hover scale 1.05x transform
  - _Requirements: 9.4_

- [ ] 5.7 Implement project text parallax
  - Apply parallax motion to text content (0.15x speed, 30px max offset)
  - Create depth separation between image and text layers
  - Ensure text remains readable at all scroll positions
  - _Requirements: 6.2_


- [ ] 5.8 Build supporting work grid
  - Create `src/app/components/SupportingWork.tsx`
  - Implement two-column grid on desktop, single column on mobile
  - Add viewport-triggered animations for each card
  - Apply hover effects to images (scale 1.05x)
  - Display category badges and project titles
  - Link to case study pages
  - _Requirements: 9.9_

- [ ]* 5.9 Write integration tests for project showcase
  - Test alternating layout pattern works correctly
  - Test hover interactions trigger all expected effects
  - Test keyboard navigation through project links
  - _Requirements: 9.1, 15.2_

- [ ] 5.10 Checkpoint - Verify project showcase
  - Ensure all tests pass, ask the user if questions arise.

### Phase 6: Footer Enhancement

- [ ] 6.1 Design footer layout structure
  - Update `src/app/components/Footer.tsx` with new layout
  - Create 12-column grid with 5-2-5 split (left-spacer-right)
  - Add vertical gradient line at center (bg-gradient-to-b from-brandViolet/0 via-brandBlue to-brandCyan/0)
  - Animate gradient line with scaleY from 0 to 1 on viewport entry (1s duration)
  - _Requirements: 10.4_

- [ ] 6.2 Create rotating diamond animation
  - Add diamond element with gradient background (from-brandIndigo to-brandCyan)
  - Apply rotate-45 base transform
  - Animate continuous rotation (360deg, 20s duration, linear, infinite)
  - Position next to "INK & IMAGINATION" wordmark
  - _Requirements: 10.5, 17.2_

- [ ] 6.3 Implement social links with platform colors
  - Create social link grid (Email, LinkedIn, GitHub, Instagram)
  - Add icon-text combinations with appropriate spacing
  - Define hover colors per platform (Email: brandIndigo, LinkedIn: brandBlue, GitHub: brandViolet, Instagram: brandPink)
  - Apply hover effects: border color change, background opacity, smooth transitions
  - Animate links with staggered timing on viewport entry (delay: 0.7s base, 0.1s stagger)
  - _Requirements: 10.1, 10.2_

- [ ]* 6.4 Write property test for social link colors
  - **Property 27: Social Link Platform-Specific Hover Colors**
  - **Validates: Requirements 10.2**
  - Test each platform's hover color matches its brand color from Color_System

- [ ] 6.5 Design download button treatments
  - Create "Download Resume" primary button with gradient (brandIndigo to brandBlue)
  - Create "Portfolio PDF" secondary button with outlined style
  - Add download icons from lucide-react
  - Apply hover effects: scale 1.05x, shadow glow, 300ms duration
  - Stack buttons on mobile, row on desktop
  - _Requirements: 10.3_


- [ ] 6.6 Add navigation links and bottom bar
  - Display navigation links (Work, About, Contact, Resume) with adequate spacing
  - Animate links with staggered timing (delay: 0.5s base, 0.05s stagger)
  - Create bottom bar with border-top separator
  - Add copyright text and designer credit with reduced opacity (foreground/40)
  - Animate bottom bar with fade-in (delay: 1s, duration: 0.6s)
  - _Requirements: 10.6, 10.7, 10.8_

- [ ]* 6.7 Write integration tests for footer
  - Test viewport entry triggers all animations
  - Test social links navigate to correct URLs
  - Test download buttons have correct href attributes
  - _Requirements: 10.8_

- [ ] 6.8 Checkpoint - Verify footer
  - Ensure all tests pass, ask the user if questions arise.

### Phase 7: Micro-animations and Interaction Polish

- [ ] 7.1 Implement button hover and active states
  - Apply scale 1.05x transform on hover to all primary/secondary buttons
  - Apply scale 0.95x transform on active/click state
  - Add box-shadow glow effects to primary buttons using appropriate colors
  - Set transition durations between 150ms-300ms
  - Use ease-in-out easing for bidirectional smoothness
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.9_

- [ ]* 7.2 Write property tests for button interactions
  - **Property 28: Interactive Element Hover Effects**
  - **Property 29: Button Scale Transform on Hover**
  - **Property 30: Button Scale Transform on Click**
  - **Property 31: Hover Transition Duration Range**
  - **Property 34: Hover Effect Maximum Duration**
  - **Validates: Requirements 11.1, 11.2, 11.3, 11.4, 11.9**
  - Test all interactive elements apply hover effects
  - Test button hover scale is between 1.03x-1.08x
  - Test button active scale is 0.95x
  - Test transition durations are 150ms-300ms
  - Test total hover effect duration doesn't exceed 500ms

- [ ] 7.3 Create focus indicators for keyboard navigation
  - Apply 2px outline to all focused interactive elements
  - Use brandBlue color for focus outlines
  - Add outline-offset: 2px for visual separation
  - Create ring utilities with ring-2 ring-brandBlue ring-offset-2
  - Apply focus-visible pseudo-class for keyboard-only indicators
  - _Requirements: 11.6, 15.3_

- [ ]* 7.4 Write property tests for focus indicators
  - **Property 32: Focus Indicator Visibility**
  - **Property 40: Focus Indicator Minimum Width**
  - **Validates: Requirements 11.6, 15.3**
  - Test focused elements display visible indicators
  - Test outline width is at least 2px


- [ ] 7.5 Add icon animations
  - Implement arrow icon translation on link hover (group-hover:translate-x-1)
  - Add rotation animations for menu icons (Menu to X transition)
  - Apply opacity changes to decorative icons on hover
  - Set animation durations to 200ms-300ms
  - _Requirements: 11.8_

- [ ]* 7.6 Write property test for icon animations
  - **Property 33: Icon Animation on Hover**
  - **Validates: Requirements 11.8**
  - Test icons change rotation, translation, or opacity on hover

- [ ] 7.7 Implement easing function strategy
  - Apply ease-out ([0.16, 1, 0.3, 1]) for entrance animations
  - Apply ease-in ([0.7, 0, 0.84, 0]) for exit animations
  - Apply ease-in-out ([0.45, 0, 0.55, 1]) for hover transitions
  - Use spring animations (stiffness: 300, damping: 30) for layout shifts
  - _Requirements: 16.4, 16.5, 16.6_

- [ ] 7.8 Checkpoint - Verify micro-animations
  - Ensure all tests pass, ask the user if questions arise.

### Phase 8: Accessibility and Performance Optimization

- [ ] 8.1 Implement image lazy loading with placeholders
  - Create `src/components/OptimizedImage.tsx`
  - Add low-quality placeholder images (blurred)
  - Implement loading state transitions (opacity: 0 to 1)
  - Apply loading="lazy" attribute to below-fold images
  - Use modern image formats (avif, webp) with fallbacks
  - _Requirements: 13.3, 13.4_

- [ ] 8.2 Set up code splitting and lazy loading
  - Implement React.lazy for heavy components (ProjectShowcase, Footer)
  - Add Suspense boundaries with loading skeletons
  - Configure route-based code splitting with React Router
  - Define manual chunks in Vite config (vendor, motion, ui)
  - _Requirements: 13.2_

- [ ] 8.3 Optimize animation performance
  - Apply will-change: transform, opacity to frequently animated elements
  - Use transform and opacity exclusively for animations (avoid width, height, background-color)
  - Implement scroll event debouncing (16ms for ~60fps)
  - Limit concurrent animations to 10 elements maximum
  - Use GPU-accelerated properties only
  - _Requirements: 13.5, 13.6, 13.7, 13.8_

- [ ] 8.4 Create loading states and skeletons
  - Build `src/components/LoadingScreen.tsx` with branded animation
  - Create skeleton components for ProjectCard, Footer sections
  - Implement pulse animations for loading states
  - Add smooth transitions between loading and loaded states
  - _Requirements: 13.1_


- [ ] 8.5 Implement comprehensive accessibility features
  - Add alt text to all images with descriptive content
  - Implement keyboard navigation for all interactive elements
  - Create skip navigation link (sr-only, focus:not-sr-only)
  - Add ARIA labels to icon-only buttons and decorative elements
  - Verify heading hierarchy (h1 → h2 → h3, no skipping)
  - Ensure touch targets are 44x44px minimum on mobile
  - _Requirements: 15.1, 15.2, 15.6, 15.7, 15.8, 15.9, 14.7_

- [ ]* 8.6 Write property tests for accessibility
  - **Property 38: Image Alt Attribute Presence**
  - **Property 39: Keyboard Accessibility**
  - **Property 41: ARIA Labels for Unlabeled Components**
  - **Property 42: Heading Hierarchy Correctness**
  - **Property 45: Mobile Touch Target Minimum Size**
  - **Validates: Requirements 15.1, 15.2, 15.6, 15.7, 15.9, 14.7**
  - Test all images have non-empty alt attributes
  - Test all interactive elements are keyboard accessible
  - Test icon-only components have ARIA labels
  - Test heading levels follow proper nesting
  - Test mobile touch targets meet 44x44px minimum

- [ ] 8.7 Verify WCAG 2.1 Level AA color contrast
  - Audit all text-background combinations
  - Ensure 4.5:1 minimum for normal text
  - Ensure 3:1 minimum for large text and UI components
  - Document contrast ratios for key combinations
  - Fix any failing combinations
  - _Requirements: 1.6, 15.4_

- [ ]* 8.8 Write property tests for color contrast
  - **Property 3: Text-Background Contrast Ratios**
  - **Validates: Requirements 1.6, 15.4**
  - Test normal text contrast ratios are ≥4.5:1
  - Test large text contrast ratios are ≥3:1
  - Generate various color combinations from Color_System

- [ ] 8.9 Configure Vite build optimizations
  - Set up manual chunking strategy (vendor, motion, ui)
  - Enable tree-shaking for unused code
  - Configure asset optimization (minification, compression)
  - Add rollup plugins for bundle analysis
  - Set appropriate cache headers
  - _Requirements: 13.8_

- [ ] 8.10 Implement resource hints and preloading
  - Add preconnect for external domains (fonts.googleapis.com, fonts.gstatic.com)
  - Preload critical fonts (PlayfairDisplay-Regular.woff2)
  - Add dns-prefetch for analytics domains
  - Configure appropriate loading strategies
  - _Requirements: 13.2_

- [ ] 8.11 Checkpoint - Verify accessibility and performance
  - Ensure all tests pass, ask the user if questions arise.


### Phase 9: Testing, Brand Consistency, and Final Polish

- [ ] 9.1 Write comprehensive property-based tests
  - Test gradient color count constraint (≤3 colors per gradient)
  - Test Playfair Display usage for brand elements
  - Test responsive spacing hierarchy maintenance
  - Test serif vs sans-serif typography application
  - Test section whitespace separation
  - Test content container max-width constraints
  - Test z-index hierarchy for overlapping elements
  - _Requirements: 1.5, 17.1, 14.6, 17.6, 18.3, 18.5, 18.7_

- [ ]* 9.2 Write property tests for brand consistency
  - **Property 2: Gradient Color Count Constraint**
  - **Property 43: Playfair Display for Brand Elements**
  - **Property 44: Responsive Spacing Hierarchy**
  - **Property 46: Serif vs Sans-Serif Typography**
  - **Property 47: Section Whitespace Separation**
  - **Property 48: Content Container Max-Width**
  - **Property 49: Z-Index Hierarchy for Overlapping Elements**
  - **Validates: Requirements 1.5, 17.1, 17.4, 14.6, 17.6, 18.3, 18.5, 18.7**

- [ ] 9.3 Verify brand identity consistency
  - Audit all instances of "INK & IMAGINATION" wordmark for Playfair Display
  - Verify blue diamond logo appears in Navigation, Hero, Footer
  - Check ampersand "&" gradient treatment is consistent
  - Confirm dark mode is primary theme throughout
  - Verify serif typography for brand/display, sans-serif for UI
  - Test expanded Color_System maintains brand recognition
  - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 17.7_

- [ ] 9.4 Test content hierarchy and visual flow
  - Verify visual hierarchy through size, weight, color, spacing differentiation
  - Test primary actions have higher visual weight than secondary
  - Confirm whitespace separates content sections using Spacing_Scale
  - Check visual flow through alignment and directional cues
  - Test content width limits for readability
  - Verify strategic color usage draws attention appropriately
  - Test Z-axis layering for overlapping elements
  - Test consistent information density
  - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5, 18.6, 18.7, 18.8_

- [ ] 9.5 Verify responsive behavior across breakpoints
  - Test hero section single-column layout on mobile (<768px)
  - Test heading size reductions (30-40%) on mobile
  - Test vertical button stacking on mobile
  - Test custom cursor hidden on mobile
  - Test project showcase single-column grid on mobile
  - Test proportional spacing scaling across breakpoints
  - Test touch target sizes (44x44px minimum)
  - Test touch feedback replacing hover interactions
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8_


- [ ]* 9.6 Run accessibility audit with axe-core
  - Install and configure jest-axe
  - Test all pages for WCAG violations
  - Test keyboard navigation flows
  - Test screen reader compatibility
  - Generate accessibility report
  - Fix any identified issues
  - _Requirements: 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7, 15.8, 15.9_

- [ ]* 9.7 Perform cross-browser testing
  - Test on Chrome, Firefox, Safari, Edge
  - Test animations and interactions across browsers
  - Test responsive behavior on various devices
  - Test gradient rendering consistency
  - Test custom cursor on supported browsers
  - Document any browser-specific issues
  - _Requirements: All_

- [ ]* 9.8 Run performance profiling
  - Measure Core Web Vitals (LCP, FID, CLS, FCP, TTFB)
  - Profile animation frame rates
  - Measure bundle sizes
  - Test lazy loading effectiveness
  - Verify performance budget targets met
  - Generate performance report
  - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8_

- [ ] 9.9 Final visual polish and refinement
  - Review all spacing and alignment
  - Verify color consistency across components
  - Check typography hierarchy implementation
  - Test all animation sequences
  - Verify gradient zones (max 5 per page)
  - Review hover and focus states
  - Test error handling and edge cases
  - _Requirements: All_

- [ ] 9.10 Create comprehensive documentation
  - Document color system usage and guidelines
  - Document typography hierarchy and application
  - Document spacing scale and layout patterns
  - Document animation patterns and timing
  - Document accessibility features and testing
  - Document component API and props
  - Create maintenance guide
  - _Requirements: All_

- [ ] 9.11 Final checkpoint - Complete verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- **Optional Tasks**: Tasks marked with `*` are optional and can be skipped for faster MVP delivery. These include property tests, integration tests, and comprehensive audits.
- **Requirements Traceability**: Each task explicitly references the requirements it validates for full traceability.
- **Checkpoints**: Regular checkpoints ensure incremental validation and provide opportunities for user questions.
- **Property Tests**: Property-based tests validate universal correctness properties defined in the design document.
- **Testing Strategy**: Combines unit tests, property tests, integration tests, and accessibility audits for comprehensive coverage.
- **Incremental Approach**: Each phase builds on previous work, allowing for iterative refinement.


## Task Dependency Graph

```json
{
  "waves": [
    {
      "id": 0,
      "tasks": ["1.1", "1.5", "1.7", "1.8"]
    },
    {
      "id": 1,
      "tasks": ["1.2", "1.3", "1.6"]
    },
    {
      "id": 2,
      "tasks": ["1.4", "2.1", "2.3", "2.5", "2.7", "2.9"]
    },
    {
      "id": 3,
      "tasks": ["2.2", "2.4", "2.6", "2.8"]
    },
    {
      "id": 4,
      "tasks": ["3.1", "4.1", "5.1"]
    },
    {
      "id": 5,
      "tasks": ["3.2", "3.6", "4.3", "4.4", "5.2", "5.7"]
    },
    {
      "id": 6,
      "tasks": ["3.3", "3.4", "4.5", "5.4", "5.6"]
    },
    {
      "id": 7,
      "tasks": ["3.5", "3.7", "4.2", "4.6", "5.3", "5.5", "5.8"]
    },
    {
      "id": 8,
      "tasks": ["4.7", "5.9", "6.1"]
    },
    {
      "id": 9,
      "tasks": ["6.2", "6.3", "6.5"]
    },
    {
      "id": 10,
      "tasks": ["6.4", "6.6", "7.1"]
    },
    {
      "id": 11,
      "tasks": ["6.7", "7.2", "7.3", "7.5", "7.7"]
    },
    {
      "id": 12,
      "tasks": ["7.4", "7.6", "8.1", "8.2", "8.3", "8.4"]
    },
    {
      "id": 13,
      "tasks": ["8.5", "8.7", "8.9", "8.10"]
    },
    {
      "id": 14,
      "tasks": ["8.6", "8.8", "9.1", "9.3", "9.4", "9.5"]
    },
    {
      "id": 15,
      "tasks": ["9.2", "9.6", "9.7", "9.8", "9.9"]
    },
    {
      "id": 16,
      "tasks": ["9.10"]
    }
  ]
}
```
