"use client"
import React, {useRef} from 'react';
import useLocoScrollTrigger from './locomotive';

const LocoLayout = ({ children }) => {
  const scrollRef = useLocoScrollTrigger();

  return (
    <div className='data-scroll' data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocoLayout;
