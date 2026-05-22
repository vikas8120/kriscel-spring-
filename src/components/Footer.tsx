import { clientLogos } from '../data/content';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[var(--surface)]/70 px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <p className="text-xl font-semibold tracking-[0.2em]">KRISCEL TECH</p>
          <p className="mt-3 text-sm text-[var(--muted)]">Precision engineered springs for mission critical systems.</p>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <p className="mt-3 text-sm text-[var(--muted)]">Home</p><p className="text-sm text-[var(--muted)]">Products</p><p className="text-sm text-[var(--muted)]">Contact</p>
        </div>
        <div>
          <p className="font-semibold">Global Clients</p>
          <div className="mt-3 flex flex-wrap gap-2">{clientLogos.map((c) => <span key={c} className="rounded-lg border border-white/15 px-2 py-1 text-xs text-[var(--muted)]">{c}</span>)}</div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-3 text-sm text-[var(--muted)]">sales@krisceltech.com</p>
          <p className="text-sm text-[var(--muted)]">+91 98765 43210</p>
        </div>
      </div>
    </footer>
  );
}


