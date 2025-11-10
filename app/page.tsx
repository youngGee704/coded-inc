"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { CheckCircle, Users, TrendingUp, Award, Target, Zap } from "lucide-react"
import GyroCard from "@/components/gyro-card"

const HomePage = () => {
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

  const stats = [
    { number: "3,000+", label: "Active Tenders" },
    { number: "2,000+", label: "Registered Businesses" },
    { number: "100+", label: "UK Regions" },
  ]

  const steps = [
    { title: "Search Tenders", description: "Browse verified UK public and private contracts matching your business." },
    {
      title: "Get Matched Alerts",
      description: "Receive personalized tender opportunities tailored to your industry.",
    },
    { title: "Submit Winning Bids", description: "Leverage our support to craft compelling proposals." },
  ]

  const whyChoose = [
    {
      icon: <CheckCircle size={32} />,
      title: "Verified Data",
      description: "Access tenders from trusted UK portals with real-time updates.",
    },
    {
      icon: <Users size={32} />,
      title: "Expert Team",
      description: "Get support from procurement professionals with years of experience.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Affordable Plans",
      description: "Flexible pricing designed for businesses of all sizes.",
    },
  ]

  const features = [
    {
      icon: <Award size={28} />,
      title: "Industry Leading Success Rate",
      description: "92% of our clients secure contracts within their first year",
    },
    {
      icon: <Target size={28} />,
      title: "Precision Matching",
      description: "AI-powered tender matching tailored to your capabilities",
    },
    {
      icon: <Zap size={28} />,
      title: "Real-Time Alerts",
      description: "Instant notifications for opportunities matching your profile",
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
                Find and Win Lucrative UK Tenders with Ease
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8">
                Coded Incorporate helps UK businesses discover verified public and private contracts, with tools and
                support to win more bids.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="#how-it-works" className="btn-primary inline-block text-center">
                  Browse Tenders
                </a>
                <a
                  href="https://wa.me/447848166750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block text-center"
                >
                  Request Bid Support
                </a>
              </div>
            </div>
            <div className="animate-scale-in">
              <Image
                src="/tender-documents-research.jpg"
                alt="Tender Documents"
                width={400}
                height={400}
                className="rounded-lg w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[0] = el
        }}
        className="py-12 sm:py-16 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card-premium">
                <div className="stat-card-content text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Gyro Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[1] = el
        }}
        className="py-16 sm:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title mb-4">Interactive Experience</h2>
            <p className="section-subtitle">Experience our innovative technology</p>
          </div>
          <GyroCard />
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        ref={(el) => {
          if (el) sectionRefs.current[2] = el
        }}
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title mb-4">How It Works</h2>
            <p className="section-subtitle">Three simple steps to winning tenders</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-red-600"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold mb-4 text-lg">
                  {index + 1}
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[3] = el
        }}
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title mb-4">Why Choose Coded Incorporate</h2>
            <p className="section-subtitle">Everything you need to succeed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors duration-300"
              >
                <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[4] = el
        }}
        className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-black text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title mb-4 text-white">Powerful Features</h2>
            <p className="section-subtitle text-gray-300">Designed for your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-lg bg-gradient-to-br from-red-600/10 to-red-900/10 border border-red-600/20 hover:border-red-600/50 transition-all duration-300 group"
              >
                <div className="text-red-500 mb-4 group-hover:scale-125 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[5] = el
        }}
        className="py-12 sm:py-16 bg-gradient-to-r from-red-600 to-red-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6">
            Join hundreds of UK businesses winning contracts through Coded Incorporate
          </h2>
          <a
            href="https://wa.me/447848166750"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  )
}

export default HomePage
