# 🎨 Ridged Energy Drink - Theme System

A comprehensive design system built with SCSS that provides consistent colors, typography, spacing, and components across the entire application.

## 📁 File Structure

```
src/theme/
├── _variables.scss    # Design tokens (colors, fonts, spacing, etc.)
├── _mixins.scss      # Reusable SCSS mixins
├── _theme.scss       # Global styles and utility classes
├── preset.ts         # PrimeNG theme configuration
├── index.ts          # TypeScript exports
└── README.md         # This documentation
```

## 🚀 Quick Start

### In Component SCSS Files

```scss
// Import variables and mixins
@import '../../../theme/variables';
@import '../../../theme/mixins';

.my-component {
  // Use variables
  color: $color-primary;
  background: $color-surface-primary;
  padding: $spacing-base;
  
  // Use mixins
  @include button-primary;
  @include flex-center;
}
```

### In Templates (Utility Classes)

```html
<div class="d-flex justify-between align-center p-4">
  <h2 class="h2 text-primary">Title</h2>
  <button class="btn-primary rounded-xl">Action</button>
</div>
```

## 🎨 Design Tokens

### Colors
- **Primary**: `$color-primary` (#0E3F25)
- **Secondary**: `$color-secondary` (#7E9583)
- **Surface**: `$color-surface-primary` (#F0F0F0)
- **Text**: `$color-text-primary` (#0F4026)

### Typography
- **Font Family**: `$font-family-primary` (Inter)
- **Font Sizes**: `$font-size-xs` to `$font-size-4xl`
- **Font Weights**: `$font-weight-light` to `$font-weight-extrabold`

### Spacing
- **Scale**: `$spacing-xs` (4px) to `$spacing-3xl` (48px)
- **Base**: `$spacing-base` (16px)

## 🛠️ Available Mixins

### Layout
- `@include flex-center` - Center items with flexbox
- `@include flex-between` - Space between with flexbox
- `@include container($max-width)` - Responsive container

### Navigation
- `@include nav-container` - Navigation wrapper
- `@include nav-menu` - Menu container
- `@include nav-link` - Navigation links

### Buttons
- `@include button-primary` - Primary button styles
- `@include button-secondary` - Secondary button styles

### Cards
- `@include card-base` - Basic card styling
- `@include card-hover` - Card hover effects

### Typography
- `@include heading-primary` - Primary headings
- `@include text-primary` - Body text

## 📱 Responsive Design

### Breakpoints
- `$breakpoint-sm`: 576px (Mobile)
- `$breakpoint-md`: 768px (Tablet)
- `$breakpoint-lg`: 992px (Desktop)
- `$breakpoint-xl`: 1200px (Large Desktop)

### Mixins
```scss
@include mobile-up { /* styles */ }
@include tablet-up { /* styles */ }
@include desktop-up { /* styles */ }
```

## 🎛️ Utility Classes

### Display & Layout
- `.d-flex`, `.d-block`, `.d-none`
- `.justify-center`, `.justify-between`
- `.align-center`

### Spacing
- `.m-{0-4}` for margins
- `.p-{0-4}` for padding

### Typography
- `.h1` to `.h6` for headings
- `.text-primary`, `.text-secondary`
- `.text-small`, `.text-large`

### Styling
- `.rounded-{sm|base|lg|xl|full}`
- `.shadow-{sm|base|md|lg}`

## 🔄 PrimeNG Integration

The theme system is fully integrated with PrimeNG components through `preset.ts`. Colors and styles are automatically applied to PrimeNG components.

## 📋 Best Practices

1. **Always use variables**: Never hardcode colors, sizes, or spacing
2. **Prefer mixins**: Use mixins for common patterns
3. **Mobile-first**: Use responsive mixins for mobile-first design
4. **Consistent naming**: Follow the established naming conventions
5. **Documentation**: Update this README when adding new tokens

## 🔧 Adding New Design Tokens

1. Add variables to `_variables.scss`
2. Create mixins in `_mixins.scss` if needed
3. Update utility classes in `_theme.scss`
4. Update PrimeNG preset in `preset.ts`
5. Document changes in this README

## 🎯 Example Component

```scss
@import '../../../theme/variables';
@import '../../../theme/mixins';

.product-card {
  @include card-base;
  @include card-hover;
  
  padding: $spacing-lg;
  border-radius: $border-radius-lg;
  
  .title {
    @include heading-primary;
    font-size: $font-size-xl;
    margin-bottom: $spacing-base;
  }
  
  .price {
    color: $color-primary;
    font-weight: $font-weight-bold;
    font-size: $font-size-lg;
  }
  
  .button {
    @include button-primary;
    margin-top: $spacing-lg;
  }
}
```

## 📚 Resources

- [SCSS Documentation](https://sass-lang.com/)
- [PrimeNG Theming](https://primeng.org/theming)
- [Design Tokens](https://spectrum.adobe.com/page/design-tokens/)