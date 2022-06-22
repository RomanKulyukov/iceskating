import React from "react";
import classes from "../Header/Header.module.css";
import Header_Banner from "../Header_Banner/Header_Banner";

function Header() {
  return (
    <div className={classes.Header}>
      <span>Header</span>
      <Header_Banner />
    </div>
  );
}
export default Header;
