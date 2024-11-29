'use client'; // Ensure this runs on the client side

import Image from "next/image";
import Hero from "./Components/Hero";
import MiniCollection from "./Components/MiniCollection";
import Shop from "./Components/Shop";
import About from "./Components/About";
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import Locomotive Scroll CSS

// Dynamically import Locomotive Scroll to avoid SSR issues
const LocomotiveScroll = dynamic(() => import('locomotive-scroll'), { ssr: false });

export default function Home() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    let locoInstance;

    if (scrollRef.current) {
      import('locomotive-scroll').then((LocomotiveScroll) => {
        locoInstance = new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
          getDirection: true,
          multiplier: 1.2,
        });

        locoInstance.update();
      });
    }

    // Cleanup Locomotive Scroll instance on component unmount
    return () => {
      if (locoInstance) locoInstance.destroy();
    };
  }, []);

  return (
    <div className="container" ref={scrollRef} data-scroll-container>
      <Hero/>
      <Shop/>
      <About/>
    </div>
  );
}
