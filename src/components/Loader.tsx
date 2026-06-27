import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: '#050816' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2.1 }}
    >
      <div className="relative w-24 h-24">
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{ borderTopColor: '#00F5FF', borderRightColor: '#00F5FF' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
        <motion.span
          className="absolute inset-2 rounded-full border-2 border-transparent"
          style={{ borderBottomColor: '#6C63FF', borderLeftColor: '#6C63FF' }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
        />
        <motion.span
          className="absolute inset-5 rounded-full border-2 border-transparent"
          style={{ borderTopColor: '#00FF88' }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
        />
      </div>
      <motion.p
        className="mt-8 font-mono-cyber tracking-[0.5em] text-sm text-cyan-300/80"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        INITIALIZING
      </motion.p>
    </motion.div>
  );
}
