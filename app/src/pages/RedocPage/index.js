import React from "react";
import { RedocStandalone } from "redoc";

const RedocPage = props => {
  return (
    <div>
      <section className="container__redoc">
        <RedocStandalone
          specUrl={props.apiUrl}
          options={{
            nativeScrollbars: true,
            scrollYOffset: 60,
            theme: { colors: { primary: { main: window._env_.THEME_COLOR } } }
          }}
        />
      </section>
    </div>
  );
};

export default RedocPage;
