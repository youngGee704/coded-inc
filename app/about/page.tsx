"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Award, Users, Globe, Zap } from "lucide-react"

const AboutPage = () => {
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">About Coded Incorporate</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              We&apos;re on a mission to democratize tender opportunities and empower UK businesses to compete and win
              on a level playing field.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[1] = el
        }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Coded Incorporate was founded with a simple observation: many talented UK businesses were missing out on
                lucrative tender opportunities simply because they didn&apos;t know where to look or how to compete.
              </p>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Our founding team saw the struggle firsthand. Small and medium-sized enterprises were spending countless
                hours searching fragmented tender databases, while larger firms with procurement teams were winning most
                contracts.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                That&apos;s when we decided to build a solution that levels the playing field. Today, we help hundreds
                of UK businesses discover, analyze, and win government and private sector tenders.
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src="/team-collaboration-and-business-growth.jpg"
                alt="Team collaboration"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[2] = el
        }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Our Core Values</h2>
            <p className="section-subtitle">Principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <Award size={32} className="text-red-600" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Excellence</h3>
              <p className="text-gray-600">We deliver exceptional results in everything we do.</p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <Users size={32} className="text-red-600" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Collaboration</h3>
              <p className="text-gray-600">We work together with our clients as true partners.</p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <Globe size={32} className="text-red-600" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Integrity</h3>
              <p className="text-gray-600">Honesty and transparency define our relationships.</p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <Zap size={32} className="text-red-600" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously improve our tools and services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[3] = el
        }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">Meet Our Team</h2>
            <p className="section-subtitle">Procurement experts dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "/professional-woman-headshot.png",
              },
              {
                name: "Michael Chen",
                role: "Head of Tender Research",
                image: "/professional-man-headshot.png",
              },
              {
                name: "Emma Williams",
                role: "Bid Support Manager",
                image: "/professional-woman-headshot.png",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-lg mb-4 w-full h-auto"
                />
                <h3 className="font-heading font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium">{member.role}</p>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Join Our Growing Community of Successful Tender Winners
          </h2>
          <a
            href="https://wa.me/‪447482793753‬"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
