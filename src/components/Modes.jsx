import ModeCard from './ModeCard';
import { motion } from 'framer-motion';

export default function Modes() {
  return (
    <section id="modes" className="relative py-20 md:py-28 bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.15),transparent_40%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Choose your mode</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Tailored experiences for different life stages and organizations — all powered by Vamverse intelligence.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <ModeCard
            title="Youth"
            description="Healthy screen habits, focus tools, and guardian insights designed for younger users."
            href="#youth"
            accent="from-emerald-500/30 via-sky-500/20 to-emerald-400/40"
          />
          <ModeCard
            title="Adult"
            description="Deep work timers, app analytics, and mindful breaks to balance productivity and wellbeing."
            href="#adult"
            accent="from-sky-500/30 via-indigo-500/20 to-cyan-400/40"
          />
          <ModeCard
            title="Enterprise"
            description="Organization-wide analytics, policy controls, and privacy-first wellbeing initiatives."
            href="#enterprise"
            accent="from-purple-500/30 via-blue-500/20 to-fuchsia-400/40"
          />
        </div>
      </div>
    </section>
  );
}
