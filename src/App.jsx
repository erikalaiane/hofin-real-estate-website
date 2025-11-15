import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import PropertyCard from './components/PropertyCard.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import PropertyList from './components/PropertyList.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <PropertyCard />
      <HowItWorks />
      <PropertyList 
        title="Explore our latest property" 
        category="sale"
      />
      <PropertyList 
        title="Top Picks Rent Property" 
        category="rent"
      />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App