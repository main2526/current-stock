"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const colors = ["#9333EA", "#EC4899", "#3B82F6", "#10B981"]
    const particles: {
      x: number
      y: number
      radius: number
      baseRadius: number
      color: string
      vx: number
      vy: number
      pulse: number
    }[] = []

    const particleCount = 40

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 80 + 60
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        baseRadius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Gradient de fondo
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, "#000000")
      gradient.addColorStop(1, "#0F0F0F")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Modo mezcla
      ctx.globalCompositeOperation = "lighter"

      particles.forEach((p) => {
        p.pulse += 0.01
        p.radius = p.baseRadius + Math.sin(p.pulse) * 10

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)
        gradient.addColorStop(0, `${p.color}33`) // Centro semitransparente
        gradient.addColorStop(1, `${p.color}00`) // Borde transparente

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.shadowColor = p.color + "40"
        ctx.shadowBlur = 30
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Movimiento
        p.x += p.vx
        p.y += p.vy

        // Rebote
        if (p.x < -p.radius) p.x = width + p.radius
        if (p.x > width + p.radius) p.x = -p.radius
        if (p.y < -p.radius) p.y = height + p.radius
        if (p.y > height + p.radius) p.y = -p.radius
      })

      ctx.globalCompositeOperation = "source-over"
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 2 }}
    />
  )
}
