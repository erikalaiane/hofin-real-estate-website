import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import { properties } from '../../data/properties'

const PropertyList = ({ title, category }) => {
  const propertyList = properties[category] || []

  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <span className="inline-block px-6 py-2 border-2 border-gray-900 rounded-full text-sm font-semibold mb-4">
            Popular
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
        </div>
        
        <div className="flex gap-3">
          <button className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-900 transition flex items-center justify-center">
            <ChevronLeft size={20} />
          </button>
          <button className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-900 transition flex items-center justify-center">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {propertyList.map((property) => (
          <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                <Heart size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{property.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{property.location}</p>
              
              {property.beds && (
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.area}</span>
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{property.price}</div>
                <button className="text-blue-600 hover:text-blue-800 transition text-sm font-semibold">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PropertyList