import { WhatsAppButton } from "@/components/whatsapp-button"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Services } from "@/components/services"
import { FeaturedTreatments } from "@/components/featured-treatments"
import { Trust } from "@/components/trust"
import { Location } from "@/components/location"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Services />
      <FeaturedTreatments />
      <Trust />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
