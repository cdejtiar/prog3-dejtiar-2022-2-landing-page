import React from "react";
import styles from "../Banda/Banda.module.css";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const EachMember = ({src, alt, data_member, name, descrip, href1, href2, handleShowPopUp}) => {
  return (
    <article className={styles["banda"]}>
      <img className={styles["fotos"]} src={src} alt={alt}></img>
      <div className={styles[`${data_member}`]}>
        <h2>{name}</h2>
        <p>{descrip}</p>

        <button className={styles["btn2"]} onClick={() => handleShowPopUp(true)}>Ver más</button>
        <a className={styles["a_banda"]} href={href1}>
          <button className={styles["redes"]}>
            <img className={styles["icons"]} src={twitter} alt="twitter"></img>
          </button>
        </a>

        <a className={styles["a_banda"]} href={href2}>
          <button className={styles["redes"]}>
            <img
              className={styles["icons"]}
              src={instagram}
              alt="instagram"
            ></img>
          </button>
        </a>
      </div>
    </article>
  );
};

export default EachMember;
