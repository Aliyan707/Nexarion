'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'
import { Layers, Users, Database, Star } from 'lucide-react'

const STATS = [
  {
    icon: Layers,
    value: 500,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'End-to-end AI deployments across all major industries',
    color: '#3B82F6',
  },
  {
    icon: Star,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'NPS score consistently above industry benchmark',
    color: '#60A5FA',
  },
  {
    icon: Database,
    value: 50,
    suffix: 'M+',
    label: 'Data Points Processed',
    description: 'Daily throughput across all deployed AI systems',
    color: '#93C5FD',
  },
  {
    icon: Users,
    value: 100,
    suffix: '+',
    label: 'Enterprise Clients',
    description: 'Fortune 500 companies and global enterprises served',
    color: '#2563EB',
  },
]

function StatCard({ stat, inView }: { stat: typeof STATS[0]; inView: boolean }) {
  const count = useCountUp(stat.value, 2200, inView)
  const Icon = stat.icon

  return (
    <motion.div
      className="relative group text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Glow orb */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl"
        style={{ background: `radial-gradient(ellipse at center, ${stat.color}15, transparent 70%)` }}
      />

      <div className="relative glass rounded-3xl p-8 border border-white/[0.07] group-hover:border-blue-500/25 transition-all duration-500">
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
          style={{
            background: `${stat.color}15`,
            border: `1px solid ${stat.color}30`,
            boxShadow: `0 0 30px ${stat.color}20`,
          }}
        >
          <Icon className="w-7 h-7" style={{ color: stat.color }} />
        </div>

        {/* Counter */}
        <div className="mb-2">
          <span
            className="text-5xl md:text-6xl font-black"
            style={{ color: stat.color, textShadow: `0 0 40px ${stat.color}50` }}
          >
            {count}
          </span>
          <span
            className="text-3xl md:text-4xl font-bold ml-1"
            style={{ color: stat.color }}
          >
            {stat.suffix}
          </span>
        </div>

        <p className="text-lg font-bold text-white mb-2">{stat.label}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{stat.description}</p>

        {/* Progress bar */}
        <div className="mt-6 h-0.5 bg-white/[0.04] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${stat.color}, ${stat.color}60)` }}
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : {}}
            transition={{ duration: 2.2, delay: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Statistics() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="statistics" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary via-bg-tertiary/80 to-bg-secondary" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/6 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
            By The Numbers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Numbers That
            <br />
            <span className="text-gradient">Tell Our Story</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Every metric reflects real outcomes delivered to real enterprises — no projections, no estimates.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
            >
              <StatCard stat={stat} inView={inView} />
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="glass inline-flex rounded-2xl px-10 py-6 border border-white/[0.07] max-w-2xl">
            <div>
              <p className="text-white font-medium text-lg mb-2">
                &ldquo;Nexarion has fundamentally changed how we think about AI at enterprise scale.&rdquo;
              </p>
              <p className="text-sm text-slate-500">— CTO, Fortune 100 Financial Institution</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
