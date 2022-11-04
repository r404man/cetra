import React from "react";
import Pools from "../../pages/Pools";
import Navigation from "../navigation/Navigation";
import HeaderProfile from "./header-profile/HeaderProfile";
import "./header.scss";

function Header() {
  return (
    <>
      <header>
        <div className="main-navigation">
          <Navigation />
        </div>
        <div className="header-nav">
          <div className="header-nav-links">
            <div className="header-breadcrumbs">
              Chamber’s farm
            </div>
            <HeaderProfile />
          </div>
          <div className="page">
            <Pools />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
