'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section id="about" className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
    <div className="flex items-center gap-4">
      <img src="/mklogo.jpg" alt="logo" className="w-[80px] h-[60px] object-contain" />
      <TypingText title={"| \u00A0 About LabelMK"} textStyles="text-center" />
    </div>  
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] sm:text-[24px] text-[12px] text-center text-secondary-white"
      >
        <span className="font-bold text-white">Label Monira Khatoon</span> is a fashion brand that is dedicated to providing all types of custom stitching (western, eastern, indo-western), fashion design, production work, uniforms, wedding and party boutique manufacturing in B2B. We also deal with dyes, alteration and embroidery services with high level intricate detailings and shipping to Clients all over India. Our team of experienced designers and tailors work tirelessly to create unique and stylish designs that are tailored to the individual needs of our clients. We believe that fashion is a form of self-expression, and we strive to help our customers express themselves through their clothing choices. Our goal is to create a brand that is synonymous with quality, style, and innovation in the{' '}
        <span className="font-bold text-white">
          fashion
        </span>{' '}
        industry. Let's explore us by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
