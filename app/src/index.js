import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import RedocPage from "./pages/RedocPage/RedocPage";
import SwaggerUiPage from "./pages/SwaggerUiPage/SwaggerUiPage";
import SelectApiPage from "./pages/SelectApiPage/SelectApiPage";
import AppFooter from "./components/AppFooter/AppFooter";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={SelectApiPage} />
      <Route path="/redoc/:api" component={RedocPage} />
      <Route path="/swagger-ui/:api" component={SwaggerUiPage} />
      <AppFooter />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
