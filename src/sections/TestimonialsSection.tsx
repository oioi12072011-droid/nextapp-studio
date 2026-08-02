'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'O nível de detalhe e a qualidade do código superou completamente nossas expectativas. O novo site dobrou nossa taxa de conversão no primeiro mês.',
    name: 'Roberto Dutra',
    role: 'CEO, Fintech Ventures',
    avatar: 'RD',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    quote: 'Nunca vi uma equipe tão comprometida com o resultado final. Eles não entregam um site — entregam uma máquina de vendas. Meu ROI foi de 400% no trimestre.',
    name: 'Carla Mendes',
    role: 'Fundadora, Luxara Store',
    avatar: 'CM',
    accent: 'from-teal-500 to-green-500',
  },
  {
    quote: 'A performance e o design são absurdos. Meu concorrente ainda usa um Wix enquanto eu tenho um Next.js com 99 de Lighthouse. Sem comparação.',
    name: 'Felipe Torres',
    role: 'Diretor de Marketing, Apex Capital',
    avatar: 'FT',
    accent: 'from-green-500 to-emerald-400',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 relative overflow-hidden" id="testimonials" style={{ backgroundColor: '#070708' }}>
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" style={{ paddingLeft: 'clamp(24px, 6vw, 80px)', paddingRight: 'clamp(24px, 6vw, 80px)' }}>
        
        <AnimatedSection className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
              Clientes Reais
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Resultados que <span style={{
              background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 50%, #047857 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>falam por si.</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Não acredite só em nós. Veja o que nossos clientes alcançaram depois de trabalhar com a NextApp.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15} className="h-full">
              <div
                className="rounded-3xl h-full flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 w-1/3 h-1.5 bg-gradient-to-r ${t.accent} opacity-80 group-hover:w-full transition-all duration-700 ease-out`} />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Inner content with guaranteed padding */}
                <div className="relative z-10 flex flex-col h-full" style={{ padding: '44px 40px' }}>
                  {/* Quote mark */}
                  <div className="text-6xl text-white/5 font-serif leading-none mb-6 group-hover:text-emerald-500/20 transition-colors duration-500">"</div>
                  
                  <p className="text-gray-300 text-base leading-relaxed flex-1 mb-10 group-hover:text-white transition-colors duration-300">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-white/[0.05]">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center text-white text-sm font-black flex-shrink-0 shadow-lg`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">{t.name}</p>
                      <p className="text-gray-500 text-sm font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
