'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

function AnimatedMockup() {
  return (
    <div className="relative w-full h-[450px] flex items-center justify-center">
      {/* Background glow spot */}
      <div className="absolute w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]" />
      <div className="absolute w-[250px] h-[250px] bg-pink-600/10 rounded-full blur-[90px] translate-x-20 -translate-y-10" />

      {/* Floating Main Code/Editor window */}
      <motion.div
        initial={{ y: 20, rotateX: 10, rotateY: -15 }}
        animate={{ y: [0, -15, 0], rotateX: [12, 8, 12], rotateY: [-12, -18, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        className="absolute w-[340px] md:w-[400px] glass-card rounded-2xl p-5 shadow-2xl z-20"
      >
        {/* Window controls */}
        <div className="flex items-center gap-1.5 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <span className="text-[10px] text-gray-500 font-mono ml-2">nextapp-studio.config.js</span>
        </div>

        {/* Mockup editor lines */}
        <div className="font-mono text-xs space-y-2 text-gray-400">
          <div className="text-gray-600">{'// Definindo a experiência de alta performance'}</div>
          <div>
            <span className="text-indigo-400">const</span>{' '}
            <span className="text-pink-400">nextApp</span> ={' '}
            <span className="text-blue-400">defineConfig</span>({'{'}
          </div>
          <div className="pl-4">
            <span className="text-yellow-400">design</span>:{' '}
            <span className="text-emerald-400">"extraordinary"</span>,
          </div>
          <div className="pl-4">
            <span className="text-yellow-400">speed</span>:{' '}
            <span className="text-purple-400">99</span>,{' '}
            <span className="text-gray-600">{'// Lighthouse Score'}</span>
          </div>
          <div className="pl-4">
            <span className="text-yellow-400">seo</span>:{' '}
            <span className="text-pink-400">true</span>,
          </div>
          <div className="pl-4">
            <span className="text-yellow-400">conversion</span>:{' '}
            <span className="text-emerald-400">"maximized"</span>
          </div>
          <div>{'})'}</div>
        </div>
      </motion.div>

      {/* Overlapping Floating Page Preview window */}
      <motion.div
        initial={{ y: -10, x: 80, rotateX: 5, rotateY: -10 }}
        animate={{ y: [-10, 10, -10], x: [80, 75, 80], rotateX: [5, 9, 5], rotateY: [-10, -14, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        className="absolute w-[220px] md:w-[260px] h-[180px] bg-gray-950/80 backdrop-blur-md border border-white/[0.08] rounded-2xl p-4 shadow-2xl z-30 translate-x-24 translate-y-24"
      >
        <div className="w-full h-8 bg-white/[0.03] rounded-lg border border-white/[0.04] mb-3 flex items-center px-3 justify-between">
          <span className="w-12 h-2 bg-indigo-500/40 rounded-full" />
          <span className="w-4 h-4 bg-indigo-500/50 rounded-full" />
        </div>
        <div className="space-y-2">
          <div className="w-full h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-500/20 flex items-center justify-center">
            <span className="text-[10px] font-bold text-indigo-300 tracking-wider">PREMIUM DESIGN</span>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-10 bg-white/[0.02] rounded-lg border border-white/[0.04]" />
            <div className="flex-1 h-10 bg-white/[0.02] rounded-lg border border-white/[0.04]" />
          </div>
        </div>
      </motion.div>

      {/* Floating Performance Tag */}
      <motion.div
        initial={{ y: 30, x: -100 }}
        animate={{ y: [30, 15, 30], x: [-100, -95, -100] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute glass rounded-xl p-3 shadow-xl z-30 -translate-x-28 -translate-y-20 flex items-center gap-3 border border-emerald-500/20"
      >
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
          <span className="text-emerald-400 font-extrabold text-xs">99</span>
        </div>
        <div>
          <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Performance</div>
          <div className="text-[11px] text-white font-medium">Lighthouse Score</div>
        </div>
      </motion.div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      style={{ paddingTop: '96px' }}
    >
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto py-20 relative z-10 w-full" style={{ paddingLeft: 'clamp(24px, 6vw, 80px)', paddingRight: 'clamp(24px, 6vw, 80px)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                marginBottom: '24px',
                width: 'fit-content',
                alignSelf: 'flex-start',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
              <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Projetos Digitais Premium
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              Criamos sites que{' '}
              <span style={{
                background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 50%, #047857 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>vendem seu produto</span>{' '}e elevam sua{' '}
              <span style={{
                background: 'linear-gradient(135deg, #34d399 0%, #059669 50%, #064e3b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>marca.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                color: '#9ca3af',
                fontSize: '17px',
                lineHeight: 1.75,
                marginBottom: '36px',
                maxWidth: '520px',
              }}
            >
              Somos a NextApp Studio. Desenvolvemos interfaces de altíssimo nível,
              projetadas especificamente para agilizar conversões, engajar clientes
              e posicionar sua marca como líder do mercado.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}
            >
              <Link
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 32px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ffffff',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #10b981, #059669, #047857)',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s, transform 0.2s',
                  boxShadow: '0 8px 32px rgba(16,185,129,0.25)',
                  letterSpacing: '0.02em',
                }}
              >
                Fazer um Orçamento →
              </Link>
              <Link
                href="#projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 32px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#d1d5db',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  background: 'rgba(255,255,255,0.02)',
                  letterSpacing: '0.02em',
                }}
              >
                Conhecer Projetos
              </Link>
            </motion.div>

            {/* Performance Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.65 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginTop: '48px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {[
                { value: '50+', label: 'Sites Entregues' },
                { value: '100%', label: 'Responsivo' },
                { value: '90+', label: 'Performance W3C' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>{stat.value}</div>
                  <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px', fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Code Editor Mockup Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block"
            style={{ overflow: 'visible', position: 'relative' }}
          >
            <AnimatedMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
