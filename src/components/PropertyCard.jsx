import { Heart, ArrowRight } from 'lucide-react'

const PropertyCard = () => {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <div 
            className="h-[600px] rounded-3xl bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800')",
            }}
          >
            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-2xl max-w-sm">
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100" 
                  alt="Agent"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-semibold">Recommend</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Shorezo Property III</h3>
              <p className="text-sm text-gray-600 mb-4">
                Is a fully-furnished equipped and luxury apartment building
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">
                    <Heart size={20} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition flex items-center justify-center">
                    <ArrowRight size={20} />
                  </button>
                </div>
                <div className="text-2xl font-bold">$15,000.00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <span className="inline-block px-6 py-2 border-2 border-gray-900 rounded-full text-sm font-semibold mb-6">
            Finest Property
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore our latest <span className="text-gray-400">property</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Discover a curated selection of stunning properties that match your lifestyle and preferences. Whether you're looking for a cozy apartment or a luxurious villa, we have something for everyone.
          </p>
          
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition flex items-center gap-2">
            View All Properties
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PropertyCard