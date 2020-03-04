import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import RedocPage from "./pages/RedocPage/RedocPage";
import SwaggerUiPage from "./pages/SwaggerUiPage/SwaggerUiPage";
import AppFooter from "./components/AppFooter/AppFooter";
import GraphqlPlaygroundPage from "./pages/GraphqlPlaygroundPage /GraphqlPlaygroundPage";
import AppHeader from "./components/AppHeader/AppHeader";
import ApiOverviewPage from "./pages/ApiOverviewPage";
import { useState } from "react";

export const App = props => {
  const [selectedApi, setSelectedApi] = useState(null);

  const selectApi = selectedApi => {
    setSelectedApi(selectedApi.value);
    console.log("asdlfkj", props);
  };

  return (
    <Router>
      <AppHeader handleChange={selectApi} />
      <div className="content">
        <Route exact path="/" component={ApiOverviewPage} />
        <Route path="/:api/redoc" component={RedocPage} />
        <Route path="/:api/swagger-ui" component={SwaggerUiPage} />
        <Route path="/:api/graphql" component={GraphqlPlaygroundPage} />
        <AppFooter />
      </div>
    </Router>
  );
};

export default App;
