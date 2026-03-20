/**
 * Animation Configuration
 * Centralized animation settings and timing
 */

export const ANIMATION_TIMING = {
  FAST: 0.3,
  NORMAL: 0.6,
  SLOW: 0.9,
  LONG: 1.2,
};

export const ANIMATION_DELAY = {
  NONE: 0,
  SMALL: 0.1,
  MEDIUM: 0.2,
  LARGE: 0.3,
};

export const ANIMATION_STAGGER = {
  SMALL: 0.05,
  MEDIUM: 0.1,
  LARGE: 0.15,
};

export const EASING = {
  EASE_OUT: 'ease-out',
  EASE_IN_OUT: 'ease-in-out',
  EASE_IN: 'ease-in',
  LINEAR: 'linear',
};

/**
 * Animation setup for different element types
 */
export const ANIMATION_PRESETS = {
  // Hero section animations
  heroTitle: {
    animation: 'fadeInUp',
    duration: ANIMATION_TIMING.LONG,
    delay: 0,
  },
  heroDescription: {
    animation: 'fadeInUp',
    duration: ANIMATION_TIMING.NORMAL,
    delay: ANIMATION_DELAY.MEDIUM,
  },
  heroButtons: {
    animation: 'fadeInUp',
    duration: ANIMATION_TIMING.NORMAL,
    delay: ANIMATION_DELAY.LARGE,
  },
  heroImage: {
    animation: 'scaleIn',
    duration: ANIMATION_TIMING.NORMAL,
    delay: ANIMATION_DELAY.LARGE,
  },

  // Stats section animations
  statCard: {
    animation: 'slideInFromBottom',
    duration: ANIMATION_TIMING.NORMAL,
  },

  // How It Works section animations
  howItWorksCard: {
    animation: 'slideInFromBottom',
    duration: ANIMATION_TIMING.NORMAL,
  },

  // Bento Grid animations
  bentoLargeCard: {
    animation: 'fadeInLeft',
    duration: ANIMATION_TIMING.LONG,
  },
  bentoSmallCard: {
    animation: 'scaleIn',
    duration: ANIMATION_TIMING.NORMAL,
  },
};

/**
 * Scroll observer intersection options
 */
export const INTERSECTION_OPTIONS = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

export const INTERSECTION_OPTIONS_EARLY = {
  threshold: 0.05,
  rootMargin: '0px 0px -100px 0px',
};

export default {
  ANIMATION_TIMING,
  ANIMATION_DELAY,
  ANIMATION_STAGGER,
  EASING,
  ANIMATION_PRESETS,
  INTERSECTION_OPTIONS,
  INTERSECTION_OPTIONS_EARLY,
};
