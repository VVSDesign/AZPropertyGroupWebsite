import { useEffect, useState, RefObject } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  easing?: string;
}

export const useParallax = (
  ref: RefObject<HTMLElement>,
  options: ParallaxOptions = { speed: 0.5, direction: 'up', easing: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)' }
) => {
  const [offset, setOffset] = useState(0);
  const { speed = 0.5, direction = 'up' } = options;

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        // Calculate how far the element is from the top of the viewport
        const viewportOffset = rect.top / windowHeight;
        
        // Calculate parallax effect
        const parallaxOffset = viewportOffset * speed * 100;
        
        // Set offset based on direction
        setOffset(direction === 'up' ? -parallaxOffset : parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, speed, direction]);

  return {
    transform: `translateY(${offset}px)`,
    transition: 'transform 0.1s ease-out'
  };
};

export default useParallax;
