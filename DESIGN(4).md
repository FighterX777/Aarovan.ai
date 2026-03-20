# Design System Strategy: The Academic Modernist

## 1. Overview & Creative North Star
The "Creative North Star" for this design system is **The Digital Scholar.** 

To cater to engineering students preparing for the high-stakes world of technical interviews, the UI must transcend the "startup-in-a-box" aesthetic. We are moving away from the generic SaaS template toward a high-end editorial experience that feels authoritative, academic, and deeply trustworthy.

We achieve this by breaking the rigid, boxed-in grid. Instead of standard cards, we use **intentional asymmetry** and **tonal layering**. The experience should feel like navigating a prestige academic journal translated for the AI era—airy, intellectually structured, and premium. We utilize heavy typographic scales and expansive "breathing room" to ensure the student feels focused and calm.

---

## 2. Colors & Surface Philosophy
The palette is anchored in the deep navy and steel blue of the logo, providing a foundation of engineering precision and professional reliability.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts. Use `surface-container-low` (#f4f3f3) sections sitting directly on a `background` (#faf9f9) to denote transition.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We avoid flat designs by "nesting" containers:
*   **Base:** `surface` (#faf9f9)
*   **Secondary Sectioning:** `surface-container` (#efeeed)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) sitting atop a low-tier surface to create a natural, soft lift.

### The Glass & Gradient Rule
For elements that need to feel "AI-forward" (like floating feedback panels during a mock interview), use **Glassmorphism**.
*   **Token:** `surface-variant` (#e3e2e2) at 60% opacity with a `24px` backdrop-blur.
*   **Signature Textures:** For primary CTAs, do not use flat hex codes. Apply a subtle linear gradient from `primary` (#01283c) to `primary-container` (#1d3e53) at a 135-degree angle to add "soul" and depth.

---

## 3. Typography
Our typography pairing balances the "Academic" (Serif) with the "Technical" (Sans).

*   **Display & Headlines (Noto Serif):** These are our "Editorial" voices. Used for page titles and section headers, the Serif communicates tradition, prestige, and the weight of engineering knowledge. 
    *   *Scale:* `display-lg` (3.5rem) for hero statements to create immediate visual impact.
*   **Body & Titles (Inter):** This is our "Functional" voice. Highly legible and neutral, Inter ensures that technical interview questions and feedback are processed without cognitive friction.
    *   *Scale:* `body-md` (0.875rem) for dense technical content; `title-lg` (1.375rem) for card headings.

---

## 4. Elevation & Depth
In this design system, shadows are an exception, not a rule. Hierarchy is achieved through **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, sophisticated lift that feels integrated rather than "pasted on."
*   **Ambient Shadows:** For floating elements (e.g., Modals), use extra-diffused shadows.
    *   *Spec:* `0px 20px 40px rgba(26, 28, 28, 0.06)`. The shadow color is a tinted version of `on-surface` (#1a1c1c), never pure black.
*   **The Ghost Border:** If a boundary is required for accessibility, use a "Ghost Border": `outline-variant` (#c2c7cd) at **15% opacity**. 100% opaque borders are strictly forbidden.

---

## 5. Components

### Buttons (The Anchor)
*   **Primary:** Gradient of `primary` to `primary-container`. `lg` (0.5rem) roundedness. Typography: `label-md` (Uppercase, 0.05em tracking).
*   **Secondary:** Ghost style. No background, `outline` token at 20% opacity, `on-surface` text.

### Cards & Feature Lists
*   **The Rule:** Forbid the use of divider lines.
*   **Style:** Use `surface-container-highest` (#e3e2e2) for card backgrounds when on a white surface, or `surface-container-lowest` (#ffffff) when on a tinted surface.
*   **Spacing:** Use `spacing-8` (2rem) or `spacing-10` (2.5rem) to separate content blocks instead of lines.

### Team Member Cards
Asymmetric layout: The image should be slightly offset or "breaking" the container boundary. Use `notoSerif` for names and `inter` for engineering credentials.

### Feedback Inputs
*   **Fields:** `surface-container-low` fill. No border. On focus, transition to a `1px` "Ghost Border" using `primary-fixed-dim`.
*   **States:** Error states use `error` (#ba1a1a) text but `error_container` (#ffdad6) for subtle background highlights.

### Additional Signature Component: The "Progress Thread"
Instead of a standard progress bar, use a ultra-thin (2px) line using `secondary-fixed-dim` with a "pulsing" glassmorphic glow at the current step to represent the AI's active analysis during an interview.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical white space (e.g., more padding on the left than the right) to create a high-end editorial feel.
*   **Do** use `notoSerif` for large, bold pull-quotes or testimonials.
*   **Do** utilize the full range of `surface-container` tokens to create "depth zones."

### Don't
*   **Don't** use 1px solid black or high-contrast borders.
*   **Don't** use standard "drop shadows" with high opacity.
*   **Don't** use dividers or horizontal rules to separate list items; use white space from the Spacing Scale (`2` to `4`).
*   **Don't** center-align long blocks of text. Stick to left-aligned, editorial layouts for professional readability.