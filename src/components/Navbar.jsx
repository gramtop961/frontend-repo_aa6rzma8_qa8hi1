import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-semibold tracking-tight text-white text-lg flex items-center gap-2"
        >
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_24px_4px_rgba(16,185,129,0.6)]" />
          Vamverse
        </motion.a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#modes" className="hover:text-white transition-colors">Modes</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <motion.a
          href="#modes"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-sky-500 shadow-lg shadow-emerald-500/25"
        >
          Get Started
          <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
        </motion.a>
      </div>
    </header>
  );
}
