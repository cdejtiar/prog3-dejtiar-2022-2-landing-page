import React from "react";
import { useFormik } from "formik";
import styles from "./Form.module.css";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "*";
  } else if (values.firstName.length > 15) {
    errors.firstName = "15 caracteres o menos";
  }

  if (!values.lastName) {
    errors.lastName = "*";
  } else if (values.lastName.length > 20) {
    errors.lastName = "20 caracteres o menos";
  }

  if (!values.email) {
    errors.email = "*";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email no válido";
  }

  return errors;
};

const Form = ({ handleShowPopUp }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      setTimeout(() => {
        handleShowPopUp(false);
      }, 3000); 
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">Nombre</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName ? (
        <div className={styles["errores"]}>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Apellido</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.errors.lastName ? (
        <div className={styles["errores"]}>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? (
        <div className={styles["errores"]}>{formik.errors.email}</div>
      ) : null}

      <button className={styles["btn3"]} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
