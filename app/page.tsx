import { WhatsAppButton } from "@/components/whatsapp-button"
import { Hero } from "@/components/hero"
import { ValueBar } from "@/components/value-bar"
import { LoyaltyStrip } from "@/components/loyalty-strip"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Location } from "@/components/location"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueBar />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <LoyaltyStrip />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
