import { Send } from 'lucide-react'

const Contact = () => {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-900 rounded-3xl overflow-hidden">
        {/* Left Side - Text */}
        <div className="p-12 text-white">
          <span className="inline-block px-6 py-2 border-2 border-white rounded-full text-sm font-semibold mb-6">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Still not sure where to start? Contact us and fill out the form.
          </h2>
          
          <div className="flex gap-4 mt-8">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden"
                >
                  <img 
                    src={`https://i.pravatar.cc/150?img=${i}`}
                    alt={`User ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="font-semibold">Join 1000+ users</div>
              <div className="text-gray-400">Already trust us</div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-12">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input 
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input 
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea 
                rows="4"
                placeholder="Tell us about your needs..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-gray-900 text-white py-4 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2 font-semibold"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact