import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import AnimatedButton from "./AnimatedButton"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <motion.nav
        className="relative backdrop-blur-md border rounded-2xl shadow-sm overflow-hidden"
        style={{ backgroundColor: "rgba(248, 244, 237, 0.85)", borderColor: "rgba(168, 196, 154, 0.4)" }}
        animate={{
          borderColor: [
            "rgba(168, 196, 154, 0.4)",
            "rgba(122, 158, 110, 0.5)",
            "rgba(210, 195, 170, 0.5)",
            "rgba(168, 196, 154, 0.4)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold" style={{ color: "var(--eco-green)" }}>
                  🌿 Живая Лавка
                </span>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#products" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: "var(--eco-text)" }}>
                  Продукты
                </a>
                <a href="#about" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: "var(--eco-text)" }}>
                  О нас
                </a>
                <a href="#values" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: "var(--eco-text)" }}>
                  Ценности
                </a>
                <a href="#contact" className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: "var(--eco-text)" }}>
                  Контакты
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="#get-started">
                <AnimatedButton size="sm" style={{ backgroundColor: "var(--eco-green)", color: "#fff" }}>
                  Сделать заказ
                </AnimatedButton>
              </a>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen
                  ? <X className="h-5 w-5" style={{ color: "var(--eco-text)" }} />
                  : <Menu className="h-5 w-5" style={{ color: "var(--eco-text)" }} />}
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t rounded-b-2xl" style={{ borderColor: "rgba(168, 196, 154, 0.3)", backgroundColor: "rgba(248, 244, 237, 0.95)" }}>
            <div className="px-6 py-4 space-y-3">
              <a href="#products" className="block text-sm font-medium" style={{ color: "var(--eco-text)" }}>Продукты</a>
              <a href="#about" className="block text-sm font-medium" style={{ color: "var(--eco-text)" }}>О нас</a>
              <a href="#values" className="block text-sm font-medium" style={{ color: "var(--eco-text)" }}>Ценности</a>
              <a href="#contact" className="block text-sm font-medium" style={{ color: "var(--eco-text)" }}>Контакты</a>
              <div className="pt-3 border-t" style={{ borderColor: "rgba(168, 196, 154, 0.3)" }}>
                <a href="#get-started" className="block">
                  <AnimatedButton className="w-full" style={{ backgroundColor: "var(--eco-green)", color: "#fff" }}>
                    Сделать заказ
                  </AnimatedButton>
                </a>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </header>
  )
}
