import { motion } from "framer-motion"
import { useState } from "react"
import { Leaf, ShoppingBasket, Heart, Sprout } from "lucide-react"
import AnimatedButton from "./AnimatedButton"

const baskets = [
  {
    id: "starter",
    name: "Старт",
    icon: <Leaf className="w-6 h-6" />,
    pricePerWeek: 1800,
    description: "Для знакомства",
    items: ["Молоко овсяное 1л", "Йогурт натуральный 2шт", "Хлеб цельнозерновой"],
  },
  {
    id: "family",
    name: "Семейная",
    icon: <ShoppingBasket className="w-6 h-6" />,
    pricePerWeek: 3500,
    description: "На 2-4 человека",
    items: ["Молоко 2 вида", "Йогурты 4шт", "Хлеб + крупы", "Урбеч 1шт"],
  },
  {
    id: "health",
    name: "Здоровье",
    icon: <Heart className="w-6 h-6" />,
    pricePerWeek: 2800,
    description: "Для активных",
    items: ["Протеиновые крупы", "Урбечи 2шт", "Масло льняное", "Йогурты"],
  },
  {
    id: "full",
    name: "Всё лучшее",
    icon: <Sprout className="w-6 h-6" />,
    pricePerWeek: 5200,
    description: "Полный набор",
    items: ["Весь ассортимент молока", "Йогурты 6шт", "Хлеб + 3 крупы", "2 масла + 2 урбеча"],
  },
]

export default function ROICalculatorHome() {
  const [selectedBasket, setSelectedBasket] = useState("family")
  const [weeks, setWeeks] = useState(4)

  const basket = baskets.find((b) => b.id === selectedBasket)!
  const total = basket.pricePerWeek * weeks
  const discount = weeks >= 8 ? 0.1 : weeks >= 4 ? 0.05 : 0
  const finalTotal = Math.round(total * (1 - discount))
  const savings = total - finalTotal

  return (
    <section id="values" className="py-24 relative" style={{ backgroundColor: "rgba(232, 240, 228, 0.25)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--eco-text)" }}>
            Составьте корзину
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--eco-brown)", opacity: 0.75 }}>
            Выберите подходящий набор и рассчитайте стоимость подписки — чем дольше, тем выгоднее
          </p>
        </motion.div>

        <div className="rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden border"
          style={{ backgroundColor: "rgba(248, 244, 237, 0.7)", borderColor: "rgba(168, 196, 154, 0.35)" }}>
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(168,196,154,0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(210,195,170,0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(168,196,154,0.12) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(210,195,170,0.12) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(168,196,154,0.15) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Controls */}
            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold mb-4" style={{ color: "var(--eco-text)" }}>Выберите корзину</label>
                <div className="grid grid-cols-2 gap-3">
                  {baskets.map((b) => (
                    <motion.button
                      key={b.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedBasket(b.id)}
                      className="p-4 rounded-xl border transition-all duration-200 text-left"
                      style={{
                        backgroundColor: selectedBasket === b.id ? "rgba(122, 158, 110, 0.15)" : "rgba(248, 244, 237, 0.8)",
                        borderColor: selectedBasket === b.id ? "rgba(122, 158, 110, 0.6)" : "rgba(168, 196, 154, 0.3)",
                      }}
                    >
                      <div className="flex items-center space-x-3 mb-1">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: "rgba(168, 196, 154, 0.3)", color: "var(--eco-green)" }}>
                          {b.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-sm" style={{ color: "var(--eco-text)" }}>{b.name}</div>
                          <div className="text-xs opacity-70" style={{ color: "var(--eco-brown)" }}>{b.description}</div>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-4" style={{ color: "var(--eco-text)" }}>
                  Количество недель: <span style={{ color: "var(--eco-green)" }}>{weeks}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={weeks}
                  onChange={(e) => setWeeks(Number(e.target.value))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, var(--eco-green) 0%, var(--eco-green) ${((weeks - 1) / 11) * 100}%, rgba(168,196,154,0.3) ${((weeks - 1) / 11) * 100}%, rgba(168,196,154,0.3) 100%)`,
                  }}
                />
                <div className="flex justify-between text-sm mt-2" style={{ color: "var(--eco-brown)", opacity: 0.6 }}>
                  <span>1 нед.</span>
                  <span>4+ нед. — скидка 5%</span>
                  <span>8+ нед. — скидка 10%</span>
                </div>
              </div>

              <div className="rounded-xl p-4 border" style={{ backgroundColor: "rgba(232, 240, 228, 0.5)", borderColor: "rgba(168, 196, 154, 0.3)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--eco-text)" }}>Что входит в «{basket.name}»:</p>
                <ul className="space-y-1">
                  {basket.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-sm" style={{ color: "var(--eco-brown)" }}>
                      <span style={{ color: "var(--eco-green)" }}>🌿</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Result */}
            <div className="space-y-6 flex flex-col justify-center">
              <div className="rounded-2xl p-8 border text-center" style={{ backgroundColor: "rgba(232, 240, 228, 0.5)", borderColor: "rgba(122, 158, 110, 0.35)" }}>
                <p className="text-sm font-medium mb-2" style={{ color: "var(--eco-brown)", opacity: 0.7 }}>Итого за {weeks} {weeks === 1 ? "неделю" : weeks < 5 ? "недели" : "недель"}</p>
                <motion.div
                  key={finalTotal}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-5xl font-bold mb-2"
                  style={{ color: "var(--eco-green)" }}
                >
                  {finalTotal.toLocaleString("ru-RU")} ₽
                </motion.div>
                {savings > 0 && (
                  <p className="text-sm" style={{ color: "var(--eco-brown)" }}>
                    Экономия: <span className="font-semibold" style={{ color: "var(--eco-green)" }}>{savings.toLocaleString("ru-RU")} ₽</span> ({Math.round(discount * 100)}%)
                  </p>
                )}
                <p className="text-xs mt-1 opacity-60" style={{ color: "var(--eco-brown)" }}>
                  {basket.pricePerWeek.toLocaleString("ru-RU")} ₽ / неделя
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Бесплатная доставка при подписке от 4 недель",
                  "Гибкая пауза и отмена в любой момент",
                  "Состав корзины можно менять каждую неделю",
                  "Все продукты в экологичной упаковке",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(168, 196, 154, 0.4)" }}>
                      <span className="text-xs" style={{ color: "var(--eco-green)" }}>✓</span>
                    </div>
                    <span className="text-sm" style={{ color: "var(--eco-text)" }}>{benefit}</span>
                  </div>
                ))}
              </div>

              <a href="#get-started">
                <AnimatedButton className="w-full text-white font-semibold" style={{ backgroundColor: "var(--eco-green)" }}>
                  Оформить подписку
                </AnimatedButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
