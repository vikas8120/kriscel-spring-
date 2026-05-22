import { AnimatePresence, motion } from 'framer-motion';

export default function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} className="glass w-full max-w-xl rounded-2xl p-5" onClick={(e) => e.stopPropagation()}>
            <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
            {children}
            <button onClick={onClose} className="mt-5 rounded-xl border border-white/20 px-4 py-2">Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

