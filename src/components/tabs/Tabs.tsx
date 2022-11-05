import React from "react";
import "./tabs.scss";
import logo from "./../../assets/logomark.png";
import logo1 from "../../assets/logomark2.png";
function Tabs() {
  return (
    <div className="farm-cards">
      <div className="farm-card">
        <div className="card-item">
          <div className="card-title">Slipage & Trading Fee</div>
          <div className="card-info">0.01%</div>
        </div>
        <div className="card-item">
          <div className="card-title">Yield Farming APR</div>
          <div className="card-info">7.45%</div>
        </div>{" "}
        <div className="card-item">
          <div className="card-title">Trading Fee Income APR</div>
          <div className="card-info">4.23%</div>
        </div>{" "}
        <div className="card-item assets">
          <div className="card-title">Assets to Borrow</div>
          <div className="assets-items">
            <div className="assets-info">
              <div className="assets-icon">
                <img src={logo} alt="" />
              </div>
              <div className="assets-text">50 USDC (25%)</div>
              <div className="assets-details">Borrow Interest 10.63%</div>
            </div>
            <div className="assets-info">
              <div className="assets-icon">
                <img src={logo} alt="" />
              </div>
              <div className="assets-text">50 USDC (25%)</div>
              <div className="assets-details">Borrow Interest 10.63%</div>
            </div>
          </div>
        </div>{" "}
        <div className="card-item">
          <div className="card-title">Daily APR</div>
          <div className="card-info">0.03%</div>
        </div>
        <div className="card-item">
          <div className="card-title">Total APR</div>
          <div className="card-info">11.87%</div>
        </div>{" "}
        <div className="card-item total">
          <div className="card-title">Total APY</div>
          <div className="card-info">0.01%</div>
        </div>
      </div>
      <div className="farm-card">
        <div className="card-item">
          <div className="card-title">Slipage & Trading Fee</div>
          <div className="card-info">0.01%</div>
        </div>
        <div className="card-item">
          <div className="card-title">Yield Farming APR</div>
          <div className="card-info">7.45%</div>
        </div>{" "}
        <div className="card-item">
          <div className="card-title">Trading Fee Income APR</div>
          <div className="card-info">4.23%</div>
        </div>{" "}
        <div className="card-item assets">
          <div className="card-title">Assets to Borrow</div>
          <div className="assets-items">
            <div className="assets-info">
              <div className="assets-icon">
                <img src={logo} alt="" />
              </div>
              <div className="assets-text">50 USDC (25%)</div>
              <div className="assets-details">Borrow Interest 10.63%</div>
            </div>
            <div className="assets-info">
              <div className="assets-icon">
                <img src={logo} alt="" />
              </div>
              <div className="assets-text">50 USDC (25%)</div>
              <div className="assets-details">Borrow Interest 10.63%</div>
            </div>
          </div>
        </div>{" "}
        <div className="card-item">
          <div className="card-title">Daily APR</div>
          <div className="card-info">0.03%</div>
        </div>
        <div className="card-item plus">
          <div className="card-title">Assets Borrowed</div>
          <div className="card-info">
            <div className="plus-infos">
              <div className="plus-info">
                <div className="plus-info-icon">
                  <img src={logo} alt="" />
                </div>
                <div className="plus-info-title">50 USDC</div>
                <span>+</span>
                <div className="plus-info-icon">
                  <img src={logo} alt="" />
                </div>
                <div className="plus-info-title">50 USDC</div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Tabs;
