import React, { Component } from "react";
import "./HomePage.scss";
import Directory from "./Directory";

export default class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Directory />
      </div>
    );
  }
}
