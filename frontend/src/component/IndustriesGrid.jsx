import React from 'react'
import {
  ShoppingBagIcon,
  BuildingOffice2Icon,
  CpuChipIcon,
  GlobeAmericasIcon,
  HeartIcon,
  SunIcon,
  CalendarDaysIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const industries = [
  { name: 'Retail & Commerce', icon: ShoppingBagIcon, description: 'High-throughput transactional networks.' },
  { name: 'Corporate & Enterprise', icon: BuildingOffice2Icon, description: 'Automated human capital & resource scaling.' },
  { name: 'Regulated / Manufacturing', icon: CpuChipIcon, description: 'Continuous compliance and quality tracking.' },
  { name: 'Tourism & Hospitality', icon: GlobeAmericasIcon, description: 'Global reservation meshes and booking layers.' },
  { name: 'Healthcare Systems', icon: HeartIcon, description: 'Zero-trust protected data architecture.' },
  { name: 'Modern Agriculture', icon: SunIcon, description: 'Supply chain visibility and telemetry parsing.' },
  { name: 'Booking & Scheduling', icon: CalendarDaysIcon, description: 'Real-time state allocation frameworks.' },
  { name: 'Emerging Sectors', icon: SparklesIcon, description: 'Custom-tailored modern software architecture.' }
]

export default function IndustriesGrid() {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">Target Verticals</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Industries Anchored by Our Software.</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <div key={industry.name} className="p-6 rounded-2xl border border-slate-200/60 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-slate-100/60 transition-all duration-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-slate-200 text-indigo-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{industry.name}</h3>
                <p className="mt-2 text-sm text-slate-500 font-normal leading-relaxed">{industry.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}