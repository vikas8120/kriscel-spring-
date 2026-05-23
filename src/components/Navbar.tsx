import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full translate-y-0">
      <div className="w-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
        <div className={`mx-auto grid w-full max-w-7xl items-center gap-4 px-4 transition-all duration-300 md:grid-cols-[1.2fr_1fr_0.9fr] md:px-6 ${scrolled ? 'py-2' : 'py-4'}`}>
          <Link to="/" className="block text-slate-900">
            <img
              src="/images/brand/kriscel-tech-logo.svg"
              alt="Kriscel Tech"
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-10' : 'h-12 md:h-14'}`}
            />
          </Link>

          <div className={`hidden md:block ${scrolled ? 'opacity-0 pointer-events-none h-0 overflow-hidden' : 'opacity-100'}`} />

        </div>
      </div>

      <nav className="w-full bg-[#0f5db6] text-white shadow-[0_6px_16px_rgba(0,0,0,0.14)]">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-7 px-4 md:px-6">
          <div className={`hidden items-center gap-7 transition-all duration-300 lg:flex ${scrolled ? 'py-2.5' : 'py-4'}`}>
            <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <button className="cursor-pointer text-[15px] font-semibold uppercase tracking-wide text-white/95 transition hover:text-[#ffd646]">Products</button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-9 grid min-w-48 gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-[0_18px_34px_rgba(20,30,45,0.12)]">
                    <Link to="/products">Product Showcase</Link>
                    <Link to="/quote">Request Quote</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
              <button className="cursor-pointer text-[15px] font-semibold uppercase tracking-wide text-white/95 transition hover:text-[#ffd646]">Company</button>
              <AnimatePresence>
                {companyOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-9 grid min-w-48 gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700 shadow-[0_18px_34px_rgba(20,30,45,0.12)]">
                    <Link to="/about">About</Link>
                    <Link to="/infrastructure">Infrastructure</Link>
                    <Link to="/quality">Quality</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((item) => (
              <NavLink key={item.path} to={item.path} className={({ isActive }) => `relative text-[15px] font-semibold uppercase tracking-wide transition ${isActive ? 'text-[#ffd646] after:absolute after:-bottom-4 after:left-0 after:h-[2px] after:w-full after:bg-[#ffd646]' : 'text-white/95 hover:text-[#ffd646]'}`}>
                {item.name}
              </NavLink>
            ))}

            <Link to="/quote" className={`ml-2 bg-[linear-gradient(145deg,#f6b10c_0%,#f39c00_100%)] font-bold uppercase tracking-wide text-[#0f1f36] shadow-[0_8px_18px_rgba(243,156,0,0.45)] transition hover:brightness-105 ${scrolled ? 'px-4 py-2.5 text-[13px]' : 'px-5 py-4 text-[15px]'}`}>Request a Quote</Link>
          </div>

          <button className="ml-auto py-4 text-white lg:hidden" onClick={() => setOpen((v) => !v)}>☰</button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto grid w-full max-w-7xl gap-2 border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(10,25,45,0.12)] lg:hidden">
            <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link to="/about" onClick={() => setOpen(false)}>Company</Link>
            {navLinks.map((item) => <Link key={item.path} to={item.path} onClick={() => setOpen(false)}>{item.name}</Link>)}
            <Link to="/quote" onClick={() => setOpen(false)} className="mt-1 rounded bg-[var(--accent)] px-3 py-2 text-center font-semibold">Request a Quote</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
