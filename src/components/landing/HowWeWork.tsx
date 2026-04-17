import { motion } from "framer-motion"
import { Sprout, FlaskConical, Truck } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Отбор фермеров",
    description: "Работаем только с проверенными органическими фермами. Каждый поставщик проходит строгую проверку состава и методов выращивания.",
    icon: <Sprout className="w-8 h-8" />,
    mockup: "farm",
    gradient: "from-green-100 to-green-50",
    iconBg: "rgba(61, 122, 50, 0.2)",
    iconColor: "var(--eco-green)",
    accent: "rgba(61, 122, 50, 0.45)",
  },
  {
    number: "02",
    title: "Контроль качества",
    description: "Каждая партия проверяется на состав, свежесть и отсутствие пестицидов. Никаких консервантов, усилителей вкуса и ГМО.",
    icon: <FlaskConical className="w-8 h-8" />,
    mockup: "quality",
    gradient: "from-amber-100 to-orange-50",
    iconBg: "rgba(160, 100, 30, 0.2)",
    iconColor: "var(--eco-brown)",
    accent: "rgba(160, 100, 30, 0.45)",
  },
  {
    number: "03",
    title: "Доставка с заботой",
    description: "Упаковываем в переработанные материалы и доставляем в термосумках. Минимальный углеродный след от двери фермы до вашего стола.",
    icon: <Truck className="w-8 h-8" />,
    mockup: "delivery",
    gradient: "from-emerald-100 to-green-50",
    iconBg: "rgba(61, 122, 50, 0.2)",
    iconColor: "var(--eco-green)",
    accent: "rgba(61, 122, 50, 0.45)",
  },
]

export default function HowWeWork() {
  return (
    <section id="about" className="py-24 relative" style={{ backgroundColor: "#e8dcc8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--eco-text)" }}>
            От поля — до стола
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--eco-brown)" }}>
            Прозрачный путь каждого продукта: мы контролируем каждый шаг, чтобы вы получали только лучшее.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`bg-gradient-to-br ${step.gradient} rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 group border`}
              style={{ borderColor: step.accent }}
            >
              {/* Illustrative area */}
              <div className="aspect-video rounded-2xl mb-6 overflow-hidden relative border" style={{ backgroundColor: "rgba(248, 244, 237, 0.7)", borderColor: step.accent }}>
                <div className="absolute inset-0 p-4 flex items-center justify-center">

                  {step.mockup === "farm" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full max-w-[200px] space-y-3"
                    >
                      <div className="flex justify-center space-x-3 text-3xl">
                        <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}>🌾</motion.span>
                        <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>🥛</motion.span>
                        <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>🌿</motion.span>
                      </div>
                      <div className="space-y-2">
                        {["Органические фермы", "Проверенные поставщики", "Без химии"].map((t) => (
                          <div key={t} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--eco-green)" }} />
                            <div className="text-xs" style={{ color: "var(--eco-text)" }}>{t}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step.mockup === "quality" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full max-w-[200px] space-y-3"
                    >
                      <div className="flex justify-center text-3xl mb-2">🔬</div>
                      <div className="space-y-2">
                        {[
                          { label: "Без пестицидов", ok: true },
                          { label: "Без ГМО", ok: true },
                          { label: "Без консервантов", ok: true },
                          { label: "Натуральный состав", ok: true },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--eco-green)" }}>
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <div className="text-xs" style={{ color: "var(--eco-text)" }}>{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step.mockup === "delivery" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full max-w-[200px] space-y-3"
                    >
                      <div className="flex justify-center space-x-2 text-2xl mb-2">
                        <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>📦</motion.span>
                        <span>→</span>
                        <span>🏠</span>
                      </div>
                      <div className="space-y-2">
                        {["Эко-упаковка", "Термосумки", "CO₂ нейтральность"].map((t) => (
                          <div key={t} className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--eco-green)" }} />
                            <div className="text-xs" style={{ color: "var(--eco-text)" }}>{t}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold" style={{ color: step.accent, opacity: 0.8 }}>{step.number}</div>
                  <div className="p-2 rounded-xl" style={{ backgroundColor: step.iconBg, color: step.iconColor }}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold transition-colors" style={{ color: "var(--eco-text)" }}>
                  {step.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--eco-brown)", opacity: 0.75 }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}