import React from 'react'
import Hero from './home/Hero'
import Skills from './home/skills'
import Projects from './home/projects'
import Workexp from './home/Workexp'
import Footer from './home/footer'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Skills />
      <Projects />
      <Workexp />
      <Footer />
    </div>
  )
}
