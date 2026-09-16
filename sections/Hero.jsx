'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { assetPath } from '../utils/assets';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 pt-[180px]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center py-14 flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Crafted
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Eleg</h1>
          {/*<div className={`${styles.heroEText} flex items-center justify-center`}>
                      
                    </div>*/}
                    <span className={`${styles.heroHeading} inline-block scale-y-[1.45] mr-2 ml-2`}>
                        A
                      </span>
          <h1 className={styles.heroHeading}>nce</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative mt-4 w-full"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src={assetPath('/cover.jpg')}
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
