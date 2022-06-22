import React, { Component } from "react";
import classes from "../ContentOuter/ContentOuter.module.css";

class ContentOuter extends Component {
  render() {
    return <main className={classes.ContentOuter}>{this.props.children}</main>;
  }
}
export default ContentOuter;
