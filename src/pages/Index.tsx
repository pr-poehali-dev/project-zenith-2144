import {
  AnimatedBackground,
  Navbar,
  Hero,
  HowWeWork,
  InnovativeServices,
  ROICalculatorHome,
  AnimatedFooter,
} from "@/components/landing"

export default function Index() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "var(--eco-beige)" }}>
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowWeWork />
        <InnovativeServices />
        <ROICalculatorHome />
        <AnimatedFooter />
      </div>
    </div>
  )
}
