import React, { Component } from "react";
import "./SelectApiPage.css";
import Logo from "../logo.png";
import AppFooter from "../components/AppFooter/AppFooter";
import SelectApi from "../SelectApi/SelectApi";

class SelectApiPage extends Component {
  handleChange = selectedApi => {
    // Make redoc dynamic
    this.props.history.push("redoc/" + selectedApi.value);
  };

  render() {
    return (
      <div>
        <div className="search-wrapper">
          <div>
            <img src={Logo} alt="DocSwag" />
            <SelectApi autoFocus="true" onChange={this.handleChange} />
          </div>
        </div>
        <AppFooter />
      </div>
    );
  }
}

export default SelectApiPage;
