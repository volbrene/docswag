import React, { Component } from "react";
import "./RedocPage.css";
import { RedocStandalone } from "redoc";
import slugify from "slugify";
import AppHeader from "../../components/AppHeader/AppHeader";

class RedocPage extends Component {
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

        <section className="container__redoc">
          <RedocStandalone
            specUrl={this.state.activeApi.url}
            options={{
              nativeScrollbars: true,
              scrollYOffset: 60,
              theme: { colors: { primary: { main: window._env_.THEME_COLOR } } }
            }}
          />
        </section>
      </div>
    );
  }
}

export default RedocPage;
