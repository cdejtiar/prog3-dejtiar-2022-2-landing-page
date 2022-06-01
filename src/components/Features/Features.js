import React, { useState } from "react";
import styles from "./Features.module.css";
import upAllNight from "../../assets/upallnight.jpg";
import takeMeHome from "../../assets/takemehome.jpg";
import midnightMemories from "../../assets/midnightmemories.jpg";
import four from "../../assets/four.jpg";
import madeInTheAM from "../../assets/madeintheam.webp";
import Card from "../Card/Card";

const Features = () => {
  const [highlight, setHighlight] = useState();

  const handleHighlight = (id) => {
    console.log("get high", id);
    setHighlight(id);
  };

  const data = [
    {
      src: upAllNight,
      alt: "up-all-night",
      data_album:
        "Estrenado el 18 de noviembre del 2011. Aquí comenzó todo. El album debut que contiene los éxitos What Makes You Beautiful y One Thing.",
      link: "https://open.spotify.com/album/6cunQQ7YZisYOoiFu2ywIq?si=X_TNSN-jROeO8pzkQmXHFw",
      id: 0,
    },
    {
      src: takeMeHome,
      alt: "take-me-home",
      data_album:
        "Estrenado el 9 de noviembre del 2012. Fue platino en 21 países. Incluye los singles Live While We're Young y Little Things.",
      link: "https://open.spotify.com/album/2sWX3HYnZjPZ9MrH6MFsBt?si=dUO-lRPfQvSWyJmmKS_kpg",
      id: 1,
    },
    {
      src: midnightMemories,
      alt: "midnight-memories",
      data_album:
        "Estrenado el 25 de noviembre del 2013. Número 1 en 19 países. Incluye Best Song Ever y Story Of My Life.",
      link: "https://open.spotify.com/album/7p1fX8aUySrBdx4WSYspOu?si=EiUL46OcTSemXE036H0TGg",
      id: 2,
    },
    {
      src: four,
      alt: "four",
      data_album:
        "Estrenado el 17 de noviembre del 2014. Incluye Steal My Girl, Night Changes y Fireproof.",
      link: "https://open.spotify.com/album/4gCNyS7pidfK3rKWhB3JOY?si=h-s8aixXTeuSsGGXrp3nLQ",
      id: 3,
    },
    {
      src: madeInTheAM,
      alt: "made-in-the-am",
      data_album:
        "Estrenado el 13 de noviembre del 2015. Es el quinto albúm de One Direction. Incluye el single Drag Me Down y canciones nuevas como Infinity, History, End of the Day, Love You Goodbye, What a Feeling y Perfect.",
      link: "https://open.spotify.com/album/1gMxiQQSg5zeu4htBosASY?si=pj6pquwCRXqT_KJfLQU-Nw",
      id: 4,
    },
  ];

  return (
    <div className={styles["features_wrapper"]}>
      {data.map(
        (
          { src, alt, data_album, link, id },
          index
        ) => (
          <Card
            key={index}
            src={src}
            alt={alt}
            data_album={data_album}
            link={link}
            id={id}
            handleHighlight={handleHighlight}
            highlight={highlight === index ? true : false}
          />
        )
      )}
    </div>
  );
};

export default Features;
