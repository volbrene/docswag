import React, { Component } from "react";
import "./AppFooter.css";
import { useEffect } from "react";

const AppFooter = props => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);
  });

  return (
    <footer>
      <div className="inner">
        <a
          className="github-button"
          href="https://github.com/volbrene"
          aria-label="Follow @volbrene on GitHub"
        >
          Follow @volbrene
        </a>
        <a
          className="github-button"
          href="https://github.com/volbrene/docswag"
          data-icon="octicon-star"
          aria-label="Star volbrene/docswag on GitHub"
        >
          Star
        </a>
      </div>
    </footer>
  );
};

export default AppFooter;
