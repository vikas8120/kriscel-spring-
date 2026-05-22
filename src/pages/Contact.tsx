import { useState } from 'react';
import { useToast } from '../hooks/useToast';

export default function Contact() {
  const toast = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  return (
    <section className="mx-auto w-full max-w-4xl px-4 pb-12 md:px-8">
      <h1 className="text-4xl font-semibold">Contact Us</h1>
      <form className="glass mt-8 space-y-3 rounded-2xl p-6" onSubmit={(e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone || !form.message) return toast('Please complete required fields.');
        toast('Message submitted successfully.');
        setForm({ name: '', email: '', phone: '', company: '', message: '' });
      }}>
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" className="h-32 w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        <button className="w-full rounded-xl bg-[var(--accent)] px-5 py-3 font-semibold">Send</button>
      </form>
    </section>
  );
}

