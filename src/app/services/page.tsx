'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import { ChevronRight, Handshake, RefreshCw, Trophy, CheckCircle2, Zap } from 'lucide-react'

const ENGAGEMENT_MODELS = [
  {
    icon: Trophy,
    title: 'Project-Based',
    subtitle: 'Fixed scope · Fixed timeline',
    description: 'Ideal for well-defined AI initiatives with clear deliverables. We scope, build, and hand off a production-ready solution with full documentation and training.',
    includes: [
      'Requirements & discovery workshop',
      'Dedicated engineering team',
      'Weekly progress reviews',
      'Production deployment',
      '90-day post-launch support',
    ],
    highlight: false,
    badge: null,
  },
  {
    icon: RefreshCw,
    title: 'Managed Service',
    subtitle: 'Ongoing support · Continuous improvement',
    description: 'Best for organizations that want Nexarion as their long-term AI partner. We build, operate, and continuously improve your AI systems as your business evolves.',
    includes: [
      'Dedicated AI engineering squad',
      'Monthly model retraining & drift monitoring',
      'SLA-backed uptime guarantee',
      'Feature development roadmap',
      'Executive business reviews',
    ],
    highlight: true,
    badge: 'Most Popular',
  },
  {
    icon: Handshake,
    title: 'Enterprise Partnership',
    subtitle: 'Strategic alliance · Co-innovation',
    description: 'For enterprises seeking a deep strategic AI partner. We embed within your organization, co-develop IP, and help build your internal AI capabilities from the ground up.',
    includes: [
      'Embedded AI team at your offices',
      'Internal capability building & training',
      'Co-ownership of developed IP',
      'C-suite AI advisory',
      'Custom commercial terms',
    ],
    highlight: false,
    badge: null,
  },
]

function EngagementCard({ model, index }: { model: typeof ENGAGEMENT_MODELS[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = model.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative rounded-2xl p-8 border transition-all duration-300 h-full flex flex-col ${
        model.highlight
          ? 'bg-gradient-to-br from-blue-600/15 to-blue-900/10 border-blue-500/30'
          : 'glass border-white/[0.07]'
      }`}
    >
      {model.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-glow-sm">
            {model.badge}
          </span>
        </div>
      )}

      {model.highlight && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ boxShadow: '0 0 60px rgba(37,99,235,0.15)' }} />
      )}

      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/20 mb-5">
        <Icon className="w-5 h-5 text-brand-400" />
      </div>

      <p className="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-1">{model.subtitle}</p>
      <h3 className="text-xl font-bold text-white mb-4">{model.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{model.description}</p>

      <ul className="flex flex-col gap-2.5 mt-auto">
        {model.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-brand-400/70 flex-shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>

      <motion.a
        href="/contact"
        className={`mt-8 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold transition-all ${
          model.highlight ? 'btn-primary' : 'btn-secondary'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Get Started
        <ChevronRight className="w-4 h-4" />
      </motion.a>
    </motion.div>
  )
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null)
  const engagementRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const engagementInView = useInView(engagementRef, { once: true, margin: '-80px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  return (
    <>
      <Navbar />
      <main>
        {/* ─── Hero ─── */}
        <section ref={heroRef} className="relative pt-40 pb-24 overflow-hidden bg-bg-primary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 hero-bg-mesh opacity-30" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/8 rounded-full blur-3xl" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/40 to-transparent" />
          </div>

          <div className="container-wide relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-8">
                <Zap className="w-3.5 h-3.5" />
                What We Build
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                AI Services That
                <br />
                <span className="text-gradient">Move the Needle</span>
              </h1>
              <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                From custom LLM development to full-scale MLOps — every service is engineered for enterprise performance, security, and measurable ROI.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Discuss Your Project
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/solutions"
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                >
                  View Our Platforms
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Services Grid ─── */}
        <Services />

        {/* ─── Engagement Models ─── */}
        <section ref={engagementRef} className="section-padding relative overflow-hidden bg-bg-primary">
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
              className="text-center mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={engagementInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
                How We Engage
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                A Model That Fits
                <br />
                <span className="text-gradient">Your Needs</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Choose the engagement model that matches your stage, scale, and goals. All models include our full methodology and senior engineering talent.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {ENGAGEMENT_MODELS.map((model, i) => (
                <EngagementCard key={model.title} model={model} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Process ─── */}
        <Process />

        {/* ─── CTA ─── */}
        <section ref={ctaRef} className="section-padding relative overflow-hidden bg-bg-primary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-800/30 to-transparent" />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/8 rounded-full blur-3xl"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="container-wide relative z-10">
            <motion.div
              className="glass rounded-3xl p-12 md:p-16 border border-blue-500/20 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                48-Hour Response Guarantee
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Ready to Start
                <br />
                <span className="text-gradient">Your AI Journey?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Tell us about your challenge and a senior AI architect will reach out with a tailored proposal within 48 hours.
              </p>
              <motion.a
                href="/contact"
                className="btn-primary inline-flex"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Start a Conversation
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
