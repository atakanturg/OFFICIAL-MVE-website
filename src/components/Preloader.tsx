import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const obj = { value: 0 };
    gsap.to(obj, {
      value: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => setProgress(Math.floor(obj.value)),
      onComplete: () => {
        setTimeout(() => setShowLogo(true), 150);
      },
    });
  }, []);

  useEffect(() => {
    if (showLogo) {
      setTimeout(onComplete, 1200);
    }
  }, [showLogo, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
    >
      <AnimatePresence mode="wait">
        {!showLogo ? (
          <motion.div
            key="progress"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Thin gold progress bar */}
            <div className="w-48 h-px bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ backgroundColor: '#58C391' }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-mono tracking-[0.3em] text-white/30">
              {progress.toString().padStart(3, '0')}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="logo"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1
              className="text-5xl md:text-7xl font-bold tracking-[0.3em] font-heading"
              style={{ color: '#58C391' }}
            >
              {"MVE".split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs tracking-[0.5em] mt-4 ml-2"
              style={{ color: '#666666' }}
            >
              MIAMI VENTURING ENTREPRENEURS
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
