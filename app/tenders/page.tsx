"use client"

import { useRef, useEffect, useState } from "react"
import { Search, Filter, MapPin, Briefcase, Calendar, TrendingUp } from "lucide-react"

const TendersPage = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")

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

  const tenders = [
    {
      id: 1,
      title: "Digital Transformation Project",
      client: "UK Government",
      value: "£500,000 - £1,000,000",
      deadline: "15 Dec 2025",
      category: "IT & Technology",
      region: "London",
      description: "Implementation of cloud infrastructure for central government department.",
    },
    {
      id: 2,
      title: "Construction & Maintenance Services",
      client: "NHS Trust",
      value: "£250,000 - £500,000",
      deadline: "20 Dec 2025",
      category: "Construction",
      region: "Manchester",
      description: "Facility maintenance and minor construction works for healthcare facility.",
    },
    {
      id: 3,
      title: "Marketing & Communications",
      client: "Local Authority",
      value: "£100,000 - £250,000",
      deadline: "10 Jan 2026",
      category: "Services",
      region: "Birmingham",
      description: "Marketing campaign and communications support for public awareness initiative.",
    },
    {
      id: 4,
      title: "Supply & Delivery Services",
      client: "Education Department",
      value: "£50,000 - £150,000",
      deadline: "25 Jan 2026",
      category: "Supply",
      region: "Leeds",
      description: "Supply and delivery of IT equipment and educational resources.",
    },
    {
      id: 5,
      title: "Consulting & Advisory",
      client: "Government Agency",
      value: "£200,000 - £400,000",
      deadline: "5 Feb 2026",
      category: "Consulting",
      region: "Edinburgh",
      description: "Strategic consulting for policy implementation and organizational restructuring.",
    },
    {
      id: 6,
      title: "Training & Development",
      client: "Corporate Client",
      value: "£75,000 - £200,000",
      deadline: "15 Feb 2026",
      category: "Training",
      region: "Bristol",
      description: "Staff training and professional development programs across multiple disciplines.",
    },
  ]

  const categories = ["all", "IT & Technology", "Construction", "Services", "Supply", "Consulting", "Training"]

  const filteredTenders = selectedCategory === "all" ? tenders : tenders.filter((t) => t.category === selectedCategory)

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white flex items-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className="animate-slide-up"
            ref={(el) => {
              if (el) sectionRefs.current[0] = el
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">Active Tenders</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Browse the latest UK government and private sector tender opportunities matching your business.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[1] = el
        }}
        className="py-12 bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search tenders..."
                className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-500"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Filter size={20} className="text-gray-600 flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                      selectedCategory === cat ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat === "all" ? "All Categories" : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tenders List */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[2] = el
        }}
        className="py-12 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {filteredTenders.map((tender) => (
              <div
                key={tender.id}
                className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="md:col-span-2">
                    <h3 className="font-heading font-bold text-xl mb-2 text-gray-900">{tender.title}</h3>
                    <p className="text-gray-600">{tender.client}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{tender.value}</div>
                    <p className="text-sm text-gray-600">Budget Range</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end text-gray-600 mb-2">
                      <Calendar size={18} />
                      <span className="font-semibold">{tender.deadline}</span>
                    </div>
                    <p className="text-sm text-gray-600">Deadline</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{tender.description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                    <Briefcase size={16} />
                    {tender.category}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    <MapPin size={16} />
                    {tender.region}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/447848166750"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center"
                  >
                    Get More Info
                  </a>
                  <button className="btn-secondary text-center">Save for Later</button>
                </div>
              </div>
            ))}
          </div>

          {filteredTenders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No tenders found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[3] = el
        }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "3,000+", label: "Active Tenders", icon: <Briefcase size={32} /> },
              {
                number: "£2.5B+",
                label: "Total Opportunity Value",
                icon: <TrendingUp size={32} />,
              },
              {
                number: "100+",
                label: "UK Regions Covered",
                icon: <MapPin size={32} />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center text-red-600 mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Bid on the Perfect Tender?</h2>
          <p className="text-lg mb-8">Get personalized alerts for tenders matching your business profile.</p>
          <a
            href="https://wa.me/447848166750"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Set Up Alerts
          </a>
        </div>
      </section>
    </main>
  )
}

export default TendersPage
