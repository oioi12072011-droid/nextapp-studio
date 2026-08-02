'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Alinhamento estratégico e definição técnica do projeto.',
    accent: 'from-emerald-500',
  },
  {
    num: '02',
    title: 'Design UI/UX',
    desc: 'Prototipagem de alta fidelidade no Figma, focada em retenção.',
    accent: 'from-teal-500',
  },
  {
    num: '03',
    title: 'Desenvolvimento',
    desc: 'Engenharia de ponta com Next.js, animações e máxima performance.',
    accent: 'from-green-500',
  },
  {
    num: '04',
    title: 'Lançamento',
    desc: 'Testes, otimização SEO e deploy na arquitetura serverless.',
    accent: 'from-emerald-400',
  },
]

export function ProcessSection() {
  return (
    <section className="py-32 relative overflow-hidden grid-bg" id="process">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[300px] bg-emerald-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" style={{ paddingLeft: 'clamp(24px, 6vw, 80px)', paddingRight: 'clamp(24px, 6vw, 80px)' }}>
        
        <AnimatedSection className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Como funciona a <span style={{
              background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 50%, #047857 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Mágica.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Um processo validado e transparente do início ao fim. 
            Sem surpresas, focado inteiramente em resultados.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.15} className="relative z-10 h-full">
              <div 
                className="rounded-3xl h-full flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                {/* Step Glow */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${step.accent} to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Inner content with guaranteed padding */}
                <div className="relative z-10 flex flex-col h-full" style={{ padding: '40px 36px' }}>
                  <div className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(16,185,129,0.05)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-all duration-300 bg-[#070708]">
                    <span className="text-lg font-black text-white tracking-widest">{step.num}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-emerald-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
