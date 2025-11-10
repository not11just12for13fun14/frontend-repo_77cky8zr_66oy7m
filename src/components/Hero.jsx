import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] bg-blue-700/20 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Elevate your business with premium blue service design
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 text-lg text-slate-600 max-w-xl">
              We craft modern, conversion-focused websites and brand experiences with a clean, blue-forward aesthetic.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm">
                Get a free quote
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900/5 hover:bg-slate-900/10 text-slate-800 font-semibold">
                Explore services
              </a>
            </motion.div>
            <div className="mt-10 flex items-center gap-6 text-slate-600">
              <div>
                <p className="text-3xl font-bold text-slate-900">120+</p>
                <p className="text-sm">Projects delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">98%</p>
                <p className="text-sm">Client satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">5.0</p>
                <p className="text-sm">Average rating</p>
              </div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.15)_100%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center text-white px-8">
                  <p className="text-sm uppercase tracking-widest/loose text-blue-100/90">Blue-first Craft</p>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-semibold">High-impact visuals, clean UX</h3>
                  <p className="mt-3 text-blue-100/90 max-w-md">
                    We blend motion, depth, and clarity. The result: a site that feels premium and converts better.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
