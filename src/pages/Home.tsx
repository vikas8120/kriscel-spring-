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

  useEffect(() => {
    const timer = setInterval(() => setTestimonialIndex((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = useMemo(() => testimonials[testimonialIndex], [testimonialIndex]);

  return (
    <div className="pb-10">
      <section className="relative min-h-[92vh] overflow-hidden px-4 md:px-8">
        <img src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&w=1800&q=80" alt="factory" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="red-beam absolute left-[8%] top-0 h-[80%] w-20 blur-2xl" />
        <div className="red-beam absolute right-[15%] top-0 h-[90%] w-24 blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />

        <div className="relative mx-auto grid min-h-[88vh] w-full max-w-7xl items-center gap-10 pt-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-red-300">Industrial Spring Engineering Showroom</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Precision Springs Built for Extreme Industrial Performance</h1>
            <p className="mt-5 max-w-xl text-base text-slate-300">Advanced metallurgy, CNC precision, and aerospace-grade validation for next-generation mechanical systems.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-md transition hover:scale-[1.03]">Explore Products</Link>
              <Link to="/quote" className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold shadow-[0_0_26px_rgba(255,45,45,0.5)] transition hover:scale-[1.03]">Get a Quote</Link>
            </div>
            <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {trustBadges.map((badge) => <span key={badge} className="glass rounded-xl px-3 py-2 text-center text-xs">{badge}</span>)}
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
            <motion.article key={p.name} whileHover={{ y: -6, rotateX: 2, rotateY: -2 }} className="glass group overflow-hidden rounded-2xl">
              <div className="relative h-56 overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
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

      <section className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-8">
        <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Quality Process Timeline</h2>
        <div className="glass overflow-x-auto rounded-2xl p-5">
          <div className="flex min-w-max items-center gap-4">
            {qualitySteps.map((step, idx) => (
              <div key={step} className="flex items-center gap-4">
                <div className="w-52 rounded-xl border border-white/20 bg-black/30 p-4">
                  <p className="text-xs text-red-300">Step {idx + 1}</p>
                  <p className="mt-2 font-semibold">{step}</p>
                </div>
                {idx < qualitySteps.length - 1 && <div className="h-[2px] w-14 bg-red-400" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto mt-16 w-full max-w-7xl overflow-hidden rounded-2xl px-4 py-12 md:px-10">
        <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1800&q=80" alt="about" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative">
          <h2 className="text-3xl font-semibold md:text-4xl">Premium About</h2>
          <p className="mt-4 max-w-3xl text-[var(--muted)]">Since 1998, kriscel tech has built mission-ready spring systems for industrial programs where reliability is non-negotiable.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {stats.map((s) => <div key={s.label} className="glass rounded-xl p-5"><p className="text-3xl font-semibold text-red-300">{s.value}</p><p className="mt-1 text-sm text-[var(--muted)]">{s.label}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-7xl px-4 md:px-8">
        <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Testimonials & Clients</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <motion.div key={activeTestimonial.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-lg">"{activeTestimonial.quote}"</p>
              <p className="mt-5 text-sm text-[var(--muted)]">{activeTestimonial.name} · {activeTestimonial.company}</p>
            </motion.div>
            <div className="mt-4 flex gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setTestimonialIndex(i)} className={`h-2 w-8 rounded-full ${i === testimonialIndex ? 'bg-red-400' : 'bg-white/20'}`} />)}</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <p className="mb-4 font-semibold">Trusted by leading OEMs</p>
            <div className="space-y-2">{clientLogos.map((c) => <p key={c} className="text-sm text-[var(--muted)]">{c}</p>)}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-7xl rounded-2xl px-4 pb-4 md:px-8">
        <div className="glass grid gap-8 rounded-2xl p-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Contact + Quick Quote</h2>
            <p className="mt-3 text-[var(--muted)]">Talk to our engineering team for custom load curves and production planning.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); toast('Quote submitted successfully.'); }} className="space-y-3">
            <input value={quoteProduct} onChange={(e) => setQuoteProduct(e.target.value)} className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3" />
            <input required placeholder="Quantity" className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3" />
            <input required placeholder="Company" className="w-full rounded-xl border border-white/20 bg-black/30 px-4 py-3" />
            <label className="block rounded-xl border border-dashed border-white/30 bg-black/20 px-4 py-3 text-sm text-[var(--muted)]">Upload drawing placeholder<input type="file" className="mt-2 block text-xs" /></label>
            <button className="w-full rounded-xl bg-[var(--accent)] px-5 py-3 font-semibold">Submit</button>
          </form>
        </div>
      </section>

      <Modal open={!!selectedProduct} onClose={() => setSelectedProduct(null)} title={selectedProduct?.name || ''}>
        <img src={selectedProduct?.image} alt={selectedProduct?.name || ''} className="h-52 w-full rounded-xl object-cover" />
        <p className="mt-3 text-[var(--muted)]">{selectedProduct?.description}</p>
        <p className="mt-3 text-sm"><span className="font-semibold">Material:</span> {selectedProduct?.material}</p>
        <p className="text-sm"><span className="font-semibold">Application:</span> {selectedProduct?.application}</p>
      </Modal>
    </div>
  );
}


