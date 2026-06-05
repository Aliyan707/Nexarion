'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Statistics from '@/components/sections/Statistics'
import {
  Brain, Eye, Cpu, Layers, ChevronRight, ArrowUpRight,
  Cloud, Server, Network, CheckCircle2, Building2, Heart,
  Factory, ShoppingBag, Globe, Shield, Zap,
} from 'lucide-react'

const PLATFORMS = [
  {
    icon: Brain,
    title: 'Enterprise LLM Platform',
    tagline: 'Private · Secure · Powerful',
    taglineColor: '#60A5FA',
    description: 'Deploy large language models within your security perimeter. Build RAG pipelines, fine-tune on domain data, and expose AI through governed APIs — all without your data leaving your infrastructure.',
    features: ['Private model deployment', 'RAG pipeline builder', 'Domain fine-tuning', 'API gateway & monitoring'],
    gradient: 'from-blue-600/20 to-blue-900/10',
    iconBg: 'from-blue-600 to-blue-700',
    glow: 'rgba(37,99,235,0.3)',
    border: 'rgba(59,130,246,0.4)',
  },
  {
    icon: Eye,
    title: 'Vision Intelligence Suite',
    tagline: 'See Everything · Miss Nothing',
    taglineColor: '#22D3EE',
    description: 'Industrial-grade computer vision operating at scale. Monitor production lines, analyze video feeds, detect anomalies, and extract visual intelligence from any source in real time.',
    features: ['Real-time object detection', 'Video stream analytics', 'Quality control AI', 'Anomaly detection'],
    gradient: 'from-cyan-600/20 to-blue-900/10',
    iconBg: 'from-cyan-600 to-blue-600',
    glow: 'rgba(8,145,178,0.3)',
    border: 'rgba(34,211,238,0.4)',
  },
  {
    icon: Cpu,
    title: 'Decision Intelligence Engine',
    tagline: 'Smarter Decisions · Faster',
    taglineColor: '#818CF8',
    description: 'ML-powered decision systems that automate complex choices at enterprise scale. From credit scoring to supply chain optimization, make every decision data-driven and explainable.',
    features: ['Predictive scoring models', 'Automated decision logic', 'Explainability layer', 'A/B testing framework'],
    gradient: 'from-indigo-600/20 to-blue-900/10',
    iconBg: 'from-indigo-600 to-blue-700',
    glow: 'rgba(79,70,229,0.3)',
    border: 'rgba(99,102,241,0.4)',
  },
  {
    icon: Layers,
    title: 'Process Intelligence Platform',
    tagline: 'Automate · Adapt · Scale',
    taglineColor: '#A78BFA',
    description: 'Intelligent RPA and workflow automation that learns and adapts over time. Eliminate manual bottlenecks, reduce errors by 90%, and scale operations without proportional headcount growth.',
    features: ['Adaptive workflow automation', 'Document AI & extraction', 'Smart exception handling', 'Cross-system orchestration'],
    gradient: 'from-violet-600/20 to-blue-900/10',
    iconBg: 'from-violet-600 to-blue-700',
    glow: 'rgba(124,58,237,0.3)',
    border: 'rgba(139,92,246,0.4)',
  },
]

const INDUSTRIES = [
  {
    icon: Building2,
    name: 'Financial Services',
    useCases: ['Fraud detection', 'Risk modeling', 'Algorithmic trading', 'Regulatory compliance'],
    color: '#3B82F6',
  },
  {
    icon: Heart,
    name: 'Healthcare',
    useCases: ['Clinical diagnostics', 'Drug discovery', 'Patient analytics', 'Ops optimization'],
    color: '#EC4899',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    useCases: ['Predictive maintenance', 'Quality control', 'Supply chain AI', 'Worker safety'],
    color: '#F59E0B',
  },
  {
    icon: ShoppingBag,
    name: 'Retail & E-Commerce',
    useCases: ['Personalization engine', 'Demand forecasting', 'Price optimization', 'Inventory AI'],
    color: '#10B981',
  },
  {
    icon: Globe,
    name: 'Technology',
    useCases: ['DevOps intelligence', 'Customer support AI', 'Product analytics', 'Security AI'],
    color: '#8B5CF6',
  },
  {
    icon: Shield,
    name: 'Government',
    useCases: ['Fraud prevention', 'Public service AI', 'Document processing', 'Threat detection'],
    color: '#06B6D4',
  },
]

const DEPLOYMENT = [
  {
    icon: Cloud,
    title: 'Cloud',
    subtitle: 'Fully Managed',
    description: 'Deploy on AWS, Azure, or GCP with zero infrastructure overhead. Scale instantly and pay only for what you use.',
    features: ['Auto-scaling compute', 'Managed updates & SLA', 'Global CDN delivery', '99.99% uptime guarantee'],
    highlighted: false,
  },
  {
    icon: Server,
    title: 'On-Premise',
    subtitle: 'Maximum Control',
    description: 'Air-gapped deployment within your own data center or private cloud. Complete data sovereignty, zero external dependencies.',
    features: ['Full data control', 'Air-gapped option', 'Custom hardware support', 'Compliance certifications'],
    highlighted: true,
  },
  {
    icon: Network,
    title: 'Hybrid',
    subtitle: 'Best of Both Worlds',
    description: 'Combine cloud agility with on-premise security. Process sensitive data locally while leveraging cloud burst capacity.',
    features: ['Flexible topology', 'Edge + cloud inference', 'Data locality controls', 'Unified management plane'],
    highlighted: false,
  },
]

function PlatformCard({ platform, index }: { platform: typeof PLATFORMS[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = platform.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-2xl p-px overflow-hidden"
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${platform.border}, transparent 60%)` }}
      />
      <div className="absolute inset-px rounded-2xl bg-bg-secondary" />
      <div className={`relative rounded-2xl p-8 bg-gradient-to-br ${platform.gradient} h-full`}
        style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.06)' }}>
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 30% 20%, ${platform.glow}, transparent 70%)` }}
        />
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${platform.iconBg} shadow-lg mb-6`}>
          <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
        </div>
        <div className="mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: platform.taglineColor }}>
            {platform.tagline}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{platform.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{platform.description}</p>
        <ul className="flex flex-col gap-2 mb-6">
          {platform.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-400/70 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 text-sm font-semibold text-brand-400 group-hover:text-brand-300 transition-colors">
          <span>Explore platform</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}

function IndustryCard({ industry, index }: { industry: typeof INDUSTRIES[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = industry.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="group glass rounded-2xl p-6 border border-white/[0.07] transition-all duration-300 cursor-pointer"
      whileHover={{ y: -4 }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${industry.color}15`, border: `1px solid ${industry.color}30` }}
      >
        <Icon className="w-5 h-5" style={{ color: industry.color }} />
      </div>
      <h3 className="text-base font-bold text-white mb-3">{industry.name}</h3>
      <ul className="flex flex-col gap-1.5">
        {industry.useCases.map((uc) => (
          <li key={uc} className="text-xs text-slate-500 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: industry.color }} />
            {uc}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function DeploymentCard({ model, index }: { model: typeof DEPLOYMENT[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = model.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 border transition-all duration-300 ${
        model.highlighted
          ? 'bg-gradient-to-br from-blue-600/15 to-blue-900/10 border-blue-500/30 shadow-glow-md'
          : 'glass border-white/[0.07]'
      }`}
    >
      {model.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            Most Popular
          </span>
        </div>
      )}
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/20 mb-5">
        <Icon className="w-6 h-6 text-brand-400" />
      </div>
      <p className="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-1">{model.subtitle}</p>
      <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{model.description}</p>
      <ul className="flex flex-col gap-2">
        {model.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-400/70 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function SolutionsPage() {
  const heroRef = useRef<HTMLElement>(null)
  const industryRef = useRef<HTMLElement>(null)
  const deployRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const industryInView = useInView(industryRef, { once: true, margin: '-80px' })
  const deployInView = useInView(deployRef, { once: true, margin: '-80px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  return (
    <>
      <Navbar />
      <main>
        {/* ─── Hero ─── */}
        <section ref={heroRef} className="relative pt-40 pb-24 overflow-hidden bg-bg-primary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 hero-bg-mesh opacity-30" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-blue-600/8 rounded-full blur-3xl" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/40 to-transparent" />
          </div>

          <div className="container-wide relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-8">
                <Zap className="w-3.5 h-3.5" />
                Our Solutions
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                Intelligent Solutions
                <br />
                <span className="text-gradient">Built to Transform</span>
              </h1>
              <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                Purpose-built AI platforms that integrate seamlessly into your operations and deliver measurable outcomes — from day one.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Schedule a Demo
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/case-studies"
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                >
                  View Case Studies
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Platform Solutions ─── */}
        <section className="section-padding relative overflow-hidden bg-bg-secondary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
            <div className="absolute top-1/2 left-0 w-1/3 h-96 bg-blue-900/8 blur-3xl rounded-full -translate-y-1/2" />
          </div>

          <div className="container-wide relative z-10">
            <motion.div
              className="text-center mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
                Platform Portfolio
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Four Platforms,
                <br />
                <span className="text-gradient">Infinite Possibilities</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Each platform is an end-to-end solution — engineered to integrate with your existing stack and deliver value in weeks, not months.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PLATFORMS.map((platform, i) => (
                <PlatformCard key={platform.title} platform={platform} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Industry Applications ─── */}
        <section ref={industryRef} className="section-padding relative overflow-hidden bg-bg-primary">
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
              animate={industryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
                Industry Applications
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Tailored for
                <br />
                <span className="text-gradient">Every Vertical</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Deep domain expertise across six major industries — each solution is pre-trained on sector-specific data and regulatory requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {INDUSTRIES.map((industry, i) => (
                <IndustryCard key={industry.name} industry={industry} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Deployment Models ─── */}
        <section ref={deployRef} className="section-padding relative overflow-hidden bg-bg-secondary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
          </div>

          <div className="container-wide relative z-10">
            <motion.div
              className="text-center mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={deployInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
                Deployment Flexibility
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Deploy Anywhere,
                <br />
                <span className="text-gradient">Your Way</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you need the scalability of cloud, the control of on-premise, or the balance of hybrid — we support all deployment models.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DEPLOYMENT.map((model, i) => (
                <DeploymentCard key={model.title} model={model} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Statistics ─── */}
        <Statistics />

        {/* ─── CTA ─── */}
        <section ref={ctaRef} className="section-padding relative overflow-hidden bg-bg-primary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-800/30 to-transparent" />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/8 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
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
                Ready to Deploy
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Find the Right
                <br />
                <span className="text-gradient">Solution for You</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Our solution architects will map your challenges to the right platform and build a tailored proposal within 48 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Talk to a Solutions Architect
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/services"
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                >
                  Explore Our Services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
