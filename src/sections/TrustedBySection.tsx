'use client'

import { motion } from 'framer-motion'

const technologies = [
  'NEXT.JS',
  'REACT',
  'TAILWIND CSS',
  'TYPESCRIPT',
  'FRAMER MOTION',
  'VERCEL',
  'SUPABASE',
  'FIGMA',
]

export function TrustedBySection() {
  return (
    <section className="py-12 border-b border-white/[0.02]">
      {/* Marquee container */}
      <div className="relative overflow-hidden flex items-center">
        <div className="flex gap-16 items-center">
          {/* Moving strip */}
          <motion.div
            className="flex gap-16 items-center flex-shrink-0 min-w-full"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...technologies, ...technologies, ...technologies].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-6 group cursor-default"
              >
                <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#333] group-hover:text-white transition-colors duration-500 uppercase">
                  {tech}
                </div>
                {/* Minimal separator */}
                <span className="text-[#222]">/</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fade masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#070708] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#070708] to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
