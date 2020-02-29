import React, { Component } from "react";
import "./AppHeader.css";
import Logo from "../../logo.png";
import { Link } from "react-router-dom";
import SelectApi from "../../SelectApi/SelectApi";

class AppHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <Link to={"/"}>
          <img src={Logo} alt="Redoc" />
        </Link>

        <SelectApi
          className="select"
          value={this.props.activeApi}
          onChange={this.props.handleChange}
        />
      </header>
    );
  }
}

export default AppHeader;
