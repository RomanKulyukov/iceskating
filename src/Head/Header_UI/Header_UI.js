import React from "react";
import classes from "../Header_UI/Header_UI.module.css";
import Header_UI_Nav from "../Header_UI_Nav/Header_UI_Nav";
import Header_UI_Srch from "../Header_UI_Srch/Header_UI_Srch";
function Header_UI() {
  return (
    <div className={classes.Header_UI}>
      <Header_UI_Nav />
      <Header_UI_Srch />
    </div>
  );
}
export default Header_UI;
