'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code2, Brain, Eye, Cpu, BarChart3, Lightbulb,
  ArrowUpRight, CheckCircle2,
} from 'lucide-react'

const SERVICES = [
  {
    icon: Code2,
    title: 'AI Development',
    description: 'Custom AI applications built from the ground up. From LLM integrations to bespoke neural architectures tailored to your exact business requirements.',
    features: ['Custom LLM fine-tuning', 'API development', 'Model deployment', 'Scalable infrastructure'],
    gradient: 'from-blue-600/20 to-blue-900/10',
    iconBg: 'from-blue-600 to-blue-700',
    glowColor: 'rgba(37,99,235,0.3)',
    borderHover: 'rgba(59,130,246,0.4)',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Deep learning models and intelligent systems that learn, adapt, and improve continuously from your data to drive predictive insights.',
    features: ['Predictive modeling', 'Deep learning', 'Transfer learning', 'MLOps pipelines'],
    gradient: 'from-indigo-600/20 to-indigo-900/10',
    iconBg: 'from-indigo-600 to-blue-700',
    glowColor: 'rgba(79,70,229,0.3)',
    borderHover: 'rgba(99,102,241,0.4)',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'State-of-the-art visual intelligence systems for object detection, image recognition, video analytics, and real-time processing at scale.',
    features: ['Object detection', 'Image segmentation', 'Video analytics', 'Real-time processing'],
    gradient: 'from-cyan-600/20 to-blue-900/10',
    iconBg: 'from-cyan-600 to-blue-600',
    glowColor: 'rgba(8,145,178,0.3)',
    borderHover: 'rgba(34,211,238,0.4)',
  },
  {
    icon: Cpu,
    title: 'Process Automation',
    description: 'Intelligent RPA and workflow automation that eliminates manual bottlenecks, reduces errors, and multiplies operational throughput.',
    features: ['RPA implementation', 'Workflow orchestration', 'Document AI', 'Smart scheduling'],
    gradient: 'from-blue-600/15 to-slate-900/20',
    iconBg: 'from-blue-500 to-blue-800',
    glowColor: 'rgba(59,130,246,0.25)',
    borderHover: 'rgba(96,165,250,0.4)',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform raw data into strategic intelligence with advanced analytics, real-time dashboards, and AI-powered forecasting models.',
    features: ['Real-time dashboards', 'Predictive analytics', 'Data warehousing', 'BI integration'],
    gradient: 'from-violet-600/20 to-blue-900/10',
    iconBg: 'from-violet-600 to-blue-700',
    glowColor: 'rgba(124,58,237,0.3)',
    borderHover: 'rgba(139,92,246,0.4)',
  },
  {
    icon: Lightbulb,
    title: 'AI Consulting',
    description: 'Strategic AI roadmapping and technical advisory to guide your digital transformation with proven enterprise AI methodologies.',
    features: ['AI strategy', 'Technology audit', 'Change management', 'ROI planning'],
    gradient: 'from-amber-600/10 to-blue-900/10',
    iconBg: 'from-amber-500 to-orange-600',
    glowColor: 'rgba(245,158,11,0.2)',
    borderHover: 'rgba(251,191,36,0.3)',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const Icon = service.icon
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      className="group relative rounded-2xl p-px overflow-hidden"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${service.borderHover}, transparent 60%)`,
        }}
      />
      <div className="absolute inset-px rounded-2xl bg-bg-secondary" />

      {/* Card content */}
      <div
        className={`relative rounded-2xl p-7 bg-gradient-to-br ${service.gradient} h-full`}
        style={{
          boxShadow: `0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06)`,
        }}
      >
        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, ${service.glowColor}, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <div className="mb-6">
          <div
            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.iconBg} shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
          </div>
        </div>

        {/* Title + arrow */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
          <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-brand-400 transition-colors flex-shrink-0 mt-0.5" />
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>

        {/* Features */}
        <ul className="flex flex-col gap-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-400/70 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Number */}
        <div className="absolute top-6 right-7 text-6xl font-black text-white/[0.03] select-none pointer-events-none leading-none">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="section-padding relative overflow-hidden bg-bg-secondary">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
        <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-blue-900/10 blur-3xl rounded-full -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-1/3 h-96 bg-blue-800/8 blur-3xl rounded-full -translate-y-1/2" />
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
            Our Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Enterprise AI Solutions
            <br />
            <span className="text-gradient">Built to Scale</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From custom AI development to strategic consulting — every service is engineered for enterprise performance, security, and measurable ROI.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-slate-400 mb-5">
            Don&apos;t see what you need?{' '}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="text-brand-400 hover:text-brand-300 font-medium transition-colors"
            >
              Let&apos;s discuss your custom requirements →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
