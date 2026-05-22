import { motion } from 'framer-motion';
import { industries } from '../data/content';

export default function Industry() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8">
      <h1 className="text-4xl font-semibold">Industries We Power</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((item) => (
          <motion.article key={item.name} whileHover={{ y: -8 }} className="glass group overflow-hidden rounded-2xl">
            <div className="relative h-80">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-2xl font-semibold">{item.name}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

