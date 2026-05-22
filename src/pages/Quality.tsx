import { qualitySteps } from '../data/content';

export default function Quality() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8">
      <h1 className="text-4xl font-semibold">Quality Process</h1>
      <div className="glass mt-8 rounded-2xl p-6">
        <div className="flex snap-x snap-mandatory items-center gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:pb-0">
          {qualitySteps.map((s, i) => (
            <div key={s} className="flex min-w-[220px] snap-start items-center gap-3 lg:min-w-0 lg:flex-col lg:items-stretch">
              <div className="w-full rounded-xl border border-black/10 bg-white/75 p-4 shadow-[0_8px_20px_rgba(20,30,45,0.08)]">
                <p className="text-xs font-semibold tracking-wide text-red-600">Stage {i + 1}</p>
                <p className="mt-1 text-2xl font-semibold leading-tight text-slate-900">{s}</p>
              </div>
              {i < qualitySteps.length - 1 && <div className="hidden h-[2px] w-12 bg-red-500 lg:block lg:w-full" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

