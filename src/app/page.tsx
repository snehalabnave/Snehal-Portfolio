import React from 'react'
import Hero from './home/Hero'
import Workexp from './home/Workexp'
import Projects from './home/projects'
import Skills from './home/skills'
import Workwithme from './home/workwithme'

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Workexp />
      <Workwithme />
    </div>
  )
}
