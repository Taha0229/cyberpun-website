"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./abc";

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div
                className="right-0 fixed p-8 cursor-pointer z-50 "
                onClick={(e) => setIsActive(!isActive)}
            >
                <div
                    className={`h-20 w-20 justify-center items-center rounded-full flex flex-col after:block after:w-1/3 after:m-auto after:relative after:-top-4 after:h-[1px] after:transition-transform duration-[0.3s] before:block before:w-1/3 before:m-auto before:relative before:top-4 before:h-[1px] before:transition-transform duration-[0.3s] transition-color duration-300 ease-in-out ${isActive ? " bg-white after:rotate-45 after:top-[-20px] before:-rotate-45 before:top-[20px] after:bg-black before:bg-black" : "bg-black after:bg-white before:bg-white"}`}
                ></div>
            </div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </>
    );
};

export default Header;
