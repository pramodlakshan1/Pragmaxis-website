import React from 'react'

export default function ContactFunnel() {
  return (
    <section id="contact-form" className="py-24 sm:py-32 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">Secure Ingestion Port</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Initiate System Briefing.</h2>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6 bg-slate-50/50 rounded-3xl border border-slate-200/70 p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase">Corporate Name</label>
              <input type="text" className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase">Secure Email End-point</label>
              <input type="email" className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="john@enterprise.com" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono font-bold text-slate-700 uppercase">Operational Bottleneck Analysis</label>
            <textarea rows={4} className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none" placeholder="Briefly map out the legacy technical friction constraints your team is dealing with..." />
          </div>
          <button type="submit" className="w-full rounded-xl bg-indigo-600 px-4 py-4 text-sm font-bold tracking-wider text-white shadow-md hover:bg-indigo-500 transition-colors">
            TRANSMIT SPECIFICATIONS
          </button>
        </form>
      </div>
    </section>
  )
}