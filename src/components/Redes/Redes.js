import React from "react";
import styles from "../Footer/Footer.module.css";

const Redes = ({ href, src, alt }) => {
  return (
    <a href={href}>
      <img className={styles["icons"]} src={src} alt={alt}></img>{" "}
    </a>
  );
};

export default Redes;
