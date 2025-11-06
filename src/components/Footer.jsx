import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-12 md:py-16 text-white bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-semibold">Vamverse</h3>
            <p className="text-white/60 text-sm">Digital wellbeing and productivity, reimagined.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 text-sm text-white/70"
          >
            <a href="#about" className="hover:text-white">About</a>
            <a href="#modes" className="hover:text-white">Modes</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </motion.div>
        </div>

        <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Vamverse. All rights reserved.</div>
      </div>
    </footer>
  );
}
