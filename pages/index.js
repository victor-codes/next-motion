import Head from "next/head";
import Image from "next/image";
import Gallery from "../Components/Gallery";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Gallery />
      {/* <h1 className={styles.h1}>Motion</h1> */}
    </main>
  );
}
