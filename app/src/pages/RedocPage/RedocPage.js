import React from "react";
import "./RedocPage.css";
import { RedocStandalone } from "redoc";

const RedocPage = () => (
  <div>
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

export default RedocPage;
