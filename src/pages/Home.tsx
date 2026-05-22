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
    <div className="pb-10">
      <section className="relative min-h-[92vh] overflow-hidden px-4 md:px-8">
        <img src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1800&q=80" alt="factory" className="absolute inset-0 h-full w-full object-cover opacity-48" />
        <div className="red-beam absolute left-[8%] top-0 h-[80%] w-20 blur-2xl" />
        <div className="red-beam absolute right-[15%] top-0 h-[90%] w-24 blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/72 via-white/55 to-white/38" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.75),transparent_45%)]" />

        <div className="relative mx-auto grid min-h-[88vh] w-full max-w-7xl items-center gap-10 pt-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/60 bg-white/45 p-6 shadow-[0_18px_40px_rgba(20,30,50,0.14)] backdrop-blur-md md:p-8">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-red-600">Industrial Spring Engineering Showroom</p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">Precision Springs Built for Extreme Industrial Performance</h1>
            <p className="mt-5 max-w-xl text-base text-slate-700">Advanced metallurgy, CNC precision, and aerospace-grade validation for next-generation mechanical systems.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="rounded-xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur-md transition hover:scale-[1.03]">Explore Products</Link>
              <Link to="/quote" className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold shadow-[0_0_26px_rgba(255,45,45,0.5)] transition hover:scale-[1.03]">Get a Quote</Link>
            </div>
            <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {trustBadges.map((badge) => <span key={badge} className="rounded-xl border border-white/70 bg-white/85 px-3 py-2 text-center text-xs text-slate-700 shadow-sm">{badge}</span>)}
            </div>
          </div>

          <div className="glass h-[520px] overflow-hidden rounded-3xl">
            <Hero3D />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-8">
        <div className="mb-7 flex items-end justify-between">
          <h2 className="text-3xl font-semibold md:text-4xl">3D Product Showcase</h2>
          <Link to="/products" className="text-sm text-red-300">View all products</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((p) => (
            <motion.article key={p.name} whileHover={{ y: -8, rotateX: 3, rotateY: -3 }} className="glass group overflow-hidden rounded-2xl border border-white/50 shadow-[0_18px_40px_rgba(10,20,35,0.16)] transition hover:shadow-[0_0_35px_rgba(230,20,20,0.22)]">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  data-fallback={p.fallbackImage}
                  onError={applyFallback}
                  loading="lazy"
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{p.description}</p>
                <p className="mt-3 text-sm"><span className="font-semibold">Material:</span> {p.material}</p>
                <div className="mt-4 flex gap-3">
                  <button onClick={() => setSelectedProduct(p)} className="rounded-xl border border-white/25 px-4 py-2 text-sm">View Details</button>
                  <button onClick={() => { setQuoteProduct(p.name); toast(`Quote request started for ${p.name}`); }} className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm">Request Quote</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-8">
        <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Manufacturing Excellence</h2>
        <div className="space-y-6">
          {manufacturing.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass grid overflow-hidden rounded-2xl lg:grid-cols-2">
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover lg:h-full" />
              <div className="flex items-center p-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-red-300">Facility</p>
                  <h3 className="mt-3 text-3xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-[var(--muted)]">{item.copy}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-8">
        <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Industries We Power</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((i) => (
            <motion.div key={i.name} whileHover={{ y: -8 }} className="glass group relative overflow-hidden rounded-2xl">
              <img src={i.image} alt={i.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xl font-semibold">{i.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-8">
        <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Quality Process Timeline</h2>
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0f131a] via-[#151c27] to-[#232f43] p-6 shadow-[0_24px_70px_rgba(10,20,35,0.25)]">
          <div className="pointer-events-none absolute -left-8 top-8 h-44 w-44 rounded-full bg-red-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 bottom-8 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative flex snap-x snap-mandatory items-center gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-6 lg:gap-5 lg:overflow-visible lg:pb-0">
            {qualitySteps.map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex min-w-[220px] snap-start items-center gap-4 lg:min-w-0 lg:flex-col lg:items-stretch"
              >
                <div className="w-full rounded-2xl border border-white/20 bg-white/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Step {idx + 1}</p>
                  <p className="mt-2 text-2xl font-semibold leading-tight text-slate-900">{step}</p>
                </div>
                {idx < qualitySteps.length - 1 && <div className="hidden h-[2px] w-10 bg-gradient-to-r from-red-500 to-red-300 lg:block lg:w-full" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-20 w-full max-w-7xl overflow-hidden rounded-3xl border border-slate-200/70 px-4 py-14 shadow-[0_25px_65px_rgba(12,25,40,0.2)] md:px-10">
        <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1800&q=80" alt="about" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1018]/85 via-[#121c2a]/78 to-[#1b2435]/76" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-red-500/25 blur-3xl" />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-red-300">Engineering Legacy</p>
          <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Premium About</h2>
          <p className="mt-4 max-w-3xl text-slate-200">
            Since 1998, kriscel tech has built mission-ready spring systems for industrial programs where reliability is non-negotiable.
          </p>
          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-2xl border border-white/20 bg-white/92 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
              >
                <p className="text-4xl font-semibold text-red-600">{s.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-700">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-7xl px-4 md:px-8">
        <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Testimonials & Clients</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0f1621] via-[#1a2433] to-[#26354a] p-7 shadow-[0_24px_65px_rgba(10,24,40,0.24)] lg:col-span-2">
            <div className="pointer-events-none absolute -left-8 top-5 h-40 w-40 rounded-full bg-red-500/25 blur-3xl" />
            <div className="pointer-events-none absolute right-8 top-2 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
            <motion.div key={activeTestimonial.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="relative">
              <p className="text-sm uppercase tracking-[0.22em] text-red-300">Client Voice</p>
              <p className="mt-3 text-2xl font-medium leading-relaxed text-white md:text-3xl">"{activeTestimonial.quote}"</p>
              <p className="mt-6 text-base text-slate-300">{activeTestimonial.name} · {activeTestimonial.company}</p>
            </motion.div>
            <div className="relative mt-6 flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setTestimonialIndex(i)} className={`h-2.5 w-10 rounded-full transition ${i === testimonialIndex ? 'bg-red-400 shadow-[0_0_18px_rgba(248,70,70,0.8)]' : 'bg-white/25'}`} />)}</div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/92 p-6 shadow-[0_18px_50px_rgba(15,30,45,0.16)]">
            <p className="mb-5 text-lg font-semibold text-slate-900">Trusted by leading OEMs</p>
            <div className="space-y-2">
              {clientLogos.map((c) => (
                <p key={c} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium tracking-wide text-slate-600 shadow-sm">{c}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-7xl rounded-3xl px-4 pb-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-[#0f1622] via-[#162131] to-[#223145] p-7 shadow-[0_28px_70px_rgba(10,20,35,0.26)] lg:p-10">
          <img src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1800&q=80" alt="engineering background" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/35" />
          <div className="relative grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-red-300">Direct Engineering Desk</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Contact + Quick Quote</h2>
              <p className="mt-4 max-w-md text-slate-200">Talk to our engineering team for custom load curves, lifecycle simulations, and production planning.</p>
              <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-sm text-slate-100">Fast response in under 24 hours for OEM and custom spring programs.</p>
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); toast('Quote submitted successfully.'); }} className="space-y-3 rounded-2xl border border-white/20 bg-white/92 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.2)]">
              <input value={quoteProduct} onChange={(e) => setQuoteProduct(e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200" />
              <input required placeholder="Quantity" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200" />
              <input required placeholder="Company" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-200" />
              <label className="block rounded-xl border border-dashed border-slate-400 bg-slate-50 px-4 py-3 text-sm text-slate-600">Upload drawing placeholder<input type="file" className="mt-2 block text-xs text-slate-600" /></label>
              <button className="w-full rounded-xl bg-[var(--accent)] px-5 py-3 text-lg font-semibold text-white shadow-[0_0_24px_rgba(255,45,45,0.45)] transition hover:scale-[1.01]">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <Modal open={!!selectedProduct} onClose={() => setSelectedProduct(null)} title={selectedProduct?.name || ''}>
        <img
          src={selectedProduct?.image}
          data-fallback={selectedProduct?.fallbackImage}
          onError={applyFallback}
          loading="lazy"
          alt={selectedProduct?.name || ''}
          className="h-64 w-full rounded-xl object-cover"
        />
        <p className="mt-3 text-[var(--muted)]">{selectedProduct?.description}</p>
        <p className="mt-3 text-sm"><span className="font-semibold">Material:</span> {selectedProduct?.material}</p>
        <p className="text-sm"><span className="font-semibold">Application:</span> {selectedProduct?.application}</p>
      </Modal>
    </div>
  );
}


