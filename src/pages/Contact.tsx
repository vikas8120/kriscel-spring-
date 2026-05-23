import { useState } from 'react';
import { useToast } from '../hooks/useToast';

export default function Contact() {
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-12 md:px-8">
      <h1 className="text-4xl font-semibold text-[#0f1f36]">Contact Us</h1>
      <p className="mt-2 text-slate-600">Connect with our team for technical queries, support, and project collaboration.</p>

      <form
        className="mt-8 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
        onSubmit={(e) => {
          e.preventDefault();
          if (!form.name || !form.email || !form.phone || !form.message) return toast('Please complete required fields.');
          toast('Message submitted successfully.');
          setForm({ name: '', email: '', phone: '', company: '', message: '' });
        }}
      >
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700" />
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700" />
        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700" />
        <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700" />
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" className="h-32 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700" />
        <button className="w-full rounded-xl bg-[var(--red)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--red-strong)]">Send</button>
      </form>
    </section>
  );
}
