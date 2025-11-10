import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Let’s build something great</h2>
            <p className="mt-4 text-slate-600 max-w-prose">
              Tell us about your goals and timelines. We’ll reply within one business day with suggested next steps.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Avg. kickoff</p>
                <p className="text-2xl font-semibold text-slate-900">7 days</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">Typical timeline</p>
                <p className="text-2xl font-semibold text-slate-900">2–6 weeks</p>
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm grid gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="Your full name" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Budget</label>
                <select className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600">
                  <option>Under $2k</option>
                  <option>$2k–$5k</option>
                  <option>$5k–$10k</option>
                  <option>$10k+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Project details</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-600 focus:ring-blue-600" placeholder="What are you looking to create?" />
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => (window.location.href = 'mailto:hello@blueserve.studio')} className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                Send inquiry
              </button>
              <span className="text-sm text-slate-500">or email hello@blueserve.studio</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
