import React from "react";
import "./farm.scss";
import logo from "./../../assets/logomark.png";
import logo1 from "../../assets/logomark2.png";

function Farm() {
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
      <form className="farm-form">
        <div className="form-items">
          <div className="form-item">
            <div className="form-item-label">
              Available balance: <span>21.95</span>
            </div>
            <div className="form-item-input">
              <input type="text" className="item-input" placeholder="0.00" />
              <div className="item-input-icon">
                <img src={logo1} width="30" height="30" alt="" />
              </div>
              <div className="item-input-text">stSOL</div>
            </div>
            <div className="form-item-controls">
              <a className="item-control">25%</a>
              <a className="item-control">50%</a>
              <a className="item-control">75%</a>
              <a className="item-control">100%</a>
            </div>
          </div>
          <div className="form-item">
            <div className="form-item-label">
              Available balance: <span>21.95</span>
            </div>
            <div className="form-item-input">
              <input type="text" className="item-input" placeholder="0.00" />
              <div className="item-input-icon">
                <img src={logo1} width="30" height="30" alt="" />
              </div>
              <div className="item-input-text">stSOL</div>
            </div>
            <div className="form-item-controls">
              <a className="item-control">25%</a>
              <a className="item-control">50%</a>
              <a className="item-control">75%</a>
              <a className="item-control">100%</a>
            </div>
          </div>
        </div>
        <div className="farm-form-submit">
          <button type="submit">Farm</button>
        </div>
      </form>
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
          <div className="card-item">
            <div className="card-title">Total APR</div>
            <div className="card-info">11.87%</div>
          </div>{" "}
          <div className="card-item total">
            <div className="card-title">Total APY</div>
            <div className="card-info">0.01%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Farm;
