'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote: "Nexarion's fraud detection system has saved us over $2 billion in the first year alone. Their team's technical depth and enterprise understanding is unparalleled in the AI space.",
    author: 'Sarah Chen',
    role: 'Chief Risk Officer',
    company: 'Atlas Capital Group',
    avatar: 'SC',
    avatarColor: '#2563EB',
    rating: 5,
    metric: '$2B+ saved',
  },
  {
    quote: "We evaluated 12 AI vendors before choosing Nexarion. Their approach to model validation and production readiness was head and shoulders above everyone else.",
    author: 'Marcus Weber',
    role: 'VP Engineering',
    company: 'IndustrialCore AG',
    avatar: 'MW',
    avatarColor: '#7C3AED',
    rating: 5,
    metric: '67% less downtime',
  },
  {
    quote: "The personalization engine Nexarion built for us generated $890M in additional revenue in the first 18 months. Their ML architecture is genuinely world-class.",
    author: 'Jennifer Liu',
    role: 'Chief Digital Officer',
    company: 'Meridian Retail Group',
    avatar: 'JL',
    avatarColor: '#0891B2',
    rating: 5,
    metric: '$890M revenue uplift',
  },
  {
    quote: "From discovery to production in 6 weeks. I've never seen an AI deployment move that fast without cutting corners on quality. The Nexarion methodology is exceptional.",
    author: 'David Okonkwo',
    role: 'Head of AI Innovation',
    company: 'Nexus Healthcare',
    avatar: 'DO',
    avatarColor: '#059669',
    rating: 5,
    metric: '6-week deployment',
  },
  {
    quote: "Their computer vision system processes 10,000 assets 24/7. We've reduced maintenance costs by 43% and haven't had a single unexpected failure since deployment.",
    author: 'Ana Rodriguez',
    role: 'Director of Operations',
    company: 'Vertex Manufacturing',
    avatar: 'AR',
    avatarColor: '#DC2626',
    rating: 5,
    metric: '43% cost reduction',
  },
  {
    quote: "Nexarion doesn't just build AI — they transfer knowledge. Our internal team is now capable of maintaining and evolving the systems independently. That's rare.",
    author: 'Thomas Blackwood',
    role: 'CTO',
    company: 'Summit Financial',
    avatar: 'TB',
    avatarColor: '#B45309',
    rating: 5,
    metric: '98% team adoption',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="flex-shrink-0 w-[380px] glass rounded-2xl p-7 border border-white/[0.07] hover:border-blue-500/25 transition-all duration-300 group relative overflow-hidden mx-3">
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 20% 0%, ${t.avatarColor}10, transparent 60%)`,
        }}
      />

      {/* Quote icon */}
      <div className="mb-5">
        <Quote className="w-8 h-8 text-brand-600/40" />
      </div>

      {/* Metric badge */}
      <div className="mb-4">
        <span
          className="px-3 py-1 rounded-full text-xs font-bold"
          style={{
            background: `${t.avatarColor}15`,
            color: t.avatarColor,
            border: `1px solid ${t.avatarColor}30`,
          }}
        >
          {t.metric}
        </span>
      </div>

      {/* Quote */}
      <p className="text-slate-300 text-sm leading-relaxed mb-6 relative">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Rating */}
      <div className="mb-5">
        <StarRating rating={t.rating} />
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}88)` }}
        >
          {t.avatar}
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{t.author}</p>
          <p className="text-slate-500 text-xs">{t.role}, {t.company}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [paused, setPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const posRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const cardWidth = 406 // 380 + 2*3 margin + some
    const totalItems = TESTIMONIALS.length
    const totalWidth = cardWidth * totalItems

    const animate = () => {
      if (!paused) {
        posRef.current += 0.5
        if (posRef.current >= totalWidth) posRef.current = 0
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [paused])

  return (
    <section id="testimonials" ref={ref} className="section-padding relative overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-800/30 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-800/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="container-wide">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-xs font-semibold text-brand-400 uppercase tracking-widest mb-6">
              Client Voices
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              What Enterprise Leaders
              <br />
              <span className="text-gradient">Say About Us</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Trusted by CTOs, CDOs, and AI leaders at the world&apos;s most demanding organizations.
            </p>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex"
            style={{ width: 'max-content' }}
          >
            {/* Render twice for seamless loop */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </motion.div>

        {/* Pause indicator */}
        {paused && (
          <div className="flex justify-center mt-6">
            <div className="px-3 py-1 glass rounded-full text-xs text-slate-500 border border-white/[0.06]">
              Paused
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
