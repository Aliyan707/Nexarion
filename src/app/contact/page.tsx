'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Contact from '@/components/sections/Contact'
import { MessageSquare, ChevronDown, ChevronRight, MapPin, Clock, Globe } from 'lucide-react'

const OFFICES = [
  {
    city: 'San Francisco',
    country: 'United States',
    address: '100 Mission Street, Suite 1400',
    timezone: 'PST (UTC-8)',
    flag: '🇺🇸',
    color: '#3B82F6',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '1 Canada Square, Canary Wharf',
    timezone: 'GMT (UTC+0)',
    flag: '🇬🇧',
    color: '#6366F1',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '1 Raffles Quay, North Tower',
    timezone: 'SGT (UTC+8)',
    flag: '🇸🇬',
    color: '#0891B2',
  },
  {
    city: 'Berlin',
    country: 'Germany',
    address: 'Unter den Linden 21',
    timezone: 'CET (UTC+1)',
    flag: '🇩🇪',
    color: '#7C3AED',
  },
]

const FAQ = [
  {
    question: 'How quickly can we get started on a project?',
    answer: 'After an initial scoping call, we can typically begin a discovery phase within 2 weeks. Full project kickoff happens within 3-4 weeks of contract signing. For urgent needs, we offer expedited onboarding.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have deep domain expertise across Financial Services, Healthcare, Manufacturing, Retail & E-Commerce, Technology, and Government. Our teams include former domain experts alongside AI engineers for every vertical.',
  },
  {
    question: 'How do you handle data privacy and security?',
    answer: 'We hold ISO 27001 and SOC 2 Type II certifications. All client data is processed in isolated environments with zero data sharing across clients. We support on-premise deployments for organizations with strict data residency requirements.',
  },
  {
    question: 'What does your typical project timeline look like?',
    answer: 'Discovery & scoping: 2 weeks. Model development & training: 4-8 weeks. Validation & QA: 2-3 weeks. Production deployment: 1-2 weeks. Most projects go live in 8-12 weeks from kickoff, with continuous optimization ongoing.',
  },
  {
    question: 'Do you offer ongoing support after deployment?',
    answer: 'Yes. All projects include 90 days of post-launch support. We also offer Managed Service agreements for continuous model monitoring, retraining, and improvements as your data and requirements evolve.',
  },
  {
    question: 'What size companies do you work with?',
    answer: 'Our clients range from Series B startups to Fortune 50 enterprises. We tailor our engagement model to your scale — project-based engagements for focused initiatives, and managed services or enterprise partnerships for organizations looking for a long-term AI partner.',
  },
]

function FaqItem({ faq, index }: { faq: typeof FAQ[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-white/[0.06] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-6 flex items-start justify-between gap-4 group"
      >
        <span className={`font-semibold transition-colors text-sm md:text-base ${open ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${open ? 'text-brand-400' : 'text-slate-500'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ContactPage() {
  const officesRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const officesInView = useInView(officesRef, { once: true, margin: '-80px' })
  const faqInView = useInView(faqRef, { once: true, margin: '-80px' })

  return (
    <>
      <Navbar />
      <main>
        {/* ─── Hero ─── */}
        <section className="relative pt-40 pb-16 overflow-hidden bg-bg-secondary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 hero-bg-mesh opacity-20" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/8 rounded-full blur-3xl" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/40 to-transparent" />
          </div>

          <div className="container-wide relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-8">
                <MessageSquare className="w-3.5 h-3.5" />
                Get In Touch
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6">
                Let&apos;s Build Something
                <br />
                <span className="text-gradient">Extraordinary Together</span>
              </h1>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
                Tell us about your challenge. A senior AI architect will respond within 24 hours with a tailored perspective.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── Contact Form (existing component) ─── */}
        <Contact />

        {/* ─── Global Offices ─── */}
        <section ref={officesRef} className="section-padding relative overflow-hidden bg-bg-primary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-800/30 to-transparent" />
            <div
              className="absolute inset-0 opacity-[0.018]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(96,165,250,1) 1px, transparent 0)`,
                backgroundSize: '48px 48px',
              }}
            />
          </div>

          <div className="container-wide relative z-10">
            <motion.div
              className="text-center mb-14 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={officesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
                <Globe className="w-3.5 h-3.5" />
                Global Presence
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                We&apos;re Where
                <br />
                <span className="text-gradient">You Are</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Four offices across three continents. Senior AI talent available in your timezone for enterprise engagements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {OFFICES.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 30 }}
                  animate={officesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 border border-white/[0.07] hover:border-blue-500/25 transition-all duration-300 group"
                  style={{ '--accent': office.color } as React.CSSProperties}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{office.flag}</span>
                    <div>
                      <h3 className="font-bold text-white text-base">{office.city}</h3>
                      <p className="text-xs text-slate-500">{office.country}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-400 leading-relaxed">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                      <p className="text-xs text-slate-400">{office.timezone}</p>
                    </div>
                  </div>

                  <div
                    className="mt-5 h-0.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${office.color}60, transparent)` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section ref={faqRef} className="section-padding relative overflow-hidden bg-bg-secondary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
          </div>

          <div className="container-wide relative z-10">
            <motion.div
              className="text-center mb-14 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
                Common Questions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Frequently Asked
                <br />
                <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Everything you need to know before getting started. Can&apos;t find your answer? Just ask us directly.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-10 border border-white/[0.07]">
              {FAQ.map((faq, i) => (
                <FaqItem key={faq.question} faq={faq} index={i} />
              ))}
            </div>

            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0 }}
              animate={faqInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p className="text-slate-400 mb-4">
                Still have questions?
              </p>
              <motion.a
                href="mailto:hello@nexarion.ai"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
                whileHover={{ x: 2 }}
              >
                Email us at hello@nexarion.ai
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
