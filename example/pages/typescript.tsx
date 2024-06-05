import Head from "next/head";
import ExportedImage_Local from "../src/ExportedImage";
import ExportedImageLegacy_Local from "../src/legacy/ExportedImage";

import Image from "next/image";
import testPictureStatic from "../public/chris-zhang-Jq8-3Bmh1pQ-unsplash_static.jpg";
import ExportedImageLegacy from "../src/legacy/ExportedImage";
import ExportedImage from "../src/ExportedImage";

export default function Home() {
  // get the basePath set in next.config.mjs
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
  return (
    <div>
      <Head>
        <title>Next-Image-Export-Optimizer</title>
        <meta
          name="description"
          content="Example of next-image-export-optimizer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next-Image-Export-Optimizer</h1>
        <div
          style={{
            position: "relative",
            width: "50%",
            height: "200px",
            marginBottom: "3rem",
          }}
        >
          <ExportedImageLegacy
            src="images/chris-zhang-Jq8-3Bmh1pQ-unsplash.jpg"
            id="test_image_legacy"
            layout="fill"
            objectFit="cover"
            priority={true}
            alt={"test_image"}
            basePath={basePath}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "50%",
            height: "200px",
            marginBottom: "3rem",
          }}
        >
          <ExportedImage
            src="images/chris-zhang-Jq8-3Bmh1pQ-unsplash.jpg"
            id="test_image_future"
            fill
            priority={true}
            alt={"test_image"}
            basePath={basePath}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "50%",
            height: "200px",
            marginBottom: "3rem",
          }}
        >
          <ExportedImage_Local
            src="images/chris-zhang-Jq8-3Bmh1pQ-unsplash.jpg"
            id="test_image"
            fill
            priority={true}
            alt={"test_image"}
            basePath={basePath}
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            marginBottom: "3rem",
            width: "100%",
          }}
        >
          <ExportedImageLegacy
            src={testPictureStatic}
            alt="test_image_static"
            id="test_image_static"
            layout="responsive"
            basePath={basePath}
          />
        </div>
        <div
          style={{
            position: "relative",
            marginBottom: "3rem",
            width: "100%",
          }}
        >
          <ExportedImageLegacy_Local
            src={testPictureStatic}
            alt="test_image_static"
            id="test_image_static_local"
            layout="responsive"
            basePath={basePath}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ExportedImage
            src="vercel.svg"
            width={400}
            height={400}
            alt="VercelLogo"
            basePath={basePath}
          />
          <ExportedImage_Local
            src="vercel.svg"
            width={400}
            height={400}
            alt="VercelLogo_local"
            basePath={basePath}
          />
          <Image
            src={`vercel.svg`}
            loader={({ src }) => {
              return src;
            }}
            width={400}
            height={400}
            alt="SVG"
          />
        </div>
      </main>
    </div>
  );
}
