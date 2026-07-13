/**
 * Accessibility Utilities
 * General accessibility helpers and utilities
 * Validates: Requirements 15.3, 15.5, 15.6, 15.8
 */

/**
 * Configuration for focus indicator styles
 */
export const focusIndicatorStyles = {
  outline: '2px solid #3B82F6', // brandBlue
  outlineOffset: '2px',
  borderRadius: '4px',
} as const;

/**
 * Tailwind CSS classes for focus indicators
 */
export const focusIndicatorClasses =
  'focus-visible:ring-2 focus-visible:ring-brandBlue focus-visible:ring-offset-2 focus-visible:ring-offset-background';

/**
 * Calculate contrast ratio between two colors (RGB format)
 * @param rgb1 - Color in RGB format [r, g, b]
 * @param rgb2 - Color in RGB format [r, g, b]
 * @returns Contrast ratio
 */
export const calculateContrastRatio = (
  rgb1: [number, number, number],
  rgb2: [number, number, number]
): number => {
  const getLuminance = (rgb: [number, number, number]) => {
    const [r, g, b] = rgb.map((value) => {
      const v = value / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(rgb1);
  const l2 = getLuminance(rgb2);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Convert hex color to RGB
 * @param hex - Color in hex format (#RRGGBB)
 * @returns RGB tuple [r, g, b]
 */
export const hexToRgb = (hex: string): [number, number, number] | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : null;
};

/**
 * Check if color combination meets WCAG AA contrast requirement
 * @param textColor - Foreground color in hex format
 * @param backgroundColor - Background color in hex format
 * @param largeText - If true, uses 3:1 minimum; otherwise 4.5:1
 * @returns True if contrast ratio meets requirement
 */
export const meetsWCAGAA = (textColor: string, backgroundColor: string, largeText = false): boolean => {
  const textRgb = hexToRgb(textColor);
  const bgRgb = hexToRgb(backgroundColor);

  if (!textRgb || !bgRgb) return false;

  const ratio = calculateContrastRatio(textRgb, bgRgb);
  const minimum = largeText ? 3 : 4.5;

  return ratio >= minimum;
};

/**
 * Get focus visible className for inline elements
 * @param base - Base class name
 * @returns Complete class string with focus styles
 */
export const getAccessibleClass = (base: string): string => {
  return `${base} ${focusIndicatorClasses}`;
};

/**
 * Helper to create accessible heading elements
 */
export const headingLevels = {
  h1: { level: 1, fontSize: '4.5rem', fontWeight: 600 },
  h2: { level: 2, fontSize: '3.75rem', fontWeight: 600 },
  h3: { level: 3, fontSize: '3rem', fontWeight: 600 },
  h4: { level: 4, fontSize: '2.25rem', fontWeight: 500 },
  h5: { level: 5, fontSize: '1.875rem', fontWeight: 500 },
  h6: { level: 6, fontSize: '1.5rem', fontWeight: 500 },
} as const;

/**
 * Validate heading hierarchy
 * @param headings - Array of heading elements
 * @returns True if heading hierarchy is valid (no skipped levels)
 */
export const validateHeadingHierarchy = (headings: HTMLHeadingElement[]): boolean => {
  if (headings.length === 0) return true;

  let previousLevel = 0;
  for (const heading of headings) {
    const currentLevel = parseInt(heading.tagName[1], 10);
    if (currentLevel > previousLevel + 1) {
      // Skipped a heading level
      return false;
    }
    previousLevel = currentLevel;
  }

  return true;
};

/**
 * Check if element has sufficient keyboard accessibility
 */
export const isKeyboardAccessible = (element: HTMLElement): boolean => {
  const focusableSelectors = [
    'a[href]',
    'button',
    'input',
    'select',
    'textarea',
    '[tabindex]:not([tabindex="-1"])',
  ];

  const isFocusable = focusableSelectors.some((selector) => element.matches(selector));
  const hasClickListener = element.onclick !== null || element.hasAttribute('onclick');
  const isButton = element.tagName === 'BUTTON';

  return isFocusable || (hasClickListener && (isButton || element.hasAttribute('role')));
};

/**
 * Get all focusable elements within a container
 */
export const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  const focusableSelectors = [
    'a[href]',
    'button',
    'input',
    'select',
    'textarea',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',');

  return Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors));
};

/**
 * Trap focus within an element (for modals, dialogs)
 */
export const trapFocus = (container: HTMLElement, initialFocus?: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  // Set initial focus
  if (initialFocus && focusableElements.includes(initialFocus)) {
    initialFocus.focus();
  } else {
    firstFocusable?.focus();
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        lastFocusable?.focus();
        e.preventDefault();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        firstFocusable?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleKeyDown);

  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
};

/**
 * Announce message to screen readers
 * @param message - Message to announce
 * @param priority - 'polite' (default) or 'assertive'
 */
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  let announcer = document.getElementById('sr-announcer');

  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = 'sr-announcer';
    announcer.className = 'sr-only';
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    document.body.appendChild(announcer);
  }

  announcer.setAttribute('aria-live', priority);
  announcer.textContent = message;

  // Clear after announcement
  setTimeout(() => {
    if (announcer) {
      announcer.textContent = '';
    }
  }, 1000);
};

/**
 * Check if touch device
 */
export const isTouchDevice = (): boolean => {
  return (
    typeof window !== 'undefined' &&
    (!!navigator.maxTouchPoints ||
      !!navigator.msMaxTouchPoints ||
      'ontouchstart' in document.documentElement)
  );
};

/**
 * Check if device supports hover interactions
 */
export const supportsHoverInteractions = (): boolean => {
  if (typeof window === 'undefined') return true;

  const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
  return mediaQuery.matches;
};
