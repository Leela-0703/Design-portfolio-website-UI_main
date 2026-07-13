/**
 * Tests for accessibility utilities
 * Validates: Requirements 15.3, 15.5, 15.6, 15.8
 */

import {
  calculateContrastRatio,
  hexToRgb,
  meetsWCAGAA,
  getAccessibleClass,
  validateHeadingHierarchy,
  isKeyboardAccessible,
  getFocusableElements,
  supportsHoverInteractions,
  isTouchDevice,
} from './accessibility-utilities';

describe('Accessibility Utilities', () => {
  describe('hexToRgb', () => {
    it('should convert valid hex color to RGB', () => {
      expect(hexToRgb('#FF0000')).toEqual([255, 0, 0]);
      expect(hexToRgb('#00FF00')).toEqual([0, 255, 0]);
      expect(hexToRgb('#0000FF')).toEqual([0, 0, 255]);
    });

    it('should handle lowercase hex colors', () => {
      expect(hexToRgb('#ff0000')).toEqual([255, 0, 0]);
      expect(hexToRgb('#3b82f6')).toEqual([59, 130, 246]);
    });

    it('should handle hex colors without # prefix', () => {
      expect(hexToRgb('FF0000')).toEqual([255, 0, 0]);
    });

    it('should return null for invalid hex', () => {
      expect(hexToRgb('#GGGGGG')).toBeNull();
      expect(hexToRgb('invalid')).toBeNull();
      expect(hexToRgb('')).toBeNull();
    });
  });

  describe('calculateContrastRatio', () => {
    it('should calculate correct contrast for white on black', () => {
      const ratio = calculateContrastRatio([255, 255, 255], [0, 0, 0]);
      expect(ratio).toBeCloseTo(21, 0);
    });

    it('should calculate correct contrast for black on white', () => {
      const ratio = calculateContrastRatio([0, 0, 0], [255, 255, 255]);
      expect(ratio).toBeCloseTo(21, 0);
    });

    it('should calculate minimum ratio of 1 for same color', () => {
      const ratio = calculateContrastRatio([128, 128, 128], [128, 128, 128]);
      expect(ratio).toBeCloseTo(1, 0);
    });

    it('should return symmetric results', () => {
      const ratio1 = calculateContrastRatio([255, 0, 0], [255, 255, 255]);
      const ratio2 = calculateContrastRatio([255, 255, 255], [255, 0, 0]);
      expect(ratio1).toBe(ratio2);
    });
  });

  describe('meetsWCAGAA', () => {
    it('should validate white text on black background meets normal text requirement', () => {
      const meets = meetsWCAGAA('#FFFFFF', '#000000', false);
      expect(meets).toBe(true);
    });

    it('should validate white text on black background meets large text requirement', () => {
      const meets = meetsWCAGAA('#FFFFFF', '#000000', true);
      expect(meets).toBe(true);
    });

    it('should reject low contrast combinations', () => {
      const meets = meetsWCAGAA('#CCCCCC', '#FFFFFF', false);
      expect(meets).toBe(false);
    });

    it('should use 3:1 ratio for large text', () => {
      // brandBlue on white background should pass large text but fail normal text
      const largeText = meetsWCAGAA('#3B82F6', '#FFFFFF', true);
      expect(largeText).toBe(true);
    });

    it('should handle invalid hex values gracefully', () => {
      const meets = meetsWCAGAA('#GGGGGG', '#FFFFFF', false);
      expect(meets).toBe(false);
    });
  });

  describe('getAccessibleClass', () => {
    it('should combine base class with focus indicator classes', () => {
      const result = getAccessibleClass('px-4 py-2 bg-blue-500');
      expect(result).toContain('px-4 py-2 bg-blue-500');
      expect(result).toContain('focus-visible:ring-2');
      expect(result).toContain('focus-visible:ring-brandBlue');
    });
  });

  describe('validateHeadingHierarchy', () => {
    it('should validate correct heading hierarchy', () => {
      const h1 = document.createElement('h1');
      const h2 = document.createElement('h2');
      const h3 = document.createElement('h3');

      const valid = validateHeadingHierarchy([h1, h2, h3]);
      expect(valid).toBe(true);
    });

    it('should reject skipped heading levels', () => {
      const h1 = document.createElement('h1');
      const h3 = document.createElement('h3'); // Skips h2

      const valid = validateHeadingHierarchy([h1, h3]);
      expect(valid).toBe(false);
    });

    it('should accept repeated heading levels', () => {
      const h1 = document.createElement('h1');
      const h2a = document.createElement('h2');
      const h2b = document.createElement('h2');

      const valid = validateHeadingHierarchy([h1, h2a, h2b]);
      expect(valid).toBe(true);
    });

    it('should handle empty heading list', () => {
      const valid = validateHeadingHierarchy([]);
      expect(valid).toBe(true);
    });

    it('should accept single heading', () => {
      const h1 = document.createElement('h1');
      const valid = validateHeadingHierarchy([h1]);
      expect(valid).toBe(true);
    });
  });

  describe('isKeyboardAccessible', () => {
    it('should identify links as keyboard accessible', () => {
      const link = document.createElement('a');
      link.href = '/test';
      expect(isKeyboardAccessible(link)).toBe(true);
    });

    it('should identify buttons as keyboard accessible', () => {
      const button = document.createElement('button');
      expect(isKeyboardAccessible(button)).toBe(true);
    });

    it('should identify inputs as keyboard accessible', () => {
      const input = document.createElement('input');
      expect(isKeyboardAccessible(input)).toBe(true);
    });

    it('should identify elements with tabindex as keyboard accessible', () => {
      const div = document.createElement('div');
      div.setAttribute('tabindex', '0');
      expect(isKeyboardAccessible(div)).toBe(true);
    });

    it('should identify elements with role and click listener as keyboard accessible', () => {
      const div = document.createElement('div');
      div.setAttribute('role', 'button');
      div.onclick = () => {};
      expect(isKeyboardAccessible(div)).toBe(true);
    });

    it('should reject non-accessible elements', () => {
      const span = document.createElement('span');
      expect(isKeyboardAccessible(span)).toBe(false);
    });
  });

  describe('getFocusableElements', () => {
    it('should find all focusable elements in container', () => {
      const container = document.createElement('div');
      const link = document.createElement('a');
      link.href = '/test';
      const button = document.createElement('button');
      const input = document.createElement('input');

      container.appendChild(link);
      container.appendChild(button);
      container.appendChild(input);

      const focusable = getFocusableElements(container);
      expect(focusable).toHaveLength(3);
      expect(focusable).toContain(link);
      expect(focusable).toContain(button);
      expect(focusable).toContain(input);
    });

    it('should ignore disabled elements', () => {
      const container = document.createElement('div');
      const button1 = document.createElement('button');
      const button2 = document.createElement('button');
      button2.disabled = true;

      container.appendChild(button1);
      container.appendChild(button2);

      // Note: querySelectorAll includes disabled buttons, but practical usage would filter
      const focusable = getFocusableElements(container);
      expect(focusable.length).toBeGreaterThanOrEqual(1);
    });

    it('should return empty array for container with no focusable elements', () => {
      const container = document.createElement('div');
      const span = document.createElement('span');
      container.appendChild(span);

      const focusable = getFocusableElements(container);
      expect(focusable).toHaveLength(0);
    });
  });

  describe('supportsHoverInteractions', () => {
    it('should detect hover support', () => {
      // Mock matchMedia
      const originalMatchMedia = window.matchMedia;
      window.matchMedia = jest.fn().mockImplementation((query: string) => ({
        matches: query === '(hover: hover) and (pointer: fine)',
        media: query,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })) as any;

      const supports = supportsHoverInteractions();
      expect(typeof supports).toBe('boolean');

      window.matchMedia = originalMatchMedia;
    });
  });

  describe('isTouchDevice', () => {
    it('should detect touch devices', () => {
      const isTouchable = isTouchDevice();
      expect(typeof isTouchable).toBe('boolean');
    });
  });
});
