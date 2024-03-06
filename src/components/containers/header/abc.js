import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './anim';
import Link from './navLink'
import Curve from './curve';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function hNav() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="h-screen bg-black fixed right-0 top-0 text-white z-40"
      >
       <div className="border-box h-full p-[100px] px-40 flex flex-col justify-between">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col text-7xl gap-10 mt-20">
                    <div className="text-[#999D9E] font-bold tracking-widest border-b opacity-60 border-b-[#999D9E] uppercase text-xs mb-10">
                        <p className='-translate-y-8'>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>
                      })
                    }
            </div>
            <div className='translate-y-2'>
              <p  className="text-[#999D9E] font-bold tracking-widest  opacity-60 uppercase text-xs mb-4">Socials</p>
              <div className={"text-white flex w-full justify-between text-sm tracking-widest font-bold gap-10"}>
                  <a>LinkedIn</a>
                  <a>GitHub</a>
                  <a>LeetCode</a>
                  <a>Instagram</a>
                  <a>Twitter</a>
              </div>
            </div>
        </div>
        <Curve/>
    </motion.div>
  )
}