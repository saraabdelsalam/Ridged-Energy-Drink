// ==============================================
// RIDGED ENERGY DRINK - THEME INDEX
// ==============================================

// Export all theme files for easy importing
export { default as ThemePreset } from './preset';

// SCSS files are imported directly in components
// Variables: @import 'theme/variables';
// Mixins: @import 'theme/mixins';
// Full theme: @import 'theme/theme';

// ==============================================
// USAGE EXAMPLES
// ==============================================

/*

1. In component SCSS files:
   @import '../../../theme/variables';
   @import '../../../theme/mixins';

2. For utility classes in templates:
   <div class="d-flex justify-between align-center">
   <button class="btn-primary">Click me</button>

3. Using variables in component styles:
   .my-component {
     color: $color-primary;
     background: $color-surface-primary;
     padding: $spacing-base;
     border-radius: $border-radius-lg;
   }

4. Using mixins:
   .my-button {
     @include button-primary;
   }

   .my-nav {
     @include nav-container;
   }

*/