export default function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-gradient-to-t from-blue-50/60 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">B</div>
            <span className="text-slate-700">BlueServe</span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} BlueServe Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
