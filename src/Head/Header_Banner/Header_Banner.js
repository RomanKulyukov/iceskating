import React from "react";
import classes from "../Header_Banner/Header_Banner.module.css";
import Logo from "../../Img/logo.png";
import Banner from "../../Img/stav-banner.jpg";
function Header_Banner() {
  return (
    <div className={classes.Header_Banner}>
      <div className={classes.Header_Logo}>
        <a href="#">
          <img src={Logo} alt="Логотип" />
        </a>
      </div>
      <a href="#">
        <img src={Banner} alt="Баннер" />
      </a>
    </div>
  );
}
export default Header_Banner;
