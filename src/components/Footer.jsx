import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        {/* Large HOFIN Text */}
        <div className="text-center mb-16">
          <h2 className="text-[120px] md:text-[200px] font-bold text-gray-900 leading-none">
            HOFIN
          </h2>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-6 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">Sell Property</h3>
          </div>
          <div>
            <h3 className="font-bold mb-4">Buy Property</h3>
          </div>
          <div>
            <h3 className="font-bold mb-4">Rent</h3>
          </div>
          <div>
            <h3 className="font-bold mb-4">About us</h3>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
          </div>
          <div>
            <h3 className="font-bold mb-4">Instagram</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-900 transition">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            Copyright HOFIN © 2023 - All Rights Reserved by Hofin
          </p>
          
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer