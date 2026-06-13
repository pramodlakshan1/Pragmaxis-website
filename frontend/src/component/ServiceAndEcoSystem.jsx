import React, { useState, useEffect, useRef } from 'react' 
import { 
  CpuChipIcon, 
  UsersIcon, 
  CheckCircleIcon, 
  CodeBracketIcon, 
  CloudArrowUpIcon, 
  ArrowsRightLeftIcon,
  ArrowRightIcon,
  ComputerDesktopIcon,     // Icon for Web App Dev
  DevicePhoneMobileIcon,   // Icon for Mobile App Dev
  PaintBrushIcon,          // Icon for UI/UX
  LinkIcon,                // Icon for API Integrations
  ArrowPathRoundedSquareIcon, // Icon for DevOps/CI-CD
  WrenchScrewdriverIcon,   // Icon for Legacy Refactoring
  UserPlusIcon,            // Icon for Team Augmentation
  ShieldCheckIcon          // Icon for 24/7 Support
} from '@heroicons/react/24/outline'

const products = [
  {
    name: 'Pragmax POS',
    tagline: 'High-Throughput Commerce Engine',
    description: 'A resilient, offline-first Point of Sale network engineered for modern retail infrastructure. Real-time sync, bulletproof database integrity, and zero latency.',
    icon: CpuChipIcon,
    features: ['Offline-First Architecture', 'Real-Time Inventory Mesh', 'Unified Payment Gateway'],
    bgGradient: 'from-indigo-50 via-slate-50 to-blue-50/30'
  },
  {
    name: 'Pragmax HR',
    tagline: 'Enterprise Workforce Infrastructure',
    description: 'Automate high-volume corporate operations safely. Features zero-trust data encryption, automated payroll logic, and intelligent, frictionless employee onboarding pipelines.',
    icon: UsersIcon,
    features: ['AES-256 Data Encryption', 'Automated Compliance Logic', 'Scalable Resource Planning'],
    bgGradient: 'from-sky-50 via-slate-50 to-indigo-50/40'
  },
  {
    name: 'Quality Management System',
    tagline: 'Continuous Compliance Framework',
    description: 'An automated compliance audit and operational tracking system engineered to eliminate system failures and maintain absolute adherence to regulatory standards.',
    icon: CheckCircleIcon,
    features: ['Automated Audit Logging', 'Fail-Safe Event Tracking', 'Real-time Drift Detection'],
    bgGradient: 'from-violet-50 via-slate-50 to-emerald-50/20'
  }
]

const services = [
  {
    name: 'Website Development',
    description: 'Architecting ultra-fast, SEO-optimized, and secure corporate digital storefronts built to scale seamlessly with heavy traffic loads.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Web Application Development',
    description: 'Engineering responsive, cloud-native web systems featuring high-performance dashboards, secure portals, and deep business logic layers.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Mobile Application Development',
    description: 'Building native iOS and Android digital products using optimized architectures for fluid animations and offline usability.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'UI/UX Product Engineering',
    description: 'Designing intuitive layouts engineered on explicit user data research, interactive wireframing models, and scalable design languages.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Custom API & Core Integrations',
    description: 'Developing high-speed backend API layers to safely stitch together data environments between modern cloud nodes and old architectures.',
    icon: LinkIcon,
  },
  {
    name: 'DevOps & Automated CI/CD',
    description: 'Containerizing deployment structures via automated testing pipelines to ensure secure, rapid deployments with zero system downtime.',
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: 'Legacy Code Refactoring',
    description: 'Auditing complex, fragmented structural assets and un-optimizing technical debt layers back into manageable, standard open systems.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Dedicated Team Augmentation',
    description: 'Expanding your internal developer ecosystem instantly with specialized senior minds fully aligned to accelerate operational product delivery.',
    icon: UserPlusIcon,
  },
  {
    name: '24/7 Managed Infrastructure',
    description: 'Continuous real-time cloud server auditing, automated threat prevention logic, and continuous platform monitoring for complete peace of mind.',
    icon: ShieldCheckIcon,
  }
]

export default function ServicesEcosystem() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const autoPlayDuration = 6000 
  const progressInterval = 60 
  const timerRef = useRef(null)

  useEffect(() => {
    const step = (progressInterval / autoPlayDuration) * 100
    
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % products.length)
          return 0
        }
        return prev + step
      })
    }, progressInterval)

    return () => clearInterval(timerRef.current)
  }, [activeIndex])

  const handleTabClick = (index) => {
    setActiveIndex(index)
    setProgress(0)
  }

  const currentProduct = products[activeIndex]

  return (
    <section className="bg-white py-24 sm:py-32 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-24">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600">
            Capabilities Matrix
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Our Software Ecosystem.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            We deliver uncompromising operational stability through our proprietary suite of enterprise products and elite custom engineering services.
          </p>
        </div>

       {/* ================= PART 1: PROPRIETARY PRODUCTS ================= */}
<div className="mb-32">
  {/* Section Sub-Header Row */}
  <div className="flex items-center gap-4 mb-10">
    <span className="text-xs font-mono bg-slate-100 px-3 py-1 rounded text-slate-600 uppercase font-bold tracking-wider">Suite 01</span>
    <h3 className="text-xl font-bold text-slate-950">Proprietary Software Systems</h3>
    <div className="h-[1px] bg-slate-200 flex-1 hidden sm:block"></div>
  </div>

  {/* DYNAMIC EXPANDING CAROUSEL GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch min-h-[32rem]">
    {products.map((product, idx) => {
      const isCurrent = idx === activeIndex
      const ProductIcon = product.icon

      return (
        <div
          key={product.name}
          onClick={() => !isCurrent && handleTabClick(idx)}
          className={`relative overflow-hidden rounded-3xl border transition-all duration-700 ease-out flex flex-col justify-between cursor-pointer shadow-sm group ${
            isCurrent
              ? 'lg:col-span-6 bg-gradient-to-br border-slate-300 p-8 sm:p-10 shadow-indigo-100/40 ring-1 ring-slate-200 cursor-default ' + product.bgGradient
              : 'lg:col-span-3 bg-slate-50/60 border-slate-200/70 p-6 hover:bg-slate-100/50 hover:border-slate-300'
          }`}
        >
          {/* Subtle Grid Overlays — Visible only on active pane */}
          {isCurrent && (
            <>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.15] mix-blend-overlay pointer-events-none" />
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-400/10 rounded-full blur-2xl animate-pulse pointer-events-none" />
            </>
          )}

          {/* INTERNAL COMPACT TIMING PROGRESS BAR — Only tracks on the active view container */}
          {isCurrent && (
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-slate-100 overflow-hidden pointer-events-none">
              <div 
                className="h-full bg-indigo-600 transition-all ease-linear" 
                style={{ width: `${progress}%`, transitionDuration: `${progressInterval}ms` }} 
              />
            </div>
          )}

          {/* CARD UPPER HEADERS */}
          <div className={isCurrent ? 'animate-[fadeIn_0.5s_ease-out]' : ''}>
            <div className="flex items-center gap-4">
              <div className={`p-2.5 rounded-xl transition-all duration-500 shadow-sm ${
                isCurrent ? 'bg-indigo-600 text-white' : 'bg-white text-slate-500 border border-slate-200 group-hover:text-indigo-600'
              }`}>
                <ProductIcon className="h-5 w-5" />
              </div>
              <div>
                <span className={`block text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                  isCurrent ? 'text-indigo-600' : 'text-slate-400'
                }`}>
                  {isCurrent ? 'Active Module' : `Module 0${idx + 1}`}
                </span>
                <h4 className="text-lg font-black text-slate-900 tracking-tight mt-0.5">
                  {product.name}
                </h4>
              </div>
            </div>

            {/* EXPANDED VIEW LAYOUT CONTEXT */}
            {isCurrent ? (
              <div className="max-w-xl mt-6">
                <p className="text-xs font-mono font-medium tracking-tight text-indigo-500 uppercase bg-white/60 px-2.5 py-0.5 rounded-md inline-block border border-slate-100">
                  {product.tagline}
                </p>
                <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600 font-normal">
                  {product.description}
                </p>
              </div>
            ) : (
              /* COLLAPSED VIEW SNEAK PEEK */
              <p className="mt-4 text-xs text-slate-400 font-medium tracking-tight line-clamp-2 lg:line-clamp-3">
                {product.tagline} — {product.description}
              </p>
            )}
          </div>

          {/* CARD LOWER CONTROL BAR */}
          {isCurrent ? (
            <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-[fadeIn_0.5s_ease-out]">
              <div className="flex flex-wrap gap-1.5">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center rounded-lg bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200/50"
                  >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    {feature}
                  </span>
                ))}
              </div>

              <a 
                href="#contact-form" 
                className="inline-flex items-center gap-1 text-xs font-bold font-mono uppercase tracking-wider text-indigo-600 hover:text-indigo-700 transition-colors group/link flex-shrink-0"
              >
                Initialize Module
                <ArrowRightIcon className="h-3.5 w-3.5 transform transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ) : (
            /* COLLAPSED BUTTON GUIDE ACTION */
            <div className="mt-6 pt-4 border-t border-slate-200/30 text-xs font-mono font-bold text-slate-400 group-hover:text-indigo-600 flex items-center gap-1 transition-colors">
              Expand Overview
              <ArrowRightIcon className="h-3 w-3 transform transition-transform group-hover:translate-x-0.5" />
            </div>
          )}

        </div>
      )
    })}
  </div>

  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}} />
</div>

        {/* ================= PART 2: THE 9 CORE ENGINEERING SERVICES ================= */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs font-mono bg-slate-100 px-3 py-1 rounded text-slate-600 uppercase font-bold tracking-wider">Suite 02</span>
            <h3 className="text-xl font-bold text-slate-950">Elite Engineering Services</h3>
            <div className="h-[1px] bg-slate-200 flex-1 hidden sm:block"></div>
          </div>

          {/* Upgraded from standard columns to a clean 3x3 interactive matrix matrix */}
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const ServiceIcon = service.icon
              return (
                <div 
                  key={service.name} 
                  className="group flex gap-4 p-5 rounded-2xl border border-transparent hover:border-slate-200/60 hover:bg-slate-50/50 transition-all duration-300 hover:shadow-md hover:shadow-slate-100/40"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mt-1 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white shadow-sm">
                    <ServiceIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 tracking-tight transition-colors duration-200 group-hover:text-indigo-600">
                      {service.name}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600 font-normal">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}