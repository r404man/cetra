import React from "react";
import "./farm.scss";
import logo from "./../../assets/logomark.png";
import logo1 from "../../assets/logomark2.png";
import Form from "../../components/form/Form";
import Tabs from "../../components/tabs/Tabs";

function Farm() {
  const farm = false;

  return (
    <div className="farm-page">
      <div className="farm-header">
        <div className="farm-title">
          <div className="farm-title-text">Farm stSOL-USDC</div>
          <div className="farm-title-icons">
            <div className="title-icon">
              <div className="title-icon-image">
                <img src={logo} alt="" />
              </div>
              <div className="title-icon-text">Raydium</div>
            </div>
            <span>/</span>
            <div className="title-icon">
              <div className="title-icon-image">
                <img src={logo} alt="" />
              </div>
              <div className="title-icon-text">Tulip</div>
            </div>
          </div>
        </div>
        <div className="farm-header-details">
          <div className="farm-header-data">APY: 65.23%</div>
          <div className="farm-header-data tvl">TVL: $3.73M</div>
          <div className="farm-header-control">Delta-Neutral</div>
        </div>
      </div>

      <Form props={farm} />
      <Tabs />
    </div>
  );
}

export default Farm;
