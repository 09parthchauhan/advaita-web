import { useEffect, useRef, useState } from 'react'

export default function BackedBy() {
    const sectionRef = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
      const section = sectionRef.current
      if (!section) return

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      }, { threshold: 0.25 })

      observer.observe(section)
      return () => observer.disconnect()
    }, [])

    return (
      <section ref={sectionRef} className="mt-16" style={{ background: '#fefffe' }}>
        <div className="max-w-[1200px] mx-auto px-5">
  
          {/* Label */}
          <h3 className="py-5 pt-20 text-[42px] font-medium text-charcoal text-center leading-[1.1]">
            <span className="block overflow-hidden">
              <span className={`headline-reveal-line ${visible ? 'is-visible' : ''}`}>Backed &amp; Recognised By</span>
            </span>
          </h3>
  
          {/* One row */}
          <div className={`scroll-reveal border-t border-r border-b border-l border-jet-black flex items-center divide-x divide-jet-black ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '120ms' }}>
  
            {/* iHub logo — grayscale → color on hover */}
            <div
              className={`scroll-reveal-left group flex items-center justify-center px-12 py-7 flex-1 cursor-pointer transition-all duration-300 hover:bg-black/[0.02] ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '220ms' }}
            >
              <a href="https://ihubgujarat.in/" target="_blank" >
              <img
                src="/i-hub.png"
                alt="iHub — A Gujarat Government Enterprise"
                className="h-10 w-auto object-contain transition-all duration-500 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              </a>
            </div>
  
            {/* Startup Srijan — text slides up on hover */}
            <div className={`scroll-reveal-right group flex flex-col items-center justify-center px-12 py-7 flex-1 cursor-pointer overflow-hidden transition-all duration-300 hover:bg-black/[0.02] ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
              <div className="relative overflow-hidden h-7">
              <a href="https://ihubgujarat.in/srujan" target="_blank">
                {/* Original text slides up and out */}
                <span className="block text-[20px] font-bold text-jet-black leading-none transition-all duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                  Startup Srujan
                </span>
                {/* New text slides up into view */}
                <span className="absolute inset-0 block text-[20px] font-bold leading-none transition-all duration-300 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100" style={{ color: '#f5820a' }}>
                  Startup Srujan
                </span>
                </a>
              </div>
              <span className="text-[12px] text-black/35 mt-1 transition-all duration-300 group-hover:text-black/60">
                Grant S4 Recipient
              </span>
            </div>
  
          </div>
        </div>
      </section>
    )
  }
