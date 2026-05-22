import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import { products } from '../data/content';
import { useToast } from '../hooks/useToast';

export default function Products() {
  const toast = useToast();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteTarget, setQuoteTarget] = useState('');
  const applyFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const fallback = img.dataset.fallback;
    if (fallback) {
      img.onerror = null;
      img.src = fallback;
    }
  };

  const filtered = useMemo(() => products.filter((p) => (category === 'all' || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase())), [query, category]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8">
      <h1 className="text-4xl font-semibold">3D Product Showcase</h1>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products" className="rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-white/20 bg-black/20 px-4 py-3">
          <option value="all">All Categories</option>
          <option value="dynamic">Dynamic</option>
          <option value="rotary">Rotary</option>
          <option value="custom">Custom</option>
          <option value="assembly">Assembly</option>
        </select>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p) => (
          <motion.article key={p.name} whileHover={{ y: -10, rotateX: 3, rotateY: -3 }} className="glass group overflow-hidden rounded-2xl border border-white/50 shadow-[0_18px_40px_rgba(10,20,35,0.16)] transition hover:shadow-[0_0_35px_rgba(230,20,20,0.22)]">
            <div className="relative h-64 overflow-hidden">
              <img
                src={p.image}
                data-fallback={p.fallbackImage}
                onError={applyFallback}
                loading="lazy"
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/22 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{p.description}</p>
              <p className="mt-2 text-sm"><span className="font-semibold">Material:</span> {p.material}</p>
              <p className="text-sm"><span className="font-semibold">Application:</span> {p.application}</p>
              <div className="mt-4 flex gap-3">
                <button onClick={() => setSelected(p)} className="rounded-xl border border-white/20 px-4 py-2 text-sm">View Details</button>
                <button onClick={() => { setQuoteTarget(p.name); setQuoteOpen(true); }} className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm">Request Quote</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name || ''}>
        <img
          src={selected?.image}
          data-fallback={selected?.fallbackImage}
          onError={applyFallback}
          loading="lazy"
          alt={selected?.name || ''}
          className="h-64 w-full rounded-xl object-cover"
        />
        <p className="mt-3">{selected?.description}</p>
      </Modal>

      <Modal open={quoteOpen} onClose={() => setQuoteOpen(false)} title={`Request Quote · ${quoteTarget}`}>
        <form onSubmit={(e) => { e.preventDefault(); setQuoteOpen(false); toast('Quote request submitted.'); }} className="space-y-3">
          <input defaultValue={quoteTarget} className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
          <input required placeholder="Quantity" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
          <input required placeholder="Industry" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
          <textarea placeholder="Message" className="h-24 w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
          <button className="w-full rounded-xl bg-[var(--accent)] px-4 py-3">Submit</button>
        </form>
      </Modal>
    </section>
  );
}

