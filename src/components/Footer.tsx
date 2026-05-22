import { clientLogos } from '../data/content';

export default function Footer() {
  return (
    <footer className="mt-24 px-4 pb-8 md:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0f1622] via-[#172333] to-[#25364f] px-8 py-14 shadow-[0_30px_75px_rgba(10,20,35,0.28)]">
        <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-red-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-25" />

        <div className="relative grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-2xl font-semibold tracking-[0.24em] text-white">KRISCEL TECH</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-200">Precision engineered springs for mission critical systems.</p>
            <div className="mt-5 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-red-300">
              Industrial Excellence
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <div className="mt-4 space-y-2 text-sm text-slate-200">
              <p className="transition hover:text-red-300">Home</p>
              <p className="transition hover:text-red-300">Products</p>
              <p className="transition hover:text-red-300">Contact</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Global Clients</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {clientLogos.map((c) => (
                <span key={c} className="rounded-lg border border-white/20 bg-white/12 px-3 py-1.5 text-xs tracking-wide text-slate-100 shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Contact</p>
            <p className="mt-4 text-sm text-slate-200">sales@krisceltech.com</p>
            <p className="text-sm text-slate-200">+91 98765 43210</p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-300">Mon-Sat · Engineering Desk</p>
          </div>
        </div>

        <div className="relative mt-10 border-t border-white/20 pt-4 text-xs text-slate-300">
          © {new Date().getFullYear()} Kriscel Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
