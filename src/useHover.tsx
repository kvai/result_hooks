import { useRef, useState, useEffect } from 'react';

export const useHover = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const target = ref.current;
      
      const handleMouseEnter = () => setHovered(true);
      target.addEventListener('mouseenter', handleMouseEnter);

      const handleMouseLeave = () => setHovered(false);
      target.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return { hovered, ref };
}