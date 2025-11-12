import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyBrandPreset = definePreset(Aura, {
  semantic: {
    primary: { color: '#0E3F25' },
    bannersBG: { color:'#7E9583' },
    surface: { background: '#F0F0F0', alternativeBackground: '#F5F5F5' },
    text: { primary: '#0F4026', secondary: '#7F7F7F' },
    // ... add more tokens as needed
  },
  // if you support dark mode:
  colorScheme: {
    light: { /* overrides for light */ },
    dark: { /* overrides for dark */ }
  }
});

export default MyBrandPreset;
