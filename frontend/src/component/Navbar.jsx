import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const dropdowns = [
  { name: 'About Us', items: ['Our Vision', 'Our Team', 'What We Do', 'Who We Are'] },
  { name: 'Our Product', items: ['Quality Management System', 'Pragmax POS', 'Pragmax HR'] },
  { name: 'Insights', items: ['Knowledge Hub', 'News', 'Webinars'] },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8">
        
        {/* Brand/Logo Area */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <img
              alt="Company Logo"
              src="src/assets/companylogo.png"
              className="h-15 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        {/* Mobile Toggle Trigger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Interface Link Blocks */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-10 items-center">
          {dropdowns.map((dropdown) => (
            <Popover key={dropdown.name} className="relative">
              <PopoverButton className="flex items-center gap-x-1.5 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 focus:outline-none py-1.5 px-2 rounded-lg hover:bg-gray-50/80">
                {dropdown.name}
                <ChevronDownIcon aria-hidden="true" className="size-4 flex-none text-gray-400 transition-transform duration-200 group-data-open:rotate-180" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute left-1/2 -translate-x-1/2 z-50 mt-4 w-60 overflow-hidden rounded-2xl bg-white p-2 shadow-xl ring-1 ring-gray-900/5 transition data-closed:translate-y-2 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                {dropdown.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block rounded-xl px-4 py-2.5 text-sm text-gray-600 hover:bg-indigo-50/60 hover:text-indigo-600 font-medium transition-all duration-150"
                  >
                    {item}
                  </a>
                ))}
              </PopoverPanel>
            </Popover>
          ))}

          <a href="#" className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 py-1.5 px-2 rounded-lg hover:bg-gray-50/80">
            Services
          </a>
        </PopoverGroup>

        {/* Call to Action Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a 
            href="#" 
            className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 transition-all duration-200 hover:-translate-y-0.5"
          >
            Let's talk 
          </a> 
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-gray-900/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="Company Logo" src="src/assets/companylogo.png" className="h-10 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-xl p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {dropdowns.map((dropdown) => (
                  <Disclosure as="div" key={dropdown.name} className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-xl py-2.5 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                      {dropdown.name}
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180 transition-transform duration-200" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-1 space-y-1 pl-4 border-l border-gray-100 ml-3">
                      {dropdown.items.map((item) => (
                        <DisclosureButton
                          key={item}
                          as="a"
                          href="#"
                          className="block rounded-lg py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                        >
                          {item}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                ))}

                <a
                  href="#"
                  className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
              </div>

              <div className="py-6">
                <a
                  href="#"
                  className="block text-center rounded-xl bg-gray-900 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-600 transition-colors"
                >
                  Let's talk
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}