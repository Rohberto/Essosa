"use client"
import React, {useEffect, useRef} from 'react';
import  useIntersectionObserver  from '../Utils/observer';
import gsap from 'gsap';
const About = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const imageRef = useRef(null);

  const isOnScreen = useIntersectionObserver(ref, 0.25);
  const isOnScreen1 = useIntersectionObserver(ref1, 0.25);

  useEffect(() => {
		if (isOnScreen1) {
			gsap.to("#scribbleRef", {
				delay: 0.5,
				duration: 2.5,
				ease: "power3.out",
				strokeDashoffset: 0,
			});
		}
	}, [isOnScreen1]);


	useEffect(() => {
		if (isOnScreen && imageRef.current) {
			gsap.to(imageRef.current, {
				scale: 1,
				duration: 4,
				ease: "expo.out",
				clipPath: "inset(0% 0% 0% 0%)",
			});
		}
	}, [isOnScreen, imageRef.current]);
  return (
    <section className='about-container' data-scroll-section>
        <div className="aboutContent">
            <h1 className="aboutContentHeading" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">Essosa, Made From The Heart <br/> For You.</h1>
            <p className="about_content" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
            Essosa Fashion is a bespoke couture brand dedicated to crafting one-of-a-kind, hand-made pieces that celebrate individuality and elegance. Embracing the principles of slow fashion, we pour time and artistry into each design to make it truly special. From stunning bridal gowns to elegant prom and asoebi dresses, every garment is thoughtfully tailored to reflect your unique style. At Essosa Fashion, we ensure you shine at every occasion, with pieces that are as unforgettable as you are.
            </p>
        </div>
        <div className="imageWrapper" ref={ref}>
        <div className="aboutImage" ref={imageRef} >
            <img src="/about.png"  alt="about outfit" className="aboutImg" />
        </div>
        </div>
        <div className="founder" ref={ref1}>
              <div className="signatureContainer">
              <svg id={"scribbleRef"} width="300" height="90" viewBox="0 0 395 158" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.57414 56.6585C-12.5 40.0001 183.574 -13.8415 306.574 4.65847C429.574 23.1585 396 76.0001 365.074 87.6585C334.148 99.3168 264.574 115.658 220.574 106.158C176.574 96.6585 194.168 49.5001 227.574 47.1585C265.5 44.5001 298.793 51.5371 285.074 87.6585C274.5 115.5 181.907 181.492 129.574 213.158" stroke="#fff"/>
</svg>
              </div>

              <div className="founderName">
                <h3>Osato Success</h3>
                <p>Creative Director</p>
              </div>
            </div>
    </section>
  )
}

export default About
