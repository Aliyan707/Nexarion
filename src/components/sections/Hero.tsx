'use client'

import { useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

const AIOrb = dynamic(() => import('@/components/three/AIOrb'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-900/40 to-blue-600/20 border border-blue-600/20 animate-pulse-glow" />
    </div>
  ),
})

const ParticleField = dynamic(() => import('@/components/three/ParticleField'), { ssr: false })

const TRUST_ITEMS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '100+', label: 'Enterprise Clients' },
  { value: 'Global', label: 'AI Solutions' },
]

const FEATURES = [
  'Enterprise-grade security',
  'Real-time AI processing',
  'Custom model training',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden hero-bg-mesh"
    >
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </div>

      {/* Radial glow overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Light beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1/3 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div className="relative z-10 container-wide w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">

          {/* LEFT: Content */}
          <motion.div
            style={{ y: contentY, opacity }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                <span className="text-brand-300 font-medium">Next-Generation Enterprise AI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.06] tracking-tight mb-6"
            >
              <span className="text-white">Transforming</span>
              <br />
              <span className="text-white">Business Through</span>
              <br />
              <span className="text-gradient glow-text">Artificial</span>
              <br />
              <span className="text-gradient glow-text">Intelligence</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 leading-relaxed max-w-xl mb-8"
            >
              Build, automate, and scale with next-generation AI solutions designed for modern enterprises. Deploy in days, not months.
            </motion.p>

            {/* Feature list */}
            <motion.ul variants={itemVariants} className="flex flex-col gap-2.5 mb-10">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary text-base"
                whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(37,99,235,0.7)' }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-secondary text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Book a Demo
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/[0.07]"
            >
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-bold text-white">{item.value}</span>
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: 3D Orb */}
          <motion.div
            style={{ scale: orbScale, opacity }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="relative w-full lg:h-[640px] h-[400px] flex items-center justify-center"
          >
            {/* Glow backdrop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-80 h-80 rounded-full bg-blue-600/15 blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Outer decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-[420px] h-[420px] rounded-full border border-blue-600/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-[520px] h-[520px] rounded-full border border-blue-500/5"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* HUD-style corner decorations */}
            {[
              'top-8 left-8 border-t border-l',
              'top-8 right-8 border-t border-r',
              'bottom-8 left-8 border-b border-l',
              'bottom-8 right-8 border-b border-r',
            ].map((classes, i) => (
              <motion.div
                key={i}
                className={`absolute w-6 h-6 border-blue-500/30 ${classes}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              />
            ))}

            {/* Floating data labels */}
            <motion.div
              className="absolute top-16 right-12 glass rounded-xl px-4 py-3 text-xs border border-blue-500/20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-brand-400 font-semibold">Model Accuracy</div>
              <div className="text-white font-bold text-lg">99.7%</div>
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-8 glass rounded-xl px-4 py-3 text-xs border border-blue-500/20"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="text-brand-400 font-semibold">Processing</div>
              <div className="text-white font-bold text-lg">2.4M<span className="text-sm font-medium text-slate-400">/s</span></div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-4 -translate-y-1/2 glass rounded-xl px-4 py-3 text-xs border border-green-500/20"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-semibold">Live</span>
              </div>
              <div className="text-white font-bold">Active</div>
            </motion.div>

            {/* 3D Canvas */}
            <div className="relative w-full h-full">
              <Suspense fallback={null}>
                <AIOrb />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent z-10 pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity }}
      >
        <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-brand-400/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
