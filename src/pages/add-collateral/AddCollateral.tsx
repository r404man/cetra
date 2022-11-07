import React from "react";
import "./addCollateral.scss";
import logo from "./../../assets/logomark.png";
import logo1 from "../../assets/logomark2.png";
import { Link, NavLink, Outlet } from "react-router-dom";

function AddCollateral() {
	const activeClassName = "active collateral-page-control";

	return (
		<div className="collateral-page">
			<div className="collateral-page-info">
				<div className="page-info">
					<div className="page-info-title">
						<div className="poolrow-title-icons collateral-title-icons">
							<div className="title-icon">
								<img src={logo1} alt="" />
							</div>
							<div className="title-icon">
								<img src={logo1} alt="" />
							</div>
						</div>
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
					</div>
					<div className="perfomance-details-items collateral-details-items">
						<div className="details-item collateral-item">
							<div className="collateral-item-title collateral-apy-title">
								APY
							</div>
							<div className="collateral-item-subtitle collateral-apy">
								44.47%
							</div>
						</div>
						<div className="details-item collateral-item">
							<div className="collateral-item-title">Total position</div>
							<div className="collateral-item-subtitle">$12,412</div>
						</div>
						<div className="details-item collateral-item">
							<div className="collateral-item-title">Farmed</div>
							<div className="row-farmed-title">$145.21</div>
							<div className="row-farmed-subtitle">
								<span>12$</span> Since Yesterday
							</div>
						</div>
						<div className="details-item collateral-item">
							<div className="collateral-item-title">Strategy</div>
							<div className="collateral-item-subtitle">Delta Neutral</div>
						</div>
					</div>
				</div>
				<div className="collateral-page-controls">
					<NavLink
						to="/add-collateral/"
						className={({ isActive }) =>
							isActive ? activeClassName : "collateral-page-control"
						}>
						Add Collateral
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : "collateral-page-control"
						}
						to="/add-collateral/close-position"
						// className="collateral-page-control"
					>
						Close position
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : "collateral-page-control"
						}
						to="/add-collateral/stats"
						//  className="collateral-page-control"
					>
						Stats
					</NavLink>
				</div>
			</div>
			<Outlet />
		</div>
	);
}

export default AddCollateral;
