"use client"

import Image from 'next/image'
import Hero from '@/containers/landing/hero'
import Photo from '@/containers/landing/photo'
import LandingAbout from '@/containers/landing/landingAbout'
import TechStack from '@/containers/landing/techStack'
import Projects from '@/containers/landing/projects'
import LandingBlog from '@/containers/landing/landingBlog'


export default function Home() {
  return (
    <>
      <Hero/>
      <Photo/>
      <LandingAbout/>
      <TechStack/>
      <Projects/>
      <LandingBlog/>
    </>
  )
}
