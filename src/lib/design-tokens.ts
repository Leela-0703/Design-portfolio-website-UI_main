/**
 * Design System Tokens for INK & IMAGINATION Portfolio
 * 
 * This file defines all design tokens including colors, typography,
 * spacing, and animation values used throughout the application.
 */

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

/**
 * Typography hierarchy for headings (h1-h6)
 * All headings use Playfair Display serif font family
 */
export const headingTokens = {
  h1: {
    fontSize: '4.5rem',      // 72px
    lineHeight: 1.1,
    fontWeight: 600,
    letterSpacing: '-0.02em',
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  h2: {
    fontSize: '3.75rem',     // 60px
    lineHeight: 1.15,
    fontWeight: 600,
    letterSpacing: '-0.015em',
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  h3: {
    fontSize: '3rem',        // 48px
    lineHeight: 1.2,
    fontWeight: 600,
    letterSpacing: '-0.01em',
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  h4: {
    fontSize: '2.25rem',     // 36px
    lineHeight: 1.3,
    fontWeight: 500,
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  h5: {
    fontSize: '1.875rem',    // 30px
    lineHeight: 1.4,
    fontWeight: 500,
    fontFamily: '"Playfair Display", Georgia, serif',
  },
  h6: {
    fontSize: '1.5rem',      // 24px
    lineHeight: 1.4,
    fontWeight: 500,
    fontFamily: '"Playfair Display", Georgia, serif',
  },
} as const;

/**
 * Display typography for large, prominent text
 * Used for page titles and hero sections
 */
export const displayTokens = {
  display: {
    fontSize: '6rem',        // 96px
    lineHeight: 1,
    fontWeight: 700,
    letterSpacing: '0.2em',
    fontFamily: '"Playfair Display", Georgia, serif',
  },
} as const;

/**
 * Body text tokens for content areas
 * All body text uses system sans-serif font family
 * Line height constrained between 1.4 and 1.8 for readability
 */
export const bodyTokens = {
  large: {
    fontSize: '1.25rem',     // 20px
    lineHeight: 1.6,
    fontWeight: 400,
    fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
  },
  medium: {
    fontSize: '1rem',        // 16px
    lineHeight: 1.6,
    fontWeight: 400,
    fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
  },
  small: {
    fontSize: '0.875rem',    // 14px
    lineHeight: 1.5,
    fontWeight: 400,
    fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
  },
} as const;

/**
 * Caption typography for small, secondary text
 * Used for metadata, labels, and supplementary information
 */
export const captionTokens = {
  caption: {
    fontSize: '0.75rem',     // 12px
    lineHeight: 1.4,
    fontWeight: 400,
    letterSpacing: '0.05em',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
  },
} as const;

/**
 * Line height values for typography
 * Constrained between 1.4 and 1.8 for body text
 */
export const lineHeightTokens = {
  display: 1,           // Display text (h1, h2)
  h1: 1.1,
  h2: 1.15,
  h3: 1.2,
  h4: 1.3,
  h5: 1.4,
  h6: 1.4,
  bodyLarge: 1.6,       // 20px body
  bodyMedium: 1.6,      // 16px body
  bodySmall: 1.5,       // 14px body
  caption: 1.4,         // 12px caption
} as const;

/**
 * Letter spacing values for typography
 * Headings use negative letter-spacing (tighter)
 * Small caps use positive letter-spacing (expanded)
 */
export const letterSpacingTokens = {
  h1: '-0.02em',
  h2: '-0.015em',
  h3: '-0.01em',
  display: '0.2em',     // Display type gets expanded spacing
  caption: '0.05em',    // Small caps get expanded spacing
  normal: '0',
} as const;

/**
 * Font family definitions
 */
export const fontFamilyTokens = {
  playfair: '"Playfair Display", Georgia, serif',
  sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
} as const;

// ============================================================================
// COLOR TOKENS
// ============================================================================

/**
 * Extended brand color palette
 * Includes primary brand colors and additional palette for variety
 */
export const colorTokens = {
  // Brand core colors
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
  
  // Semantic colors
  semantic: {
    success: '#10B981',    // Emerald
    warning: '#F59E0B',    // Amber
    error: '#EF4444',      // Red
    info: '#3B82F6',       // Blue
  },
} as const;

/**
 * Opacity variants for colors
 * Available as Tailwind opacity modifiers: /100, /80, /60, /40, /20, /10, /5
 */
export const opacityVariants = [100, 80, 60, 40, 20, 10, 5] as const;

// ============================================================================
// SPACING SCALE
// ============================================================================

/**
 * Spacing scale based on 4px increments
 * Used for margins, padding, gaps, and layout rhythm
 * 
 * Values: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
 * All values are multiples of 4px for mathematical consistency
 */
export const spacingTokens = {
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

/**
 * Numeric spacing scale (in pixels) for calculations
 * Used by responsive utilities and JavaScript calculations
 */
export const spacingScale = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
  '5xl': 128,
} as const;

/**
 * Section padding presets for different viewport sizes
 * Ensures consistent vertical spacing across page sections
 */
export const sectionPaddingPresets = {
  mobile: {
    top: '64px',    // py-16
    bottom: '64px',
  },
  tablet: {
    top: '96px',    // py-24
    bottom: '96px',
  },
  desktop: {
    top: '128px',   // py-32
    bottom: '128px',
  },
  large: {
    top: '192px',   // py-48
    bottom: '192px',
  },
} as const;

/**
 * Responsive gap values for different grid and flex layouts
 * Used for component spacing consistency
 */
export const gapPresets = {
  compact: '8px',   // sm
  normal: '16px',   // base
  comfortable: '24px', // lg
  spacious: '32px',  // xl
  generous: '48px',  // 2xl
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

/**
 * Animation duration tokens
 * Used for consistency across all transitions and animations
 */
export const animationDurationTokens = {
  fast: 150,      // Quick feedback animations
  normal: 300,    // Standard transitions
  slow: 500,      // Deliberate motion
  slowest: 800,   // Entrance animations
} as const;

/**
 * Easing functions for animations
 * Different easings for different animation types
 */
export const easingTokens = {
  // Ease out - natural deceleration (entrances)
  easeOut: [0.16, 1, 0.3, 1] as const,
  
  // Ease in - natural acceleration (exits)
  easeIn: [0.7, 0, 0.84, 0] as const,
  
  // Ease in-out - bidirectional smoothness (hovers)
  easeInOut: [0.45, 0, 0.55, 1] as const,
  
  // Spring animation
  spring: {
    stiffness: 300,
    damping: 30,
  },
} as const;

/**
 * Stagger timing for sequential animations
 * Used when animating multiple elements
 */
export const staggerTimingTokens = {
  fast: 50,       // Rapid sequential animations
  normal: 100,    // Standard sequential animations
  slow: 150,      // Deliberate sequential animations
} as const;

/**
 * Reusable animation variants for common animation patterns
 * These define both initial and animate states compatible with Framer Motion
 * Each variant includes visual and timing properties
 */
export const animationVariants = {
  /**
   * Fade in with upward slide motion
   * Entrance animation: opacity 0→1, y: 60→0
   */
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: animationDurationTokens.normal },
  },

  /**
   * Fade in with downward slide motion
   * Entrance animation: opacity 0→1, y: -30→0
   */
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: animationDurationTokens.normal },
  },

  /**
   * Scale in with fade animation
   * Entrance animation: scale 0.9→1, opacity 0→1
   */
  scaleIn: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: animationDurationTokens.normal },
  },

  /**
   * Hover lift effect for interactive elements
   * Hover animation: scale 1→1.05
   * Used with whileHover in Framer Motion
   */
  hoverLift: {
    whileHover: { scale: 1.05 },
    transition: { duration: animationDurationTokens.fast },
  },
} as const;

/**
 * Animation presets combining variants with easing functions
 * Ready to use with Framer Motion for consistent animation behavior
 */
export const animationPresets = {
  /**
   * Entrance preset with ease-out easing
   * Used for elements appearing on page load or on viewport
   */
  entrance: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: animationDurationTokens.normal,
      ease: easingTokens.easeOut,
    },
  },

  /**
   * Exit preset with ease-in easing
   * Used for elements disappearing or leaving view
   */
  exit: {
    exit: { opacity: 0, y: -20 },
    transition: {
      duration: animationDurationTokens.fast,
      ease: easingTokens.easeIn,
    },
  },

  /**
   * Hover preset with ease-in-out easing
   * Used for interactive hover states
   */
  hover: {
    transition: {
      duration: animationDurationTokens.fast,
      ease: easingTokens.easeInOut,
    },
  },

  /**
   * Spring animation preset
   * Used for bouncy, organic motion
   */
  spring: {
    transition: easingTokens.spring,
  },
} as const;

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Validates that a line height value is within acceptable body text range (1.4-1.8)
 */
export const isValidBodyLineHeight = (value: number): boolean => {
  return value >= 1.4 && value <= 1.8;
};

/**
 * Validates that a spacing value is a multiple of 4px
 */
export const isValidSpacingValue = (value: number): boolean => {
  return value % 4 === 0;
};

/**
 * Validates that all spacing values in an object are 4px multiples
 * Useful for validating complex spacing configurations
 */
export const isValidSpacingScale = (scale: Record<string, number>): boolean => {
  return Object.values(scale).every(value => isValidSpacingValue(value));
};

/**
 * Validates that a letter spacing is appropriate for typography category
 */
export const isValidLetterSpacing = (
  value: string,
  category: 'heading' | 'body' | 'caption'
): boolean => {
  if (category === 'heading') {
    // Headings should use negative or zero letter-spacing (tighter)
    const numeric = parseFloat(value);
    return numeric <= 0;
  }
  
  if (category === 'caption') {
    // Small caps should use positive letter-spacing (expanded)
    const numeric = parseFloat(value);
    return numeric > 0;
  }
  
  return true;
};

// ============================================================================
// RESPONSIVE SPACING UTILITIES
// ============================================================================

/**
 * Calculates responsive spacing value based on viewport width
 * Scales spacing values proportionally while maintaining hierarchy
 * 
 * @param baseSpacing - Base spacing value in pixels
 * @param viewportWidth - Current viewport width in pixels
 * @param breakpoints - Responsive breakpoint configuration
 * @returns Scaled spacing value in pixels
 * 
 * @example
 * // On mobile (320px viewport), 48px scales to 32px
 * getResponsiveSpacing(48, 320, { mobile: 0.67, desktop: 1 })
 */
export const getResponsiveSpacing = (
  baseSpacing: number,
  viewportWidth: number,
  breakpoints?: { mobile?: number; tablet?: number; desktop?: number }
): number => {
  const defaultBreakpoints = {
    mobile: 0.67,    // 67% of base on mobile
    tablet: 0.85,    // 85% of base on tablet
    desktop: 1.0,    // 100% of base on desktop
  };
  
  const bp = { ...defaultBreakpoints, ...breakpoints };
  
  // Determine scale factor based on viewport width
  if (viewportWidth < 768) {
    return Math.round(baseSpacing * bp.mobile);
  } else if (viewportWidth < 1024) {
    return Math.round(baseSpacing * bp.tablet);
  } else {
    return Math.round(baseSpacing * bp.desktop);
  }
};

/**
 * Calculates section padding for responsive layouts
 * Ensures comfortable spacing relative to viewport size
 * 
 * @param viewportWidth - Current viewport width in pixels
 * @returns Object with top and bottom padding values in pixels
 * 
 * @example
 * // Mobile viewport
 * getSectionPadding(375)  // { top: 64, bottom: 64 }
 * // Desktop viewport
 * getSectionPadding(1280) // { top: 128, bottom: 128 }
 */
export const getSectionPadding = (
  viewportWidth: number
): { top: number; bottom: number } => {
  if (viewportWidth < 768) {
    return { top: 64, bottom: 64 };    // py-16
  } else if (viewportWidth < 1024) {
    return { top: 96, bottom: 96 };    // py-24
  } else if (viewportWidth < 1280) {
    return { top: 128, bottom: 128 };  // py-32
  } else {
    return { top: 192, bottom: 192 };  // py-48
  }
};

/**
 * Calculates grid gap value for responsive layouts
 * Maintains proportional spacing between elements across breakpoints
 * 
 * @param viewportWidth - Current viewport width in pixels
 * @param layoutDensity - Density level: 'compact', 'normal', 'comfortable', 'spacious'
 * @returns Gap value in pixels
 * 
 * @example
 * getResponsiveGap(375, 'normal')   // 12px on mobile
 * getResponsiveGap(1280, 'normal')  // 16px on desktop
 */
export const getResponsiveGap = (
  viewportWidth: number,
  layoutDensity: 'compact' | 'normal' | 'comfortable' | 'spacious' = 'normal'
): number => {
  const densityMap = {
    compact: { mobile: 6, tablet: 8, desktop: 12 },
    normal: { mobile: 12, tablet: 16, desktop: 16 },
    comfortable: { mobile: 16, tablet: 20, desktop: 24 },
    spacious: { mobile: 20, tablet: 24, desktop: 32 },
  };
  
  const density = densityMap[layoutDensity];
  
  if (viewportWidth < 768) {
    return density.mobile;
  } else if (viewportWidth < 1024) {
    return density.tablet;
  } else {
    return density.desktop;
  }
};

/**
 * Calculates container horizontal padding for optimal content width
 * Balances readability with screen real estate usage
 * 
 * @param viewportWidth - Current viewport width in pixels
 * @param maxContentWidth - Maximum content width in pixels (default: 1280)
 * @returns Horizontal padding value in pixels
 * 
 * @example
 * getContainerPaddingX(375)   // 16px (px-4)
 * getContainerPaddingX(1280)  // 24px (px-6)
 */
export const getContainerPaddingX = (
  viewportWidth: number,
  maxContentWidth: number = 1280
): number => {
  if (viewportWidth < 640) {
    return 16;  // px-4
  } else if (viewportWidth < 768) {
    return 20;  // px-5
  } else if (viewportWidth < 1024) {
    return 24;  // px-6
  } else {
    return (viewportWidth - maxContentWidth) / 2;
  }
};

/**
 * Validates that responsive spacing maintains hierarchy
 * Ensures spacing ratios are consistent across breakpoints
 * 
 * @param spacingMap - Responsive spacing configuration
 * @returns true if hierarchy is maintained, false otherwise
 * 
 * @example
 * const spacing = { mobile: 12, tablet: 16, desktop: 24 };
 * isValidResponsiveHierarchy(spacing) // true
 */
export const isValidResponsiveHierarchy = (
  spacingMap: Record<string, number>
): boolean => {
  const values = Object.values(spacingMap).sort((a, b) => a - b);
  
  // Check that each value increases or stays the same
  for (let i = 1; i < values.length; i++) {
    if (values[i] < values[i - 1]) {
      return false;
    }
  }
  
  // Check that all values are 4px multiples
  return isValidSpacingScale(spacingMap);
};

/**
 * Calculates stagger timing for responsive animation delays
 * Ensures animations feel coordinated across different screen sizes
 * 
 * @param itemIndex - Index of the item in sequence
 * @param viewportWidth - Current viewport width in pixels
 * @param density - Animation density: 'fast', 'normal', 'slow'
 * @returns Animation delay in milliseconds
 * 
 * @example
 * getStaggerDelay(0, 1280, 'normal') // 0ms
 * getStaggerDelay(2, 1280, 'normal') // 200ms (100ms * 2)
 */
export const getStaggerDelay = (
  itemIndex: number,
  viewportWidth: number,
  density: 'fast' | 'normal' | 'slow' = 'normal'
): number => {
  const baseDelays = {
    fast: 50,
    normal: 100,
    slow: 150,
  };
  
  const baseDelay = baseDelays[density];
  
  // Reduce stagger on mobile for quicker animations
  const multiplier = viewportWidth < 768 ? 0.75 : 1;
  
  return Math.round(itemIndex * baseDelay * multiplier);
};

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type HeadingLevel = keyof typeof headingTokens;
export type BodySize = keyof typeof bodyTokens;
export type ColorKey = keyof typeof colorTokens;
export type SpacingKey = keyof typeof spacingTokens;
export type SpacingKeyNumeric = keyof typeof spacingScale;
export type AnimationDuration = keyof typeof animationDurationTokens;
export type LayoutDensity = 'compact' | 'normal' | 'comfortable' | 'spacious';
export type AnimationDensity = 'fast' | 'normal' | 'slow';
export type AnimationVariantKey = keyof typeof animationVariants;
export type AnimationPresetKey = keyof typeof animationPresets;
export type StaggerTiming = keyof typeof staggerTimingTokens;
