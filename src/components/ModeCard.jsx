import { motion } from 'framer-motion';

export default function ModeCard({ title, description, accent, href }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5 }}
      className="relative group block rounded-3xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
    >
      <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${accent} blur-2xl`} />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">{title}</h3>
          <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/80">→</div>
        </div>
        <p className="mt-3 text-white/70 leading-relaxed">{description}</p>
        <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
          <span className="inline-flex h-2 w-2 rounded-full bg-white/70" />
          Tap to learn more
        </div>
      </div>
      <motion.div
        className="absolute right-6 -bottom-6 w-28 h-28 rounded-full bg-white/10 border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
    </motion.a>
  );
}
