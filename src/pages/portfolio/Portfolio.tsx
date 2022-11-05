import React from "react";
import "./portfolio.scss";
import icon from "./../../assets/eye.png";
import PortfolioRow from "../../components/portfolio-row/PortfolioRow";

function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="portfolio-perfomance">
        <div className="perfomance-title">
          <div className="perfomance-title-text">Portfolio Perfomance</div>
          <div className="perfomance-title-icon">
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="perfomance-details">
          <div className="perfomance-details-items">
            <div className="details-item">
              <div className="details-item-title">Deposited</div>
              <div className="details-item-subtitle">$15,052</div>
            </div>
            <div className="details-item">
              <div className="details-item-title">Monthly Yield</div>
              <div className="details-item-subtitle">$15,052</div>
            </div>
            <div className="details-item">
              <div className="details-item-title">Daily Yield</div>
              <div className="details-item-subtitle">$15,052</div>
            </div>
            <div className="details-item">
              <div className="details-item-title">Avg. APY</div>
              <div className="details-item-subtitle">$15%</div>
            </div>
            <div className="details-item">
              <div className="details-item-title">Total Farmed</div>
              <div className="details-item-subtitle">$15,052</div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-positions">
        <div className="positions-title">
          <div className="positions-title-text">My positions</div>
          <div className="positions-title-icon">1</div>
        </div>

        <div className="pool-table">
          <div className="pool-table-header portfolio-table-header">
            <div className="table-head pool">Pool</div>
            <div className="table-head apy">APY</div>
            <div className="table-head tvl">Total Position</div>
            <div className="table-head apr">Farmed</div>
            <div className="table-head strategy">Strategy</div>
            <div className="table-head controls"></div>
          </div>
          <PortfolioRow />
          <PortfolioRow />
          <PortfolioRow />
          <PortfolioRow />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
