import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const orbs = [
      { x: 0, y: 0, radius: 500, color: "100, 180, 70", speed: 0.3, angle: 0, offsetY: 0 },
      { x: 0, y: 0, radius: 400, color: "190, 140, 60", speed: 0.2, angle: Math.PI, offsetY: 300 },
      { x: 0, y: 0, radius: 350, color: "70, 155, 50", speed: 0.25, angle: Math.PI / 2, offsetY: 600 },
      { x: 0, y: 0, radius: 320, color: "210, 165, 80", speed: 0.35, angle: Math.PI * 1.5, offsetY: 900 },
      { x: 0, y: 0, radius: 380, color: "120, 195, 90", speed: 0.28, angle: Math.PI * 0.7, offsetY: 1200 },
    ]

    let animationId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.004

      orbs.forEach((orb) => {
        orb.angle += orb.speed * 0.008
        orb.x = canvas.width / 2 + Math.cos(orb.angle + time) * (canvas.width * 0.35)
        orb.y = orb.offsetY + canvas.height * 0.25 + Math.sin(orb.angle + time) * (canvas.height * 0.18)

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)
        gradient.addColorStop(0, `rgba(${orb.color}, 0.12)`)
        gradient.addColorStop(0.5, `rgba(${orb.color}, 0.06)`)
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(orb.x - orb.radius, orb.y - orb.radius, orb.radius * 2, orb.radius * 2)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}