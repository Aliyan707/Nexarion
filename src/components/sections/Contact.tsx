'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Mail, Phone, MapPin, Send, CheckCircle2,
  ArrowRight, MessageSquare, Building2, User,
} from 'lucide-react'

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@nexarion.ai',
    href: 'mailto:hello@nexarion.ai',
    color: '#3B82F6',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (800) NEX-ARION',
    href: 'tel:+18006392746',
    color: '#60A5FA',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '100 Mission Street, San Francisco, CA 94105',
    color: '#93C5FD',
  },
]

const INQUIRY_TYPES = ['AI Development', 'Machine Learning', 'Computer Vision', 'Process Automation', 'Data Analytics', 'AI Consulting', 'Partnership', 'Other']

interface FormState {
  name: string
  email: string
  company: string
  inquiry: string
  message: string
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', inquiry: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.company.trim()) e.company = 'Company is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1800))
    setSubmitting(false)
    setSubmitted(true)
  }

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }))
  }

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden bg-bg-secondary">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-900/12 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-800/8 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
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
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Start Your
            <br />
            <span className="text-gradient">AI Journey Today</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Tell us about your challenge and we&apos;ll put together a tailored proposal within 48 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* LEFT: Contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Info cards */}
            {CONTACT_INFO.map((info, i) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.label}
                  className="glass rounded-2xl p-6 border border-white/[0.07] hover:border-blue-500/25 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${info.color}15`, border: `1px solid ${info.color}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white font-medium hover:text-brand-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Response time promise */}
            <motion.div
              className="glass rounded-2xl p-6 border border-green-500/20 bg-green-500/5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <p className="text-green-400 font-semibold text-sm">Response Guarantee</p>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Every enterprise inquiry receives a personalized response from a senior AI architect within <strong className="text-white">24–48 hours</strong>, guaranteed.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-white/[0.07] relative overflow-hidden">
              {/* Form gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/4 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', bounce: 0.4, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-slate-400 mb-8 max-w-sm">
                      Your inquiry has been received. A senior AI architect will reach out within 24–48 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', inquiry: '', message: '' }) }}
                      className="btn-secondary text-sm"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="relative flex flex-col gap-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">Tell Us About Your Project</h3>

                    {/* Row: Name + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                          <User className="inline w-3 h-3 mr-1" />Full Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={update('name')}
                          placeholder="Jane Smith"
                          className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-600/60 transition-colors ${errors.name ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                          <Building2 className="inline w-3 h-3 mr-1" />Company *
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={update('company')}
                          placeholder="Acme Corp"
                          className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-600/60 transition-colors ${errors.company ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                        />
                        {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        <Mail className="inline w-3 h-3 mr-1" />Business Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="jane@company.com"
                        className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-600/60 transition-colors ${errors.email ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Inquiry type */}
                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Service of Interest
                      </label>
                      <select
                        value={form.inquiry}
                        onChange={update('inquiry')}
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-600/60 transition-colors appearance-none cursor-pointer"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" className="bg-bg-secondary">Select a service...</option>
                        {INQUIRY_TYPES.map((t) => (
                          <option key={t} value={t} className="bg-bg-secondary">{t}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Project Details *
                      </label>
                      <textarea
                        value={form.message}
                        onChange={update('message')}
                        rows={5}
                        placeholder="Tell us about your challenges, goals, data landscape, and timeline..."
                        className={`w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-600/60 transition-colors resize-none ${errors.message ? 'border-red-500/50' : 'border-white/[0.08]'}`}
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full justify-center text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      whileHover={!submitting ? { scale: 1.02 } : {}}
                      whileTap={!submitting ? { scale: 0.98 } : {}}
                    >
                      {submitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-slate-600 text-center">
                      By submitting, you agree to our Privacy Policy. No spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
