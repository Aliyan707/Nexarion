'use client'

import { motion } from 'framer-motion'
import { Zap, Twitter, Linkedin, Github, Youtube, ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

const FOOTER_LINKS = {
  Solutions: ['AI Development', 'Machine Learning', 'Computer Vision', 'Process Automation', 'Data Analytics', 'AI Consulting'],
  Company: ['About Us', 'Case Studies', 'Blog', 'Careers', 'Press Kit', 'Partners'],
  Resources: ['Documentation', 'API Reference', 'Research Papers', 'White Papers', 'Webinars', 'Community'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security', 'Compliance'],
}

const SOCIAL_LINKS = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="relative border-t border-white/[0.06] bg-bg-primary overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-blue-600/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 h-48 bg-blue-800/5 blur-3xl rounded-full" />
      </div>

      <div className="relative container-wide py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 shadow-glow-sm">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold">
                <span className="text-white">Nex</span>
                <span className="text-gradient-blue">arion</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Building the future of enterprise intelligence. Trusted by 100+ companies globally to transform operations through cutting-edge AI.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-sm font-semibold text-white mb-3">Stay ahead with AI insights</p>
              {subscribed ? (
                <motion.p
                  className="text-sm text-brand-400"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  You&apos;re subscribed. Welcome aboard!
                </motion.p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 bg-white/[0.05] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-600/60 transition-colors"
                  />
                  <motion.button
                    type="submit"
                    className="flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 shadow-glow-sm hover:shadow-glow-md transition-shadow flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </motion.button>
                </form>
              )}
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg glass hover:border-blue-600/40 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4 text-slate-400 hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-semibold text-white mb-5">{category}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2024 Nexarion Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
