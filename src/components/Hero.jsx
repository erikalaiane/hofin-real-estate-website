import { Search, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold text-white">HOFIN</div>
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:text-blue-300 transition">Sell Property</a>
          <a href="#" className="hover:text-blue-300 transition">Buy Property</a>
          <a href="#" className="hover:text-blue-300 transition">Rent</a>
          <a href="#" className="hover:text-blue-300 transition">About us</a>
          <a href="#" className="hover:text-blue-300 transition">Resources</a>
        </div>
        <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition">
          Login
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 -mt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-8">
          We Bring <span className="text-blue-300">New Experience</span>
          <br />
          of Your Dream <span className="text-blue-300">Property</span>
        </h1>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-5xl mt-8">
          <div className="flex flex-wrap gap-4 mb-4">
            <button className="px-6 py-2 bg-gray-900 text-white rounded-full">
              Rent
            </button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full transition">
              Buy
            </button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-full transition">
              Sell
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="md:col-span-1">
              <label className="text-sm text-gray-600 mb-2 block">Location</label>
              <div className="flex items-center border-b border-gray-300 pb-2">
                <MapPin size={20} className="text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Select Location"
                  className="w-full outline-none"
                />
              </div>
            </div>

            <div className="md:col-span-1">
              <label className="text-sm text-gray-600 mb-2 block">Type</label>
              <select className="w-full border-b border-gray-300 pb-2 outline-none">
                <option>Select Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
            </div>

            <div className="md:col-span-1">
              <label className="text-sm text-gray-600 mb-2 block">Price</label>
              <select className="w-full border-b border-gray-300 pb-2 outline-none">
                <option>Price Range</option>
                <option>$0 - $100k</option>
                <option>$100k - $500k</option>
                <option>$500k+</option>
              </select>
            </div>

            <div className="md:col-span-1">
              <label className="text-sm text-gray-600 mb-2 block">Price Range</label>
              <input 
                type="text" 
                placeholder="$0 - $1M"
                className="w-full border-b border-gray-300 pb-2 outline-none"
              />
            </div>

            <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2">
              <Search size={20} />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero