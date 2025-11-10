"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface ToastProps {
  id: string
  message: string
  onClose: (id: string) => void
}

const Toast = ({ id, message, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), 5000)
    return () => clearTimeout(timer)
  }, [id, onClose])

  return (
    <div className="toast-slide-left">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-white truncate">{message}</span>
        <button
          onClick={() => onClose(id)}
          className="p-0 hover:bg-red-600/20 rounded transition-colors flex-shrink-0"
          aria-label="Close notification"
        >
          <X size={12} />
        </button>
      </div>
    </div>
  )
}

export default Toast
