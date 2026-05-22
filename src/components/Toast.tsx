import { AnimatePresence, motion } from 'framer-motion';

export default function Toast({ message }: { message: string }) {
  return (
    <AnimatePresence>
      {message && <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} className="fixed bottom-5 right-5 z-[90] rounded-xl border border-emerald-400/40 bg-emerald-500/15 px-4 py-3 text-sm">{message}</motion.div>}
    </AnimatePresence>
  );
}

