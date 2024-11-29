import { useEffect, useState } from 'react';

const useIntersectionObserver = (ref, threshold) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting || false);
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      intersectionObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        intersectionObserver.unobserve(currentRef);
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
};

export default useIntersectionObserver;
