import Hero from './components/Hero'
import About from './components/About'
import PropertyCard from './components/PropertyCard'
import HowItWorks from './components/HowItWorks'
import PropertyList from './components/PropertyList'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

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