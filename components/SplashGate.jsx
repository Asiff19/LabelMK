'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { assetPath } from '../utils/assets';

const SplashGate = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = previousOverflow;
    }, 2000);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <>
      <div
        aria-hidden={showSplash}
        className={`transition-opacity duration-500 ${showSplash ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      >
        {children}
      </div>

      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="label-mk-splash"
            className="splash-screen"
            style={{ '--splash-background-image': `url("${assetPath('/splash-bg.jpeg')}")` }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            role="status"
            aria-label="Loading Label MK"
          >
            <div className="splash-content">
              <h1 className="splash-title">Label MK</h1>
              <span className="splash-subtitle">entering into the Atelier</span>
              <div className="splash-progress" aria-hidden="true">
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 2, ease: 'linear' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SplashGate;
