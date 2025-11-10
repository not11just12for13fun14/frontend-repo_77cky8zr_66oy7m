import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Aisha K.',
    role: 'CMO, Fintech Startup',
    quote:
      'They nailed the blue aesthetic—clean, modern, and premium. Our conversions jumped 34% after launch.',
  },
  {
    name: 'Marco V.',
    role: 'Founder, SaaS Tool',
    quote:
      'Smooth process and strong craft. The site feels fast and intentional. Couldn’t be happier.',
  },
  {
    name: 'Lena S.',
    role: 'Head of Marketing, Healthcare',
    quote:
      'They translated complex services into a simple, trustworthy story that our audience loves.',
  },
]

function Stars() {
  return (
    <div className="flex text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What clients say</h2>
          <p className="mt-4 text-slate-600">
            We care about clarity, details, and outcomes. Here’s what partners share about working with us.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Stars />
              <blockquote className="mt-3 text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">
                <span className="font-semibold text-slate-800">{t.name}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
