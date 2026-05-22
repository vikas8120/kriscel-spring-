import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-3 pt-3 md:px-6">
      <nav className="mx-auto flex w-full max-w-7xl items-center gap-3 rounded-[1.35rem] border border-white/70 bg-white/80 px-4 py-3 shadow-[0_18px_40px_rgba(13,26,45,0.14)] backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-[0.22em] text-slate-900">
          <span className="metal relative grid h-10 w-10 place-items-center rounded-xl border border-white/50 shadow-[0_10px_22px_rgba(0,0,0,0.2)]">
            <span className="h-4 w-4 rounded-full border-2 border-black/40" />
            <span className="absolute h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          <span>KRISCEL <span className="text-[var(--accent)]">TECH</span></span>
        </Link>

        <div className="ml-auto hidden items-center gap-7 lg:flex">
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button className="cursor-pointer text-[15px] font-medium text-slate-600 transition hover:text-slate-900">Products</button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-9 grid min-w-48 gap-2 rounded-xl border border-slate-200 bg-white/95 p-3 text-sm shadow-[0_18px_34px_rgba(20,30,45,0.12)]">
                  <Link to="/products">3D Showcase</Link>
                  <Link to="/quote">Request Quote</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
            <button className="cursor-pointer text-[15px] font-medium text-slate-600 transition hover:text-slate-900">Company</button>
            <AnimatePresence>
              {companyOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-9 grid min-w-48 gap-2 rounded-xl border border-slate-200 bg-white/95 p-3 text-sm shadow-[0_18px_34px_rgba(20,30,45,0.12)]">
                  <Link to="/about">About</Link>
                  <Link to="/infrastructure">Infrastructure</Link>
                  <Link to="/quality">Quality</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `relative text-[15px] font-medium transition ${isActive ? 'text-[var(--accent)] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-[var(--accent)]' : 'text-slate-600 hover:text-slate-900'}`}>
              {item.name}
            </NavLink>
          ))}

          <Link to="/quote" className="rounded-2xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(255,45,45,0.45)] transition hover:scale-[1.03]">Get Quote</Link>
        </div>

        <button className="ml-auto rounded-lg border border-slate-300 bg-white/70 px-3 py-1 text-slate-700 lg:hidden" onClick={() => setOpen((v) => !v)}>☰</button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 grid w-full max-w-7xl gap-2 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_12px_30px_rgba(10,25,45,0.12)] lg:hidden">
            <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link to="/about" onClick={() => setOpen(false)}>Company</Link>
            {navLinks.map((item) => <Link key={item.path} to={item.path} onClick={() => setOpen(false)}>{item.name}</Link>)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


