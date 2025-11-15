import { Search, FileText, Home, Key } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Priority",
      description: "To get started, simply fill up to our form with your details and our team will get in touch with you."
    },
    {
      icon: FileText,
      number: "02", 
      title: "Search property",
      description: "Browse our extensive database of properties using advanced search filters."
    },
    {
      icon: Home,
      number: "03",
      title: "Get The Deals",
      description: "Compare properties and find the perfect deal that matches your budget."
    },
    {
      icon: Key,
      number: "04",
      title: "Close",
      description: "Complete the transaction smoothly with our expert guidance."
    }
  ]

  return (
    <section className="py-20 px-8 max-w-7xl mx-auto bg-gray-50">
      <div className="text-center mb-16">
        <span className="inline-block px-6 py-2 border-2 border-gray-900 rounded-full text-sm font-semibold mb-6">
          How It Works
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">
          How it works?
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <step.icon size={32} className="text-gray-900" />
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-300 mb-4">{step.number}</div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks