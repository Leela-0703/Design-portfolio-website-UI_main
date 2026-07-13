/**
 * ARIA Utilities
 * Helpers for accessible ARIA attributes
 * Validates: Requirements 15.6
 * 
 * Utilities for creating accessible components with proper ARIA labels,
 * roles, and semantic HTML attributes.
 */

/**
 * Configuration for ARIA labels on icon-only buttons
 */
interface AriaLabelConfig {
  label: string;
  describedBy?: string;
  labelledBy?: string;
}

/**
 * Generate ARIA attributes for icon-only buttons
 * @param config - Configuration object with label and optional describedBy/labelledBy
 * @returns Object with ARIA attributes
 */
export const getAriaLabelAttrs = (config: AriaLabelConfig) => {
  return {
    'aria-label': config.label,
    ...(config.describedBy && { 'aria-describedby': config.describedBy }),
    ...(config.labelledBy && { 'aria-labelledby': config.labelledBy }),
  };
};

/**
 * Generate attributes for decorative elements (hidden from screen readers)
 * @returns Object with aria-hidden attribute
 */
export const getDecorativeAttrs = () => {
  return {
    'aria-hidden': 'true',
    role: 'presentation',
  };
};

/**
 * Generate attributes for labeled components
 * @param labelId - ID of the label element
 * @returns Object with aria-labelledby attribute
 */
export const getLabelledByAttrs = (labelId: string) => {
  return {
    'aria-labelledby': labelId,
  };
};

/**
 * Generate semantic role attributes
 */
export const getRoleAttrs = (role: string) => {
  return {
    role,
  };
};

/**
 * Common icon button labels
 */
export const commonAriaLabels = {
  menu: 'Open navigation menu',
  close: 'Close menu',
  download: 'Download file',
  share: 'Share content',
  search: 'Search',
  settings: 'Open settings',
  user: 'User profile',
  logout: 'Log out',
  expand: 'Expand',
  collapse: 'Collapse',
  external: 'Opens in new window',
  previous: 'Previous',
  next: 'Next',
} as const;

/**
 * Type-safe ARIA label helper
 * @param key - Key from commonAriaLabels
 * @returns ARIA label string
 */
export const getAriaLabel = (key: keyof typeof commonAriaLabels) => {
  return commonAriaLabels[key];
};

/**
 * Generate ARIA attributes for a component with multiple states
 */
export const getAriaStateAttrs = (state: 'expanded' | 'collapsed' | 'pressed' | 'selected') => {
  const stateMap = {
    expanded: { 'aria-expanded': 'true' },
    collapsed: { 'aria-expanded': 'false' },
    pressed: { 'aria-pressed': 'true' },
    selected: { 'aria-selected': 'true' },
  };

  return stateMap[state];
};

/**
 * Generate ARIA attributes for disabled state
 */
export const getDisabledAttrs = () => {
  return {
    'aria-disabled': 'true',
    disabled: true,
  };
};

/**
 * Generate ARIA attributes for loading state
 */
export const getLoadingAttrs = () => {
  return {
    'aria-busy': 'true',
  };
};

/**
 * Generate ARIA attributes for error state
 */
export const getErrorAttrs = (errorMessage?: string) => {
  return {
    'aria-invalid': 'true',
    ...(errorMessage && { 'aria-errormessage': errorMessage }),
  };
};

/**
 * Generate complete accessibility attributes for a button
 */
export const getAccessibleButtonAttrs = (
  label: string,
  options?: {
    disabled?: boolean;
    loading?: boolean;
    error?: boolean;
    errorMessage?: string;
  }
) => {
  const attrs: Record<string, any> = {
    'aria-label': label,
  };

  if (options?.disabled) {
    Object.assign(attrs, getDisabledAttrs());
  }

  if (options?.loading) {
    Object.assign(attrs, getLoadingAttrs());
  }

  if (options?.error) {
    Object.assign(attrs, getErrorAttrs(options.errorMessage));
  }

  return attrs;
};

/**
 * Generate accessibility attributes for image elements
 */
export const getImageAttrs = (
  alt: string,
  options?: {
    isDecorative?: boolean;
    longDescription?: string;
  }
) => {
  if (options?.isDecorative) {
    return {
      alt: '',
      ...getDecorativeAttrs(),
    };
  }

  return {
    alt,
    ...(options?.longDescription && { 'aria-describedby': options.longDescription }),
  };
};
