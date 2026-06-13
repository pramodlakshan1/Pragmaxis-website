import React, { useState } from 'react'
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudArrowUpIcon,
  Square3Stack3DIcon,
  ShieldCheckIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

const techStacks = [
  {
    category: 'Software Development',
    icon: CodeBracketIcon,
    logos: ['React', 'Node.js', 'Java/Spring', 'PostgreSQL'],
    description: 'Cloud-native structural web builds.'
  },
  {
    category: 'Mobile Application',
    icon: DevicePhoneMobileIcon,
    logos: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    description: 'Fluid cross-platform deployments.'
  },
  {
    category: 'Cloud & DevOps',
    icon: CloudArrowUpIcon,
    logos: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
    description: 'Immutable pipeline infrastructure.'
  },
  {
    category: 'AI & Data Analytics',
    icon: Square3Stack3DIcon,
    logos: ['Python', 'TensorFlow', 'Apache Spark', 'PowerBI'],
    description: 'Algorithmic state processing metrics.'
  },
  {
    category: '24/7 Managed Support',
    icon: ShieldCheckIcon,
    logos: ['Prometheus', 'Grafana', 'Sentry', 'OpenTelemetry'],
    description: 'Continuous runtime cluster observation.'
  }
]

export default function TechStackShowcase() {
  const [activeStack, setActiveStack] = useState(0)

  return (
    <section className="py-24 sm:py-32 bg-slate-50/50 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">
            The Core Foundation
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Technical Engineering Matrix.
          </h2>
        </div>

        {/* RESPONSIVE LAYOUT SWITCHER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* INTERACTIVE CONTROLS CONTAINER */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {techStacks.map((stack, idx) => {
              const isSelected = idx === activeStack
              const StackIcon = stack.icon
              return (
                <div 
                  key={stack.category}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isSelected 
                      ? 'bg-white border-slate-200 shadow-md shadow-slate-100' 
                      : 'border-transparent bg-transparent hover:bg-slate-100/60'
                  }`}
                >
                  {/* Selector Toggle Bar */}
                  <button
                    onClick={() => setActiveStack(idx)}
                    className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-200/60 text-slate-600'
                      }`}>
                        <StackIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{stack.category}</h4>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">{stack.description}</p>
                      </div>
                    </div>
                    
                    {/* Mobile Chevron indicator — Hidden on desktop viewports */}
                    <ChevronDownIcon className={`h-4 w-4 text-slate-400 transition-transform duration-300 lg:hidden ${
                      isSelected ? 'transform rotate-180 text-indigo-600' : ''
                    }`} />
                  </button>

                  {/* MOBILE EXPANSION DRAW PANEL — Purely displays inline only on small mobile views */}
                  <div className={`transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
                    isSelected ? 'max-h-40 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                    <div className="p-4 bg-slate-50/50 flex flex-wrap gap-2">
                      {stack.logos.map((logo) => (
                        <span 
                          key={`${stack.category}-mob-${logo}`} 
                          className="inline-flex items-center rounded-lg bg-white border border-slate-200/80 px-3 py-1.5 text-xs font-mono font-bold text-slate-700 shadow-sm"
                        >
                          {logo}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* DEDICATED DESKTOP VIEW WINDOW — Completely disappears on mobile screens */}
          <div className="hidden lg:block lg:col-span-7 sticky top-8">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 min-h-[18rem] flex flex-col justify-center shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.1] pointer-events-none" />
              
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                Validated Framework Deployment
              </span>
              <h3 className="mt-2 text-2xl font-black text-slate-900">
                {techStacks[activeStack].category} Architecture
              </h3>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {techStacks[activeStack].logos.map((logo) => (
                  <span 
                    key={`desk-${logo}`} 
                    className="inline-flex items-center rounded-xl bg-slate-50 border border-slate-200 px-4 py-2 text-sm font-mono font-bold text-slate-700 shadow-inner hover:bg-white hover:border-slate-300 transition-colors duration-200"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}