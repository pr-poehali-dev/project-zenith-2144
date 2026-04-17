import { motion } from "framer-motion"
import { ArrowRight, Leaf, Package, Heart } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import CountingStats from "./CountingStats"
import Icon from "@/components/ui/icon"

export default function Hero() {
  const stats = [
    { value: 200, suffix: "+", label: "Органических продуктов" },
    { value: 100, suffix: "%", label: "Натуральный состав" },
    { value: 5, suffix: "000+", label: "Довольных покупателей" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Soft nature background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(232, 240, 228, 0.6) 0%, rgba(248, 244, 237, 0.4) 50%, rgba(240, 233, 220, 0.6) 100%)",
          }}
        />
        {/* Decorative leaf patterns */}
        <div className="absolute top-20 right-10 text-8xl opacity-10 select-none">🌿</div>
        <div className="absolute bottom-32 left-10 text-6xl opacity-8 select-none">🍃</div>
        <div className="absolute top-1/2 right-1/4 text-5xl opacity-6 select-none">✿</div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm border"
                style={{
                  backgroundColor: "rgba(168, 196, 154, 0.2)",
                  borderColor: "rgba(122, 158, 110, 0.4)",
                  color: "var(--eco-green)",
                }}
              >
                <div className="w-2 h-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: "var(--eco-green)" }} />
                <span>Органические продукты с заботой о природе</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
                style={{ color: "var(--eco-text)" }}
              >
                <span className="block mb-2">ЖИВАЯ ЕДА</span>
                <span className="block mb-2">ДЛЯ ЖИВЫХ</span>
                <span
                  className="block mb-2 font-serif-display italic font-normal"
                  style={{ color: "var(--eco-green)" }}
                >
                  Людей
                </span>
                <span className="block text-4xl sm:text-4xl lg:text-5xl" style={{ color: "var(--eco-brown)", opacity: 0.7 }}>
                  БЕЗ КОМПРОМИССОВ
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0"
                style={{ color: "var(--eco-brown)", opacity: 0.8 }}
              >
                Альтернативное молоко, живые йогурты, урбечи, цельнозерновой хлеб, крупы и натуральные масла — всё в экологичной упаковке из переработанных материалов. Никакой химии, только то, что создала природа.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-6 items-center justify-center lg:justify-start lg:items-start"
            >
              <a href="#get-started">
                <AnimatedButton
                  variant="slim"
                  className="text-white font-semibold"
                  style={{ backgroundColor: "var(--eco-green)" }}
                >
                  <span className="flex items-center">
                    Перейти в каталог
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </AnimatedButton>
              </a>

              {/* Trust badges */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: "rgba(168, 196, 154, 0.3)" }}>
                    <Leaf className="w-5 h-5" style={{ color: "var(--eco-green)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--eco-text)" }}>100% Органика</p>
                    <p className="text-xs" style={{ color: "var(--eco-brown)", opacity: 0.6 }}>Сертифицировано</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: "rgba(210, 195, 170, 0.4)" }}>
                    <Package className="w-5 h-5" style={{ color: "var(--eco-brown)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--eco-text)" }}>Эко-упаковка</p>
                    <p className="text-xs" style={{ color: "var(--eco-brown)", opacity: 0.6 }}>Перерабатываемая</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: "rgba(168, 196, 154, 0.3)" }}>
                    <Heart className="w-5 h-5" style={{ color: "var(--eco-green)" }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--eco-text)" }}>Без добавок</p>
                    <p className="text-xs" style={{ color: "var(--eco-brown)", opacity: 0.6 }}>Чистый состав</p>
                  </div>
                </div>
              </div>

              <CountingStats stats={stats} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
