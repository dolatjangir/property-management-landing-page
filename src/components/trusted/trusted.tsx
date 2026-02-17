'use client'
import React from 'react'

function Trusted() {
  return (
    <div>
      <section className="py-[var(--space-12)] border-y border-[var(--border-light)] ">
        <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
          <p className="text-center text-sm font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-[var(--space-8)]">
            Trusted by leading hospitality brands
          </p>
         <div className="relative overflow-hidden w-full py-6">
  <div className="flex w-max animate-scroll gap-16 items-center scale-100 hover:scale-105 transition-scale duration-500">
    
    {[
      { name: "Marriott", logo: "/assets/marriott.png" },
      { name: "Hilton", logo: "/assets/hiltonn.png" },
      { name: "Airbnb", logo: "/assets/airbnb.png" },
      { name: "Booking.com", logo: "/assets/booking.png" },
      { name: "Expedia", logo: "/assets/expendia.png" },
      { name: "Vrbo", logo: "/assets/verbo.png" },
    ].concat([
      { name: "Marriott", logo: "/assets/marriott.png" },
      { name: "Hilton", logo: "/assets/hiltonn.png"},
      { name: "Airbnb", logo: "/assets/airbnb.png"},
      { name: "Booking.com", logo: "/assets/booking.png" },
      { name: "Expedia", logo: "/assets/expendia.png" },
      { name: "Vrbo", logo: "/assets/verbo.png" },
    ]).map((brand, index) => (
      
      <div
        key={index}
        className="flex flex-col items-center gap-1 sm:min-w-[80px] md:min-w-[110px] lg:min-w-[160px]  justify-center"
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-12 w-12   transition-all duration-300"
        />
        <span className="font-semibold text-xl text-[var(--color-primary-800)]">
          {brand.name}
        </span>
      </div>
    ))}
    
  </div>
</div>

        </div>
      </section>
    </div>
  )
}

export default Trusted
