"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

const useLocoScrollTrigger = () => {
  const scrollRef = useRef(null);

  useEffect(() => {

    
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
      // Add other configurations as needed
    });

    // Recalculate the scroll on window resize
    const resizeHandler = () => locoScroll.update();
    window.addEventListener('resize', resizeHandler);

    return () => {
      locoScroll.destroy();
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return scrollRef;
};

export default useLocoScrollTrigger;
