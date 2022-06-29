import React from "react";
import classes from "../Header_UI_Nav/Header_UI_Nav.module.css";
import Nav from "../../Navigation/Nav/Nav";
function Header_UI_Nav() {
  return (
    <div className={classes.Header_UI_Nav}>
      <Nav />
    </div>
  );
}
export default Header_UI_Nav;
