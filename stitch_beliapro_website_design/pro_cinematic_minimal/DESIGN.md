---
name: Pro-Cinematic Minimal
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#999077'
  outline-variant: '#4d4632'
  surface-tint: '#e9c400'
  primary: '#fff5dc'
  on-primary: '#3a3000'
  primary-container: '#ffd600'
  on-primary-container: '#705d00'
  inverse-primary: '#705d00'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#f8f4f4'
  on-tertiary: '#313030'
  tertiary-container: '#dbd8d8'
  on-tertiary-container: '#5f5e5e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe170'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 110%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 115%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 120%
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 160%
    letterSpacing: 0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 150%
    letterSpacing: 0em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 100%
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap: 160px
  container-max: 1200px
  gutter: 32px
  margin-mobile: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 40px
---

## Brand & Style

The brand personality is authoritative, sophisticated, and uncompromisingly premium. This design system focuses on the "cinematic" experience, where every interaction feels intentional and every visual element is given room to breathe. By utilizing a high-contrast palette and extreme negative space, the interface moves away from traditional utility and toward a gallery-like presentation.

The aesthetic combines **Minimalism** with **High-Contrast Boldness**. It rejects the clutter of modern SaaS interfaces in favor of a "one-idea-per-screen" philosophy. The emotional response is one of exclusivity and precision—designed for users who value clarity and high-end craftsmanship.

## Colors

The palette is strictly curated to maintain a high-end, dramatic atmosphere. The default color mode is dark, utilizing **Deepest Black (#000000)** as the canvas to create infinite depth. **Electric Yellow (#FFD600)** serves as the surgical strike of color—used exclusively for primary calls to action, active states, and critical highlights.

**Pure White (#FFFFFF)** is used for primary typography and high-contrast borders, while a secondary **Dark Grey (#1A1A1A)** provides subtle surface differentiation without breaking the obsidian aesthetic. Color is never used for decoration; it is used only to direct the eye.

## Typography

The typographic hierarchy is built on extreme scale. Headlines are massive and tightly tracked to feel architectural and heavy. In contrast, subtext and body copy are rendered with light weights and generous leading to create an elegant, editorial feel.

This design system utilizes **Plus Jakarta Sans** for its geometric precision and modern, San Francisco-esque profile. For the most premium sections, "Display" styles should be used to anchor the page, while "Body Light" handles the descriptive narrative. All labels and overlines should be set in uppercase with increased letter spacing to serve as navigational anchors.

## Elevation & Depth

In a world of deepest black, depth is achieved through **tonal layers** and **subtle glassmorphism** rather than traditional shadows. Surfaces that need to appear closer to the user are rendered in #1A1A1A (Dark Grey) with a 1px border of #FFFFFF at 10% opacity.

Background blurs (30px-50px radius) are used behind navigation bars and modal overlays to create a sense of physical layering. Shadows, when used, are "Ambient"—extremely diffused, with 0% offset and low opacity, making the element appear as though it is softly glowing or hovering rather than casting a harsh light.

## Shapes

The shape language is defined by "Large Softness." While the layout is rigid and grid-based, individual components utilize a **20px corner radius** (defined as `rounded-lg` in this system) to create a premium, hardware-like feel reminiscent of modern industrial design.

Pill shapes are reserved for interactive elements like buttons and chips, creating a clear visual distinction between static cards and actionable triggers. Form inputs and search bars should mirror this roundedness to maintain a cohesive, friendly but professional tactile language.

## Components

### Buttons
Primary buttons are **pill-shaped** and filled with **Electric Yellow (#FFD600)**, using black text for maximum legibility. Secondary buttons are ghost-style with a white 1px border or a subtle dark-grey fill.

### Cards
Cards are containers of #1A1A1A with a 20px radius. They should have no visible shadow on the base level, relying on a subtle 1px border (#FFFFFF at 10% opacity) for definition against the black background.

### Form Elements
Inputs are ultra-minimal: a simple underline or a subtly filled container with no borders, using the Electric Yellow only for the focus state (caret and underline). 

### Lists & Navigation
Lists use generous vertical padding (24px+) with thin, low-opacity separators. Navigation is top-aligned, utilizing a frosted glass effect (Backdrop Blur) to allow the cinematic content to scroll underneath while remaining legible.

### Chips & Badges
Small, pill-shaped elements used for categorization. These should be secondary in hierarchy, using white text on a dark grey background to ensure they do not compete with the primary buttons.