import React, { Component } from "react";
import "./AppFooter.css";

class AppFooter extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <footer>
        <div className="inner">
          <a
            class="github-button"
            href="https://github.com/volbrene"
            aria-label="Follow @volbrene on GitHub"
          >
            Follow @volbrene
          </a>
          <a
            class="github-button"
            href="https://github.com/volbrene/docswag"
            data-icon="octicon-star"
            aria-label="Star volbrene/docswag on GitHub"
          >
            Star
          </a>
        </div>
      </footer>
    );
  }
}

export default AppFooter;
