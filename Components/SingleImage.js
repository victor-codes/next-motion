import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { images } from "../constants";
import styles from "../styles/SingleImage.module.css";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: { y: "0%", opacity: 1, transition },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1.5, ...transition } },
};
const textVariants = {
  exit: {
    y: 50,
    opacity: 0,
    transition,
  },
  enter: { y: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

function Image({ index }) {
  return (
    <>
      <Head>
        <title>{images[index].name} - Motion</title>
      </Head>
      <div className={styles.container}>
        <>
          <motion.div initial="exit" animate="enter" exit="exit">
            <div className={styles.img_info}>
              <motion.img
                variants={imageVariants}
                src={`https://images.pexels.com/${images[index].path}?auto=format&fit=crop&w=1500`}
                alt={images[index].name}
              />
              <motion.div className={styles.name_container}>
                <motion.h2 variants={textVariants}>
                  {images[index].name}
                </motion.h2>
              </motion.div>
            </div>
            <motion.div className={styles.back} variants={backVariants}>
              <Link href="/">
                <a>← Back</a>
              </Link>
            </motion.div>
          </motion.div>
        </>
      </div>
    </>
  );
}

export default Image;
