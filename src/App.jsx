import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProductViewer from './Components/ProductViewer'
import { gsap } from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'
import Showcase from './Components/Showcase'
import Performance from './Components/Performance'
import Features from './Components/Features'
import Highlights from './Components/Highlights'

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
    </main>
  )
}

export default App