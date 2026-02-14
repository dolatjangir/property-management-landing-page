import { ArrowRight, Play, Sparkles, Star } from 'lucide-react'

import React from 'react'

function hero() {
  return (
    <div>
         {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
              <div className="absolute inset-0 bg-[var(--gradient-hero)] " />
              <div className="absolute top-0 right-0 w-1/2 h-full  to-transparent" />
              
              <div className="relative max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  <div className="space-y-[var(--space-3)]">
                    <div className="inline-flex items-center gap-[var(--space-2)] px-[var(--space-4)] py-[var(--space-2)] rounded-[var(--radius-full)] bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-sm font-semibold">
                      <Sparkles className="w-4 h-4" />
                      <span>Trusted by 10,000+ property managers</span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-[var(--text-primary)]">
                      Manage All Your{" "}
                      <span className="bg-blue-600 bg-clip-text text-transparent">
                        Properties
                      </span>{" "}
                      in One Smart Dashboard
                    </h1>
                    
                    <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl">
                      Automate bookings, optimize pricing with AI, and delight guests with seamless communication. The all-in-one platform for modern hospitality.
                    </p>
      
                    <div className="flex flex-col sm:flex-row gap-[var(--space-4)]">
                      <button className="group px-[var(--space-8)] py-[var(--space-4)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-[var(--text-inverse)] font-semibold rounded-[var(--radius-full)] transition-all duration-[var(--duration-fast)] shadow-xl hover:shadow-2xl flex items-center justify-center gap-[var(--space-2)]" style={{ boxShadow: '0 20px 25px -5px var(--color-primary-600)/25' }}>
                        Start Free Trial
                        <ArrowRight className="w-5 h-5 hover:translate-x-1 transition-transform duration-[var(--duration-fast)]" />
                      </button>
                      <button className="group px-[var(--space-8)] py-[var(--space-4)] bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold rounded-[var(--radius-full)] transition-all duration-[var(--duration-fast)] border border-[var(--border-medium)] shadow-lg flex items-center justify-center gap-[var(--space-2)]">
                        <Play className="w-5 h-5 text-[var(--color-primary-600)]" />
                        Book a Demo
                      </button>
                    </div>
      
                    <div className="flex items-center gap-[var(--space-6)] pt-[var(--space-4)]">
                      <div className="flex -space-x-[var(--space-3)]">
                        {[1,2,3,4].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--bg-primary)] bg-[var(--gradient-primary)]" />
                        ))}
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map((i) => (
                            <Star key={i} className="w-4 h-4 fill-[var(--color-warning-500)] text-[var(--color-warning-500)]" />
                          ))}
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">4.9/5 from 2,000+ reviews</p>
                      </div>
                    </div>
                  </div>
      
                 <div className="hero-visual relative ">
                       <div className="bg-gray-100 border border-[var(--color-glass-border)] rounded-3xl p-5  relative z-10 animate-float">
                         <img
                          src="/assets/property.jpeg" 
                           alt="Modern Luxury Apartment" 
                           width={600} 
                           height={400} 
                           className="rounded-2xl w-full h-auto object-cover"
                         />
                         <div className="absolute bottom-6 lg:bottom-10 -left-3 lg:-left-8 bg-[var(--color-bg-card)] border border-[var(--color-primary-600)] p-3 lg:p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 animate-float-reverse">
                           <div className="w-10 h-10 rounded-full bg-[var(--color-primary-500)]/20 text-[var(--color-primary-600)] flex items-center justify-center font-bold text-xl">+</div>
                           <div>
                             <div className="font-bold text-white lg:text-lg">32% Increase</div>
                             <div className="text-xs text-[var(--color-text-muted)]">vs. Traditional Rent</div>
                           </div>
                         </div>
                       </div>
                     </div>
                </div>
              </div>
            </section>
    </div>
  )
}

export default hero
