import React, { Component } from "react";
import "./SwaggerUiPage.css";
import slugify from "slugify";
import "swagger-ui-react/swagger-ui.css";
import SwaggerUI from "../../components/swagger-ui-react";
import AppHeader from "../../components/AppHeader/AppHeader";

class SwaggerUiPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableApis: window._env_.URLS.map(item => ({
        value: slugify(item.name).toLowerCase(),
        label: item.name,
        url: item.url
      })),
      activeApi: {
        url: ""
      }
    };

    const activeApiFromQuery = this.state.availableApis.find(
      element => element.value === this.props.match.params.api
    );

    if (activeApiFromQuery) {
      this.state.activeApi = activeApiFromQuery;
    } else {
      this.props.history.push("/");
    }
  }

  handleChange = selectedApi => {
    this.setState({
      activeApi: selectedApi
    });

    this.props.history.push(selectedApi.value);
  };

  render() {
    return (
      <div>
        <AppHeader
          handleChange={this.handleChange}
          activeApi={this.state.activeApi}
        />

        <section className="container__swagger-ui">
          <SwaggerUI
            url={this.state.activeApi.url}
            docExpansion="list"
            deepLinking={true}
          />
        </section>
      </div>
    );
  }
}

export default SwaggerUiPage;
