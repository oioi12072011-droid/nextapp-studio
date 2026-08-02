'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'Projetos Entregues' },
  { value: '98%', label: 'Satisfação' },
  { value: '3x', label: 'Conversões' },
  { value: '90+', label: 'Lighthouse Score' },
]

export function WhyUsSection() {
  return (
    <section className="py-32 relative overflow-hidden" id="about" style={{ backgroundColor: '#070708' }}>
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10" style={{ paddingLeft: 'clamp(24px, 6vw, 80px)', paddingRight: 'clamp(24px, 6vw, 80px)' }}>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
                O Diferencial
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
              Nós não criamos templates.<br />
              Nós criamos <span style={{
                background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 50%, #047857 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Máquinas de Vendas.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Esqueça soluções genéricas. Na NextApp, combinamos código proprietário (React/Next.js) com um design impecável feito no Figma, focado exclusivamente em posicionar sua marca como líder e multiplicar suas métricas de conversão.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-6 w-full">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="w-full h-full">
                <motion.div 
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="p-8 rounded-3xl h-full flex flex-col items-center justify-center text-center group relative overflow-hidden transition-all duration-500"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Subtle hover glow inside card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-transparent group-hover:from-emerald-500/5 transition-colors duration-500 pointer-events-none" />

                  <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-3 group-hover:from-emerald-400 group-hover:to-teal-500 transition-all duration-500 relative z-10">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-gray-400 tracking-widest uppercase relative z-10 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
