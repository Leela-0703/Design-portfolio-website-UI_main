/**
 * Tests for ARIA utilities
 * Validates: Requirements 15.6
 */

import {
  getAriaLabelAttrs,
  getDecorativeAttrs,
  getLabelledByAttrs,
  getRoleAttrs,
  getAriaLabel,
  getAriaStateAttrs,
  getDisabledAttrs,
  getLoadingAttrs,
  getErrorAttrs,
  getAccessibleButtonAttrs,
  getImageAttrs,
  commonAriaLabels,
} from './aria-utilities';

describe('ARIA Utilities', () => {
  describe('getAriaLabelAttrs', () => {
    it('should return aria-label attribute', () => {
      const attrs = getAriaLabelAttrs({ label: 'Close menu' });
      expect(attrs['aria-label']).toBe('Close menu');
    });

    it('should include aria-describedby when provided', () => {
      const attrs = getAriaLabelAttrs({
        label: 'Submit',
        describedBy: 'submit-hint',
      });
      expect(attrs['aria-describedby']).toBe('submit-hint');
    });

    it('should include aria-labelledby when provided', () => {
      const attrs = getAriaLabelAttrs({
        label: 'Form section',
        labelledBy: 'form-title',
      });
      expect(attrs['aria-labelledby']).toBe('form-title');
    });

    it('should not include undefined attributes', () => {
      const attrs = getAriaLabelAttrs({ label: 'Button' });
      expect(attrs).not.toHaveProperty('aria-describedby');
      expect(attrs).not.toHaveProperty('aria-labelledby');
    });
  });

  describe('getDecorativeAttrs', () => {
    it('should return aria-hidden and role presentation', () => {
      const attrs = getDecorativeAttrs();
      expect(attrs['aria-hidden']).toBe('true');
      expect(attrs.role).toBe('presentation');
    });
  });

  describe('getLabelledByAttrs', () => {
    it('should return aria-labelledby attribute', () => {
      const attrs = getLabelledByAttrs('label-id');
      expect(attrs['aria-labelledby']).toBe('label-id');
    });
  });

  describe('getRoleAttrs', () => {
    it('should return role attribute', () => {
      const attrs = getRoleAttrs('button');
      expect(attrs.role).toBe('button');
    });

    it('should work with different role values', () => {
      const roles = ['dialog', 'alert', 'navigation', 'main', 'complementary'];
      roles.forEach((role) => {
        const attrs = getRoleAttrs(role);
        expect(attrs.role).toBe(role);
      });
    });
  });

  describe('getAriaLabel', () => {
    it('should return correct label for valid key', () => {
      expect(getAriaLabel('menu')).toBe(commonAriaLabels.menu);
      expect(getAriaLabel('close')).toBe(commonAriaLabels.close);
      expect(getAriaLabel('download')).toBe(commonAriaLabels.download);
    });

    it('should have all common labels defined', () => {
      const expectedLabels = [
        'menu',
        'close',
        'download',
        'share',
        'search',
        'settings',
        'user',
        'logout',
        'expand',
        'collapse',
        'external',
        'previous',
        'next',
      ];

      expectedLabels.forEach((label) => {
        expect(commonAriaLabels).toHaveProperty(label);
      });
    });
  });

  describe('getAriaStateAttrs', () => {
    it('should return correct attributes for expanded state', () => {
      const attrs = getAriaStateAttrs('expanded');
      expect(attrs['aria-expanded']).toBe('true');
    });

    it('should return correct attributes for collapsed state', () => {
      const attrs = getAriaStateAttrs('collapsed');
      expect(attrs['aria-expanded']).toBe('false');
    });

    it('should return correct attributes for pressed state', () => {
      const attrs = getAriaStateAttrs('pressed');
      expect(attrs['aria-pressed']).toBe('true');
    });

    it('should return correct attributes for selected state', () => {
      const attrs = getAriaStateAttrs('selected');
      expect(attrs['aria-selected']).toBe('true');
    });
  });

  describe('getDisabledAttrs', () => {
    it('should return aria-disabled and disabled attributes', () => {
      const attrs = getDisabledAttrs();
      expect(attrs['aria-disabled']).toBe('true');
      expect(attrs.disabled).toBe(true);
    });
  });

  describe('getLoadingAttrs', () => {
    it('should return aria-busy attribute', () => {
      const attrs = getLoadingAttrs();
      expect(attrs['aria-busy']).toBe('true');
    });
  });

  describe('getErrorAttrs', () => {
    it('should return aria-invalid attribute', () => {
      const attrs = getErrorAttrs();
      expect(attrs['aria-invalid']).toBe('true');
    });

    it('should include aria-errormessage when provided', () => {
      const attrs = getErrorAttrs('error-message-id');
      expect(attrs['aria-errormessage']).toBe('error-message-id');
    });

    it('should not include aria-errormessage when not provided', () => {
      const attrs = getErrorAttrs();
      expect(attrs).not.toHaveProperty('aria-errormessage');
    });
  });

  describe('getAccessibleButtonAttrs', () => {
    it('should return basic aria-label for button', () => {
      const attrs = getAccessibleButtonAttrs('Submit form');
      expect(attrs['aria-label']).toBe('Submit form');
    });

    it('should include disabled attributes when disabled', () => {
      const attrs = getAccessibleButtonAttrs('Submit', { disabled: true });
      expect(attrs['aria-disabled']).toBe('true');
      expect(attrs.disabled).toBe(true);
    });

    it('should include loading attributes when loading', () => {
      const attrs = getAccessibleButtonAttrs('Submit', { loading: true });
      expect(attrs['aria-busy']).toBe('true');
    });

    it('should include error attributes when error', () => {
      const attrs = getAccessibleButtonAttrs('Submit', {
        error: true,
        errorMessage: 'error-id',
      });
      expect(attrs['aria-invalid']).toBe('true');
      expect(attrs['aria-errormessage']).toBe('error-id');
    });

    it('should combine multiple states', () => {
      const attrs = getAccessibleButtonAttrs('Submit', {
        disabled: true,
        error: true,
        errorMessage: 'error-msg',
      });
      expect(attrs['aria-label']).toBe('Submit');
      expect(attrs['aria-disabled']).toBe('true');
      expect(attrs['aria-invalid']).toBe('true');
      expect(attrs['aria-errormessage']).toBe('error-msg');
    });
  });

  describe('getImageAttrs', () => {
    it('should return alt text for meaningful images', () => {
      const attrs = getImageAttrs('A sunset over the ocean');
      expect(attrs.alt).toBe('A sunset over the ocean');
    });

    it('should return empty alt and decorative attrs for decorative images', () => {
      const attrs = getImageAttrs('', { isDecorative: true });
      expect(attrs.alt).toBe('');
      expect(attrs['aria-hidden']).toBe('true');
      expect(attrs.role).toBe('presentation');
    });

    it('should include aria-describedby for long descriptions', () => {
      const attrs = getImageAttrs('Project thumbnail', {
        longDescription: 'project-desc-id',
      });
      expect(attrs.alt).toBe('Project thumbnail');
      expect(attrs['aria-describedby']).toBe('project-desc-id');
    });

    it('should not include aria-describedby if not provided', () => {
      const attrs = getImageAttrs('Project thumbnail');
      expect(attrs).not.toHaveProperty('aria-describedby');
    });
  });
});
