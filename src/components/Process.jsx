import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Discover',
    desc: 'We align on goals, audience, and constraints through a focused kickoff.',
  },
  {
    title: 'Design',
    desc: 'We explore options, prototype interactions, and refine the blue visual system.',
  },
  {
    title: 'Build',
    desc: 'We implement with performance and accessibility best practices.',
  },
  {
    title: 'Launch',
    desc: 'We deploy, measure, and iterate for impact.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">A clear, collaborative process</h2>
          <p className="mt-4 text-slate-600">
            Transparent milestones, weekly check-ins, and shared artifacts keep everyone aligned.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
