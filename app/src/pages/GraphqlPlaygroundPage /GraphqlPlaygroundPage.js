import React, { Component } from "react";
//import { Provider } from "react-redux";
//import { Playground, store } from "graphql-playground-react";
import "./GraphqlPlaygroundPage.css";
import slugify from "slugify";
import AppHeader from "../../components/AppHeader/AppHeader";

class GraphqlPlaygroundPage extends Component {
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
          {/* <Provider store={store}>
            <Playground endpoint="https://api.graph.cool/simple/v1/swapi" />
          </Provider> */}
        </section>
      </div>
    );
  }
}

export default GraphqlPlaygroundPage;
