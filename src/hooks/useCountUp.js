import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

/**
 * Hook to animate number counting from 0 to target value
 * @param {number} targetValue - Final value to count to
 * @param {number} duration - Animation duration in milliseconds
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - { ref, displayValue }
 */
export const useCountUp = (targetValue, duration = 2000, options = {}) => {
  const { ref, isVisible } = useIntersectionObserver(options);
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const value = Math.floor(startValue + (targetValue - startValue) * progress);
      setDisplayValue(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetValue, duration]);

  return { ref, displayValue };
};
