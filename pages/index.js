import Head from "next/head";
import Image from "next/image";
import Gallery from "../Components/Gallery";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Motion</title>
      </Head>
      <main className={styles.main}>
        <Gallery />
      </main>
    </>
  );
}
