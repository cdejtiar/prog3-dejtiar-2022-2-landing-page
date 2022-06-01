import React from "react";
import styles from "./Menu.module.css";
import logo from "../../assets/logo1d.png";
import Href from "../Href/Href";

const data = [
  { link: "https://www.onedirectionmusic.com/gb/music.html", handle: "Música" },
  { link: "https://www.onedirectionmusic.com/gb/band.html", handle: "Banda" },
  { link: "https://www.onedirectionmusic.com/gb/shop.html", handle: "Shop" },
  {
    link: "https://forms.sonymusicfans.com/campaign/syco_onedirection_website_signup_2020/",
    handle: "Newsletter",
  },
];

const Menu = () => {
  return (
    <div className={styles["menu-wrapper"]}>
      <img className={styles["logo"]} src={logo} alt="logo-1d"></img>
      <nav>
        {data.map(({ link, handle }, index) => (
          <Href key={index} link={link} handle={handle} />
        ))}
      </nav>
    </div>
  );
};

export default Menu;
