import React from 'react'
import { ClockIcon, ArrowPathIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const principles = [
  {
    title: 'Guaranteed System Uptime',
    description: 'We construct fault-tolerant systems with multi-region failover protocols to secure absolute availability thresholds.',
    icon: ClockIcon
  },
  {
    title: 'Transparent Sprint Cycles',
    description: 'Complete pipeline visibility. Review production code daily via staging deployments and structural logs.',
    icon: ArrowPathIcon
  },
  {
    title: 'Rigorous Code Audits',
    description: 'Every codebase is subjected to static analysis tracking, dependency scanning, and meticulous peer audits.',
    icon: MagnifyingGlassIcon
  }
]

export default function EngineeringPrinciples() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50/30 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">Operational Commitments</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Our Engineering Principles.</h2>
          <p className="mt-4 text-base text-slate-500">We do not deal in unverified claims. We prioritize structural transparency over placeholder client testimonials.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {principles.map((principle) => {
            const PrincipleIcon = principle.icon
            return (
              <div key={principle.title} className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <PrincipleIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-slate-900 tracking-tight">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500 font-normal">{principle.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}