'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import About from '@/components/sections/About'
import Statistics from '@/components/sections/Statistics'
import { ChevronRight, Users, Zap, GraduationCap, Globe } from 'lucide-react'

const TEAM = [
  {
    name: 'Dr. Alex Chen',
    role: 'Chief Executive Officer',
    bio: 'Former AI Research Lead at Google DeepMind. PhD in Machine Learning from MIT. Pioneered 3 foundational papers on transformer architectures.',
    avatar: 'AC',
    color: '#3B82F6',
    background: 'Google DeepMind · MIT',
  },
  {
    name: 'Dr. Sarah Kim',
    role: 'Chief Technology Officer',
    bio: 'Previously VP of Engineering at OpenAI. PhD from Stanford AI Lab. Built production ML systems serving 500M+ users.',
    avatar: 'SK',
    color: '#6366F1',
    background: 'OpenAI · Stanford AI Lab',
  },
  {
    name: 'Marcus Davis',
    role: 'Chief Operating Officer',
    bio: 'Former Partner at McKinsey Digital. 15+ years scaling enterprise technology practices. Led digital transformations at 30+ Fortune 500 companies.',
    avatar: 'MD',
    color: '#0891B2',
    background: 'McKinsey Digital · Harvard MBA',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Science Officer',
    bio: 'Keynote speaker at NeurIPS and ICML. Published 40+ peer-reviewed papers. Previously Principal Researcher at Microsoft Research.',
    avatar: 'PS',
    color: '#7C3AED',
    background: 'Microsoft Research · Cambridge',
  },
  {
    name: 'James Okafor',
    role: 'Chief Revenue Officer',
    bio: 'Grew revenue from $0 to $100M+ at two previous AI startups. Former VP of Sales at Palantir Technologies. Specialist in enterprise AI adoption.',
    avatar: 'JO',
    color: '#059669',
    background: 'Palantir · Wharton MBA',
  },
  {
    name: 'Dr. Lisa Zhang',
    role: 'VP of Engineering',
    bio: 'Built and scaled engineering teams from 10 to 200+ engineers. Expertise in distributed ML systems, MLOps, and high-performance inference infrastructure.',
    avatar: 'LZ',
    color: '#DC2626',
    background: 'Amazon Web Services · CMU',
  },
]

const MILESTONES = [
  {
    year: '2019',
    title: 'Founded',
    description: 'Nexarion is founded by a team of AI researchers from MIT, Stanford, and Google DeepMind with a mission to democratize enterprise AI.',
    color: '#3B82F6',
  },
  {
    year: '2020',
    title: 'First Enterprise Deployment',
    description: 'Launched our first production AI system for a Fortune 500 financial institution. Raised $10M Series A led by top-tier deep tech investors.',
    color: '#6366F1',
  },
  {
    year: '2021',
    title: 'European Expansion',
    description: 'Surpassed 50 enterprise clients. Opened offices in London and Berlin. Achieved ISO 27001 and SOC 2 Type II certifications.',
    color: '#0891B2',
  },
  {
    year: '2022',
    title: 'Series B & Growth',
    description: 'Raised $50M Series B. Launched Singapore operations. Team grew to 200+ employees across 8 countries.',
    color: '#7C3AED',
  },
  {
    year: '2023',
    title: '100+ Enterprise Clients',
    description: 'Crossed 100 enterprise clients across 6 industries. Surpassed $1B in cumulative client savings. Launched our Enterprise LLM Platform.',
    color: '#059669',
  },
  {
    year: '2024',
    title: 'Industry Recognition',
    description: 'Named #1 Enterprise AI Company by Gartner. Crossed 500+ total projects delivered. Processing 50M+ data points daily across all deployments.',
    color: '#F59E0B',
  },
]

function TeamCard({ member, index }: { member: typeof TEAM[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group glass rounded-2xl p-7 border border-white/[0.07] hover:border-blue-500/25 transition-all duration-300"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-white flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}88)` }}
        >
          {member.avatar}
        </div>
        <div>
          <h3 className="text-base font-bold text-white">{member.name}</h3>
          <p className="text-xs font-semibold text-brand-400 mb-1">{member.role}</p>
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-3 h-3 text-slate-500" />
            <p className="text-xs text-slate-500">{member.background}</p>
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed">{member.bio}</p>
    </motion.div>
  )
}

function MilestoneItem({ milestone, index, total }: { milestone: typeof MILESTONES[0]; index: number; total: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex gap-6 items-start ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Content */}
      <div className="flex-1">
        <div
          className="glass rounded-2xl p-6 border border-white/[0.07] hover:border-blue-500/20 transition-all duration-300 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${milestone.color}08, rgba(5,8,22,0.8))` }}
        >
          <div className="text-5xl font-black select-none pointer-events-none absolute top-4 right-5"
            style={{ color: `${milestone.color}08` }}>
            {milestone.year}
          </div>
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
            style={{ background: `${milestone.color}15`, color: milestone.color, border: `1px solid ${milestone.color}30` }}
          >
            {milestone.year}
          </span>
          <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
          <p className="text-sm text-slate-400 leading-relaxed">{milestone.description}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className="hidden lg:flex flex-col items-center flex-shrink-0 w-12 pt-5">
        <motion.div
          className="w-4 h-4 rounded-full border-2 z-10 relative"
          style={{ borderColor: milestone.color, background: milestone.color + '30' }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, type: 'spring' }}
        />
        {index < total - 1 && (
          <motion.div
            className="w-px flex-1 mt-1"
            style={{ background: `linear-gradient(to bottom, ${milestone.color}50, transparent)` }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        )}
      </div>

      {/* Spacer */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  )
}

export default function AboutPage() {
  const teamRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  const teamInView = useInView(teamRef, { once: true, margin: '-80px' })
  const timelineInView = useInView(timelineRef, { once: true, margin: '-80px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  return (
    <>
      <Navbar />
      <main>
        {/* ─── Hero ─── */}
        <section className="relative pt-40 pb-24 overflow-hidden bg-bg-primary">
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
                <Users className="w-3.5 h-3.5" />
                Our Story
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                Built by Researchers,
                <br />
                <span className="text-gradient">For the Real World</span>
              </h1>
              <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                We started Nexarion because we saw a gap between AI research breakthroughs and practical enterprise deployment. We bridge that gap every day.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Work With Us
                  <ChevronRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="/case-studies"
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                >
                  See Our Work
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── Mission & Vision ─── */}
        <section className="py-20 relative overflow-hidden bg-bg-secondary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
          </div>

          <div className="container-wide relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  label: 'Our Mission',
                  text: 'To make enterprise-grade artificial intelligence accessible, reliable, and transformative for organizations worldwide — enabling a future where AI amplifies human potential at every level.',
                  color: '#3B82F6',
                },
                {
                  icon: Globe,
                  label: 'Our Vision',
                  text: 'A world where every enterprise, regardless of size or industry, can leverage the power of AI to achieve extraordinary outcomes — and where AI development is always human-centered.',
                  color: '#6366F1',
                },
                {
                  icon: Users,
                  label: 'Our Values',
                  text: 'Precision in engineering. Transparency with clients. Accountability for outcomes. We hold ourselves to the same standard of excellence we build into our AI systems.',
                  color: '#0891B2',
                },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="glass rounded-2xl p-8 border border-white/[0.07] text-center"
                  >
                    <div
                      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <p className="text-xs font-semibold text-brand-400 uppercase tracking-widest mb-3">{item.label}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── Company Story (reused About section) ─── */}
        <About />

        {/* ─── Leadership Team ─── */}
        <section ref={teamRef} className="section-padding relative overflow-hidden bg-bg-secondary">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
          </div>

          <div className="container-wide relative z-10">
            <motion.div
              className="text-center mb-16 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
                Leadership Team
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                World-Class AI
                <br />
                <span className="text-gradient">Talent & Vision</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our leadership combines cutting-edge AI research with deep enterprise experience — the exact blend required to deliver AI that works at scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TEAM.map((member, i) => (
                <TeamCard key={member.name} member={member} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── Timeline ─── */}
        <section ref={timelineRef} className="section-padding relative overflow-hidden bg-bg-primary">
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
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Five Years of
                <br />
                <span className="text-gradient">Relentless Progress</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                From a small research team to the leading enterprise AI company — here&apos;s how we got here.
              </p>
            </motion.div>

            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
              {MILESTONES.map((milestone, i) => (
                <MilestoneItem key={milestone.year} milestone={milestone} index={i} total={MILESTONES.length} />
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
                Join 100+ Enterprises
                <br />
                <span className="text-gradient">Transforming with AI</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Whether you&apos;re exploring AI for the first time or scaling existing systems, we have the expertise to accelerate your journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a href="/contact" className="btn-primary" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  Partner With Us <ChevronRight className="w-4 h-4" />
                </motion.a>
                <motion.a href="/services" className="btn-secondary" whileHover={{ scale: 1.02 }}>
                  Explore Services
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
