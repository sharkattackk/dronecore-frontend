import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection/AboutSection'
import "./index.css"
import Footer from './components/Footer/Footer'
import ProcessSection from './components/ProcessSection/ProcessSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="scrollable-div overflow-y-auto">
      <NavBar />
      <div className="flex flex-col space-y-10">
        <HeroSection />
        <AboutSection />
        <Footer />
      </div>
    </div>
  )
}

export default App
