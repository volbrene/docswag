import React from "react";
import "./AppHeader.css";
import Logo from "../../docswag.svg";
import { Link } from "react-router-dom";
import SelectApi from "../SelectApi/SelectApi";

const AppHeader = props => {
  return (
    <header className="App-header">
      <Link to={"/"}>
        <img src={Logo} alt="DocSwag" />
      </Link>

      <button onClick={() => props.handleSelectUi("redoc")}>redoc</button>
      <button onClick={() => props.handleSelectUi("swagger-ui")}>
        Swagger Ui
      </button>

      <SelectApi
        className="select"
        value={props.selectedApi}
        onChange={props.handleSelectApi}
      />
    </header>
  );
};

export default AppHeader;
