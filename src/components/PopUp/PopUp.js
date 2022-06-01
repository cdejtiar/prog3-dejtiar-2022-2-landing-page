import { Form } from "formik";
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
      <h2>¿Querés saber más? Suscribite a nuestro newsletter</h2>
      <Formulario handleShowPopUp={handleShowPopUp}/>
      <button onClick={() => handleShowPopUp(false)}>Cerrar</button>
    </div>
  );
};

export default PopUp;
