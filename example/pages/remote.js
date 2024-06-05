import Head from "next/head";
import ExportedImage from "../src/ExportedImage";

import styles from "../styles/Home.module.css";

export default function Home() {
  // get the basePath set in next.config.mjs
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  return (
    <div className={styles.container}>
      <Head>
        <title>Next-Image-Export-Optimizer</title>
        <meta
          name="description"
          content="Example of next-image-export-optimizer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next-Image-Export-Optimizer</h1>
        <h2>Optimized example - Remote</h2>
        <div
          style={{
            position: "relative",
            width: "50%",
            height: "200px",
            marginBottom: "3rem",
          }}
        >
          <ExportedImage
            src="https://reactapp.dev/images/nextImageExportOptimizer/christopher-gower-m_HRfLhgABo-unsplash-opt-2048.WEBP"
            fill
            id="test_image"
            style={{ objectFit: "cover" }}
            priority
            alt={"test_image"}
            basePath={basePath}
          />
        </div>
      </main>
    </div>
  );
}
