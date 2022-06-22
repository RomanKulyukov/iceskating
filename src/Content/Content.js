import React, { Component } from "react";
import classes from "../Content/Content.module.css";
import Header from "../Head/Header/Header";
import Footer from "../Footer/Footer";
class Content extends Component {
  render() {
    return (
      <div className={classes.Content}>
        <Header />
        <Footer />
      </div>
    );
  }
}
export default Content;
