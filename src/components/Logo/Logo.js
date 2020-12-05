import React from "react";

import LogoImages from "../../assets/images/logoStarWars.png";
import "./Logo.css";

const logo = () => (
  <div className="Logo">
    <img src={LogoImages} />
  </div>
);

export default logo;
