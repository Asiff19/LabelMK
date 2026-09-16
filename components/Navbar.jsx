'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import { assetPath } from '../utils/assets';

const navItems = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Work', href: '#explore' },
  { label: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen && !showNav) {
      setIsOpen(false);
    }
  }, [isOpen, showNav]);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial={false}
        animate={showNav ? 'show' : 'hidden'}
        className={`${styles.xPaddings} py-8 fixed left-0 right-0 top-0 z-50`}
      >
        <div className="absolute inset-0 gradient-01" />
        <div className={`${styles.innerWidth} relative mx-auto flex items-center justify-between gap-8`}>
          <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
            Label<span className="text-[#915EFF]">MK</span>
          </h2>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:opacity-80"
          >
            <img src={assetPath('/menu.svg')} alt="menu" className="h-[24px] w-[24px] object-contain" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[72%] max-w-[320px] flex-col bg-[#0b1020]/95 p-6 shadow-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Menu</h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-white/80 hover:text-white"
                  aria-label="Close sidebar"
                >
                  ×
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base font-medium text-white transition hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
