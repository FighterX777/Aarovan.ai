import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

/**
 * Hook to apply animation classes when element enters viewport
 * @param {string} animationClass - CSS animation class to apply
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - { ref }
 */
export const useScrollAnimation = (animationClass, options = {}) => {
  const { ref, hasBeenVisible } = useIntersectionObserver(options);

  useEffect(() => {
    if (hasBeenVisible && ref.current) {
      ref.current.classList.add(animationClass);
    }
  }, [hasBeenVisible, animationClass]);

  return { ref };
};
