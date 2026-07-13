/**
 * Hook to detect and respond to user's reduced motion preferences
 * Validates: Requirements 15.5
 * 
 * This hook detects the prefers-reduced-motion media query and returns
 * a boolean that can be used to disable animations throughout the app.
 */

import { useEffect, useState } from 'react';

/**
 * Custom hook that detects if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion, false otherwise
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check initial preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes to preference
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};
