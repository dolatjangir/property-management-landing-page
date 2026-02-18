import { ChevronRight } from 'lucide-react';
import {useEffect} from 'react'

const Analytics = () => {
  // Animation logic hook
  useEffect(() => {
    // Animate Bars
    const bars = document.querySelectorAll('.bar-anim');
    bars.forEach((bar: any) => {
      const finalHeight = bar.style.height;
      bar.style.height = '0%';
      setTimeout(() => {
        bar.style.height = finalHeight;
      }, 300);
    });

    // Animate Donut
    const donut = document.querySelector('.donut-chart-anim');
    if (donut) {
      (donut as HTMLElement).style.transform = 'rotate(-90deg) scale(0.8)';
      (donut as HTMLElement).style.opacity = '0';
      setTimeout(() => {
        (donut as HTMLElement).style.transition = 'transform 1s ease-out, opacity 1s ease';
        (donut as HTMLElement).style.transform = 'rotate(-90deg) scale(1)';
        (donut as HTMLElement).style.opacity = '1';
      }, 500);
    }
  }, []);
   const steps = [
    {
      number: "01",
      title: "Connect Properties",
      description: "Import your listings from Airbnb, Booking.com, or add them manually. Setup takes under 5 minutes.",
      bg: "var(--color-primary-100)"
    },
    {
      number: "02",
      title: "Automate Operations",
      description: "Set up smart rules for pricing, messaging, and task assignments. Let the system work for you.",
      bg: "var(--color-secondary-100)"
    },
    {
      number: "03",
      title: "Scale Revenue",
      description: "Watch your occupancy rise and operational costs drop with data-driven insights.",
      bg: "var(--color-primary-50)"
    }
  ];

  const TrendUpIcon = ({ className }: { className?: string }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
  return (
    <>
    <section id="analytics" className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="font-['var(--font-head)]   text-3xl md:text-4xl text-center mb-4">
          Performance by the Numbers
        </h2>
        <p className="text-center text-[var(--color-text-muted)] max-w-2xl mx-auto mb-16 text-lg">
          We don't guess. We analyze market trends in real-time to optimize your pricing and occupancy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Bar Chart */}
          <div className="bg-[var(--color-secondary-100)] border border-[var(--color-glass-border)] p-8 rounded-2xl hover:border-[var(--color-primary-500)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[var(--color-secondary-500)] text-lg">Monthly Revenue</h3>
              <span className="text-[var(--color-accent)] text-sm flex items-center gap-1">
                <TrendUpIcon /> +18%
              </span>
            </div>
            <div className="flex items-end justify-between h-[150px] gap-2 mt-4">
              {[40, 55, 45, 70, 60, 85, 100].map((h, i) => (
                <div 
                  key={i} 
                  className={`bar-anim flex-1 rounded-t-sm transition-all duration-1000 ease-out ${i === 6 ? 'bg-gradient-to-t from-[var(--color-secondary-400)] to-[var(--color-secondary-600)] shadow-[0_0_15px_var(--color-primary-glow)]' : 'bg-[var(--color-secondary-600)]'}`}
                  style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
                ></div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-[var(--color-secondary-500)] text-xs">
              <span>Jan</span>
              <span>Jul</span>
            </div>
          </div>

          {/* Card 2: Line Chart */}
          <div className="bg-[var(--color-secondary-100)] border border-[var(--color-glass-border)] p-8 rounded-2xl hover:border-[var(--color-primary-500)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[var(--color-secondary-500)] text-lg">Occupancy Rate</h3>
              <span className="text-[var(--color-accent)] text-sm">94% Avg</span>
            </div>
            <div className="h-[150px] w-full relative flex items-end">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-accent)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path d="M0,150 L0,100 Q50,80 100,110 T200,60 T300,20 V150 Z" className="fill-[url(#gradientArea)] opacity-30" />
                <path d="M0,100 Q50,80 100,110 T200,60 T300,20" 
                      className="fill-none stroke-[var(--color-accent)] stroke-[3px] stroke-linecap-round animate-draw"
                      style={{ filter: 'drop-shadow(0 4px 6px rgba(16, 185, 129, 0.4))' }} 
                />
              </svg>
            </div>
            <div className="mt-4 text-center text-[var(--color-secondary-500)] text-xs">
              Staying above market average
            </div>
          </div>

          {/* Card 3: Donut Chart */}
          <div className="bg-[var(--color-secondary-100)] border border-[var(--color-glass-border)] p-8 rounded-2xl hover:border-[var(--color-primary-500)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[var(--color-secondary-500)] text-lg">Operational Efficiency</h3>
              <span className="text-[var(--color-accent)] text-sm">Automated</span>
            </div>
            <div className="h-[150px] flex items-center justify-center relative">
              <div 
                className="donut-chart-anim w-[120px] h-[120px] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                style={{ background: 'conic-gradient(var(--color-primary) 0% 85%, #334155 85% 100%)' }}
              >
                <div className="w-[90px] h-[90px] bg-[var(--color-bg-card)] rounded-full flex flex-col items-center justify-center rotate-90">
                  <span className="text-2xl font-bold text-white">85%</span>
                  <small className="text-[10px] text-[var(--color-secondary-500)]">Time Saved</small>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center text-[var(--color-secondary-500)] text-sm">
              From Check-in to Cleaning
            </div>
          </div>
        </div>
      </div>
    </section>
     {/* How It Works */}
          <section id="how-it-works" className="py-[var(--space-24)] ">
            <div className="max-w-7xl   mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
              <div className="text-center max-w-3xl mx-auto mb-[var(--space-16)]">
                <h2 className="text-4xl font-bold mb-[var(--space-4)] text-[var(--color-primary-600)] ">Get Started in Minutes</h2>
                <p className="text-xl text-[var(--text-secondary)] ">Three simple steps to transform your property management.</p>
              </div>
    
              <div className="grid lg:grid-cols-3  w-full gap-[var(--space-2)] lg:gap-[var(--space-8)]">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative group ">
                    <div 
                      className=" [clip-path:polygon(0_0,_50%_20%,_100%_0,_100%_69%,_49%_100%,_48%_100%,_0_67%)] md:[clip-path:polygon(75%_0%,_98%_50%,_75%_100%,_0%_100%,_15%_50%,_0%_0%)]  flex justify-center items-center  pb-2 h-60 group-hover:bg-[var(--color-secondary-300)]/50 p-[var(--space-3)] bg-[var(--color-secondary-100)]  border border-[var(--border-light)] group-hover:border-[var(--border-light)]/50"
                     
                    >
                      <div className='flex flex-col items-center justify-center px-4  w-[80%]'>
                        <div className='flex flex-row sm:flex-col items-center justify-center '>
                      <div className="text-2xl lg:text-5xl font-bold mr-5 lg:mr-0 text-[var(--color-secondary-500)] mb-[var(--space-1)] lg:mb-[var(--space-3)]">{step.number}</div>
                      <h3 className="text-sm lg:text-xl font-bold mb-[var(--space-2)] lg:mb-[var(--space-4)] text-black/90">{step.title}</h3>
                      </div><p className="px-2 sm:px-6 text-sm text-[var(--text-secondary)] text-center leading-relaxed">{step.description}</p>
                    </div>
                    {idx < 2 && (
                      <div className="hidden z-50 lg:block absolute top-1/2 -right-5 group-hover:-right-7 transition-all transform -translate-y-1/2 -z-10">
                        <ChevronRight className="w-8 h-8  text-[var(--color-secondary-700)]" />
                      </div>
                    )}
                  </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
</>
  );
};

export default Analytics
