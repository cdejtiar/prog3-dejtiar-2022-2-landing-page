import React from "react";
import styles from "./PopUp.module.css";
import Formulario from "../Form/Form";

const PopUp = ({ display, handleShowPopUp }) => {
  return (
    <div
      className={`${styles["pop_up_wrapper"]} ${
        display ? styles["display"] : ""
      }`}
    >
      <h2 className={styles["titulo"]}>¿Querés saber más sobre <span>One Direction</span>? <br></br> Suscribite a nuestro newsletter</h2>
      <Formulario handleShowPopUp={handleShowPopUp}/>
      <button className={styles["btn4"]} onClick={() => handleShowPopUp(false)}>Cerrar</button>
    </div>
  );
};

export default PopUp;
