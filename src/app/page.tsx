import { HeroSection } from '@/sections/HeroSection'
import { TrustedBySection } from '@/sections/TrustedBySection'
import { ServicesSection } from '@/sections/ServicesSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { WhyUsSection } from '@/sections/WhyUsSection'
import { ProcessSection } from '@/sections/ProcessSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { FAQSection } from '@/sections/FAQSection'
import { CTASection } from '@/sections/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
