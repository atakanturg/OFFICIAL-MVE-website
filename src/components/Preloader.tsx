import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TEXT = "MIAMI VENTURING ENTREPRENEURS";
const CHARS = TEXT.split('').map((char, index) => ({
  char,
  id: `char-${index}`,
  isInitial: index === 0 || index === 6 || index === 16,
  isSpace: char === ' ',
}));

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'typing' | 'compressing' | 'logo' | 'done'>('typing');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('compressing'), 2400);
    const t2 = setTimeout(() => setPhase('logo'), 3700);
    const t3 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 5500);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0A0A0A' }}
      exit={{
        opacity: 0,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
    >
      <div className="flex flex-col items-center justify-center relative w-full h-full">
        <AnimatePresence>
          {(phase === 'typing' || phase === 'compressing') && (
            <motion.div
              className="absolute flex items-center justify-center"
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
            >
              <AnimatePresence>
                {CHARS.map((c, i) => {
                  const show = phase === 'typing' || c.isInitial;
                  if (!show) return null;

                  return (
                    <motion.span
                      layoutId={c.isInitial ? `mve-${c.char}` : undefined}
                      layout
                      key={c.id}
                      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      exit={{ opacity: 0, filter: "blur(4px)", width: 0, margin: 0, padding: 0 }}
                      transition={{
                        opacity: { delay: phase === 'typing' ? i * 0.04 : 0, duration: 0.3 },
                        filter: { delay: phase === 'typing' ? i * 0.04 : 0, duration: 0.3 },
                        y: { delay: phase === 'typing' ? i * 0.04 : 0, duration: 0.3 },
                        layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                        exit: { duration: 0.5, ease: "easeInOut" }
                      }}
                      className={`inline-flex items-center justify-center overflow-hidden text-xs md:text-sm lg:text-base font-mono tracking-widest text-[#58C391] uppercase whitespace-pre ${c.isSpace ? 'w-2 md:w-3' : ''}`}
                    >
                      {c.char}
                    </motion.span>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {phase === 'logo' && (
            <motion.div
              key="big-logo"
              className="absolute flex flex-col items-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-[0.3em] font-heading flex">
                {['M', 'V', 'E'].map((char) => (
                  <motion.span
                    layoutId={`mve-${char}`}
                    key={char}
                    style={{ color: '#58C391' }}
                    className="inline-block animate-gold-pulse"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                className="text-xs tracking-[0.5em] mt-4 ml-2 text-[#666666]"
              >
                MIAMI VENTURING ENTREPRENEURS
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
