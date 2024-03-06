import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
];

const LandingBlog = () => {
    const gallery = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(window.innerHeight);
        window.addEventListener("resize", () => {
            let h = window.innerHeight;
            setHeight(h);
        });
    }, []);

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

    useEffect(() => {
        const lenis = new Lenis();
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
    }, []);

    return (
        <div className="">
            <div className="h-max py-8 bg-black">
                <div className=" text-center ">
                    <p className="text-6xl font-trial font-trial2 text-black">
                        EXPLORE BLOGS
                    </p>
                    <p className="text-6xl font-trial relative z-30 text-white">
                        EXPLORE BLOGS
                    </p>
                    <p className="text-6xl font-trial font-trial2 text-black ">
                        EXPLORE BLOGS
                    </p>
                </div>
            </div>
            <div
                ref={gallery}
                className="h-[175vh] overflow-hidden bg-black"
            >
                <div className="relative top-[-12.5vh] h-[200vh] flex gap-[2vw] p-[2vw]">
                    <Column images={[images[0], images[1], images[2]]} y={y} />
                    <Column images={[images[3], images[4], images[5]]} y={y2} />
                    <Column images={[images[6], images[7], images[8]]} y={y3} />
                    <Column
                        images={[images[9], images[10], images[11]]}
                        y={y4}
                    />
                </div>
            </div>
            <div className="h-40"></div>
        </div>
    );
};

const Column = ({ images, y = 0 }) => {
    return (
        <motion.div
            style={{ y }}
            className="relative h-full w-1/4 min-w-[250px] flex flex-col gap-[2vw] whitespace-nowrap column"
        >
            {images.map((src, i) => {
                return (
                    <div
                        key={i}
                        className="relative h-1/3 w-full rounded-[1vw] overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={`/${src}`}
                            alt="image"
                            fill
                            className="object-cover"
                        />
                    </div>
                );
            })}
        </motion.div>
    );
};

export default LandingBlog;
