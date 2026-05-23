import { useState } from 'react';
import { industries, products } from '../data/content';
import { useToast } from '../hooks/useToast';

export default function Quote() {
  const toast = useToast();
  const [form, setForm] = useState({ productType: products[0].name, material: '', quantity: '', industry: industries[0].name, message: '' });

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-12 md:px-8">
      <h1 className="text-4xl font-semibold text-[#0f1f36]">Get a Quote</h1>
      <p className="mt-2 text-slate-600">Share your spring requirement and our engineering team will respond quickly.</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!form.material || !form.quantity) return toast('Material and quantity are required.');
          toast('Quote request sent successfully.');
          setForm({ ...form, material: '', quantity: '', message: '' });
        }}
        className="mt-8 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
      >
        <select value={form.productType} onChange={(e) => setForm({ ...form, productType: e.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700">{products.map((p) => <option key={p.name}>{p.name}</option>)}</select>
        <input value={form.material} onChange={(e) => setForm({ ...form, material: e.target.value })} placeholder="Material" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700" />
        <input value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} placeholder="Quantity" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700" />
        <select value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700">{industries.map((i) => <option key={i.name}>{i.name}</option>)}</select>
        <label className="block rounded-xl border border-dashed border-slate-400 bg-slate-50 p-3 text-sm text-slate-600">Upload drawing placeholder<input type="file" className="mt-2 block text-xs" /></label>
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" className="h-28 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700" />
        <button className="w-full rounded-xl bg-[var(--red)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--red-strong)]">Submit Quote</button>
      </form>
    </section>
  );
}
