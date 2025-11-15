import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How does our platform work?",
      answer: "Our platform connects property buyers, sellers, and renters with verified listings. Simply browse, filter based on your preferences, and connect directly with property owners or agents."
    },
    {
      question: "Is it free to use your platform?",
      answer: "Yes! Browsing and searching properties is completely free. We only charge a small commission when a successful transaction is completed through our platform."
    },
    {
      question: "How can I find a property to buy or sell?",
      answer: "Use our advanced search filters to find properties by location, price range, property type, and amenities. You can also save favorites and set up alerts for new listings."
    },
    {
      question: "What information is included in property listings?",
      answer: "Each listing includes detailed photos, property specifications, location details, pricing, nearby amenities, and contact information for the seller or agent."
    },
    {
      question: "How can I find rental property?",
      answer: "Navigate to the 'Rent' section, apply your preferred filters, and browse available rental properties. You can directly contact landlords or schedule viewings through our platform."
    }
  ]

  return (
    <section className="py-20 px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block px-6 py-2 border-2 border-gray-900 rounded-full text-sm font-semibold mb-6">
          FAQ
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">
          Frequently Ask Question
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-gray-200 pb-4"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-4 text-left hover:text-blue-600 transition"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              {openIndex === index ? (
                <Minus size={24} className="flex-shrink-0" />
              ) : (
                <Plus size={24} className="flex-shrink-0" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="pb-4 text-gray-600 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ