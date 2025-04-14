import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { BarriersSection } from "@/components/barriers-section"
import { AboutSection } from "@/components/about-section"
import { FocusAreasSection } from "@/components/focus-areas-section"
import { PartnersSection } from "@/components/partners-section"
import { StartupShowcase } from "@/components/startup-showcase"
import { JoinSection } from "@/components/join-section"
import { StatsSection } from "@/components/stats-section"
import { YoungAILeadersSection } from "@/components/young-ai-leaders-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <YoungAILeadersSection />
    </main>
  )
}
