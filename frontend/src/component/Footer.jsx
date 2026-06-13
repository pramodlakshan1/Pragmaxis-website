import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-400 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <span className="text-base font-black text-white tracking-tight font-mono">PRAGMAX</span>
          <p className="text-xs font-mono text-slate-500">© 2026 Pragmax Architecture Collective. All rights reserved.</p>
        </div>
        
        <div className="flex gap-6 text-sm font-mono font-semibold">
          <a href="#contact-form" className="hover:text-white transition-colors">Briefing Portal</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn Node</a>
        </div>
      </div>
    </footer>
  )
}