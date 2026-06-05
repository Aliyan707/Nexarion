'use client'

import { useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion, useInView } from 'framer-motion'
import { Target, Users, Globe, Award, ArrowRight } from 'lucide-react'

const NeuralNetwork = dynamic(() => import('@/components/three/NeuralNetwork'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 border border-blue-600/20 rounded-full animate-spin-slow" />
    </div>
  ),
})

const COMPANY_VALUES = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Every model, every system built to exact enterprise specifications.',
  },
  {
    icon: Users,
    title: 'Human-Centered AI',
    description: 'Technology that amplifies human capability rather than replacing it.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Infrastructure spanning 40+ regions with enterprise-grade reliability.',
  },
  {
    icon: Award,
    title: 'Proven Excellence',
    description: '98% client satisfaction across 500+ delivered AI projects.',
  },
]

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden bg-bg-primary">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-800/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(96,165,250,1) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            >
              Intelligence That
              <br />
              <span className="text-gradient">Drives Results</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-6"
            >
              Founded by AI researchers from MIT, Stanford, and Google DeepMind, Nexarion was built with one mission: to make enterprise-grade artificial intelligence accessible, reliable, and transformative.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-slate-400 leading-relaxed mb-10"
            >
              We&apos;ve spent years understanding why most AI projects fail — poor data strategy, wrong model architecture, insufficient production infrastructure. Our battle-tested methodology eliminates these failure points, delivering AI that works in the real world.
            </motion.p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {COMPANY_VALUES.map((value, i) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="glass rounded-xl p-5 group hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-glow-sm">
                        <Icon className="w-4.5 h-4.5 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">{value.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              Learn more about our approach
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* RIGHT: Neural Network 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            {/* Container */}
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden glass border border-blue-600/10">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-bg-tertiary to-bg-secondary" />

              {/* Glow effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Three.js canvas */}
              <div className="absolute inset-0">
                <Suspense fallback={null}>
                  <NeuralNetwork />
                </Suspense>
              </div>

              {/* Overlay label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl px-5 py-4 border border-white/[0.08]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-brand-400 font-semibold uppercase tracking-wider mb-1">Neural Architecture</p>
                      <p className="text-white font-bold">Multi-layer Transformer</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 mb-1">Active Nodes</p>
                      <p className="text-white font-bold">22 / 22</p>
                    </div>
                  </div>
                  <div className="mt-3 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-brand-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: '100%' } : {}}
                      transition={{ duration: 2, delay: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              className="absolute -top-5 -right-5 glass rounded-2xl px-5 py-4 border border-blue-500/20 shadow-glow-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-xs text-slate-400 mb-1">Founded</p>
              <p className="text-2xl font-bold text-white">2019</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-5 glass rounded-2xl px-5 py-4 border border-blue-500/20 shadow-glow-sm"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <p className="text-xs text-slate-400 mb-1">Team Size</p>
              <p className="text-2xl font-bold text-white">200+</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
