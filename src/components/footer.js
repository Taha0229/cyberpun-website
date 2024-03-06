"use client";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [850, 925]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <>
    <motion.div ref={container} style={{y}} className="h-screen bg-[#15171b] relative z-20">
        <div className="bg-[#15171b] w-full flex text-white flex-col px-80">
          <div className="flex w-full py-24 pt-40 border-b border-white flex-col">
            <div className="text-8xl flex flex-col w-full">
              <div className="flex gap-6 items-center">
                <span className=" w-28 h-28 flex relative">
                  <Image
                    src={"/sample_image.png"}
                    fill={true}
                    className="object-contain rounded-full"
                  />
                </span>
                <p>Let's work</p>
              </div>
              <div className="flex justify-between">
                <p>together </p>
                <motion.svg
                  style={{rotate, scale: 2}}
                  className={" top-8"}
                  width="12"
                  height="12"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                    fill="white"
                  />
                </motion.svg>
              </div>
            </div>
            <motion.div style={{x}} className="w-52 h-52 rounded-full bg-[#A52A2A] absolute top-[22rem] flex items-center justify-center text-xl"><p>Get in touch</p></motion.div>
          </div>
          <div className="h-28"></div>
          <div className="flex space-x-12 text-xl">
            <Link
              href={"/projects"}
              className={buttonVariants({
                variant: "outline",
                size: "custom",
              })}
            >
              sheikhtahamaroof@gmail.com
            </Link>
            <Link
              href={"/contact"}
              className={buttonVariants({
                variant: "outline",
                size: "custom",
              })}
            >
              +91 7470 367 404
            </Link>
          </div>
        </div>
        <div className="flex w-full bg-[#15171b] justify-between px-20 pt-40 pb-8 text-white">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 uppercase py-4">Version</p>
              <p>© v0.1 Beta {year}</p>
            </div>
            <div>
              <p className="text-gray-400 uppercase py-4">Local Time</p>
              <p>{year}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-400 uppercase py-4">Socials</p>
            <ul className="flex space-x-6">
              <li>Linkedin</li>
              <li>GitHub</li>
              <li>LeetCode</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}
