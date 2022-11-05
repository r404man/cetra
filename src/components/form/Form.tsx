import React from "react";
import logo from "./../../assets/logomark.png";
import logo1 from "../../assets/logomark2.png";
function form(props: any) {
  const formProp = props.props;
  return (
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
        <button type="submit">{formProp ? "Add Collateral" : "Farm"}</button>
      </div>
    </form>
  );
}

export default form;
