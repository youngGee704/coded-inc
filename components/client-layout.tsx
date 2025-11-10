"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ToastContainer from "@/components/toast-container"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          <ToastContainer />
        </>
      )}
    </>
  )
}
