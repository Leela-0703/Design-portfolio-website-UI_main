/**
 * Skip Navigation Link Component
 * WCAG 2.1 Level AA Compliant
 * Validates: Requirements 15.8
 * 
 * Screen reader accessible skip link that appears on focus.
 * Allows keyboard users to skip navigation and jump directly to main content.
 */

export const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="skip-link sr-only sr-only-focusable"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
