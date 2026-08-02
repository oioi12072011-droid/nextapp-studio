'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Quanto tempo leva para desenvolver um projeto?',
    a: 'O tempo varia conforme a complexidade. Uma landing page premium pode levar de 2 a 4 semanas, enquanto sistemas web e e-commerces completos levam de 2 a 3 meses. Trabalhamos com sprints rigorosos para garantir agilidade sem perder qualidade.',
  },
  {
    q: 'Quais tecnologias vocês utilizam?',
    a: 'Nosso stack principal é Next.js (React), TypeScript e Tailwind CSS para o front-end, garantindo performance e SEO extremos. No back-end, utilizamos Supabase, Node.js ou soluções serverless focadas em escala e segurança.',
  },
  {
    q: 'Vocês também criam o design (UI/UX)?',
    a: 'Sim. Todo projeto passa por uma etapa rigorosa de UX e UI no Figma antes de escrever uma linha de código. Cada interface é desenhada sob medida — não usamos templates prontos.',
  },
  {
    q: 'Como funciona o suporte após a entrega?',
    a: 'Todos os projetos incluem um período de suporte pós-lançamento. Além disso, oferecemos planos de manutenção e evolução contínua para quem quer crescer junto com a nossa equipe no longo prazo.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 relative overflow-hidden" id="faq" style={{ backgroundColor: '#070708' }}>
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(5,150,105,0.03) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      <div className="w-full max-w-3xl mx-auto relative z-10" style={{ paddingLeft: 'clamp(24px, 6vw, 80px)', paddingRight: 'clamp(24px, 6vw, 80px)' }}>

        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#34d399' }}>
                Perguntas Frequentes
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Temos as{' '}
              <span style={{
                background: 'linear-gradient(135deg, #34d399 0%, #059669 50%, #064e3b 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                respostas.
              </span>
            </h2>
          </div>
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div
                className="group transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  border: openIndex === i ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(12px)',
                  boxShadow: openIndex === i ? '0 10px 30px rgba(16, 185, 129, 0.04)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between text-left cursor-pointer gap-6 transition-all duration-300"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '24px 28px',
                  }}
                >
                  <span 
                    className="text-base md:text-lg font-bold transition-colors duration-300 flex-1 leading-relaxed"
                    style={{
                      color: openIndex === i ? '#ffffff' : '#d1d5db',
                    }}
                  >
                    {faq.q}
                  </span>
                  
                  {/* Clean, Vector-Perfect Glowing Plus/Minus Trigger */}
                  <div 
                    className="relative w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      border: openIndex === i ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255,255,255,0.12)',
                      background: openIndex === i ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    {/* Horizontal Line */}
                    <div 
                      className="absolute w-3.5 h-[2px] transition-colors duration-300"
                      style={{
                        backgroundColor: openIndex === i ? '#34d399' : '#9ca3af',
                      }}
                    />
                    {/* Vertical Line - Animates to rotate and shrink to make a minus sign */}
                    <motion.div 
                      className="absolute w-[2px] h-3.5 transition-colors duration-300"
                      style={{
                        backgroundColor: openIndex === i ? '#34d399' : '#9ca3af',
                      }}
                      animate={{ 
                        rotate: openIndex === i ? 90 : 0, 
                        scaleY: openIndex === i ? 0 : 1 
                      }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div 
                        style={{
                          padding: '0 28px 28px 28px',
                          borderTop: '1px solid rgba(255,255,255,0.05)',
                          paddingTop: '20px',
                        }}
                      >
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
