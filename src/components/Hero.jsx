import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Vamverse
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg md:text-xl">
            Monitor digital wellbeing and boost productivity across Youth, Adult, and Enterprise — all in one intelligent platform.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <a href="#modes" className="group relative inline-flex items-center px-6 py-3 rounded-full text-base font-medium text-black bg-white">
              Explore Modes
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#about" className="inline-flex items-center px-6 py-3 rounded-full text-base font-medium text-white/90 ring-1 ring-white/30 hover:bg-white/10">
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
