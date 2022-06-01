// Intentar sacar todos los warnings.
import React, {useState} from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import PopUp from "../PopUp/PopUp";

const App = () => {

  const [showPopUp, setShowPopUp] = useState(false);

  const handleShowPopUp = show => setShowPopUp(show);
  
  return (
    <div className={styles["app_wrapper"]}>
      <Header />
      <Content handleShowPopUp={handleShowPopUp}/>
      <Footer year={2022} />
      <PopUp display={showPopUp} handleShowPopUp={handleShowPopUp}/>
    </div>
  )
};

// props va a los componentes hijos.

export default App;
