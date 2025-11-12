import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// ==============================================
// RIDGED ENERGY DRINK - PRIMENG THEME PRESET
// ==============================================

// Design tokens that match our SCSS variables
const COLORS = {
  primary: '#0E3F25',        // $color-primary
  primaryText: '#0F4026',    // $color-primary-text
  secondary: '#7E9583',      // $color-secondary
  surfacePrimary: '#F0F0F0', // $color-surface-primary
  surfaceSecondary: '#F5F5F5', // $color-surface-secondary
  textPrimary: '#0F4026',    // $color-text-primary
  textSecondary: '#7F7F7F',  // $color-text-secondary
} as const;

const MyBrandPreset = definePreset(Aura, {
  semantic: {
    primary: { 
      color: COLORS.primary,
      contrastColor: '#FFFFFF',
      hoverColor: '#0A2E1B', // Darker version of primary
      activeColor: '#0A2E1B'
    },
    bannersBG: { 
      color: COLORS.secondary 
    },
    surface: { 
      background: COLORS.surfacePrimary, 
      alternativeBackground: COLORS.surfaceSecondary,
      card: '#FFFFFF',
      overlay: '#FFFFFF'
    },
    text: { 
      primary: COLORS.textPrimary, 
      secondary: COLORS.textSecondary,
      muted: COLORS.textSecondary
    },
    colorScheme: {
      light: {
        surface: {
          0: '#FFFFFF',
          50: COLORS.surfaceSecondary,
          100: COLORS.surfacePrimary,
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A'
        }
      }
    }
  },
  // Dark mode support (optional)
  colorScheme: {
    light: {
      primary: {
        color: COLORS.primary,
        contrastColor: '#FFFFFF',
        hoverColor: '#0A2E1B',
        activeColor: '#0A2E1B'
      },
      surface: {
        0: '#FFFFFF',
        50: COLORS.surfaceSecondary,
        100: COLORS.surfacePrimary
      }
    },
    dark: {
      primary: {
        color: '#4ADE80', // Lighter green for dark mode
        contrastColor: '#0F172A',
        hoverColor: '#22C55E',
        activeColor: '#16A34A'
      },
      surface: {
        0: '#0F172A',
        50: '#1E293B',
        100: '#334155'
      }
    }
  }
});

export default MyBrandPreset;
