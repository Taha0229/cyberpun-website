'use client'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function TextSlider() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (

      <div className="absolute" >
        <div ref={slider} className="whitespace-nowrap absolute sliderContainer z-30">
          <p ref={firstText} className='relative m-0 text-black text-[230px] font-[500] pr-[50px]'>Sheikh Taha Maroof &#8212;</p>
          <p ref={secondText} className='absolute left-full top-0 m-0 text-black text-[230px] font-[500] pr-[50px]'>Sheikh Taha Maroof &#8212;</p>
        </div>
      </div>

  )
}