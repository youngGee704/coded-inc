"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react"

const ContactPage = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.company}`)
    const body = encodeURIComponent(
      `Hello Coded Incorporate,\n\nMy name is ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}\n\nLooking forward to hearing from you.`,
    )

    // Open default email client with pre-filled fields
    window.location.href = `mailto:codedincorporate@mail.co.uk?subject=${subject}&body=${body}`

    // Reset form
    setFormData({ name: "", email: "", company: "", phone: "", message: "" })
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white flex items-center py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className="animate-slide-up"
            ref={(el) => {
              if (el) sectionRefs.current[0] = el as HTMLDivElement
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl">
              Have questions about our services? We&apos;d love to hear from you. Reach out to our team anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[1] = el as HTMLDivElement
        }}
        className="py-12 sm:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
            <div className="p-6 sm:p-8 rounded-lg bg-gradient-to-br from-red-50 to-white text-center border-2 border-red-200 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-red-100 mb-4 sm:mb-6">
                <Phone size={28} className="text-red-600" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl mb-2">Phone</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">Call us during business hours</p>
              <a href="tel:+‪447482793753‬" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                +447482793753‬
              </a>
            </div>

            <div className="p-6 sm:p-8 rounded-lg bg-gradient-to-br from-red-50 to-white text-center border-2 border-red-200 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-red-100 mb-4 sm:mb-6">
                <Mail size={28} className="text-red-600" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl mb-2">Email</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">We reply within 24 hours</p>
              <a
                href="mailto:codedincorporate@mail.co.uk"
                className="text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                codedincorporate@mail.co.uk
              </a>
            </div>

            <div className="p-6 sm:p-8 rounded-lg bg-gradient-to-br from-red-50 to-white text-center border-2 border-red-200 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-red-100 mb-4 sm:mb-6">
                <MapPin size={28} className="text-red-600" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl mb-2">Location</h3>
              <p className="text-gray-600 text-sm sm:text-base">Based in London, UK</p>
              <p className="text-red-600 font-semibold mt-2">Serving all UK regions</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="section-title mb-4">Send us a Message</h2>
              <p className="section-subtitle">Fill out the form below and we&apos;ll get back to you shortly</p>
            </div>

            <form
              onSubmit={handleEmailSubmit}
              className="space-y-4 sm:space-y-6 bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-lg border-2 border-red-200"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                    placeholder="+44 123 456 7890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm sm:text-base"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none text-sm sm:text-base"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[2] = el as HTMLDivElement
        }}
        className="py-16 sm:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {[
              {
                q: "What tenders can you help us find?",
                a: "We specialize in UK government contracts, local authority tenders, and private sector opportunities across all industries and business sizes.",
              },
              {
                q: "How quickly can we start bidding?",
                a: "Most clients can be set up and bidding within 1-2 weeks. We provide all necessary onboarding and support to get you started quickly.",
              },
              {
                q: "Do you offer support with bid writing?",
                a: "Yes! Our Professional and Enterprise plans include dedicated bid writing support from our experienced procurement experts.",
              },
              {
                q: "What if we're new to tendering?",
                a: "No problem! We have a comprehensive training program and guides to help complete beginners understand the tendering process.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-red-600 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <MessageSquare size={20} className="text-red-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-base sm:text-lg mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[3] = el as HTMLDivElement
        }}
        className="py-12 sm:py-16 bg-gradient-to-r from-red-600 to-red-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6">
            Still Have Questions?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8">Chat with us on WhatsApp for instant support</p>
          <a
            href="https://wa.me/‪447482793753‬"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
