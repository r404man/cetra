import React from "react";
import "./contacts.scss";

import discordLogo from "./../../assets/contacts/discord.svg";
import mediumLogo from "./../../assets/contacts/medium.svg";
import twitterLogo from "./../../assets/contacts/twitter.svg";

function Contacts() {
	return (
		<div className="contacts">
			<div className="contacts-icons">
				<a href="https://twitter.com/CetraFinance" className="contacts-icon">
					<img src={twitterLogo} alt="twitter logo" />
				</a>
				<div className="contacts-icon">
					<img src={discordLogo} alt="" />
				</div>
				<a href="https://medium.com/@cetrafinance" className="contacts-icon">
					<img src={mediumLogo} alt="" />
				</a>
			</div>
			<a href="https://cetra.gitbook.io/welcome/" className="contacts-title">
				How it works <br /> Contact us
			</a>
			<a
				href="https://cetra.gitbook.io/welcome/official-links"
				className="contacts-subtitle">
				Cetra Labs, 2022
			</a>
		</div>
	);
}

export default Contacts;
