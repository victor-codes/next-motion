import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { images } from "../constants";
import styles from "../styles/Gallery.module.css";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const tbumbnailsVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    transition,
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const frameVariants = {
  hover: {
    scale: 0.95,
  },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

const Thumbnails = ({ name, path, i }) => {
  return (
    <motion.div variants={tbumbnailsVariants}>
      <motion.div
        className={styles.frame}
        whileHover="hover"
        variants={frameVariants}
        transition={transition}
      >
        <Link href="/image/[image]" as={`/image/${i}`} scroll={false} passHref>
          <motion.img
            className={styles.img}
            src={`https://images.pexels.com/${path}?auto=format&fit=crop&w=1500`}
            alt={name}
            variants={imageVariants}
            transition={transition}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

function Gallery() {
  return (
    <motion.div
      className={styles.gallery}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      {images.map((image, id) => (
        <Thumbnails key={id} name={image.name} i={id} path={image.path} />
      ))}
    </motion.div>
  );
}

export default Gallery;
