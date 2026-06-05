import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import CaseStudies from '@/components/sections/CaseStudies'
import Statistics from '@/components/sections/Statistics'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Statistics />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
