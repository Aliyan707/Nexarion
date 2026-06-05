'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, Zap, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { scrollY } = useScroll()

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const handleNav = (href: string) => {
    setMobileOpen(false)
    router.push(href)
  }

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="mt-4 mx-auto max-w-7xl rounded-2xl border border-white/[0.08] px-6 py-4 flex items-center justify-between"
          style={{
            backgroundColor: useTransform(bgOpacity, (v) => `rgba(3, 7, 18, ${v * 0.85})`),
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          {/* Logo */}
          <motion.a
            href="/"
            onClick={(e) => { e.preventDefault(); handleNav('/') }}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 shadow-glow-sm">
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/20 to-transparent" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-white">Nex</span>
              <span className="text-gradient-blue">arion</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href)
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href) }}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                    active ? 'text-white' : 'text-slate-400 hover:text-white'
                  )}
                  whileHover={{ scale: 1.02 }}
                >
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-white/[0.07] border border-white/[0.1]"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="/contact"
              onClick={(e) => { e.preventDefault(); handleNav('/contact') }}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              Log in
            </motion.a>
            <motion.a
              href="/contact"
              onClick={(e) => { e.preventDefault(); handleNav('/contact') }}
              className="btn-primary !py-2.5 !px-5 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg glass"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-bg-primary/90 backdrop-blur-2xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="absolute top-24 left-4 right-4 glass rounded-2xl p-6 flex flex-col gap-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.2 }}
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href) }}
                  className={cn(
                    'px-4 py-3.5 rounded-xl font-medium transition-all',
                    isActive(item.href)
                      ? 'text-white bg-white/[0.08]'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  )}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/[0.08] flex flex-col gap-3">
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); handleNav('/contact') }}
                  className="btn-primary text-center justify-center"
                >
                  Get Started <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
