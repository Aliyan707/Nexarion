'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CaseStudies from '@/components/sections/CaseStudies'
import Testimonials from '@/components/sections/Testimonials'
import {
  TrendingUp, ChevronRight, Building2, Factory, ShoppingBag,
  Heart, Globe, Shield, ArrowUpRight, BarChart3,
} from 'lucide-react'

const INDUSTRIES = ['All Industries', 'Financial Services', 'Manufacturing', 'Retail', 'Healthcare', 'Technology', 'Government']

const ALL_CASES = [
  {
    industry: 'Financial Services',
    icon: Building2,
    client: 'Global Investment Bank',
    title: 'Real-Time Fraud Detection at $50M/Day Scale',
    description: 'ML system processing 50M+ daily transactions, detecting fraud in under 10ms with 99.94% accuracy across 120 countries.',
    roi: '+340% ROI',
    metrics: [
      { label: 'Fraud Reduction', value: '94%' },
      { label: 'False Positives', value: '-78%' },
      { label: 'Annual Savings', value: '$2.4B' },
      { label: 'Latency', value: '<10ms' },
    ],
    tags: ['Machine Learning', 'Real-time', 'Risk'],
    accentColor: '#3B82F6',
  },
  {
    industry: 'Manufacturing',
    icon: Factory,
    client: 'Fortune 500 Industrial Corp',
    title: 'Predictive Maintenance Across 10,000 Assets',
    description: 'Computer vision + sensor fusion predicting equipment failures 72 hours in advance with 96% accuracy across global facilities.',
    roi: '+280% ROI',
    metrics: [
      { label: 'Downtime', value: '-67%' },
      { label: 'Maintenance Cost', value: '-43%' },
      { label: 'OEE Improvement', value: '+31%' },
      { label: 'Assets', value: '10K+' },
    ],
    tags: ['Computer Vision', 'IoT', 'Predictive AI'],
    accentColor: '#F59E0B',
  },
  {
    industry: 'Retail',
    icon: ShoppingBag,
    client: 'Top-10 Global Retailer',
    title: 'Hyper-Personalization for 200M Customers',
    description: 'Behavioral graph + collaborative filtering recommendation engine achieving 3.2x conversion improvement at massive scale.',
    roi: '+420% ROI',
    metrics: [
      { label: 'Conversion', value: '+220%' },
      { label: 'Revenue Uplift', value: '$890M' },
      { label: 'Customers', value: '200M+' },
      { label: 'Accuracy', value: '97%' },
    ],
    tags: ['Recommendation AI', 'Behavioral Analytics'],
    accentColor: '#10B981',
  },
  {
    industry: 'Healthcare',
    icon: Heart,
    client: 'National Hospital Network',
    title: 'Clinical Decision Support for 50+ Hospitals',
    description: 'AI-powered diagnostic assistance reducing misdiagnosis rates by 34% and cutting average diagnostic time from 4 hours to 22 minutes.',
    roi: '+190% ROI',
    metrics: [
      { label: 'Misdiagnosis Rate', value: '-34%' },
      { label: 'Diagnostic Time', value: '-91%' },
      { label: 'Hospitals', value: '50+' },
      { label: 'Patient Outcomes', value: '+28%' },
    ],
    tags: ['Clinical AI', 'NLP', 'Computer Vision'],
    accentColor: '#EC4899',
  },
  {
    industry: 'Technology',
    icon: Globe,
    client: 'SaaS Platform (Series D)',
    title: 'AI-Powered Customer Support Automation',
    description: 'LLM-based support system handling 73% of tickets autonomously, escalating complex cases with full context to human agents.',
    roi: '+310% ROI',
    metrics: [
      { label: 'Auto-Resolution', value: '73%' },
      { label: 'CSAT Score', value: '+41%' },
      { label: 'Support Cost', value: '-58%' },
      { label: 'Response Time', value: '<30s' },
    ],
    tags: ['LLM', 'RAG', 'Customer AI'],
    accentColor: '#8B5CF6',
  },
  {
    industry: 'Government',
    icon: Shield,
    client: 'Federal Revenue Agency',
    title: 'Tax Fraud Detection Saving $4.2B Annually',
    description: 'Graph neural network identifying fraudulent filing patterns across millions of returns, catching schemes invisible to traditional rule-based systems.',
    roi: '+520% ROI',
    metrics: [
      { label: 'Fraud Identified', value: '$4.2B' },
      { label: 'False Positive Rate', value: '0.3%' },
      { label: 'Cases Reviewed', value: '15M+' },
      { label: 'Processing Time', value: '<2s' },
    ],
    tags: ['Graph Neural Nets', 'Anomaly Detection'],
    accentColor: '#06B6D4',
  },
]

const SUMMARY_STATS = [
  { label: 'Total Client Savings', value: '$12B+', color: '#3B82F6' },
  { label: 'Average ROI', value: '340%', color: '#60A5FA' },
  { label: 'Projects Delivered', value: '500+', color: '#93C5FD' },
  { label: 'Industries Served', value: '6', color: '#2563EB' },
]

function CaseCard({ study, index }: { study: typeof ALL_CASES[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)
  const Icon = study.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative rounded-2xl overflow-hidden border border-white/[0.07] cursor-pointer"
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.3 }}
        style={{ boxShadow: hovered ? `0 0 50px ${study.accentColor}18` : 'none' }}
      >
        <div className="absolute inset-0 bg-bg-secondary/85" />
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${study.accentColor}30, transparent 50%)`,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative p-7">
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${study.accentColor}20`, border: `1px solid ${study.accentColor}30` }}
              >
                <Icon className="w-5 h-5" style={{ color: study.accentColor }} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{study.industry}</p>
                <p className="text-sm font-medium text-slate-300">{study.client}</p>
              </div>
            </div>
            <span
              className="px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0"
              style={{ background: `${study.accentColor}15`, color: study.accentColor, border: `1px solid ${study.accentColor}30` }}
            >
              {study.roi}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-3">{study.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-5">{study.description}</p>

          <div className="grid grid-cols-2 gap-3 mb-5">
            {study.metrics.map((m) => (
              <div key={m.label} className="glass rounded-xl px-3 py-2.5 border border-white/[0.06]">
                <p className="text-lg font-black text-white">{m.value}</p>
                <p className="text-xs text-slate-500">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium rounded-full"
                style={{ background: `${study.accentColor}10`, color: study.accentColor, border: `1px solid ${study.accentColor}20` }}
              >
                {tag}
              </span>
            ))}
          </div>

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

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All Industries')
  const heroRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  const filtered = activeFilter === 'All Industries'
    ? ALL_CASES
    : ALL_CASES.filter((c) => c.industry === activeFilter)

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
                <TrendingUp className="w-3.5 h-3.5" />
                Proven Results
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                Real Impact,
                <br />
                <span className="text-gradient">Measurable ROI</span>
              </h1>
              <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                500+ enterprise AI deployments. Billions in savings. Transformations across every major industry. Every metric is real.
              </p>

              {/* Summary stats bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {SUMMARY_STATS.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="glass rounded-xl px-4 py-3 border border-white/[0.08]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p className="text-2xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Featured Case Studies (existing component) ─── */}
        <CaseStudies />

        {/* ─── All Case Studies with Filter ─── */}
        <section ref={gridRef} className="section-padding relative overflow-hidden bg-bg-secondary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
          </div>

          <div className="container-wide relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
                <BarChart3 className="w-3.5 h-3.5" />
                All Projects
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Browse by
                <br />
                <span className="text-gradient">Industry</span>
              </h2>
            </motion.div>

            {/* Filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {INDUSTRIES.map((industry) => (
                <motion.button
                  key={industry}
                  onClick={() => setActiveFilter(industry)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === industry
                      ? 'bg-blue-600 text-white shadow-glow-sm'
                      : 'glass text-slate-400 hover:text-white border border-white/[0.08]'
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {industry}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((study, i) => (
                  <CaseCard key={study.title} study={study} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ─── Testimonials ─── */}
        <Testimonials />

        {/* ─── CTA ─── */}
        <section ref={ctaRef} className="section-padding relative overflow-hidden bg-bg-secondary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/8 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 7, repeat: Infinity }}
            />
          </div>

          <div className="container-wide relative z-10">
            <motion.div
              className="glass rounded-3xl p-12 md:p-16 border border-blue-500/20 text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Your Success Story
                <br />
                <span className="text-gradient">Starts Here</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Join 100+ enterprises that have transformed their operations with Nexarion. Let&apos;s build your case study together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a href="/contact" className="btn-primary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  Start Your Project <ChevronRight className="w-4 h-4" />
                </motion.a>
                <motion.a href="/solutions" className="btn-secondary" whileHover={{ scale: 1.02 }}>
                  Explore Solutions
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
