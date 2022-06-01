import React from "react";
import styles from "../Features/Features.module.css";

const Card = ({ src, alt, data_album, link, id, handleHighlight, highlight }) => {
  return (
    <article className={`${highlight ? styles['highlight'] : ''}`}>
      <img
        className={styles["fotoalbumes"]}
        src={src}
        alt={alt}
      />
      <div className={styles["textbtn"]}>
        <h3>
          {data_album}
        </h3>
        <a
          className={styles["a_features"]}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <button>Clickeá para escucharlo</button>
        </a>
        <button className={styles["btn"]} onClick={() => handleHighlight(id)}>Destacar</button>
      </div>
    </article>
  );
};

export default Card;
