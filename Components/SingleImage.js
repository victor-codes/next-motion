import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
const nextVariants = {
  exit: {
    y: 50,
    opacity: 0,
    transition,
  },
  enter: { y: 0, opacity: 1, transition },
};
const imageElVariants = {
  leave: {
    width: 0,
    opacity: 0,
    transition,
  },

  hover: {
    width: 200,
    opacity: 1,
    transition: { duration: 0.1, ...transition },
  },
};

function Image({ index }) {
  const ternary = index === 6 ? `/image/${index}` : `/image/${index + 1}`;
  const nextImage =
    index === 6
      ? ""
      : `url(https://images.pexels.com/${
          images[index + 1].path
        }?auto=format&fit=crop&w=200)`;

  const [focused, setFocused] = useState(false);
  const [none, setNone] = useState(false);

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
              <div
                className={styles.next_image}
                onMouseOut={() => setFocused(false)}
                onMouseOver={() => setFocused(true)}
                onClick={() => {
                  setFocused(false);
                  setTimeout(() => {
                    setNone(true);
                  }, 400);
                }}
              >
                <Link
                  href="/image/[image]"
                  as={ternary}
                  scroll={false}
                  passHref
                >
                  <motion.a variants={nextVariants}>
                    {index <= 5 && (
                      <motion.div
                        animate={focused ? "hover" : "leave"}
                        exit="exit"
                        variants={imageElVariants}
                        className={styles.image_hoverEl}
                        style={{
                          backgroundImage: nextImage,
                          display: none ? "none" : "",
                        }}
                      ></motion.div>
                    )}
                    Next <span className={styles.next_arrow}>←</span>
                  </motion.a>
                </Link>
              </div>
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
