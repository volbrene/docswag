import React from "react";
import Logo from "../../docswag.svg";
import "./ApiOverviewPage.css";

const ApiOverviewPage = () => {
  return (
    <div className="overview-wrapper">
      <div>
        <img src={Logo} alt="DocSwag" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit mollitia
          consectetur illum tempora eos non, dolores et ullam reprehenderit
          doloremque nulla, magnam eius corporis minus amet assumenda, quos
          accusamus similique.
        </p>
      </div>
    </div>
  );
};

export default ApiOverviewPage;
