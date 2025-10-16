import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { CategoriesSection } from "@/components/categories-section"
import { TopProductSection } from "@/components/top-product-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { VideoSection } from "@/components/video-section"
import { QuizSection } from "@/components/quiz-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { GallerySection } from "@/components/gallery-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { ContactSection } from "@/components/contact-section"
import { CookieBanner } from "@/components/cookie-banner"
import { FloatingLeaves } from "@/components/floating-leaves"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <FloatingLeaves />
      <HeroSection />
      <WhySection />
      <CategoriesSection />
      <TopProductSection />
      <HowItWorksSection />
      <VideoSection />
      <QuizSection />
      <TestimonialsSection />
      <BlogSection />
      <GallerySection />
      <NewsletterSection />
      <ContactSection />
      <CookieBanner />
    </main>
  )
}
