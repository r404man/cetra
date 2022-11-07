import React from "react";
import "./poolrow.scss";
import logo from "./../../assets/pool/logo1.png";
import logo1 from "./../../assets/pool/title-logo-1.png";

function PoolRow() {
	return (
		<div className="poolrow">
			<div className="poolrow-title">
				<div className="poolrow-title-icons">
					<div className="title-icon">
						<img src={logo} alt="" />
					</div>
					<div className="title-icon">
						<img src={logo} alt="" />
					</div>
				</div>
				<div className="poolrow-title-text">
					<div className="title-text">SOL-UCDC</div>
					<div className="title-subtitles">
						<div className="title-subtitle">
							<div className="subtitle-icon">
								<img src={logo1} alt="" />
							</div>
							<div className="subtitle-text">Raydium</div>
						</div>
						<span>/</span>
						<div className="title-subtitle">
							<div className="subtitle-icon">
								<img src={logo1} alt="" />
							</div>
							<div className="subtitle-text">Tulip</div>
						</div>
					</div>
				</div>
			</div>
			<div className="poolrow-apy">36.22%</div>
			<div className="poolrow-tvl">
				<div className="tvl-title">$8.05M</div>
				<div className="tvl-subtitle">(24.8M on dex)</div>
			</div>
			<div className="poolrow-yild">
				<div className="yild-item">
					<div className="item-title">Total APR:</div>
					<div className="item-info">31.17%</div>
				</div>
				<div className="yild-item">
					<div className="item-title">Daily APR:</div>
					<div className="item-info">0.07%</div>
				</div>
			</div>
			<div className="poolrow-strategy">
				<div className="strategy-title">Delta Neutral</div>
				<div className="strategy-subtitle">3x Leverage</div>
			</div>
			<div className="poolrow-control">
				<a className="control">Deposit</a>
			</div>
		</div>
	);
}

export default PoolRow;
