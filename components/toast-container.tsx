"use client"

import { useState, useEffect } from "react"
import Toast from "./toast-notification"

const messages = [
  "Ready to win your next contract?",
  "Explore verified UK tenders today",
  "Your success starts with the right opportunity",
  "Let us help you bid smarter, not harder",
  "Discover contracts tailored to your expertise",
  "Transform your tender search experience",
  "Expert guidance for every bid",
  "Maximize your tender opportunities",
  "Empowering UK businesses to succeed",
  "Your competitive edge awaits",
]

interface ToastItem {
  id: string
  message: string
}

const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]
      const newToast = {
        id: Date.now().toString(),
        message: randomMessage,
      }
      setToasts((prev) => [...prev.slice(-1), newToast])
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const handleClose = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 flex flex-col gap-2 pointer-events-none md:pointer-events-auto max-w-xs md:max-w-sm">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast id={toast.id} message={toast.message} onClose={handleClose} />
        </div>
      ))}
    </div>
  )
}

export default ToastContainer
