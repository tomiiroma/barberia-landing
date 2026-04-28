import { WhatsAppButton } from "@/components/whatsapp-button"
import { Hero } from "@/components/hero"
import { LoyaltyStrip } from "@/components/loyalty-strip"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Gallery } from "@/components/gallery"
import { Location } from "@/components/location"
import { BookingOnline } from "@/components/booking-online"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BookingOnline />
      <Services />
      <LoyaltyStrip />
      <WhyUs />
      <Gallery />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
