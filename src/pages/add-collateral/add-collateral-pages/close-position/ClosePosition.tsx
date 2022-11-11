import React, { useState } from "react";
import Modal from "../../../../components/modal/Modal";
import "./closePosition.scss";
import t from "./../../../../assets/T.svg";
import sol from "./../../../../assets/sol.svg";
import logo from "./../../../../assets/usdc.svg";
import arrow from "./../../../../assets/arrow-down.svg";

const options = [
	{ name: "USDT", url: t },
	{ name: "USDС", url: logo },
	{ name: "SOL", url: sol }
];

function ClosePosition() {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState({
		name: "USDC",
		url: logo
	});

	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = (value: any) => () => {
		setSelectedOption(value);
		setIsOpen(false);
	};

	const min = 1;
	const max = 100;

	const [value, setValue] = useState(100);

	const handleChange = (event: any) => {
		if (!isNaN(event.target.value)) {
			const value = Math.max(min, Math.min(max, Number(event.target.value)));
			setValue(value);
		} else {
			setValue(1);
		}
	};

	return (
		<div className="close-position-page">
			<div className="close-position-form">
				<div className="close-position-radios">
					<label className="position-radio">
						<div className="radio-title">
							<label className="radio-container">
								<input
									type="radio"
									onChange={() => ({})}
									checked={true}
									name="radio"
								/>
								<span className="checkmark"></span>
							</label>
							<div className="radio-text">Minimize Trading</div>
						</div>

						<div className="radio-subtitle">
							We will convert the minimum required amount of tokens into SOL to
							pay bak the debt and return the remaining assets to you. This can
							potentially save on slipage and trading fees
						</div>
					</label>
					<label className="position-radio">
						<div className="radio-title">
							<label className="radio-container">
								<input
									type="radio"
									onChange={() => ({})}
									checked={true}
									name="radio"
								/>
								<span className="checkmark dropdown"></span>
							</label>
							<div className="radio-text radio-dropdown-text">Convert to</div>
							<div className="radio-dropdown">
								<div className="dropdown-container">
									<div className="dropdown-header" onClick={toggling}>
										<div className="dropdown-header-icon">
											<img
												height={19}
												width={19}
												src={selectedOption.url}
												alt=""
											/>
										</div>
										<div className="dropdown-header-text">
											{selectedOption!.name}
										</div>
										<div className="dropdown-header-control">
											{isOpen ? (
												<img src={arrow} className="isOpen" alt="" />
											) : (
												<img src={arrow} alt="" />
											)}
										</div>
									</div>
									{isOpen && (
										<div className="dropdown-list-container">
											<div className="dropdown-list">
												{options.map((option) => (
													<div
														key={option.name}
														onClick={onOptionClicked(option)}
														className="dropdown-list-item">
														<img
															width={19}
															height={19}
															src={option.url}
															alt=""
														/>
														{option.name}
													</div>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className="radio-subtitle">
							Your position value will all be converted to USDT and returned to
							you after paying back the debt
						</div>
					</label>
				</div>

				<label className="close-position-item">
					<label className="position-radio">
						<div className="radio-title">
							<label className="radio-container">
								<input
									type="radio"
									onChange={() => ({})}
									checked={true}
									name="radio"
								/>
								<span className="checkmark"></span>
							</label>
							<div className="radio-text partial-close-title">
								Partial Close
							</div>
						</div>
					</label>

					<div className="close-position-input">
						<div className="close-position-input form-item-input">
							<input
								type="text"
								className="item-input"
								value={value}
								onChange={handleChange}
								placeholder="100%"
							/>
							<div className="item-input-text">
								<svg
									width="33"
									height="26"
									viewBox="0 0 33 26"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M17.26 10.94C16.3533 10.94 15.6 10.64 15 10.04C14.4 9.44 14.1 8.70667 14.1 7.84C14.1 6.98667 14.4 6.26 15 5.66C15.6133 5.04667 16.3667 4.74 17.26 4.74C18.1667 4.74 18.92 5.04 19.52 5.64C20.12 6.24 20.42 6.97333 20.42 7.84C20.42 8.70667 20.12 9.44 19.52 10.04C18.9333 10.64 18.18 10.94 17.26 10.94ZM16.1 9.02C16.4067 9.32667 16.7933 9.48 17.26 9.48C17.7267 9.48 18.1067 9.32 18.4 9C18.7067 8.68 18.86 8.29333 18.86 7.84C18.86 7.38667 18.7067 7.00667 18.4 6.7C18.1067 6.38 17.7267 6.22 17.26 6.22C16.7933 6.22 16.4067 6.38 16.1 6.7C15.8067 7.00667 15.66 7.38667 15.66 7.84C15.66 8.30667 15.8067 8.7 16.1 9.02ZM15.04 17.02L24.34 6.62L25.32 7.16L16 17.58L15.04 17.02ZM25.56 18.34C24.96 18.94 24.2067 19.24 23.3 19.24C22.3933 19.24 21.64 18.94 21.04 18.34C20.44 17.74 20.14 17.0067 20.14 16.14C20.14 15.2733 20.44 14.54 21.04 13.94C21.64 13.34 22.3933 13.04 23.3 13.04C24.2067 13.04 24.96 13.34 25.56 13.94C26.16 14.54 26.46 15.2733 26.46 16.14C26.46 17.0067 26.16 17.74 25.56 18.34ZM22.14 17.3C22.4467 17.6067 22.8333 17.76 23.3 17.76C23.7667 17.76 24.1467 17.6067 24.44 17.3C24.7467 16.98 24.9 16.5933 24.9 16.14C24.9 15.6867 24.7467 15.3067 24.44 15C24.1467 14.68 23.7667 14.52 23.3 14.52C22.8333 14.52 22.4467 14.68 22.14 15C21.8467 15.3067 21.7 15.6867 21.7 16.14C21.7 16.5933 21.8467 16.98 22.14 17.3Z"
										fill="#1F2040"
									/>
									<path
										d="M0.442219 13.5876C0.727289 13.2753 1.2191 13.2753 1.50417 13.5876L4.99085 17.4082C5.24135 17.6827 5.24135 18.1029 4.99085 18.3774V18.3774C4.70578 18.6897 4.21397 18.6897 3.9289 18.3774L0.442219 14.5568C0.191723 14.2823 0.191722 13.8621 0.442219 13.5876V13.5876Z"
										fill="#1F2040"
									/>
									<path
										d="M8.55778 13.5818C8.80828 13.8563 8.80828 14.2765 8.55778 14.551L5.02855 18.4182C4.74348 18.7305 4.25167 18.7305 3.9666 18.4182V18.4182C3.71611 18.1437 3.71611 17.7235 3.9666 17.449L7.49583 13.5818C7.7809 13.2695 8.27271 13.2695 8.55778 13.5818V13.5818Z"
										fill="#1F2040"
									/>
									<path
										d="M8.55778 10.4124C8.27271 10.7247 7.7809 10.7247 7.49583 10.4124L4.00915 6.59176C3.75865 6.31728 3.75865 5.89711 4.00915 5.62263V5.62263C4.29422 5.31025 4.78603 5.31025 5.0711 5.62263L8.55778 9.44322C8.80828 9.7177 8.80828 10.1379 8.55778 10.4124V10.4124Z"
										fill="#1F2040"
									/>
									<path
										d="M0.442219 10.4182C0.191723 10.1437 0.191723 9.72352 0.442219 9.44904L3.97145 5.58182C4.25652 5.26945 4.74833 5.26945 5.0334 5.58182V5.58182C5.2839 5.85631 5.2839 6.27648 5.0334 6.55096L1.50417 10.4182C1.2191 10.7305 0.727289 10.7305 0.442219 10.4182V10.4182Z"
										fill="#1F2040"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div className="close-position-submit">
						<button className="positon-submit" type="submit">
							Close position
						</button>
					</div>
				</label>
			</div>
			{/* <Modal props={"position"} /> */}
		</div>
	);
}

export default ClosePosition;
// function styled(arg0: string) {
// 	throw new Error("Function not implemented.");
// }
