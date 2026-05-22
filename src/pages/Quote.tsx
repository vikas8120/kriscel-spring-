import { useState } from 'react';
import { industries, products } from '../data/content';
import { useToast } from '../hooks/useToast';

export default function Quote() {
  const toast = useToast();
  const [form, setForm] = useState({ productType: products[0].name, material: '', quantity: '', industry: industries[0].name, message: '' });
  return (
    <section className="mx-auto w-full max-w-4xl px-4 pb-12 md:px-8">
      <h1 className="text-4xl font-semibold">Get a Quote</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!form.material || !form.quantity) return toast('Material and quantity are required.');
        toast('Quote request sent successfully.');
        setForm({ ...form, material: '', quantity: '', message: '' });
      }} className="glass mt-8 space-y-3 rounded-2xl p-6">
        <select value={form.productType} onChange={(e) => setForm({ ...form, productType: e.target.value })} className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3">{products.map((p) => <option key={p.name}>{p.name}</option>)}</select>
        <input value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} placeholder="Material" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        <input value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} placeholder="Quantity" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        <select value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3">{industries.map((i) => <option key={i.name}>{i.name}</option>)}</select>
        <label className="block rounded-xl border border-dashed border-white/30 p-3 text-sm text-[var(--muted)]">Upload drawing placeholder<input type="file" className="mt-2 block text-xs" /></label>
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" className="h-28 w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        <button className="w-full rounded-xl bg-[var(--accent)] px-5 py-3 font-semibold">Submit Quote</button>
      </form>
    </section>
  );
}

