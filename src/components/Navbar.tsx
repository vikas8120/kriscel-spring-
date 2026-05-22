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
      <nav className="glass mx-auto flex w-full max-w-7xl items-center gap-3 rounded-2xl px-4 py-3">
        <Link to="/" className="text-lg font-semibold tracking-[0.2em]">KRISCEL <span className="text-[var(--accent)]">TECH</span></Link>

        <div className="ml-auto hidden items-center gap-6 lg:flex">
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button className="cursor-pointer text-sm text-[var(--muted)] transition hover:text-[var(--text)]">Products</button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="glass absolute top-8 grid min-w-44 gap-2 rounded-xl p-3 text-sm">
                  <Link to="/products">3D Showcase</Link>
                  <Link to="/quote">Request Quote</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
            <button className="cursor-pointer text-sm text-[var(--muted)] transition hover:text-[var(--text)]">Company</button>
            <AnimatePresence>
              {companyOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="glass absolute top-8 grid min-w-44 gap-2 rounded-xl p-3 text-sm">
                  <Link to="/about">About</Link>
                  <Link to="/infrastructure">Infrastructure</Link>
                  <Link to="/quality">Quality</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `text-sm transition ${isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--text)]'}`}>
              {item.name}
            </NavLink>
          ))}

          <Link to="/quote" className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold shadow-[0_0_25px_rgba(255,45,45,0.4)] transition hover:scale-[1.03]">Get Quote</Link>
        </div>

        <button className="ml-auto lg:hidden" onClick={() => setOpen((v) => !v)}>☰</button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="glass mx-auto mt-2 grid w-full max-w-7xl gap-2 rounded-2xl p-4 lg:hidden">
            <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
            <Link to="/about" onClick={() => setOpen(false)}>Company</Link>
            {navLinks.map((item) => <Link key={item.path} to={item.path} onClick={() => setOpen(false)}>{item.name}</Link>)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


