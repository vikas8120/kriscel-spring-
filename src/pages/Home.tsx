import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero3D from '../components/Hero3D';
import Modal from '../components/Modal';
import { clientLogos, industries, manufacturing, products, qualitySteps, stats, testimonials, trustBadges } from '../data/content';
import { useToast } from '../hooks/useToast';

export default function Home() {
  const toast = useToast();
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[number] | null>(null);
  const [quoteProduct, setQuoteProduct] = useState('Compression Springs');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const applyFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const fallback = img.dataset.fallback;
    if (fallback) {
      img.onerror = null;
      img.src = fallback;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => setTestimonialIndex((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = useMemo(() => testimonials[testimonialIndex], [testimonialIndex]);

  return (
    <div className="pb-12">
      <section className="relative overflow-hidden px-4 pt-8 md:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(102deg,#e6effa_0%,#dbe9f9_52%,#d0e1f5_100%)]" />

        <div className="relative mx-auto grid min-h-[82vh] w-full max-w-7xl items-center gap-10 pb-12 pt-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-4 text-xs uppercase tracking-[0.33em] text-[#2d67b3]">Industrial Spring Engineering</p>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="text-4xl font-semibold leading-tight text-[#153e75] md:text-6xl"
            >
              <motion.span
                animate={{ backgroundPositionX: ['0%', '100%'] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                className="inline-block bg-[linear-gradient(95deg,#153e75_0%,#2f6fbc_45%,#153e75_100%)] bg-[length:220%_100%] bg-clip-text text-transparent"
              >
                Powering Machines with Precision Springs
              </motion.span>
            </motion.h1>
            <p className="mt-5 max-w-xl text-base text-[#4e6282]">Advanced metallurgy, CNC precision, and validated quality systems for next-generation mechanical systems.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="rounded-full border border-[#0f5db6] bg-white px-7 py-3 text-sm font-extrabold tracking-[0.04em] text-[#0f5db6] shadow-[0_14px_28px_rgba(15,93,182,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f2f8ff]">Explore Products</Link>
              <Link to="/quote" className="rounded-full border border-[#0f5db6] bg-white px-7 py-3 text-sm font-extrabold tracking-[0.04em] text-[#0f5db6] shadow-[0_14px_28px_rgba(15,93,182,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f2f8ff]">Get a Quote</Link>
            </div>

            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {trustBadges.map((badge) => (
                <motion.span key={badge} whileHover={{ y: -4 }} className="rounded-full border border-[#0f5db6] bg-[linear-gradient(145deg,#2b75d2_0%,#0f5db6_100%)] px-4 py-2.5 text-center text-xs font-bold text-white shadow-[0_10px_22px_rgba(15,93,182,0.28)]">
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[560px] card-3d-wrap">
            <motion.div whileHover={{ rotateX: 5, rotateY: -6, y: -8 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }} className="card-3d absolute -right-4 top-5 h-[520px] w-[560px] bg-transparent">
              <Hero3D />
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity }} className="absolute left-4 top-16 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-xs text-slate-600 shadow-soft">
              <p className="font-semibold text-slate-800">Precision Coiling</p>
              <p>Micron-level tolerance control</p>
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 6.5, repeat: Infinity }} className="absolute bottom-8 right-0 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-xs text-slate-600 shadow-soft">
              <p className="font-semibold text-slate-800">Live QA Monitoring</p>
              <p>Load and fatigue verified</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-14 w-full max-w-7xl px-4 md:px-8">
        <div className="mb-7 flex items-end justify-between">
          <h2 className="text-3xl font-semibold text-[#0f1f36] md:text-4xl">3D Product Showcase</h2>
          <Link to="/products" className="text-sm font-semibold text-[var(--red)]">View all products</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="card-3d-wrap">
              <motion.article whileHover={{ y: -10, rotateX: 5, rotateY: -5 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }} className="card-3d overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <div className="relative h-64 overflow-hidden bg-[#151b25]">
                  <img src={p.image} data-fallback={p.fallbackImage} onError={applyFallback} loading="lazy" alt={p.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="depth-layer p-5">
                  <h3 className="text-2xl font-semibold text-[#0f1f36]">{p.name}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{p.description}</p>
                  <p className="mt-3 text-sm text-slate-700"><span className="font-semibold">Material:</span> {p.material}</p>
                  <div className="mt-4 flex gap-3">
                    <button onClick={() => setSelectedProduct(p)} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-[#0f5db6] hover:border-[#0f5db6]">View Details</button>
                    <button onClick={() => { setQuoteProduct(p.name); toast(`Quote request started for ${p.name}`); }} className="rounded-md bg-[var(--red)] px-4 py-2 text-sm font-semibold text-white">Request Quote</button>
                  </div>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-8">
        <h2 className="mb-6 text-3xl font-semibold text-[#0f1f36] md:text-4xl">Manufacturing Excellence</h2>
        <div className="space-y-6">
          {manufacturing.map((item, i) => (
            <div key={item.title} className="card-3d-wrap">
              <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} whileHover={{ y: -8 }} viewport={{ once: true }} className="card-3d grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft lg:grid-cols-2">
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover lg:h-full" />
                <div className="depth-layer flex items-center p-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[var(--red)]">Facility</p>
                    <h3 className="mt-3 text-3xl font-semibold text-[#0f1f36]">{item.title}</h3>
                    <p className="mt-4 text-[var(--muted)]">{item.copy}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-8">
        <h2 className="mb-6 text-3xl font-semibold text-[#0f1f36] md:text-4xl">Industries We Power</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((i) => (
            <div key={i.name} className="card-3d-wrap">
              <motion.div whileHover={{ y: -8, rotateX: 4, rotateY: -4 }} className="card-3d group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <img src={i.image} alt={i.name} onError={applyFallback} data-fallback="/images/industries/heavy-machinery.png" className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <p className="depth-layer absolute bottom-5 left-5 text-xl font-semibold text-white">{i.name}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-8">
        <h2 className="mb-6 text-3xl font-semibold text-[#0f1f36] md:text-4xl">Quality Process Timeline</h2>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[#0f203b] p-6 shadow-[0_24px_60px_rgba(10,20,35,0.24)]">
          <div className="relative flex snap-x snap-mandatory items-center gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-6 lg:gap-5 lg:overflow-visible lg:pb-0">
            {qualitySteps.map((step, idx) => (
              <motion.div key={step} whileHover={{ y: -6 }} className="flex min-w-[220px] snap-start items-center gap-4 lg:min-w-0 lg:flex-col lg:items-stretch">
                <div className="rounded-2xl border border-white/20 bg-white p-4 shadow-soft">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--red)]">Step {idx + 1}</p>
                  <p className="mt-2 text-2xl font-semibold leading-tight text-slate-900">{step}</p>
                </div>
                {idx < qualitySteps.length - 1 && <div className="hidden h-[2px] w-10 bg-gradient-to-r from-red-500 to-red-300 lg:block lg:w-full" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-20 w-full max-w-7xl overflow-hidden rounded-3xl border border-slate-200 bg-white px-4 py-14 shadow-soft md:px-10">
        <div className="absolute inset-0 bg-lux-grid opacity-30" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--red)]">Engineering Legacy</p>
          <h2 className="mt-3 text-4xl font-semibold text-[#0f1f36] md:text-5xl">Premium About</h2>
          <p className="mt-4 max-w-3xl text-[var(--muted)]">Since 1998, Kriscel Tech has built mission-ready spring systems for industrial programs where reliability is non-negotiable.</p>
          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((s, idx) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-4xl font-semibold text-[var(--red)]">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-700">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-8">
        <h2 className="mb-6 text-3xl font-semibold text-[#0f1f36] md:text-4xl">Testimonials & Clients</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft lg:col-span-2">
            <motion.div key={activeTestimonial.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--red)]">Client Voice</p>
              <p className="mt-3 text-2xl font-medium leading-relaxed text-[#0f1f36] md:text-3xl">"{activeTestimonial.quote}"</p>
              <p className="mt-6 text-base text-slate-600">{activeTestimonial.name} · {activeTestimonial.company}</p>
            </motion.div>
            <div className="mt-6 flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setTestimonialIndex(i)} className={`h-2.5 w-10 rounded-full transition ${i === testimonialIndex ? 'bg-[var(--red)]' : 'bg-slate-300'}`} />)}</div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="mb-5 text-lg font-semibold text-slate-900">Trusted by leading OEMs</p>
            <div className="space-y-2">
              {clientLogos.map((c) => <p key={c} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium tracking-wide text-slate-600">{c}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-7xl rounded-3xl px-4 pb-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-soft lg:p-10">
          <div className="absolute inset-0 bg-lux-grid opacity-25" />
          <div className="relative grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--red)]">Direct Engineering Desk</p>
              <h2 className="mt-3 text-4xl font-semibold text-[#0f1f36]">Contact + Quick Quote</h2>
              <p className="mt-4 max-w-md text-[var(--muted)]">Talk to our engineering team for custom load curves, lifecycle simulations, and production planning.</p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-700">Fast response in under 24 hours for OEM and custom spring programs.</p>
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); toast('Quote submitted successfully.'); }} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <input value={quoteProduct} onChange={(e) => setQuoteProduct(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100" />
              <input required placeholder="Quantity" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100" />
              <input required placeholder="Company" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100" />
              <label className="block rounded-xl border border-dashed border-slate-400 bg-slate-50 px-4 py-3 text-sm text-slate-600">Upload drawing placeholder<input type="file" className="mt-2 block text-xs text-slate-600" /></label>
              <button className="w-full rounded-xl bg-[var(--red)] px-5 py-3 text-lg font-semibold text-white transition hover:bg-[var(--red-strong)]">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <Modal open={!!selectedProduct} onClose={() => setSelectedProduct(null)} title={selectedProduct?.name || ''}>
        <img src={selectedProduct?.image} data-fallback={selectedProduct?.fallbackImage} onError={applyFallback} loading="lazy" alt={selectedProduct?.name || ''} className="h-64 w-full rounded-xl object-cover" />
        <p className="mt-3 text-[var(--muted)]">{selectedProduct?.description}</p>
        <p className="mt-3 text-sm"><span className="font-semibold">Material:</span> {selectedProduct?.material}</p>
        <p className="text-sm"><span className="font-semibold">Application:</span> {selectedProduct?.application}</p>
      </Modal>
    </div>
  );
}

