"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
}

const GyroCard = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rotationRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        z: (Math.random() - 0.5) * 200,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: (Math.random() - 0.5) * 2,
      })
    }
    particlesRef.current = particles

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      rotationRef.current.x = (event.beta || 0) * 0.5
      rotationRef.current.y = (event.gamma || 0) * 0.5
    }

    // Request permission for iOS 13+
    if (typeof DeviceOrientationEvent !== "undefined" && "requestPermission" in DeviceOrientationEvent) {
      ;(DeviceOrientationEvent as any)
        .requestPermission()
        .then((permission: string) => {
          if (permission === "granted") {
            window.addEventListener("deviceorientation", handleDeviceOrientation)
          }
        })
        .catch(() => {
          // Fallback for devices without permission
          window.addEventListener("deviceorientation", handleDeviceOrientation)
        })
    } else {
      window.addEventListener("deviceorientation", handleDeviceOrientation)
    }

    const animate = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight

      ctx.fillStyle = "rgba(26, 26, 26, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      particlesRef.current.forEach((p) => {
        // Update position
        p.x += p.vx
        p.y += p.vy
        p.z += p.vz

        // Bounce off boundaries
        if (Math.abs(p.x) > 100) p.vx *= -1
        if (Math.abs(p.y) > 100) p.vy *= -1
        if (Math.abs(p.z) > 100) p.vz *= -1

        // Apply device rotation
        const rotX = rotationRef.current.x * (Math.PI / 180)
        const rotY = rotationRef.current.y * (Math.PI / 180)

        const y = p.y * Math.cos(rotX) - p.z * Math.sin(rotX)
        const z = p.y * Math.sin(rotX) + p.z * Math.cos(rotX)
        const x = p.x * Math.cos(rotY) + z * Math.sin(rotY)

        // Project to 2D
        const scale = 200 / (200 + z)
        const screenX = centerX + x * scale
        const screenY = centerY + y * scale

        // Draw particle
        const opacity = (z + 100) / 200
        ctx.fillStyle = `rgba(230, 57, 70, ${opacity * 0.6})`
        ctx.beginPath()
        ctx.arc(screenX, screenY, 2 * scale, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-64 md:h-80 bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden border border-red-600/30 relative"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

export default GyroCard
