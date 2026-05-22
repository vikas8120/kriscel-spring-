import { qualitySteps } from '../data/content';

export default function Quality() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8">
      <h1 className="text-4xl font-semibold">Quality Process</h1>
      <div className="glass mt-8 overflow-x-auto rounded-2xl p-6">
        <div className="flex min-w-max items-center gap-3">
          {qualitySteps.map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className="w-48 rounded-xl border border-white/20 bg-black/25 p-4"><p className="text-xs text-red-300">Stage {i + 1}</p><p className="mt-1 font-semibold">{s}</p></div>
              {i < qualitySteps.length - 1 && <div className="h-[2px] w-12 bg-red-500" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

