'use client'

import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section
      id="contact"
      style={{
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#070708',
      }}
    >
      {/* Background orbs */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(16,185,129,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%',
        filter: 'blur(60px)',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(5,150,105,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%',
        filter: 'blur(40px)',
      }} />

      {/* Content */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 clamp(24px, 5vw, 72px)',
        position: 'relative',
        zIndex: 10,
      }}>
        <AnimatedSection>
          <motion.div
            whileHover={{ borderColor: 'rgba(255,255,255,0.14)' }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '28px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Top line accent */}
            <div style={{
              position: 'absolute',
              top: 0, left: '20%', right: '20%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)',
            }} />

            {/* Inner grid pattern */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              pointerEvents: 'none',
            }} />

            {/* Main content */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              padding: 'clamp(40px, 6vw, 80px) clamp(32px, 5vw, 64px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '0',
            }}>

              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                marginBottom: '32px',
              }}>
                <span style={{
                  width: '8px', height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#34d399',
                  animation: 'pulse 2s infinite',
                  display: 'inline-block',
                }} />
                <span style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#34d399',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  Disponível para novos projetos
                </span>
              </div>

              {/* Heading */}
              <h2 style={{
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '24px',
                maxWidth: '700px',
              }}>
                Pronto para colocar sua marca{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 50%, #047857 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  no topo do mercado?
                </span>
              </h2>

              {/* Subtext */}
              <p style={{
                color: '#9ca3af',
                fontSize: '17px',
                lineHeight: 1.7,
                maxWidth: '500px',
                marginBottom: '48px',
              }}>
                Não espere mais. Cada dia sem um site de alto nível é um dia a mais de clientes na mão da concorrência.
              </p>

              {/* Buttons */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Link
                  href="mailto:hello@nextappstudio.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '16px 36px',
                    borderRadius: '999px',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    fontWeight: 700,
                    fontSize: '14px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
                    boxShadow: '0 0 30px rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f3f4f6'
                    ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 40px rgba(255,255,255,0.16)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#ffffff'
                    ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(255,255,255,0.08)'
                  }}
                >
                  Solicitar Orçamento Gratuito
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '16px 36px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '14px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(8px)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.4)'
                    ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.07)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.18)'
                    ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.04)'
                  }}
                >
                  <svg width="18" height="18" fill="#34d399" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
