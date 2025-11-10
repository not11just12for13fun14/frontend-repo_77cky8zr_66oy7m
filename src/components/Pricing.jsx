const plans = [
  {
    name: 'Starter',
    price: '$1,200',
    desc: 'Best for small projects or MVPs',
    features: ['1 landing page', 'Basic brand kit', '1 round of revisions', '2-week delivery'],
  },
  {
    name: 'Growth',
    price: '$3,800',
    desc: 'For growing teams needing a full site',
    features: ['Up to 6 pages', 'Full brand system', 'CMS integration', '3 rounds of revisions'],
  },
  {
    name: 'Premium',
    price: 'Custom',
    desc: 'Complex scope, integrations, or timelines',
    features: ['Custom components', 'Animations & Lottie', 'Advanced analytics', 'Priority support'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600">Pick what fits your goals. Every plan includes weekly updates and QA.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <span className="text-2xl font-bold text-blue-700">{p.price}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700">Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
