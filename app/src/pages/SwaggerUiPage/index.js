import React from "react";
import "swagger-ui-react/swagger-ui.css";
import SwaggerUI from "../../components/swagger-ui-react";

const SwaggerUiPage = props => {
  return (
    <div>
      <section className="container__swagger-ui">
        <SwaggerUI url={props.apiUrl} docExpansion="list" deepLinking={true} />
      </section>
    </div>
  );
};

export default SwaggerUiPage;
