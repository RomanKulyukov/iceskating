import React from "react";
import classes from "../Header_UI_Srch/Header_UI_Srch.module.css";
import Search from "../../UI/Search/Search";
function Header_UI_Srch() {
  return (
    <div className={classes.Header_UI_Srch}>
      <Search />
    </div>
  );
}
export default Header_UI_Srch;
