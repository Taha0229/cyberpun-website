"use client";
// import { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Lenis from "@studio-freight/lenis";
// import { useInView } from "framer-motion";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function Item({ image, lenis }) {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,

//     offset: ["end end", "start start"],
//   });
//   const isInView = useInView(ref, { amount: 1 });
//   const a1 = useTransform(scrollYProgress, [0, 1], [12, 0]);
//   useEffect(() => {
//     if (isInView) {
//       console.log(`Element  is in view: `, isInView);
//     }
//   }, [isInView]);
//   return (
//     <motion.div
//       style={{ rotate: a1 }}
//       ref={ref}
//       className="w-[464px] h-[610px] relative border-2 border-dotted border-red-700 snap-center snap-normal shrink-0"
//     >
//       <Image
//         src={`/${image}.jpg`}
//         alt="p1"
//         fill={true}
//         className="object-cover shrink-0"
//       />
//     </motion.div>
//   );
// }

// export default function App() {
//   const scrollerContainer = useRef(null);
//   const scrollerContent = useRef(null);
//   // useEffect(()=>{
//   //   console.log(scrollerContainer.current)
//   //   const lenis = new Lenis({
//   //     content: scrollerContainer.current,
//   //     smoothWheel: true,
//   //     wheelMultiplier: 4,
//   //     // lerp: 0.001,
//   //   });
//   //   const raf = (time) => {
//   //     lenis.raf(time);
//   //     requestAnimationFrame(raf);
//   //   };
//   //   requestAnimationFrame(raf);
//   // }, [])


//   return (
//     <div className="bg-blue-200" id="smooth-wrapper" ref={scrollerContainer}>
//       <div
//         ref={scrollerContent}
//         className="snap-y overflow-y-scroll flex flex-col relative h-screen w-1/2 gap-20 bg-red-500"
//         id="smooth-content"
//       >
//         <Item image={"p1"} />
//         <Item image={"p2"} />
//         <Item image={"p3"} />
//         <Item image={"p4"} />
//       </div>
//     </div>
//   );
// }

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        const progress = self.progress;
        const snapTypeValue = `y proximity(${progress * 100}%)`;
        document.getElementById('smooth-container').style.scrollSnapType = snapTypeValue;
      },
    });
  }, []);

  return (
    <div id="smooth-container" className="snap-y h-screen w-1/2">
      <div className="snap-center bg-red-500 p-4 m-4 h-[60vh]">Item 1</div>
      <div className="snap-center bg-blue-500 p-4 m-4 h-[60vh]">Item 2</div>
      <div className="snap-center bg-green-500 p-4 m-4 h-[60vh]">Item 3</div>
      <div className="snap-center bg-red-500 p-4 m-4 h-[60vh]">Item 1</div>
      <div className="snap-center bg-blue-500 p-4 m-4 h-[60vh]">Item 2</div>
      <div className="snap-center bg-green-500 p-4 m-4 h-[60vh]">Item 3</div>
    </div>
  );
}