import { stats } from '../data/content';

export default function About() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8">
      <div className="relative overflow-hidden rounded-3xl">
        <img src="https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1800&q=80" alt="factory" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/45" />
        <div className="relative p-8 md:p-14">
          <p className="text-xs uppercase tracking-[0.35em] text-red-300">Company Story</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-6xl">Engineering Springs Since 1998</h1>
          <p className="mt-5 max-w-3xl text-[var(--muted)]">kriscel tech delivers premium industrial spring systems through deep material science, precision forming, thermal control, and rigorous quality validation.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <article key={s.label} className="glass rounded-2xl p-5">
                <p className="text-3xl font-semibold text-red-300">{s.value}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{s.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

