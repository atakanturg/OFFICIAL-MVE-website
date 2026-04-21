import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade';
  delay?: number;
  stagger?: number;
}

export function SectionReveal({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const initial: gsap.TweenVars = { opacity: 0 };
    const animate: gsap.TweenVars = { opacity: 1, duration: 0.8, delay, ease: 'power2.out' };

    if (variant === 'fade-up') {
      initial.y = 40;
      animate.y = 0;
    } else if (variant === 'fade-left') {
      initial.x = -40;
      animate.x = 0;
    } else if (variant === 'fade-right') {
      initial.x = 40;
      animate.x = 0;
    }

    gsap.set(ref.current, initial);

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(ref.current, animate);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === ref.current) t.kill();
      });
    };
  }, [variant, delay]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
