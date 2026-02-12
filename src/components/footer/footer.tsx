import { Building2 } from 'lucide-react'
import React from 'react'

function footer() {
  return (
    <div>
        <footer className="bg-[var(--bg-dark)] text-[var(--text-tertiary)] py-[var(--space-16)]">
              <div className="max-w-7xl mx-auto px-[var(--space-4)] sm:px-[var(--space-6)] lg:px-[var(--space-8)]">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-[var(--space-12)] mb-[var(--space-12)]">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-[var(--space-2)] mb-[var(--space-6)]">
                      <div 
                        className="w-10 h-10 rounded-[var(--radius-xl)] flex items-center justify-center"
                        style={{ background: 'var(--gradient-primary)' }}
                      >
                        <Building2 className="w-6 h-6 text-[var(--text-inverse)]" />
                      </div>
                      <span className="text-2xl font-bold text-[var(--text-inverse)]">StayPilot</span>
                    </div>
                    <p className="text-[var(--text-tertiary)] mb-[var(--space-6)] max-w-sm">
                      The modern platform for hotel owners, Airbnb hosts, and property managers. Automate, optimize, and grow.
                    </p>
                    <div className="flex gap-[var(--space-4)]">
                      {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                        <a key={social} href="#" className="w-10 h-10 rounded-full bg-[var(--color-neutral-800)] flex items-center justify-center hover:bg-[var(--color-primary-600)] transition-colors duration-[var(--duration-fast)]">
                          <span className="sr-only">{social}</span>
                          <div className="w-5 h-5 bg-current rounded-sm" />
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[var(--text-inverse)] font-semibold mb-[var(--space-4)]">Product</h4>
                    <ul className="space-y-[var(--space-3)]">
                      {['Features', 'Pricing', 'Integrations', 'API', 'Updates'].map((item) => (
                        <li key={item}><a href="#" className="hover:text-[var(--text-inverse)] transition-colors duration-[var(--duration-fast)]">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[var(--text-inverse)] font-semibold mb-[var(--space-4)]">Company</h4>
                    <ul className="space-y-[var(--space-3)]">
                      {['About', 'Blog', 'Careers', 'Press', 'Partners'].map((item) => (
                        <li key={item}><a href="#" className="hover:text-[var(--text-inverse)] transition-colors duration-[var(--duration-fast)]">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-[var(--text-inverse)] font-semibold mb-[var(--space-4)]">Support</h4>
                    <ul className="space-y-[var(--space-3)]">
                      {['Help Center', 'Contact', 'Status', 'Privacy', 'Terms'].map((item) => (
                        <li key={item}><a href="#" className="hover:text-[var(--text-inverse)] transition-colors duration-[var(--duration-fast)]">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="pt-[var(--space-8)] border-t border-[var(--color-neutral-800)] flex flex-col md:flex-row justify-between items-center gap-[var(--space-4)]">
                  <p className="text-sm text-[var(--text-tertiary)]">© 2026 StayPilot Inc. All rights reserved.</p>
                  <div className="flex items-center gap-[var(--space-6)] text-sm text-[var(--text-tertiary)]">
                    <a href="#" className="hover:text-[var(--text-inverse)] transition-colors duration-[var(--duration-fast)]">Privacy Policy</a>
                    <a href="#" className="hover:text-[var(--text-inverse)] transition-colors duration-[var(--duration-fast)]">Terms of Service</a>
                    <a href="#" className="hover:text-[var(--text-inverse)] transition-colors duration-[var(--duration-fast)]">Cookie Settings</a>
                  </div>
                </div>
              </div>
            </footer>
    </div>
  )
}

export default footer
