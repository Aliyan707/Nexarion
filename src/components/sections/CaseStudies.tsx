'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { TrendingUp, ArrowUpRight, ChevronRight, Building2, Factory, ShoppingBag } from 'lucide-react'

const CASES = [
  {
    id: 1,
    icon: Building2,
    industry: 'Financial Services',
    clientType: 'Global Investment Bank',
    title: 'Fraud Detection at Scale',
    description: 'Deployed a real-time ML fraud detection system processing 50M+ daily transactions across 120 countries, achieving sub-10ms inference with 99.94% accuracy.',
    metrics: [
      { label: 'Fraud Reduction', value: '94', suffix: '%' },
      { label: 'False Positive Drop', value: '78', suffix: '%' },
      { label: 'Annual Savings', value: '$2.4', suffix: 'B' },
      { label: 'Processing Speed', value: '<10', suffix: 'ms' },
    ],
    tags: ['Machine Learning', 'Real-time Processing', 'Risk Management'],
    gradient: 'from-blue-600/20 via-blue-900/10 to-transparent',
    accentColor: '#3B82F6',
    roi: '+340% ROI',
  },
  {
    id: 2,
    icon: Factory,
    industry: 'Manufacturing',
    clientType: 'Fortune 500 Industrial',
    title: 'Predictive Maintenance AI',
    description: 'Computer vision + sensor fusion system monitoring 10,000+ production assets in real-time, predicting failures 72 hours in advance with 96% accuracy.',
    metrics: [
      { label: 'Downtime Reduction', value: '67', suffix: '%' },
      { label: 'Maintenance Cost Cut', value: '43', suffix: '%' },
      { label: 'OEE Improvement', value: '+31', suffix: '%' },
      { label: 'Assets Monitored', value: '10K', suffix: '+' },
    ],
    tags: ['Computer Vision', 'IoT Analytics', 'Predictive AI'],
    gradient: 'from-indigo-600/20 via-blue-900/10 to-transparent',
    accentColor: '#6366F1',
    roi: '+280% ROI',
  },
  {
    id: 3,
    icon: ShoppingBag,
    industry: 'Retail & E-Commerce',
    clientType: 'Top-10 Global Retailer',
    title: 'Hyper-Personalization Engine',
    description: 'Real-time recommendation engine serving 200M+ customers, leveraging behavioral graphs and collaborative filtering to achieve 3.2x conversion improvement.',
    metrics: [
      { label: 'Conversion Rate', value: '+220', suffix: '%' },
      { label: 'Revenue Uplift', value: '$890', suffix: 'M' },
      { label: 'Customers Served', value: '200', suffix: 'M+' },
      { label: 'Recommendation Accuracy', value: '97', suffix: '%' },
    ],
    tags: ['Recommendation AI', 'Behavioral Analytics', 'A/B Testing'],
    gradient: 'from-cyan-600/20 via-blue-900/10 to-transparent',
    accentColor: '#06B6D4',
    roi: '+420% ROI',
  },
]

function MetricCounter({ value, suffix, inView }: { value: string; suffix: string; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <span className="text-2xl font-black text-white">{value}</span>
      <span className="text-lg font-bold text-brand-400">{suffix}</span>
    </motion.div>
  )
}

function CaseCard({ study, index }: { study: typeof CASES[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)
  const Icon = study.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden border border-white/[0.07] cursor-pointer"
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ boxShadow: hovered ? `0 0 60px ${study.accentColor}20` : 'none' }}
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient}`} />
        <div className="absolute inset-0 bg-bg-secondary/80" />

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${study.accentColor}40, transparent 50%)`,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${study.accentColor}20`, border: `1px solid ${study.accentColor}30` }}
              >
                <Icon className="w-5 h-5" style={{ color: study.accentColor }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{study.industry}</p>
                <p className="text-sm font-medium text-slate-300">{study.clientType}</p>
              </div>
            </div>

            {/* ROI badge */}
            <div
              className="px-3 py-1.5 rounded-full text-xs font-bold"
              style={{ background: `${study.accentColor}15`, color: study.accentColor, border: `1px solid ${study.accentColor}30` }}
            >
              {study.roi}
            </div>
          </div>

          {/* Title + Description */}
          <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-7">{study.description}</p>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-4 mb-7">
            {study.metrics.map((m) => (
              <div key={m.label} className="glass rounded-xl px-4 py-3 border border-white/[0.06]">
                <MetricCounter value={m.value} suffix={m.suffix} inView={inView} />
                <p className="text-xs text-slate-500 mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  background: `${study.accentColor}10`,
                  color: study.accentColor,
                  border: `1px solid ${study.accentColor}20`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: study.accentColor }}
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span>Read Full Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CaseStudies() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="case-studies" ref={ref} className="section-padding relative overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-800/30 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
            <TrendingUp className="w-3.5 h-3.5" />
            Proven Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Real Impact,
            <br />
            <span className="text-gradient">Measurable ROI</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Enterprise clients across industries trust Nexarion to deliver AI that creates genuine, quantifiable business value from day one.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASES.map((study, i) => (
            <CaseCard key={study.id} study={study} index={i} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        >
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors group"
          >
            View all case studies
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
