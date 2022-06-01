import React from "react";
import styles from "./Banda.module.css";
import Louis from "../../assets/louis.jpeg";
import Harry from "../../assets/harry.jpeg";
import Liam from "../../assets/liam.jpeg";
import Niall from "../../assets/niall.jpeg";
import EachMember from "../EachMember/EachMember";

const data = [
  {
    src: Louis,
    alt: "louis",
    data_member: "data_louis",
    name: "Louis",
    descrip: "[El título Made in the A.M] ejemplifica perfectamente el proceso. Pasamos la mayor parte de nuestro tiempo escribiendo y grabando muy temprano en la mañana.",
    href1: "https://twitter.com/Louis_Tomlinson",
    href2: "https://www.instagram.com/louist91/",
  },
  {
    src: Harry,
    alt: "harry",
    data_member: "data_harry",
    name: "Harry",
    descrip: "Queríamos escribir canciones lindas que nos gusten, y que pensamos que a otras personas también les gustarían. Sentimos que lo logramos, y que estamos muy orgullosos del producto final.",
    href1: "https://twitter.com/Harry_Styles",
    href2: "https://www.instagram.com/harrystyles/",
  },
  {
    src: Liam,
    alt: "liam",
    data_member: "data_liam",
    name: "Liam",
    descrip: "En el pasado, Louis y yo escribimos mucho. En este momento, todos se han unido lo cual es muy cool porque todos traemos nuestras influencias.",
    href1: "https://twitter.com/LiamPayne",
    href2: "https://www.instagram.com/liampayne/",
  },
  {
    src: Niall,
    alt: "niall",
    data_member: "data_niall",
    name: "Niall",
    descrip: "Cinco albumes en cinco años, es frenético y a la vez agradable! El proceso de hacer un albúm trae buenos momentos.",
    href1: "https://twitter.com/NiallOfficial",
    href2: "https://www.instagram.com/niallhoran/",
  },
];

const Banda = ({handleShowPopUp}) => {
  return (
    <div className={styles["banda_wrapper"]}>
      {data.map(({ src, alt, data_member, name, descrip, href1, href2 }, index) => ( 
        <EachMember
          key={index}
          src={src}
          alt={alt}
          data_member={data_member}
          name={name}
          descrip={descrip}
          href1={href1}
          href2={href2}
          handleShowPopUp={handleShowPopUp}
        />
      ))}
    </div>
  );
};

export default Banda;
