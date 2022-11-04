import React from "react";
import { Routes, Route } from "react-router-dom";
import Farm from "../../pages/farm/Farm";
import Pools from "../../pages/pools/Pools";
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
            <div className="header-breadcrumbs">Chamber’s farm</div>
            <HeaderProfile />
          </div>
          <div className="page">
            <Routes>
              <Route path="/" element={<Pools />} />
              <Route path="/farm" element={<Farm />} />
              <Route path="/portfolio" element={<Pools />} />
            </Routes>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
