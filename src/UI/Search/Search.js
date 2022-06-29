import React from "react";
import classes from "../Search/Search.module.css";
import SearchImg from "../../Img/search.png";
function Search() {
  return (
    <div className={classes.Search}>
      <img src={SearchImg} alt="поиск" />
    </div>
  );
}
export default Search;
