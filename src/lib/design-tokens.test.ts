/**
 * Design Tokens Tests
 * Validates typography, spacing, and animation token constraints
 */

import {
  headingTokens,
  bodyTokens,
  lineHeightTokens,
  letterSpacingTokens,
  spacingTokens,
  colorTokens,
  isValidBodyLineHeight,
  isValidSpacingValue,
  isValidLetterSpacing,
} from './design-tokens';

describe('Typography Tokens', () => {
  describe('Heading Levels', () => {
    it('should define all 6 heading levels (h1-h6)', () => {
      expect(headingTokens).toHaveProperty('h1');
      expect(headingTokens).toHaveProperty('h2');
      expect(headingTokens).toHaveProperty('h3');
      expect(headingTokens).toHaveProperty('h4');
      expect(headingTokens).toHaveProperty('h5');
      expect(headingTokens).toHaveProperty('h6');
    });

    it('should use Playfair Display font for all headings', () => {
      Object.values(headingTokens).forEach((heading) => {
        expect(heading.fontFamily).toContain('Playfair Display');
      });
    });

    it('should have appropriate font weights', () => {
      expect(headingTokens.h1.fontWeight).toBe(600);
      expect(headingTokens.h2.fontWeight).toBe(600);
      expect(headingTokens.h3.fontWeight).toBe(600);
      expect(headingTokens.h4.fontWeight).toBe(500);
      expect(headingTokens.h5.fontWeight).toBe(500);
      expect(headingTokens.h6.fontWeight).toBe(500);
    });

    it('should have decreasing font sizes from h1 to h6', () => {
      const sizes = [
        parseFloat(headingTokens.h1.fontSize),
        parseFloat(headingTokens.h2.fontSize),
        parseFloat(headingTokens.h3.fontSize),
        parseFloat(headingTokens.h4.fontSize),
        parseFloat(headingTokens.h5.fontSize),
        parseFloat(headingTokens.h6.fontSize),
      ];

      for (let i = 0; i < sizes.length - 1; i++) {
        expect(sizes[i]).toBeGreaterThan(sizes[i + 1]);
      }
    });
  });

  describe('Body Text', () => {
    it('should define body text sizes: large, medium, small', () => {
      expect(bodyTokens).toHaveProperty('large');
      expect(bodyTokens).toHaveProperty('medium');
      expect(bodyTokens).toHaveProperty('small');
    });

    it('should use system sans-serif for body text', () => {
      Object.values(bodyTokens).forEach((body) => {
        expect(body.fontFamily).toContain('system-ui');
      });
    });

    it('should have appropriate font sizes', () => {
      expect(parseFloat(bodyTokens.large.fontSize)).toBe(1.25);
      expect(parseFloat(bodyTokens.medium.fontSize)).toBe(1);
      expect(parseFloat(bodyTokens.small.fontSize)).toBeCloseTo(0.875, 2);
    });

    it('should have line heights between 1.4 and 1.8', () => {
      Object.values(bodyTokens).forEach((body) => {
        expect(isValidBodyLineHeight(body.lineHeight)).toBe(true);
      });
    });

    it('should have all body text at font-weight 400', () => {
      Object.values(bodyTokens).forEach((body) => {
        expect(body.fontWeight).toBe(400);
      });
    });
  });

  describe('Line Height Constraints', () => {
    it('should have body line heights between 1.4 and 1.8', () => {
      expect(isValidBodyLineHeight(lineHeightTokens.bodyLarge)).toBe(true);
      expect(isValidBodyLineHeight(lineHeightTokens.bodyMedium)).toBe(true);
      expect(isValidBodyLineHeight(lineHeightTokens.bodySmall)).toBe(true);
    });

    it('should validate line height bounds', () => {
      expect(isValidBodyLineHeight(1.3)).toBe(false);
      expect(isValidBodyLineHeight(1.4)).toBe(true);
      expect(isValidBodyLineHeight(1.6)).toBe(true);
      expect(isValidBodyLineHeight(1.8)).toBe(true);
      expect(isValidBodyLineHeight(1.9)).toBe(false);
    });
  });

  describe('Letter Spacing Hierarchy', () => {
    it('should have tighter letter-spacing for headings than captions', () => {
      const headingSpacing = parseFloat(letterSpacingTokens.h1);
      const captionSpacing = parseFloat(letterSpacingTokens.caption);

      expect(headingSpacing).toBeLessThan(captionSpacing);
    });

    it('should validate letter spacing by category', () => {
      // Headings should be tight (negative or zero)
      expect(isValidLetterSpacing(letterSpacingTokens.h1, 'heading')).toBe(true);
      expect(isValidLetterSpacing(letterSpacingTokens.display, 'heading')).toBe(true);

      // Captions should be expanded (positive)
      expect(isValidLetterSpacing(letterSpacingTokens.caption, 'caption')).toBe(true);
    });
  });
});

describe('Spacing Scale', () => {
  it('should define spacing scale values', () => {
    expect(spacingTokens).toHaveProperty('xs');
    expect(spacingTokens).toHaveProperty('sm');
    expect(spacingTokens).toHaveProperty('base');
    expect(spacingTokens).toHaveProperty('lg');
    expect(spacingTokens).toHaveProperty('xl');
  });

  it('should be based on 4px increments', () => {
    Object.values(spacingTokens).forEach((value) => {
      const numValue = parseFloat(value);
      expect(isValidSpacingValue(numValue)).toBe(true);
    });
  });

  it('should have increasing values', () => {
    const spacingArray = Object.values(spacingTokens).map((v) =>
      parseFloat(v)
    );

    for (let i = 0; i < spacingArray.length - 1; i++) {
      expect(spacingArray[i]).toBeLessThanOrEqual(spacingArray[i + 1]);
    }
  });
});

describe('Color Accessibility', () => {
  it('should define brand colors', () => {
    expect(Object.keys(colorTokens)).toContain('brandIndigo');
    expect(Object.keys(colorTokens)).toContain('brandBlue');
    expect(Object.keys(colorTokens)).toContain('brandCyan');
  });

  it('should define semantic colors', () => {
    expect(colorTokens.semantic).toHaveProperty('success');
    expect(colorTokens.semantic).toHaveProperty('warning');
    expect(colorTokens.semantic).toHaveProperty('error');
    expect(colorTokens.semantic).toHaveProperty('info');
  });
});

describe('Design Tokens Validation', () => {
  it('should validate spacing is 4px multiples', () => {
    expect(isValidSpacingValue(4)).toBe(true);
    expect(isValidSpacingValue(8)).toBe(true);
    expect(isValidSpacingValue(16)).toBe(true);
    expect(isValidSpacingValue(32)).toBe(true);
    expect(isValidSpacingValue(64)).toBe(true);

    expect(isValidSpacingValue(5)).toBe(false);
    expect(isValidSpacingValue(10)).toBe(false);
    expect(isValidSpacingValue(18)).toBe(false);
  });

  it('should validate line height bounds', () => {
    expect(isValidBodyLineHeight(1.4)).toBe(true);
    expect(isValidBodyLineHeight(1.6)).toBe(true);
    expect(isValidBodyLineHeight(1.8)).toBe(true);

    expect(isValidBodyLineHeight(1.0)).toBe(false);
    expect(isValidBodyLineHeight(1.3)).toBe(false);
    expect(isValidBodyLineHeight(2.0)).toBe(false);
  });
});
