// "use client";
import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Projects() {
  const container = useRef(null);

  return (
    <section className="pb-[50vh] pt-[20vh]">
      <div className=" text-center">
        <p className="text-6xl font-trial font-stroke-black text-white">
          FEATURED PROJECTS
        </p>
        <p className="text-6xl font-trial relative z-30 text-black">
          FEATURED PROJECTS
        </p>
        <p className="text-6xl font-trial font-stroke-black text-white">
          FEATURED PROJECTS
        </p>
      </div>

      <div className="flex relative justify-center items-start">
        <div className="overflow-hidden relative flex pt-[35vh] w-max gap-20 px-40 pb-40 flex-col">
          <Text text={"HARBOUR1"} />
          <Text text={"HARBOUR2"} />
          <Text text={"HARBOUR3"} />
          <Text text={"HARBOUR4"} />
        </div>
        <div
          ref={container}
          className="overflow-hidden relative flex pt-[35vh] w-max gap-20 px-40 pb-40 flex-col "
        >
          <Item image={"p1"} />
          <Item image={"p2"} />
          <Item image={"p3"} />
          <Item image={"p4"} />
        </div>
      </div>
    </section>
  );
}

function Item({ image }) {
  const targetItem = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetItem,
    offset: ["start start", "end end"],
  });
  const a1 = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  return (
    <motion.div
      style={{ rotate: a1, y }}
      ref={targetItem}
      className="relative w-[550px] h-[610px]  rotate-12"
    >
      <Image
        src={`/${image}.jpg`}
        alt={image}
        fill={true}
        className="object-cover "
      />
    </motion.div>
  );
}

function Text({ text }) {
  const targetItem = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetItem,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
  return (
    <motion.div
      style={{ y }}
      ref={targetItem}
      className="relative w-max h-[610px]  rotate-12 flex items-center"
    >
      <p className="font-serif text-[149px]">{text}</p>
    </motion.div>
  );
}
