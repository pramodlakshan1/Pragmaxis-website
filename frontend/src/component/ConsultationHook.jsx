import React from 'react'
import { 
  ChatBubbleBottomCenterTextIcon, 
  CalendarDaysIcon, 
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline'

export default function ConsultationHook() {
  
  // Replace this with your actual WhatsApp phone number link structure
  const whatsappNumber = "0768701043" 
  const whatsappMessage = encodeURIComponent("Hello Pragmax, we are experiencing a technical bottleneck and would like to discuss a custom solution.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden border-b border-slate-100">
      
      {/* Immersive Subtle Blueprint Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-16 shadow-xl shadow-slate-100/50 text-center flex flex-col items-center">
          
          {/* Micro-Indicator */}
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 ring-1 ring-inset ring-indigo-500/10 mb-8">
            <ChatBubbleBottomCenterTextIcon className="h-4 w-4 animate-pulse" />
            Direct Consultation Pipeline
          </div>

          {/* The Bold Framing Question */}
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:max-w-3xl leading-tight">
            What technical bottleneck is slowing your operations down today?
          </h2>

          {/* DUAL PATHWAY ACTION SELECTION AREA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            
            {/* Action 1: Formal Strategic Meeting Booking Anchor */}
            <a
              href="#contact-form" // Redirects smoothly down to your contact form component ID
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold text-sm tracking-wider rounded-xl shadow-lg hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5"
            >
              <CalendarDaysIcon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              SCHEDULE ARCHITECTURAL BRIEFING
            </a>

            {/* Action 2: Rapid Deployment WhatsApp Transmission Router */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold text-sm tracking-wider rounded-xl border border-slate-200 shadow-sm hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Custom SVG wrapper matrix for WhatsApp Icon to maintain strict theme harmony */}
              <svg 
                className="h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-colors fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M12.004 2c-5.51 0-9.99 4.49-9.99 10 0 2.00.53 3.87 1.46 5.51L2 22l4.63-1.22c1.55.85 3.32 1.33 5.21 1.33 5.51 0 10-4.49 10-10S17.514 2 12.004 2zm6.75 14.05c-.26.74-1.52 1.36-2.11 1.43-.57.07-1.12.33-3.64-.71-3.22-1.33-5.26-4.66-5.42-4.88-.16-.22-1.31-1.77-1.31-3.37 0-1.6.82-2.39 1.11-2.7.29-.31.77-.46 1.05-.46.28 0 .56.01.8.03.26.02.57-.1.89.68.32.79 1.11 2.73 1.21 2.93.1.2.17.43.03.71-.13.28-.3.46-.59.8-.29.34-.62.57-.88.88-.28.32-.58.68-.25 1.24.33.55 1.46 2.43 3.14 3.93 2.16 1.93 3.98 2.53 4.54 2.81.56.28.89.24 1.22-.14.33-.38 1.43-1.67 1.81-2.24.38-.57.77-.47 1.29-.28.53.19 3.38 1.62 3.96 1.91.58.29.97.43 1.12.69.15.25.15 1.48-.11 2.22z"/>
              </svg>
              SECURE SECURE CHAT (WHATSAPP)
            </a>

          </div>

          {/* Micro Trust Text Anchor Footnote */}
          <div className="mt-8 flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <PaperAirplaneIcon className="h-3.5 w-3.5" />
            Average framework response loop: &lt; 2 Hours
          </div>

        </div>
      </div>
</section>
  )
}