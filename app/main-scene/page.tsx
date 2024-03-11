"use client";
import { useEffect } from "react";
import Head from "next/head";
import { Application } from "@splinetool/runtime";
const HomePage = () => {
  useEffect(() => {
    // 동적으로 모듈을 가져오고, DOM이 준비된 후에 실행되도록 함

    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);
    app.load("https://prod.spline.design/rb5IgMxpepX0Anf5/scene.splinecode");
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Next.js Page</title>
        <style>{`
          body {
            margin: 0;
            overflow: hidden;
          }
          html, body {
            height: 100%;
          }
          canvas {
            display: block;
          }
          .logo {
            position: absolute;
            bottom: 16px;
            right: 16px;
            width: 32px;
            height: 32px;
            z-index: 2;
            background-image: url('https://app.spline.design/_assets/_icons/icon_favicon32x32.png');
            background-size: cover;
          }
          .logo:hover {
            opacity: 0.8;
          }
        `}</style>
      </Head>
      <body>
        <canvas id="canvas3d"></canvas>
        <a className="logo" href="https://spline.design"></a>
      </body>
    </>
  );
};

export default HomePage;
