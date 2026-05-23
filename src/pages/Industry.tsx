import { motion } from 'framer-motion';
import { industries } from '../data/content';

export default function Industry() {
  const applyFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.onerror = null;
    img.src = '/images/industries/heavy-machinery.png';
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8">
      <h1 className="text-4xl font-semibold text-[#0f1f36]">Industries We Power</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {industries.map((item) => (
          <div key={item.name} className="card-3d-wrap">
            <motion.article whileHover={{ y: -10, rotateX: 5, rotateY: -5 }} className="card-3d group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              <div className="relative h-80">
                <img src={item.image} alt={item.name} onError={applyFallback} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="depth-layer absolute bottom-5 left-5 text-2xl font-semibold text-white">{item.name}</h3>
              </div>
            </motion.article>
          </div>
        ))}
      </div>
    </section>
  );
}
