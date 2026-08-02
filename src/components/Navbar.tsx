'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Serviços', href: '#services' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Processo', href: '#process' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Ultra Premium Floating Bar */}
          <div 
            className="relative rounded-3xl border transition-all duration-500"
            style={{
              backgroundColor: scrolled ? 'rgba(7, 7, 8, 0.85)' : 'rgba(255, 255, 255, 0.01)',
              borderColor: scrolled ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.03)',
              backdropFilter: scrolled ? 'blur(30px) saturate(190%)' : 'blur(5px)',
              boxShadow: scrolled 
                ? '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(16, 185, 129, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                : 'none',
            }}
          >
            {/* Glowing top line indicator */}
            <AnimatePresence>
              {scrolled && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  exit={{ scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-[15%] right-[15%] h-[1px] origin-center"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #10b981, #34d399, #10b981, transparent)',
                  }}
                />
              )}
            </AnimatePresence>

            <nav className="px-8 py-4 flex items-center justify-between relative z-10">
              
              {/* Brand Logo (Green branded logo.jpg) */}
              <Link href="/" className="flex items-center gap-3.5 group">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl p-[1.5px] bg-gradient-to-tr from-emerald-500 via-emerald-400 to-teal-600 shadow-[0_0_20px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] group-hover:rotate-3 transition-all duration-500">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-[#070708]">
                      <Image 
                        src="/logo.jpg" 
                        alt="NextApp Logo" 
                        width={44} 
                        height={44} 
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                  </div>
                  {/* Premium pulse ping indicator */}
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#070708]">
                    <span className="absolute w-full h-full rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-white font-black text-lg tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                    NEXTAPP<span className="text-emerald-400">.</span>
                  </span>
                  <span className="text-[8px] font-mono tracking-[0.35em] text-gray-500 uppercase">
                    Studio
                  </span>
                </div>
              </Link>

              {/* Spaced Out Premium Links (Design de Milhões) */}
              <div className="hidden md:flex items-center gap-8 lg:gap-12">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="relative py-2 text-[14px] font-semibold tracking-wider transition-all duration-300 group"
                    style={{
                      color: hoveredIdx === idx ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 inline-block">
                      {link.label}
                    </span>

                    {/* Premium Glass Hover Indicator */}
                    {hoveredIdx === idx && (
                      <motion.div
                        layoutId="premiumNavbarLine"
                        className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #10b981, #34d399)',
                          boxShadow: '0 2px 10px rgba(16, 185, 129, 0.5)',
                        }}
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* Design de Milhões Call-To-Action Button */}
              <div className="hidden md:flex items-center gap-6">
                <Link
                  href="#contact"
                  className="group rounded-full transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shrink-0 hover:scale-105"
                  style={{
                    height: '44px',
                    paddingLeft: '28px',
                    paddingRight: '28px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#34d399',
                    border: '1.5px solid #10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    boxShadow: '0 0 20px rgba(16, 185, 129, 0.15)',
                  }}
                >
                  <span>Iniciar Projeto</span>
                  <svg 
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Mobile Menu Trigger */}
              <button
                className="md:hidden relative w-11 h-11 rounded-2xl flex items-center justify-center bg-white/[0.02] border border-white/[0.05] transition-all hover:border-emerald-500/30"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className="flex flex-col gap-1.5 items-center justify-center">
                  <motion.span
                    animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                    className="block w-4 h-[1.5px] bg-white rounded-full origin-center"
                  />
                  <motion.span
                    animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                    className="block w-3.5 h-[1.5px] bg-emerald-400 rounded-full"
                  />
                  <motion.span
                    animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                    className="block w-4 h-[1.5px] bg-white rounded-full origin-center"
                  />
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-6 top-[88px] z-40 md:hidden rounded-3xl overflow-hidden"
          >
            <div 
              className="p-6 border border-white/[0.06] rounded-3xl relative"
              style={{
                background: 'rgba(7, 7, 8, 0.95)',
                backdropFilter: 'blur(30px)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(16, 185, 129, 0.05)',
              }}
            >
              <div className="flex flex-col gap-2 relative z-10">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-gray-400 hover:text-white hover:bg-white/[0.02] transition-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-base font-semibold">{link.label}</span>
                    <span className="font-mono text-[10px] text-emerald-500/40">0{i + 1}</span>
                  </Link>
                ))}
                <div className="h-px bg-white/[0.05] my-2" />
                <Link
                  href="#contact"
                  className="w-full py-4 text-center text-base font-black text-white rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 border border-white/[0.08] block shadow-[0_4px_15px_rgba(16,185,129,0.15)]"
                  onClick={() => setMenuOpen(false)}
                >
                  Iniciar Projeto →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
