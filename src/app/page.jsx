"use client";

import React from "react";
import styles from "./page.module.css";

export default function Home() {
  const [height, setHeight] = React.useState(720);
  const [width, setWidth] = React.useState(1080);

  React.useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  return (
    <main className={styles.main}>
      <iframe
        src="https://published.vercel.app/"
        frameborder="0"
        width={width}
        height={height}
      ></iframe>
    </main>
  );
}
