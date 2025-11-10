import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-inner shadow-blue-900/30 grid place-items-center text-white font-bold">B</div>
            <span className="text-xl font-semibold text-slate-900">BlueServe</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition-colors">
              <Phone className="h-4 w-4" />
              Contact
            </a>
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            <Menu className="h-6 w-6 text-slate-800" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-slate-900">Menu</span>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-slate-100">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block px-3 py-2 rounded-lg bg-blue-600 text-white text-center" onClick={() => setOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
