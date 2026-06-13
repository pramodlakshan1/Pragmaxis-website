import React from 'react';
import { ShieldCheckIcon, CpuChipIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-50 min-h-screen flex items-center justify-center">
      
      {/* 1. LIGHT BACKGROUND GRID SYSTEM */}
      <div className="absolute inset-0 -z-10">
        {/* Fine-lined architecture grid — Cleaned up arbitrary utility flags to use native custom tailwind spacing values */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] opacity-60" 
          style={{ 
            backgroundSize: '4rem 4rem',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 60%, transparent 100%)'
          }} 
        />
        
        {/* Soft, professional light-indigo radial illumination — Scaled using standard max-viewport sizing flags */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl aspect-square bg-indigo-100/40 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* 2. SECURITY HARDENED MICRO-BADGE */}
          <div className="mb-6 sm:mb-8 flex">
            <div className="relative rounded-full px-3.5 py-1 text-[10px] sm:text-xs font-mono tracking-wider uppercase leading-6 text-slate-600 ring-1 ring-slate-200 bg-white shadow-sm transition-all">
              <span className="text-emerald-500 inline-block mr-1.5 animate-pulse">●</span> Architecture Layer: Hardened
            </div>
          </div>

          {/* 3. THE HEADLINE (Optimized Mobile Text Bounds) */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-xs sm:max-w-4xl lg:max-w-5xl leading-[1.15] sm:leading-[1.1]">
            Your{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-slate-900 bg-clip-text text-transparent italic font-serif font-medium inline-block sm:inline">
              Anchor
            </span>{' '}
            for <br className="hidden sm:inline" />
            Digital Transformation.
          </h1>

          {/* 4. THE SUBHEADLINE (Calibrated Paragraph Scaling) */}
          <p className="mt-6 sm:mt-8 text-sm sm:text-lg lg:text-xl leading-normal sm:leading-8 text-slate-600 max-w-xs sm:max-w-2xl lg:max-w-3xl font-normal px-2 sm:px-0">
            Flawless architecture, uncompromising security, and zero vendor lock-in — built for the world's leading enterprises and sovereign powers.
          </p>

          {/* 5. ACTION BUTTONS (Adaptive Column Stacking for Compact Screens) */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <button className="relative group w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold text-xs sm:text-sm tracking-wider rounded-xl shadow-lg hover:shadow-indigo-100 transition-all duration-300 overflow-hidden hover:-translate-y-0.5">
              <span className="relative z-10">INITIATE TRANSFORMATION</span>
              <div className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </button>
            
            <button className="group w-full sm:w-auto flex items-center justify-center gap-2 text-[11px] sm:text-xs font-mono font-bold tracking-widest text-slate-500 hover:text-indigo-600 transition-colors py-3 px-6 rounded-xl hover:bg-slate-100">
              VIEW PROTOCOLS <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* 6. METRIC BLOCKS WITH RESPONSIVE FLEX LAYOUTS */}
          <div className="mt-20 sm:mt-28 grid grid-cols-3 gap-x-2 sm:gap-x-16 border-t border-slate-200/80 pt-12 sm:pt-16 w-full max-w-4xl">
            
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-2.5 sm:p-3 bg-white rounded-xl sm:rounded-2xl shadow-sm ring-1 ring-slate-100 group-hover:bg-indigo-50 group-hover:ring-indigo-100 transition-all duration-300 sm:group-hover:scale-110">
                <ShieldCheckIcon className="h-5 w-5 sm:h-7 sm:w-7 text-indigo-600" />
              </div>
              <dt className="mt-3 text-[9px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider sm:tracking-widest">Security</dt>
              <dd className="mt-0.5 sm:mt-1 text-xs sm:text-lg font-black text-slate-800 text-center">Military Grade</dd>
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-2.5 sm:p-3 bg-white rounded-xl sm:rounded-2xl shadow-sm ring-1 ring-slate-100 group-hover:bg-indigo-50 group-hover:ring-indigo-100 transition-all duration-300 sm:group-hover:rotate-45">
                <CpuChipIcon className="h-5 w-5 sm:h-7 sm:w-7 text-indigo-600" />
              </div>
              <dt className="mt-3 text-[9px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider sm:tracking-widest">Sovereignty</dt>
              <dd className="mt-0.5 sm:mt-1 text-xs sm:text-lg font-black text-slate-800 text-center">Zero Lock-In</dd>
            </div>

            <div className="flex flex-col items-center group cursor-pointer">
              {/* Added fallback spin style animation directly inside the frame */}
              <div className="p-2.5 sm:p-3 bg-white rounded-xl sm:rounded-2xl shadow-sm ring-1 ring-slate-100 group-hover:bg-indigo-50 group-hover:ring-indigo-100 transition-all duration-300 animate-[spin_20s_linear_infinite] sm:group-hover:animate-[spin_4s_linear_infinite]">
                <GlobeAltIcon className="h-5 w-5 sm:h-7 sm:w-7 text-indigo-600" />
              </div>
              <dt className="mt-3 text-[9px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider sm:tracking-widest">Infrastructure</dt>
              <dd className="mt-0.5 sm:mt-1 text-xs sm:text-lg font-black text-slate-800 text-center">Sovereign Cloud</dd>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}