"use client"

import { useRef, useEffect } from "react"
import { Search, FileText, Users, TrendingUp, CheckCircle, Calendar } from "lucide-react"

const ServicesPage = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Search size={40} />,
      title: "Tender Discovery",
      description:
        "Access a comprehensive database of UK public and private sector tenders, updated daily with real-time alerts.",
      features: ["Daily tender updates", "Smart filters", "Industry-specific alerts", "Saved searches"],
    },
    {
      icon: <FileText size={40} />,
      title: "Bid Writing Support",
      description:
        "Get expert guidance on writing winning proposals with templates, examples, and one-on-one coaching.",
      features: ["Proposal templates", "Expert feedback", "Best practices guide", "Quality assurance"],
    },
    {
      icon: <Users size={40} />,
      title: "Consulting Services",
      description:
        "Work with our procurement specialists to develop your tendering strategy and improve your win rate.",
      features: ["Strategy development", "Market analysis", "Competitive positioning", "Training workshops"],
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Tender Analytics",
      description:
        "Track your performance with detailed analytics on bids submitted, success rates, and pipeline value.",
      features: ["Performance dashboards", "Trend analysis", "Opportunity scoring", "Reporting tools"],
    },
    {
      icon: <CheckCircle size={40} />,
      title: "Compliance Review",
      description: "Ensure your tenders meet all requirements with our thorough compliance and documentation checks.",
      features: ["Requirement checklist", "Document review", "Risk assessment", "Approval workflow"],
    },
    {
      icon: <Calendar size={40} />,
      title: "Tender Calendar",
      description: "Never miss a deadline with our organized tender calendar and automated deadline reminders.",
      features: ["Deadline tracking", "Automatic notifications", "Team collaboration", "Historical records"],
    },
  ]

  const packages = [
    {
      name: "Starter",
      price: "£99",
      period: "per month",
      description: "Perfect for small businesses just starting with tenders",
      features: ["Up to 50 tender searches", "Email alerts", "Basic templates", "Email support"],
    },
    {
      name: "Professional",
      price: "£299",
      period: "per month",
      description: "Ideal for growing businesses seeking competitive edge",
      features: [
        "Unlimited searches",
        "Real-time alerts",
        "Advanced templates",
        "Bid writing support",
        "Phone support",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Team training",
        "Priority support",
      ],
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[70vh] bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white flex items-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className="animate-slide-up"
            ref={(el) => {
              if (el) sectionRefs.current[0] = el
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Comprehensive Tender Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Everything your business needs to discover, prepare, and win government and private sector tenders.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[1] = el
        }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Services</h2>
            <p className="section-subtitle">Tailored solutions for tender success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:border-red-300"
              >
                <div className="text-red-600 mb-4">{service.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-red-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[2] = el
        }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">How We Help You Win</h2>
            <p className="section-subtitle">Our proven process for tender success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We identify tenders perfectly matched to your business capabilities and experience.",
                },
                {
                  step: "02",
                  title: "Analysis",
                  description: "Our experts evaluate each opportunity for realistic win potential and time investment.",
                },
                {
                  step: "03",
                  title: "Preparation",
                  description: "We help you prepare a compelling, compliant bid that highlights your strengths.",
                },
                {
                  step: "04",
                  title: "Submission & Follow-up",
                  description: "Ensure timely submission and manage post-bid communications professionally.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-12 rounded-lg">
              <h3 className="font-heading font-bold text-2xl mb-6">Why Choose Our Approach?</h3>
              <ul className="space-y-4">
                {[
                  "Save 20+ hours per tender with our streamlined process",
                  "Improve bid quality with expert guidance",
                  "Increase win rate by focusing on qualified opportunities",
                  "Scale your tender efforts without hiring extra staff",
                  "Access best practices from hundreds of successful bids",
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[3] = el
        }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Flexible Pricing Plans</h2>
            <p className="section-subtitle">Choose the plan that works for your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-lg transition-all duration-300 ${
                  pkg.featured
                    ? "bg-red-600 text-white shadow-2xl transform md:scale-105"
                    : "bg-gray-50 text-gray-900 border-2 border-gray-200"
                }`}
              >
                <div className="p-8">
                  <h3 className={`font-heading font-bold text-2xl mb-2 ${pkg.featured ? "text-white" : ""}`}>
                    {pkg.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className={pkg.featured ? "text-red-100" : "text-gray-600"}> {pkg.period}</span>
                  </div>
                  <p className={`mb-6 ${pkg.featured ? "text-red-100" : "text-gray-600"}`}>{pkg.description}</p>

                  <a
                    href="https://wa.me/‪447482793753‬"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 rounded-lg font-bold text-center transition-colors duration-200 ${
                      pkg.featured
                        ? "bg-white text-red-600 hover:bg-gray-100"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    Get Started
                  </a>

                  <ul className={`mt-8 space-y-4 ${pkg.featured ? "text-red-50" : "text-gray-600"}`}>
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle size={18} className={pkg.featured ? "text-red-100" : "text-red-600"} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[4] = el
        }}
        className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Transform Your Tender Process?</h2>
          <p className="text-lg mb-8">Schedule a consultation with our experts to find the right solution for you.</p>
          <a
            href="https://wa.me/‪447482793753‬"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
