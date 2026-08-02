'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'E-commerce Premium',
    description: 'Plataformas de vendas robustas, ultra-rápidas e com design voltado para maximizar a conversão de alto ticket.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    accent: 'bg-emerald-500',
  },
  {
    id: '02',
    title: 'Design UI/UX',
    description: 'Interfaces deslumbrantes que guiam a atenção do usuário. Cada pixel é planejado estrategicamente no Figma.',
    icon: (
      <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    accent: 'bg-teal-500',
  },
  {
    id: '03',
    title: 'Web Apps (SaaS)',
    description: 'Sistemas complexos na web, construídos com React/Next.js para rodarem rápidos e seguros no navegador.',
    icon: (
      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    accent: 'bg-green-500',
  },
  {
    id: '04',
    title: 'Landing Pages',
    description: 'Páginas de altíssima conversão feitas sob medida para campanhas de marketing agressivas.',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: 'bg-emerald-500',
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden grid-bg" id="services">
      {/* Background Radial Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-600/8 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-600/8 rounded-full blur-[100px] translate-y-1/4 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" style={{ paddingLeft: 'clamp(24px, 6vw, 80px)', paddingRight: 'clamp(24px, 6vw, 80px)' }}>
        
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
              Nosso Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            O que fazemos de{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 50%, #047857 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>melhor.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combinamos design extraordinário com tecnologia de ponta para entregar soluções digitais que dominam o mercado.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {services.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 0.1}>
              <div 
                className="glass-card rounded-2xl relative overflow-hidden group h-full transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Decorative Tech Grid inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Accent glow on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${service.accent} opacity-0 group-hover:opacity-[0.05] rounded-full blur-2xl transition-all duration-500 -translate-y-1/2 translate-x-1/2`} />

                <div className="relative z-10" style={{ padding: '40px 40px' }}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.2] group-hover:bg-white/[0.05] transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="text-sm font-mono text-gray-600 font-bold tracking-widest group-hover:text-gray-400 transition-colors">
                      {service.id}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {service.description}
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
