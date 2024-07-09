import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = (selector, animation) => {
  useEffect(() => {
    gsap.fromTo(
      selector,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reset', 
        },
      }
    );
  }, [selector, animation]);
};

export default useGsapAnimation;
