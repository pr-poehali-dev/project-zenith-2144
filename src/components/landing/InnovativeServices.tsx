import { motion } from "framer-motion"
import { useState } from "react"
import AnimatedButton from "./AnimatedButton"

const products = [
  {
    title: "Альтернативное молоко",
    description: "Овсяное, миндальное, кокосовое, рисовое — без добавленного сахара и консервантов. Идеально для кофе, каш и выпечки.",
    emoji: "🥛",
    mockup: "milk",
    tags: ["Без лактозы", "Веган", "Без сахара"],
  },
  {
    title: "Живые йогурты",
    description: "Натуральные йогурты на закваске с живыми бактериями. Без крахмала, желатина и ароматизаторов — только молоко и культуры.",
    emoji: "🫙",
    mockup: "yogurt",
    tags: ["Живые бактерии", "Без загустителей"],
  },
  {
    title: "Урбечи и пасты",
    description: "Сырые урбечи из семян и орехов: кунжут, лён, миндаль, кешью. Один ингредиент — максимум пользы.",
    emoji: "🌰",
    mockup: "urbech",
    tags: ["Сырые", "1 ингредиент", "Без масла"],
  },
  {
    title: "Хлеб и выпечка",
    description: "Цельнозерновой хлеб на натуральной закваске, без дрожжей и улучшителей. Долгое брожение — долгая свежесть.",
    emoji: "🍞",
    mockup: "bread",
    tags: ["Закваска", "Без дрожжей", "Цельнозерновой"],
  },
  {
    title: "Крупы и злаки",
    description: "Необработанные крупы, киноа, амарант, полба — органически выращенные без пестицидов в фермерских хозяйствах.",
    emoji: "🌾",
    mockup: "grains",
    tags: ["Органические", "Без ГМО"],
  },
  {
    title: "Масла холодного отжима",
    description: "Льняное, кедровое, тыквенное, оливковое Extra Virgin. Первый холодный отжим сохраняет все витамины и Омега-кислоты.",
    emoji: "🫒",
    mockup: "oils",
    tags: ["Холодный отжим", "Нерафинированное", "Омега-3"],
  },
]

const mockupColors = {
  milk: { bg: "rgba(232, 240, 228, 0.6)", accent: "var(--eco-green)" },
  yogurt: { bg: "rgba(240, 233, 220, 0.6)", accent: "var(--eco-brown)" },
  urbech: { bg: "rgba(225, 210, 185, 0.5)", accent: "var(--eco-brown)" },
  bread: { bg: "rgba(235, 220, 195, 0.6)", accent: "var(--eco-brown)" },
  grains: { bg: "rgba(232, 240, 228, 0.6)", accent: "var(--eco-green)" },
  oils: { bg: "rgba(240, 233, 220, 0.6)", accent: "var(--eco-green)" },
}

export default function InnovativeServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="products" className="py-24 relative" style={{ backgroundColor: "rgba(248, 244, 237, 0.5)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "var(--eco-text)" }}>
            Наши продукты
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--eco-brown)", opacity: 0.75 }}>
            Каждый продукт — осознанный выбор. Чистый состав, забота о природе и настоящий вкус.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.slice(0, 2).map((product, index) => {
              const colors = mockupColors[product.mockup as keyof typeof mockupColors]
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 border"
                  style={{ backgroundColor: "rgba(248, 244, 237, 0.7)", borderColor: "rgba(168, 196, 154, 0.3)" }}
                >
                  <div className="aspect-video rounded-lg mb-6 overflow-hidden relative border flex items-center justify-center"
                    style={{ backgroundColor: colors.bg, borderColor: "rgba(168, 196, 154, 0.2)" }}>
                    <motion.div
                      animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-7xl"
                    >
                      {product.emoji}
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--eco-text)" }}>{product.title}</h3>
                  <p className="leading-relaxed mb-4" style={{ color: "var(--eco-brown)", opacity: 0.75 }}>{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{ backgroundColor: "rgba(168, 196, 154, 0.2)", borderColor: "rgba(122, 158, 110, 0.3)", color: "var(--eco-green)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(2, 5).map((product, index) => {
              const colors = mockupColors[product.mockup as keyof typeof mockupColors]
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onHoverStart={() => setHoveredIndex(index + 2)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 border"
                  style={{ backgroundColor: "rgba(248, 244, 237, 0.7)", borderColor: "rgba(168, 196, 154, 0.3)" }}
                >
                  <div className="aspect-square rounded-lg mb-4 flex items-center justify-center border"
                    style={{ backgroundColor: colors.bg, borderColor: "rgba(168, 196, 154, 0.2)" }}>
                    <motion.div
                      animate={hoveredIndex === index + 2 ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-5xl"
                    >
                      {product.emoji}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--eco-text)" }}>{product.title}</h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--eco-brown)", opacity: 0.75 }}>{product.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-medium border"
                        style={{ backgroundColor: "rgba(168, 196, 154, 0.2)", borderColor: "rgba(122, 158, 110, 0.3)", color: "var(--eco-green)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Last product */}
            {products.slice(5, 6).map((product, index) => {
              const colors = mockupColors[product.mockup as keyof typeof mockupColors]
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 border"
                  style={{ backgroundColor: "rgba(248, 244, 237, 0.7)", borderColor: "rgba(168, 196, 154, 0.3)" }}
                >
                  <div className="aspect-video rounded-lg mb-6 overflow-hidden relative border flex items-center justify-center"
                    style={{ backgroundColor: colors.bg, borderColor: "rgba(168, 196, 154, 0.2)" }}>
                    <span className="text-7xl">{product.emoji}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--eco-text)" }}>{product.title}</h3>
                  <p className="leading-relaxed mb-4" style={{ color: "var(--eco-brown)", opacity: 0.75 }}>{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{ backgroundColor: "rgba(168, 196, 154, 0.2)", borderColor: "rgba(122, 158, 110, 0.3)", color: "var(--eco-green)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 flex flex-col justify-between border"
              style={{ backgroundColor: "rgba(122, 158, 110, 0.12)", borderColor: "rgba(122, 158, 110, 0.35)" }}
            >
              <div>
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--eco-text)" }}>
                  Подписка на корзину
                </h3>
                <p className="leading-relaxed mb-6" style={{ color: "var(--eco-brown)", opacity: 0.75 }}>
                  Получайте персональную корзину органических продуктов еженедельно. Никакого планирования — только свежее и вкусное.
                </p>
                <ul className="space-y-2 mb-6">
                  {["Индивидуальный состав", "Гибкая периодичность", "Скидка 10% на подписку"].map((item) => (
                    <li key={item} className="flex items-center space-x-2">
                      <span style={{ color: "var(--eco-green)" }}>✓</span>
                      <span className="text-sm" style={{ color: "var(--eco-text)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#get-started">
                <AnimatedButton className="w-full text-white font-semibold" style={{ backgroundColor: "var(--eco-green)" }}>
                  Оформить подписку
                </AnimatedButton>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
