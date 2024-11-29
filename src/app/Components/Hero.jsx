"use client";
import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';

const Hero = () => {
  const backgroundRef = useRef(); // Reference for the background container
  const [activeImage, setActiveImage] = useState("/essosa.png"); // Default image

  useEffect(() => {
    const thumbnails = document.querySelectorAll(`.thumbnail`);
    const background = backgroundRef.current;

    // Add hover event listeners to thumbnails
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("mouseover", () => {
        const newBg = thumbnail.getAttribute("data-bg");
        setActiveImage(newBg);
        // GSAP Animation: Smoothly change background
        gsap.to(background, {
        
          duration: 0.3,
          onComplete: () => {
            background.style.backgroundImage = `url('${newBg}')`;
            gsap.to(background, { opacity: 1, duration: 0.3 });
          },
        });

       
      });
    });

    // Cleanup event listeners when component unmounts
    return () => {
      thumbnails.forEach((thumbnail) => {
        thumbnail.removeEventListener("mouseover", null);
      });
    };
  }, []); // Empty dependency array ensures this runs once after mount

  useEffect(() => {
    // Set the default background on initial load
    if (backgroundRef.current) {
      backgroundRef.current.style.backgroundImage = `url('${activeImage}')`;
    }
  }, [activeImage]); // Update background if default changes

  const handleImageClick = (newBg) => {
    setActiveImage(newBg); // Update the active image
    const bgElement = backgroundRef.current;

    // GSAP animation: Fade out, change image, and fade back in
    gsap.to(bgElement, {
      opacity: 1,
      duration: 0.5,
      onComplete: () => {
        bgElement.style.backgroundImage = `url('${newBg}')`;
        gsap.to(bgElement, { opacity: 1, duration: 0.5 });
      },
    });
  };

    useEffect(() => {

            // GSAP Timeline for smooth sequencing
            const timeline = gsap.timeline();
         
            // Background zoom-in animation
            timeline.from(".hero-section", {
              scale: 1.4,
              opacity: 0, // From default (zoomed out) to normal scale
              duration: 1,
              ease: "power1.out",
            }, "start");
            timeline.from("header", {
              y: -100,
              opacity: 0,
              ease: "power1.out"
            }, "<70%");
            timeline.from("header > *", {
              y: -100,
              opacity: 0,
              duration: 1,
              stagger: .2,
              ease: "power1.out"
            }, "-=.5");
           
       timeline.from(".headline span", {
        y: 150,
        skewY: 10,
        duration: 1.5,
        stagger: .2,
        ease: "power1.out"
       }, "start+=1");
       timeline.from(".bottom_text",
        {
          y: 20,
          opacity: 0,
          duration: 1,
          ease: "power1.out"
        }
       )  
       timeline.from(".hero-bottom-images img",
        {
          y: 20,
          opacity: 0,
          duration: 1,
          stagger: .2,
          ease: "power1.out"
        }
       )  
          
       
         
          
    }, [])
    
  return (
    <section className="hero-section hero-background" ref={backgroundRef} data-scroll-section>

 
    <div className='headline-cont' data-scroll data-scroll-speed="2">
    <h1 className="headline"><span>Tailored Elegance</span></h1>
    <h1 className="headline"><span> for the Modern</span></h1>
    <h1 className="headline"><span> Woman</span></h1>
  </div>

 


<div className="hero_bottom_text">
  <p className='bottom_text' data-scroll data-scroll-speed="2">Bespoke and Ready to Wear Outfits Designed to Empower You.</p>
  <div className='btn-container'>
    <a href="#" className='btn'>Get Your Perfect Fit</a>
  </div>
</div>

  <div className='hero-bottom-images'>
  <img
          src="/essosa.png"
          data-bg="/essosa.png"
          alt="Image 1"
          className={`thumbnail ${activeImage === "/essosa.png" ? "active" : ""}`}
          onClick={() => handleImageClick("/essosa.png")}
          data-scroll data-scroll-speed="2"/>
        <img
          src="/image2.png"
          data-bg="/image2.png"
          alt="Image 2"
          className={`thumbnail ${activeImage === "/image2.png" ? "active" : ""}`}
          onClick={() => handleImageClick("/image2.png")}
          data-scroll data-scroll-speed="1"/>
        <img
          src="/image3.png"
          data-bg="/image3.png"
          alt="Image 3"
          className={`thumbnail ${activeImage === "/image3.png" ? "active" : ""}`}
          onClick={() => handleImageClick("/image3.png")}
          data-scroll data-scroll-speed="2"  />
  </div>


</section>

  )
}

export default Hero;
