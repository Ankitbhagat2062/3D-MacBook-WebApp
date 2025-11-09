import React from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProductViewer from './Components/ProductViewer'
import Showcase from './Components/Showcase'
import Performance from './Components/Performance'
import Features from './Components/Features'
import Highlights from './Components/Highlights'
import Footer from './Components/Footer'

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />

      <ProductViewer /> {/*Only canvas  */}
      <Showcase /> {/* Contains both gsap and canvas */}
      <Performance /> {/* Contains both gsap and canvas */}
      <Features /> {/* Contains only React Components and canvas */}
      <Highlights /> {/* Contains only gsap and canvas */}
      <Footer />
    </main>
  )
}

export default App