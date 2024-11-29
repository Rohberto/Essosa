"use client";
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Locomotive Scroll
const LocomotiveScroll = dynamic(() => import('locomotive-scroll'), { ssr: false });

export default function ClientScrollProvider({ children }) {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    let locoInstance;

    if (scrollRef.current) {
      import('locomotive-scroll').then((LocomotiveScroll) => {
        locoInstance = new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
          getDirection: true, // Track scroll direction
          scrollFromAnywhere: true,
        });

        locoInstance.update();
      });
    }

    return () => {
      if (locoInstance) locoInstance.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}
