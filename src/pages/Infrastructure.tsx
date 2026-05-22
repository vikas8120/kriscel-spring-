import { manufacturing } from '../data/content';

export default function Infrastructure() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8">
      <h1 className="text-4xl font-semibold">Manufacturing Excellence</h1>
      <div className="mt-8 space-y-6">{manufacturing.map((m) => (
        <article key={m.title} className="glass grid overflow-hidden rounded-2xl lg:grid-cols-[1.2fr_1fr]">
          <img src={m.image} alt={m.title} className="h-72 w-full object-cover" />
          <div className="p-6"><h3 className="text-2xl font-semibold">{m.title}</h3><p className="mt-3 text-[var(--muted)]">{m.copy}</p></div>
        </article>
      ))}</div>
    </section>
  );
}

