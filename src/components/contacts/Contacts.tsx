import React from "react";
import "./contacts.scss";

import discordLogo from "./../../assets/contacts/discord.svg";
import mediumLogo from "./../../assets/contacts/medium.svg";
import twitterLogo from "./../../assets/contacts/twitter.svg";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts-icons">
        <div className="contacts-icon">
          <img src={twitterLogo} alt="twitter logo" />
        </div>
        <div className="contacts-icon">
          <img src={discordLogo} alt="" />
        </div>
        <div className="contacts-icon">
          <img src={mediumLogo} alt="" />
        </div>
      </div>
      <div className="contacts-title">
        How it works <br /> Contact us
      </div>
      <div className="contacts-subtitle">
        Cetra Labs, 2022
      </div>
    </div>
  );
}

export default Contacts;
