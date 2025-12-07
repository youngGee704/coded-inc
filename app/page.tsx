"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckCircle, Users, TrendingUp, Award, Target, Zap, Play, Pause, Volume2, Maximize, VolumeX, Volume1 } from "lucide-react"
import GyroCard from "@/components/gyro-card"

const HomePage = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [showVolume, setShowVolume] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
        // On mobile, ensure video plays with sound
        videoRef.current.muted = false
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
      setDuration(videoRef.current.duration || 0)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.volume = vol
      setVolume(vol)
    }
  }

  const toggleVolume = () => {
    if (videoRef.current) {
      const newVolume = volume === 0 ? 1 : 0
      videoRef.current.volume = newVolume
      setVolume(newVolume)
    }
  }

  const toggleFullscreen = () => {
    if (!videoRef.current) return

    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true)
      })
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false)
      })
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

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
    <main className="pt-16">
      {/* Hero Section - Mobile Optimized */}
      <section className="min-h-[80svh] md:min-h-[90vh] bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-4 w-48 h-48 md:top-20 md:right-10 md:w-72 md:h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-8 left-4 w-48 h-48 md:-bottom-8 md:left-20 md:w-72 md:h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="animate-slide-up text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 leading-snug md:leading-tight">
                Find and Win Lucrative UK Tenders with Ease
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 px-4 md:px-0">
                Coded Incorporate helps UK businesses discover verified public and private contracts, with tools and
                support to win more bids.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 px-4 sm:px-0">
                <a href="#how-it-works" className="btn-primary inline-block text-center py-3 px-6 text-sm md:text-base">
                  Browse Tenders
                </a>
                <a
                  href="https://wa.me/447482793753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block text-center py-3 px-6 text-sm md:text-base"
                >
                  Request Bid Support
                </a>
              </div>
            </div>
            <div className="animate-scale-in mt-8 lg:mt-0">
              <Image
                src="/tender-documents-research.jpg"
                alt="Tender Documents"
                width={400}
                height={400}
                className="rounded-lg w-full h-auto max-w-sm md:max-w-md mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section - Mobile Optimized */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[0] = el
        }}
        className="py-8 sm:py-12 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card-premium p-4 md:p-6">
                <div className="stat-card-content text-center">
                  <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-red-600 mb-1 md:mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">{stat.label}</div>
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
        className="py-12 md:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 md:mb-4">Interactive Experience</h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-4">
              Experience our innovative technology
            </p>
          </div>
          <GyroCard />
        </div>
      </section>

      {/* Client Reviews Video Section - Mobile Optimized */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[2] = el
        }}
        className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-4 md:top-1/4 md:left-1/4 w-32 h-32 md:w-64 md:h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-4 md:bottom-1/4 md:right-1/4 w-32 h-32 md:w-64 md:h-64 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3 md:mb-4 px-4">
              Reviews From Our Clients
            </h2>
            <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto px-4">
              Hear directly from businesses that transformed their tendering success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Video Container */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl bg-black">
              <video
                ref={videoRef}
                src="/reviewOne.mp4"
                className="w-full h-auto aspect-video"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    setDuration(videoRef.current.duration)
                  }
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                poster="/video-poster.jpg"
                preload="metadata"
                playsInline
                webkit-playsinline="true"
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Video Controls Overlay - Mobile Optimized */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-3 md:p-4">
                {/* Progress Bar */}
                <div className="mb-2 md:mb-4">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 md:h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer 
                      [&::-webkit-slider-thumb]:appearance-none 
                      [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 md:[&::-webkit-slider-thumb]:h-4 md:[&::-webkit-slider-thumb]:w-4
                      [&::-webkit-slider-thumb]:rounded-full 
                      [&::-webkit-slider-thumb]:bg-red-600 
                      hover:[&::-webkit-slider-thumb]:bg-red-500
                      active:[&::-webkit-slider-thumb]:scale-125"
                  />
                  <div className="flex justify-between text-xs text-gray-300 mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Control Buttons - Mobile Optimized */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlayPause}
                      className="p-1.5 md:p-2 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause size={isMobile ? 16 : 20} className="text-white" />
                      ) : (
                        <Play size={isMobile ? 16 : 20} className="text-white ml-0.5" />
                      )}
                    </button>

                    {/* Volume Control - Collapsed on Mobile */}
                    <div className="relative">
                      <button
                        onClick={toggleVolume}
                        onTouchStart={() => !isMobile && setShowVolume(!showVolume)}
                        onMouseEnter={() => !isMobile && setShowVolume(true)}
                        onMouseLeave={() => !isMobile && setShowVolume(false)}
                        className="p-1.5 md:p-2 rounded-md hover:bg-white/10 active:scale-95 transition-all duration-200"
                        aria-label={volume === 0 ? "Unmute" : "Mute"}
                      >
                        {volume === 0 ? (
                          <VolumeX size={isMobile ? 16 : 20} className="text-gray-300" />
                        ) : volume < 0.5 ? (
                          <Volume1 size={isMobile ? 16 : 20} className="text-gray-300" />
                        ) : (
                          <Volume2 size={isMobile ? 16 : 20} className="text-gray-300" />
                        )}
                      </button>
                      
                      {/* Volume Slider - Desktop only or when tapped on mobile */}
                      {(!isMobile && showVolume) && (
                        <div 
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-black/90 rounded-lg backdrop-blur-sm"
                          onMouseEnter={() => setShowVolume(true)}
                          onMouseLeave={() => setShowVolume(false)}
                        >
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="h-20 w-2 bg-gray-700 rounded-lg appearance-none cursor-pointer 
                              [&::-webkit-slider-thumb]:appearance-none 
                              [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
                              [&::-webkit-slider-thumb]:rounded-full 
                              [&::-webkit-slider-thumb]:bg-red-600
                              [&]:-rotate-90"
                            orient="vertical"
                          />
                        </div>
                      )}
                    </div>

                    {/* Video Title - Hidden on small mobile */}
                    <div className="ml-2 hidden sm:block">
                      <h3 className="text-white font-semibold text-sm md:text-base">Client Success Story</h3>
                      <p className="text-gray-300 text-xs md:text-sm">Construction Firm • Manchester</p>
                    </div>
                  </div>

                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleFullscreen}
                    className="p-1.5 md:p-2 rounded-md hover:bg-white/10 active:scale-95 transition-all duration-200"
                    aria-label="Fullscreen"
                  >
                    <Maximize size={isMobile ? 16 : 20} className="text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Large Play Button Overlay for Mobile */}
              {!isPlaying && (
                <button
                  onClick={togglePlayPause}
                  className="absolute inset-0 flex items-center justify-center group active:bg-black/10"
                  aria-label="Play video"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600/90 rounded-full flex items-center justify-center 
                    transform group-hover:scale-110 group-active:scale-95 transition-transform duration-300 backdrop-blur-sm">
                    <Play size={isMobile ? 24 : 32} className="text-white ml-1" />
                  </div>
                </button>
              )}

              {/* Mobile Tap Instructions */}
              {isMobile && (
                <div className="absolute top-4 right-4">
                  <div className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded-full">
                    Tap to play
                  </div>
                </div>
              )}
            </div>

            {/* Video Stats - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg md:rounded-xl p-4 md:p-6 text-center backdrop-blur-sm border border-gray-700/50">
                <div className="text-xl md:text-3xl font-bold text-red-500 mb-1 md:mb-2">98%</div>
                <div className="text-white font-medium text-sm md:text-base mb-1">Client Satisfaction</div>
                <div className="text-gray-400 text-xs md:text-sm">Based on verified reviews</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg md:rounded-xl p-4 md:p-6 text-center backdrop-blur-sm border border-gray-700/50">
                <div className="text-xl md:text-3xl font-bold text-red-500 mb-1 md:mb-2">£2.5M+</div>
                <div className="text-white font-medium text-sm md:text-base mb-1">Contracts Secured</div>
                <div className="text-gray-400 text-xs md:text-sm">Through our platform</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg md:rounded-xl p-4 md:p-6 text-center backdrop-blur-sm border border-gray-700/50">
                <div className="text-xl md:text-3xl font-bold text-red-500 mb-1 md:mb-2">150+</div>
                <div className="text-white font-medium text-sm md:text-base mb-1">Success Stories</div>
                <div className="text-gray-400 text-xs md:text-sm">Across UK industries</div>
              </div>
            </div>

            {/* CTA Below Video - Mobile Optimized */}
            <div className="text-center mt-8 md:mt-12 px-4">
              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-lg">
                Ready to start your success story? Join our satisfied clients today.
              </p>
              <a
                href="https://wa.me/447482793753"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-red-600 text-white font-bold rounded-lg 
                  hover:bg-red-700 active:scale-95 transition-all duration-300 shadow-lg w-full sm:w-auto"
              >
                <span className="text-sm md:text-base">Start Winning Contracts</span>
              </a>
              <p className="text-gray-400 text-xs md:text-sm mt-3">
                Tap to chat with our team on WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Mobile Optimized */}
      <section
        id="how-it-works"
        ref={(el) => {
          if (el) sectionRefs.current[3] = el
        }}
        className="py-12 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 md:mb-4">How It Works</h2>
            <p className="text-gray-600 text-sm md:text-base">Three simple steps to winning tenders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-sm md:shadow-md hover:shadow-md md:hover:shadow-lg 
                  transition-shadow duration-300 border-t-2 md:border-t-4 border-red-600"
              >
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600 text-white font-bold mb-3 md:mb-4 text-base md:text-lg">
                  {index + 1}
                </div>
                <h3 className="font-heading font-bold text-base md:text-lg lg:text-xl mb-2 md:mb-3">{step.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm lg:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Mobile Optimized */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[4] = el
        }}
        className="py-12 md:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 md:mb-4">Why Choose Coded Incorporate</h2>
            <p className="text-gray-600 text-sm md:text-base">Everything you need to succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 lg:p-8 rounded-lg bg-gray-50 hover:bg-red-50 transition-colors duration-300"
              >
                <div className="text-red-600 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-base md:text-lg lg:text-xl mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm lg:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Mobile Optimized */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[5] = el
        }}
        className="py-12 md:py-20 bg-gradient-to-br from-gray-900 to-black text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3 md:mb-4 text-white">Powerful Features</h2>
            <p className="text-gray-300 text-sm md:text-base">Designed for your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 md:p-6 lg:p-8 rounded-lg bg-gradient-to-br from-red-600/10 to-red-900/10 
                  border border-red-600/20 hover:border-red-600/50 transition-all duration-300 group"
              >
                <div className="text-red-500 mb-3 md:mb-4 group-hover:scale-125 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-bold text-base md:text-lg lg:text-xl mb-2 md:mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-sm lg:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section
        ref={(el) => {
          if (el) sectionRefs.current[6] = el
        }}
        className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-red-600 to-red-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-3 sm:mb-4 md:mb-6 px-4">
            Join hundreds of UK businesses winning contracts through Coded Incorporate
          </h2>
          <a
            href="https://wa.me/447482793753"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-red-600 font-bold rounded-lg 
              hover:bg-gray-100 active:scale-95 transition-all duration-300 w-full sm:w-auto text-sm md:text-base"
          >
            Contact Us Today
          </a>
          <p className="text-red-100 text-xs md:text-sm mt-3 md:mt-4 px-4">
            Available on WhatsApp for quick responses
          </p>
        </div>
      </section>
    </main>
  )
}

export default HomePage