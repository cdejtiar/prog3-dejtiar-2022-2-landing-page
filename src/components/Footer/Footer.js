import React from "react";
import styles from "./Footer.module.css";
import twitter from "../../assets/twitter.png";
import spotify from "../../assets/spotify.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import Redes from "../Redes/Redes";

const data = [
  { href: "https://twitter.com/onedirection", src: twitter, alt: "twitter" },
  {
    href: "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq",
    src: spotify,
    alt: "spotify",
  },
  {
    href: "https://www.youtube.com/user/OneDirectionVEVO",
    src: youtube,
    alt: "youtube",
  },
  {
    href: "https://www.instagram.com/onedirection/",
    src: instagram,
    alt: "instagram",
  },
];

const Footer = () => {
  return (
    // Acá estoy escribiendo JSX, mezcla entre HTML y JS. Dentro de las llaves puedo escribir JS.
    <div className={styles["footer_wrapper"]}>
      <div className={styles["div_iconos"]}>
        {data.map(({ href, src, alt }, index) => (
          <Redes key={index} href={href} src={src} alt={alt} />
        ))}
        ;
      </div>

      <div>
        <p>©2022 SONY MUSIC ENTERTAINMENT UK LTD & Camila Dejtiar</p>
      </div>
    </div>
  );
};

export default Footer;
