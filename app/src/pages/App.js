import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RedocPage from "./RedocPage";
import SwaggerUiPage from "./SwaggerUiPage";
import ApiOverviewPage from "./ApiOverviewPage";
import { useState } from "react";
import AppHeader from "../components/AppHeader/AppHeader";
import AppFooter from "../components/AppFooter/AppFooter";
import { useEffect } from "react";

export const App = props => {
  const [selectedApi, setSelectedApi] = useState();
  const [selectedUi, setSelectedUi] = useState();
  const [selectedApiUrl, setSelectedApiUrl] = useState();

  useEffect(() => {
    // Default is redoc -> Would be greate if this can save in local storage
    if (!selectedUi) {
      setSelectedUi("redoc");
    }
  }, [selectedUi, setSelectedUi]);

  const selectApi = selectedApi => {
    setSelectedApi(selectedApi);
    setSelectedApiUrl(selectedApi.url);
  };

  return (
    <Router>
      <AppHeader
        selectedApi={selectedApi}
        selectedUi={selectedUi}
        handleSelectApi={selectApi}
        handleSelectUi={ui => setSelectedUi(ui)}
      />
      <main>
        {!selectedApi && <ApiOverviewPage />}

        {selectedUi === "redoc" && selectedApiUrl && (
          <RedocPage apiUrl={selectedApiUrl} />
        )}

        {selectedUi === "swagger-ui" && selectedApiUrl && (
          <SwaggerUiPage apiUrl={selectedApiUrl} />
        )}
        <AppFooter />
      </main>
    </Router>
  );
};

export default App;
