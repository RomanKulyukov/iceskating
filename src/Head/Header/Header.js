import React from "react";
import classes from "../Header/Header.module.css";
import Header_Banner from "../Header_Banner/Header_Banner";
import Header_UI from "../Header_UI/Header_UI";
function Header() {
  return (
    <div className={classes.Header}>
      <span>Header</span>
      <Header_Banner />
      <Header_UI />
    </div>
  );
}
export default Header;
