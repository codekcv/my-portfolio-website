import Head from "next/head";
import styles from "../styles/index.module.scss";

const Index = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <p>Christian Villamin</p>
      <p>&lt;This site is under construction /&gt;</p>
    </main>
  </div>
);

export default Index;
