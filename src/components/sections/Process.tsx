'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Search, Database, Cpu, CheckSquare, Rocket, BarChart2 } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'Deep-dive into your business processes, data landscape, and AI readiness. We map challenges to opportunities and define success metrics that matter.',
    details: ['Stakeholder interviews', 'Data audit', 'Opportunity mapping', 'ROI projection'],
    color: '#2563EB',
    light: 'rgba(37,99,235,0.12)',
  },
  {
    number: '02',
    icon: Database,
    title: 'Data Collection',
    description: 'Build robust data pipelines and collection frameworks. We ensure data quality, diversity, and governance from the very start.',
    details: ['Pipeline architecture', 'Quality validation', 'Labeling workflows', 'Privacy compliance'],
    color: '#3B82F6',
    light: 'rgba(59,130,246,0.12)',
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Model Training',
    description: 'Leverage cutting-edge architectures and your unique dataset to train models that are specifically optimized for your domain.',
    details: ['Architecture selection', 'Distributed training', 'Hyperparameter tuning', 'Version control'],
    color: '#60A5FA',
    light: 'rgba(96,165,250,0.12)',
  },
  {
    number: '04',
    icon: CheckSquare,
    title: 'Validation',
    description: 'Rigorous evaluation across real-world scenarios, edge cases, and adversarial conditions to ensure production-grade reliability.',
    details: ['A/B testing', 'Bias detection', 'Performance benchmarking', 'Security auditing'],
    color: '#93C5FD',
    light: 'rgba(147,197,253,0.12)',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Deployment',
    description: 'Production-ready deployment with blue-green strategies, auto-scaling infrastructure, and zero-downtime rollouts.',
    details: ['CI/CD pipelines', 'Container orchestration', 'Load balancing', 'Monitoring setup'],
    color: '#2563EB',
    light: 'rgba(37,99,235,0.12)',
  },
  {
    number: '06',
    icon: BarChart2,
    title: 'Optimization',
    description: 'Continuous improvement through model monitoring, retraining triggers, and ongoing performance enhancements post-deployment.',
    details: ['Drift detection', 'Automated retraining', 'Cost optimization', 'Quarterly reviews'],
    color: '#3B82F6',
    light: 'rgba(59,130,246,0.12)',
  },
]

function Step({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = step.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`relative flex gap-8 items-start ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Step card */}
      <div className="flex-1 group">
        <div
          className="glass rounded-2xl p-7 border border-white/[0.07] hover:border-blue-500/25 transition-all duration-500 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${step.light}, rgba(5,8,22,0.8))`,
          }}
        >
          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 0% 0%, ${step.light}, transparent 70%)`,
            }}
          />

          {/* Number watermark */}
          <div className="absolute top-4 right-6 text-7xl font-black select-none pointer-events-none" style={{ color: `${step.color}0a` }}>
            {step.number}
          </div>

          {/* Icon + title row */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`,
                boxShadow: `0 0 20px ${step.color}40`,
              }}
            >
              <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: step.color }}>
                Step {step.number}
              </p>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-5">{step.description}</p>

          <div className="grid grid-cols-2 gap-2">
            {step.details.map((d) => (
              <div key={d} className="flex items-center gap-2 text-xs text-slate-500">
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: step.color }} />
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center connector (desktop) */}
      <div className="hidden lg:flex flex-col items-center flex-shrink-0 w-16 pt-6">
        <motion.div
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold z-10 relative bg-bg-secondary"
          style={{ borderColor: step.color, color: step.color }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          {index + 1}
        </motion.div>
        {index < STEPS.length - 1 && (
          <motion.div
            className="w-px flex-1 mt-2"
            style={{ background: `linear-gradient(to bottom, ${step.color}60, transparent)` }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        )}
      </div>

      {/* Spacer for even/odd alignment */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  )
}

export default function Process() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" ref={ref} className="section-padding relative overflow-hidden bg-bg-secondary">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-800/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-800/30 to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
            How We Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            From Concept to
            <br />
            <span className="text-gradient">Production AI</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            A proven six-step methodology refined across 500+ enterprise AI deployments. Every phase is designed to eliminate risk and accelerate time-to-value.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col gap-8">
          {STEPS.map((step, i) => (
            <Step key={step.title} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-8 py-5 border border-blue-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white font-medium">Average time to first deployment: <span className="text-brand-400">6–8 weeks</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
