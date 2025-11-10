import { Sparkles, Rocket, Palette, MonitorSmartphone } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Brand Strategy',
    desc: 'Clear positioning, naming, and tone. Built for trust and recall.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Web Experience',
    desc: 'Modern, responsive websites with crisp blue aesthetics and fast performance.',
  },
  {
    icon: Palette,
    title: 'Visual Identity',
    desc: 'Logos, color systems, and typography with depth and consistency.',
  },
  {
    icon: Rocket,
    title: 'Launch & Growth',
    desc: 'Analytics, SEO, and conversion experiments to drive measurable results.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services crafted for outcomes</h2>
          <p className="mt-4 text-slate-600">
            Everything you need to launch, refresh, or scale your presence with a blue-forward visual language.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-600/10 text-blue-700 grid place-items-center mb-4 group-hover:scale-105 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
