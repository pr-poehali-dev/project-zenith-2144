import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import AnimatedButton from "./AnimatedButton"

export default function AnimatedFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
    setEmail("")
  }

  return (
    <footer id="contact" className="relative border-t" style={{ backgroundColor: "#e8d8b8", borderColor: "rgba(61, 122, 50, 0.4)" }}>
      {/* Newsletter Section */}
      <div className="relative z-10 border-b" style={{ borderColor: "rgba(61, 122, 50, 0.25)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--eco-text)" }}>
              🌿 Живите осознанно
            </h3>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "var(--eco-brown)", opacity: 0.75 }}>
              Подпишитесь на рассылку — рецепты, советы по питанию и первые новинки нашего каталога.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubscribe}
            className="max-w-md mx-auto"
          >
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  className="w-full px-4 py-3 rounded-lg border outline-none transition-colors"
                  style={{
                    backgroundColor: "rgba(248, 244, 237, 0.9)",
                    borderColor: "rgba(168, 196, 154, 0.4)",
                    color: "var(--eco-text)",
                  }}
                  required
                />
              </div>
              <AnimatedButton
                type="submit"
                className="text-white"
                style={{ backgroundColor: "var(--eco-green)" }}
              >
                <ArrowRight className="h-5 w-5" />
              </AnimatedButton>
            </div>
            {isSubscribed && (
              <p className="text-center mt-4 animate-fade-in font-medium" style={{ color: "var(--eco-green)" }}>
                Спасибо! Скоро напишем 🌱
              </p>
            )}
          </motion.form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="group flex justify-center lg:justify-start">
              <span className="text-3xl font-bold transition-transform duration-300 group-hover:scale-105" style={{ color: "var(--eco-green)" }}>
                🌿 Живая Лавка
              </span>
            </div>
            <p className="text-lg leading-relaxed max-w-md mx-auto lg:mx-0" style={{ color: "var(--eco-brown)", opacity: 0.8 }}>
              Органические продукты с фермерских хозяйств. Без химии, без лишнего — только живое и настоящее. Упаковка из переработанных материалов.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Mail, href: "#", label: "Email" },
              ].map(({ icon: SocialIcon, href, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a href={href} className="group relative" aria-label={label}>
                    <div className="w-12 h-12 rounded-lg border flex items-center justify-center transition-colors"
                      style={{ backgroundColor: "rgba(248, 244, 237, 0.8)", borderColor: "rgba(168, 196, 154, 0.3)" }}>
                      <SocialIcon className="h-5 w-5 transition-colors" style={{ color: "var(--eco-green)" }} />
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6" style={{ color: "var(--eco-text)" }}>Каталог</h4>
              <ul className="space-y-4">
                {[
                  "Альтернативное молоко",
                  "Живые йогурты",
                  "Урбечи и пасты",
                  "Хлеб и выпечка",
                  "Крупы и злаки",
                  "Масла холодного отжима",
                ].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#products"
                      className="transition-colors duration-200 flex items-center justify-center sm:justify-start group text-sm"
                      style={{ color: "var(--eco-brown)", opacity: 0.75 }}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 transition-all duration-200 mr-0 group-hover:mr-2" style={{ backgroundColor: "var(--eco-green)" }} />
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6" style={{ color: "var(--eco-text)" }}>Контакты</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 justify-center sm:justify-start" style={{ color: "var(--eco-brown)" }}>
                  <Mail className="h-5 w-5 flex-shrink-0" style={{ color: "var(--eco-green)" }} />
                  <span className="text-sm">hello@zhivayalavka.ru</span>
                </div>
                <div className="flex items-center space-x-3 justify-center sm:justify-start" style={{ color: "var(--eco-brown)" }}>
                  <Phone className="h-5 w-5 flex-shrink-0" style={{ color: "var(--eco-green)" }} />
                  <span className="text-sm">+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3 justify-center sm:justify-start" style={{ color: "var(--eco-brown)" }}>
                  <MapPin className="h-5 w-5 flex-shrink-0" style={{ color: "var(--eco-green)" }} />
                  <span className="text-sm">Москва, Россия</span>
                </div>
              </div>

              <div className="mt-8">
                <a href="#get-started">
                  <AnimatedButton className="w-full text-white font-semibold" style={{ backgroundColor: "var(--eco-green)" }}>
                    Сделать заказ
                  </AnimatedButton>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t pt-8"
          style={{ borderColor: "rgba(168, 196, 154, 0.25)" }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-sm" style={{ color: "var(--eco-brown)", opacity: 0.55 }}>
              © 2025 Живая Лавка. С заботой о природе и о вас.
            </p>
            <div className="flex space-x-6">
              {["Политика конфиденциальности", "Условия доставки"].map((link) => (
                <a key={link} href="#" className="text-sm transition-colors" style={{ color: "var(--eco-brown)", opacity: 0.55 }}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}