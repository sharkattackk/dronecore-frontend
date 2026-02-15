import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import "./index.css"
import Footer from './components/Footer/Footer'
import ServicesSection from './components/ServicesSection/ServicesSection'
import ContactSection from './components/ContactSection/ContactSection'
import GallerySection from './components/GallerySection/GallerySection'
import LocationSection from './components/LocationSection/LocationSection'
import ReviewSection from './components/ReviewsSection.jsx/ReviewsSection'


function App() {
  const [count, setCount] = useState(0);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div id="home" className="scroll-smooth font-sans">
      <NavBar toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-col">
        <HeroSection />
        <div id="location">
          <LocationSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="gallery">  
          <ReviewSection />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
