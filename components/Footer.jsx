'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-col gap-3">
            <h4 className="font-extrabold text-[24px] text-white">
              LabelMK
            </h4>
            <p className="flex items-center gap-2 text-[14px] text-white/80">
              <span aria-label="location">📍</span>
              4th floor, 16E Topsia Road, Kolkata-700046
            </p>
            <p className="text-[14px] text-white/80">
              Open Monday to Saturday, 10 AM to 8 PM
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-normal text-[14px] text-white">
              Trusted by 100+ clients 🤍
            </p>
            <div className="flex flex-col gap-2 text-[13px] text-white/80">
              <p>"Gauri: Beautiful craftsmanship and stunning finish.”</p>
              <p>"Namita: Elegant, thoughtful, and perfectly tailored.”</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="h-[24px] w-[24px] cursor-pointer object-contain"
                  />
                </a>
              ))}
            </div>
            <p className="text-[14px] text-white/80">Mail: ishikakhatoon890@gmail.com</p>
            <p className="text-[14px] text-white/80">Contact: +9198302902744</p>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
