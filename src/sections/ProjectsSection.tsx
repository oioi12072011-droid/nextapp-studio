'use client'

import { AnimatedSection } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

const projectTypes = [
  {
    title: 'E-commerces de Alta Conversão',
    category: 'Vendas Online',
    description: 'Lojas virtuais premium focadas em experiência de usuário impecável, carregamento ultra-rápido e funis de conversão otimizados para maximizar seu faturamento.',
    focus: 'Foco: Conversão e Retenção',
    tags: ['Next.js', 'Carrinho Otimizado', 'Framer Motion'],
    accent: 'text-emerald-400',
    number: '01',
    mockup: (
      <div className="w-full h-full bg-[#0a0a0c] rounded-xl p-4 flex flex-col gap-3 border border-white/[0.05] shadow-inner overflow-hidden">
        {/* Navbar */}
        <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
          <div className="w-12 h-2.5 bg-white/20 rounded-full" />
          <div className="flex gap-2">
            <div className="w-5 h-2 bg-white/10 rounded-full" />
            <div className="w-8 h-2 bg-emerald-500/50 rounded-full" />
          </div>
        </div>
        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-2 gap-3">
          {[1, 2].map(i => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex-1 bg-white/[0.02] rounded-lg border border-white/[0.03] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-[7px] font-bold text-gray-500 tracking-wider z-10">PRODUTO</span>
              </div>
              <div className="w-3/4 h-2 bg-white/20 rounded-full" />
              <div className="w-1/2 h-2 bg-emerald-400/50 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: 'Dashboards e Sistemas Web',
    category: 'Aplicações Complexas',
    description: 'Interfaces corporativas e painéis de controle projetados para organizar dados complexos com extrema facilidade, segurança e performance em tempo real.',
    focus: 'Foco: Usabilidade e Dados',
    tags: ['React', 'TypeScript', 'Data Viz'],
    accent: 'text-teal-400',
    number: '02',
    mockup: (
      <div className="w-full h-full bg-[#070908] rounded-xl p-4 flex flex-col gap-3 border border-white/[0.05] shadow-inner overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center mb-1">
          <div className="w-20 h-2.5 bg-white/20 rounded-full" />
          <div className="w-4 h-4 rounded-full bg-teal-500/20 border border-teal-500/50" />
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2">
          {[1,2,3].map(i => (
             <div key={i} className="h-10 bg-white/[0.02] border border-white/[0.04] rounded-lg flex flex-col justify-center px-2">
               <div className="w-1/2 h-1.5 bg-gray-500/50 rounded-full mb-2" />
               <div className="w-3/4 h-2 bg-white/70 rounded-full" />
             </div>
          ))}
        </div>
        {/* Bar Chart */}
        <div className="flex-1 bg-white/[0.02] border border-white/[0.04] rounded-lg flex items-end px-3 pb-2 gap-2 pt-3">
           {[30, 50, 40, 70, 60, 90, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-teal-500/40 rounded-t-sm hover:bg-teal-400 transition-colors" style={{ height: `${h}%` }} />
           ))}
        </div>
      </div>
    )
  },
  {
    title: 'Sites Institucionais e LPs',
    category: 'Presença Digital',
    description: 'Sites imersivos e Landing Pages de altíssimo nível para empresas que querem dominar seu nicho e transmitir autoridade absoluta desde o primeiro segundo.',
    focus: 'Foco: Autoridade e Leads',
    tags: ['Next.js', 'SEO Técnico', 'Design Premium'],
    accent: 'text-green-400',
    number: '03',
    mockup: (
      <div className="w-full h-full bg-[#080a09] rounded-xl p-4 flex flex-col gap-3 border border-white/[0.05] shadow-inner overflow-hidden">
        {/* Navbar */}
        <div className="flex justify-center gap-6 border-b border-white/[0.04] pb-3">
          <div className="w-8 h-1.5 bg-white/20 rounded-full" />
          <div className="w-8 h-1.5 bg-white/20 rounded-full" />
          <div className="w-8 h-1.5 bg-white/20 rounded-full" />
        </div>
        {/* Hero Section */}
        <div className="flex-1 flex items-center gap-4">
          {/* Left: Text & CTA */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="w-full h-2.5 bg-white/60 rounded-full" />
            <div className="w-4/5 h-2.5 bg-white/60 rounded-full" />
            <div className="w-full h-1.5 bg-white/10 rounded-full mt-2" />
            <div className="w-3/4 h-1.5 bg-white/10 rounded-full" />
            <div className="w-16 h-5 bg-green-500/50 rounded-full mt-2" />
          </div>
          {/* Right: Abstract Graphic/Video */}
          <div className="flex-1 h-full bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent" />
            <div className="w-10 h-10 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center z-10 backdrop-blur-md">
               <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-green-400 border-b-[4px] border-b-transparent ml-0.5" />
            </div>
          </div>
        </div>
      </div>
    )
  },
]

export function ProjectsSection() {
  return (
    <section className="py-32 relative overflow-hidden" id="projects" style={{ backgroundColor: '#070708' }}>
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10" style={{ paddingLeft: 'clamp(24px, 6vw, 80px)', paddingRight: 'clamp(24px, 6vw, 80px)' }}>
        
        {/* Header */}
        <AnimatedSection className="flex flex-col items-center text-center mb-24 gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
              Nossas Soluções
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl">
            O que podemos{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 50%, #047857 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              construir para você.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mt-4">
            Independentemente da complexidade, projetamos cada linha de código para gerar resultados reais.
          </p>
        </AnimatedSection>

        {/* Projects Layout */}
        <div className="flex flex-col gap-12">
          {projectTypes.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <div 
                className="group relative overflow-hidden rounded-[32px] transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
                }}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.04)_0%,transparent_70%)]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10" style={{ padding: '48px 48px' }}>
                  
                  {/* Info Column */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-black font-mono text-gray-600 bg-white/[0.03] px-2 py-1 rounded">
                        {project.number}
                      </span>
                      <span className={`text-xs uppercase tracking-widest font-extrabold ${project.accent}`}>
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                      {/* Focus Badge */}
                      <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/[0.03] border border-white/[0.05]">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-bold text-gray-300 tracking-widest uppercase">
                          {project.focus}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-4 py-1.5 rounded-full border border-white/[0.06] text-gray-400 font-semibold bg-white/[0.02]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mockup Preview Column */}
                  <div className="lg:col-span-5 h-[240px] md:h-[280px] w-full mt-10 lg:mt-0 relative perspective-1000">
                    <motion.div 
                      className="w-full h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-2 group-hover:border-white/[0.15] transition-all duration-500 shadow-2xl group-hover:shadow-emerald-500/10"
                      whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
                    >
                      {project.mockup}
                    </motion.div>
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
