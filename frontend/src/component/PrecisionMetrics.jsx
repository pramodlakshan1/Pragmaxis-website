import React from 'react'

const metrics = [
  { value: '100%', label: 'Architecture Ownership', detail: 'Zero vendor lock-in. Open standards framework execution.' },
  { value: 'Elite', label: 'Engineering Collective', detail: 'Dedicated senior development minds bypassing agency fluff.' },
  { value: 'Focused', label: 'Domain Competence', detail: 'Deep specialization across enterprise POS, HR, and QMS logic.' },
  { value: 'Core', label: 'Global Commitment', detail: 'Consistent dedication to open-source contributions and logic sharing.' }
]

export default function PrecisionMetrics() {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 text-center sm:text-left">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col border-t border-slate-200 pt-6">
              <dd className="text-4xl font-extrabold tracking-tight text-indigo-600 font-mono">{metric.value}</dd>
              <dt className="mt-2 text-base font-bold text-slate-900 tracking-tight">{metric.label}</dt>
              <dd className="mt-1 text-sm text-slate-500 font-normal leading-relaxed">{metric.detail}</dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}