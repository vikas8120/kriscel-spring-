import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <motion.div whileHover={{ y: -6, rotateX: 5, rotateY: -5 }} className={`glass card ${className}`}>{children}</motion.div>;
}
