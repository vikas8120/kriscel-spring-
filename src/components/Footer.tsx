import { Link } from 'react-router-dom';
import { clientLogos } from '../data/content';

export default function Footer() {
  return (
    <footer className="mt-20 px-4 pb-6 md:px-8">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-slate-300 bg-[#f2f5f9] text-slate-800 shadow-[0_16px_36px_rgba(15,31,54,0.10)]">
        <div className="section-wrap grid gap-10 py-12 pl-3 md:grid-cols-4 md:pl-6">
        <div>
          <p className="text-xl font-semibold tracking-[0.2em]">KRISCEL TECH</p>
          <p className="mt-3 text-sm text-slate-600">Precision spring and formed-metal solutions for demanding industrial applications.</p>
          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--red)]">ISO 9001:2015 Certified</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Information</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link to="/about" className="hover:text-[var(--navy)]">About Us</Link>
            <Link to="/industry" className="hover:text-[var(--navy)]">Industry</Link>
            <Link to="/infrastructure" className="hover:text-[var(--navy)]">Infrastructure</Link>
            <Link to="/quality" className="hover:text-[var(--navy)]">Quality</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Our Products</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link to="/products" className="hover:text-[var(--navy)]">Compression Springs</Link>
            <Link to="/products" className="hover:text-[var(--navy)]">Extension Springs</Link>
            <Link to="/products" className="hover:text-[var(--navy)]">Torsion Springs</Link>
            <Link to="/products" className="hover:text-[var(--navy)]">Wire Forms</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Get In Touch</p>
          <p className="mt-3 text-sm text-slate-600">sales@krisceltech.com</p>
          <p className="text-sm text-slate-600">+91 98765 43210</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {clientLogos.slice(0, 3).map((logo) => (
              <span key={logo} className="rounded border border-slate-300 bg-white/70 px-2 py-1 text-[10px] tracking-wide text-slate-600">{logo}</span>
            ))}
          </div>
        </div>
        </div>
        <div className="border-t border-slate-300 py-3 text-center text-xs text-slate-500">© {new Date().getFullYear()} Kriscel Tech. All rights reserved.</div>
      </div>
    </footer>
  );
}
