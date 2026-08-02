'use client'

import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  Serviços: [
    { label: 'Design UI/UX', href: '#services' },
    { label: 'Desenvolvimento Web', href: '#services' },
    { label: 'E-commerce', href: '#services' },
    { label: 'Aplicativos Web', href: '#services' },
  ],
  Empresa: [
    { label: 'Projetos', href: '#projects' },
    { label: 'Processo', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Depoimentos', href: '#testimonials' },
  ],
  Contato: [
    { label: 'hello@nextappstudio.com', href: 'mailto:hello@nextappstudio.com' },
    { label: 'WhatsApp', href: 'https://wa.me/5511999999999' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer style={{
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      backgroundColor: '#070708',
    }}>
      {/* Subtle grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(48px, 8vw, 80px) clamp(24px, 5vw, 80px) 40px',
        position: 'relative',
        zIndex: 10,
      }}>

        {/* Top grid: Brand + Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '48px',
          marginBottom: '64px',
        }}>

          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              marginBottom: '20px',
            }}>
              <div style={{ position: 'relative', width: '40px', height: '40px', flexShrink: 0 }}>
                <Image src="/logo.jpg" alt="NextApp Studio Logo" width={40} height={40}
                  style={{ borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <span style={{
                fontSize: '18px',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}>
                NEXTAPP<span style={{ color: '#34d399' }}>.</span>
              </span>
            </Link>

            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              lineHeight: 1.7,
              marginBottom: '24px',
              maxWidth: '240px',
            }}>
              Agência de design e desenvolvimento web de altíssimo nível, especializada em Next.js e Interfaces Premium.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              borderRadius: '999px',
              background: 'rgba(52,211,153,0.06)',
              border: '1px solid rgba(52,211,153,0.2)',
            }}>
              <span style={{
                width: '8px', height: '8px',
                borderRadius: '50%',
                backgroundColor: '#34d399',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }} />
              <span style={{
                fontSize: '12px',
                color: '#34d399',
                fontWeight: 700,
              }}>
                Disponível para projetos
              </span>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: '#6b7280',
                        fontSize: '14px',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
        }}>
          <p style={{ color: '#4b5563', fontSize: '13px' }}>
            © {new Date().getFullYear()} NextApp Studio. Todos os direitos reservados.
          </p>
          <p style={{ color: '#4b5563', fontSize: '13px' }}>
            Feito com{' '}
            <span style={{ color: '#818cf8', fontWeight: 600 }}>Next.js</span>
            {' '}+{' '}
            <span style={{ color: '#c084fc', fontWeight: 600 }}>Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
