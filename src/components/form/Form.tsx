import React, { useState } from "react";
import logo1 from "../../assets/logomark2.png";

import { useForm } from "react-hook-form";

function form(props: any) {
	const formProp = props.props;
	const balance = 21.95;

	const { register, handleSubmit } = useForm({
		mode: "onChange"
	});

	const onSubmit = (data: any) => {
		console.log(value, secondValue);
	};

	// const [value, setValue] = useState(balance);
	const [secondValue, setSecondValue] = useState(0.0);

	function changeValue(percent: number) {
		const num = (balance * percent) / 100;
		setValue(num);
		setIsFormValid(true);
	}

	function changeSecondValue(percent: number) {
		const num = (balance * percent) / 100;
		setSecondValue(num);
		setIsFormValid(true);
	}

	const min = 0;
	const max = balance;

	const [value, setValue] = useState(0.0);

	const formValidation = {
		num1Valid: false,
		num2Valid: false,
		formValid: false
	};

	const [isFormValid, setIsFormValid] = useState(false);

	const validateForm = (num: any) => {
		if (num !== 0) {
			setIsFormValid(true);
		}
	};

	const handleChange = (event: any) => {
		if (!isNaN(event.target.value)) {
			const value = Math.max(min, Math.min(max, Number(event.target.value)));
			setValue(value);
			validateForm(value);
		} else {
			setValue(min);
		}
	};

	const handleSecondChange = (event: any) => {
		if (!isNaN(event.target.value)) {
			const value = Math.max(min, Math.min(max, Number(event.target.value)));
			setSecondValue(value);
			validateForm(value);
		} else {
			setSecondValue(min);
		}
	};

	const addClass = (event: any) => {
		event.target.classList.add("touched");
	};

	return (
		<form className="farm-form" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-items">
				<div className="form-item">
					<div className="form-item-label">
						Available balance: <span>{balance}</span>
					</div>
					<div className="form-item-input">
						<input
							type="number"
							className="item-input"
							placeholder="0.00"
							value={value}
							step="any"
							{...register("number1", { required: true })}
							onChange={handleChange}
							onClick={addClass}
						/>
						<div className="item-input-icon">
							<img src={logo1} width="30" height="30" alt="" />
						</div>
						<div className="item-input-text">stSOL</div>
					</div>
					<div className="form-item-controls">
						<a className="item-control" onClick={() => changeValue(25)}>
							25%
						</a>
						<a className="item-control" onClick={() => changeValue(50)}>
							50%
						</a>
						<a className="item-control" onClick={() => changeValue(75)}>
							75%
						</a>
						<a className="item-control" onClick={() => changeValue(100)}>
							100%
						</a>
					</div>
				</div>
				<div className="form-item">
					<div className="form-item-label">
						Available balance: <span>21.95</span>
					</div>
					<div className="form-item-input">
						<input
							type="number"
							className="item-input"
							placeholder="0.00"
							value={secondValue}
							step="any"
							{...register("number2", { required: true })}
							onChange={handleSecondChange}
							onClick={addClass}
						/>
						<div className="item-input-icon">
							<img src={logo1} width="30" height="30" alt="" />
						</div>
						<div className="item-input-text">stSOL</div>
					</div>
					<div className="form-item-controls">
						<a className="item-control" onClick={() => changeSecondValue(25)}>
							25%
						</a>
						<a className="item-control" onClick={() => changeSecondValue(50)}>
							50%
						</a>
						<a className="item-control" onClick={() => changeSecondValue(75)}>
							75%
						</a>
						<a className="item-control" onClick={() => changeSecondValue(100)}>
							100%
						</a>
					</div>
				</div>
			</div>
			<div className="farm-form-submit">
				<button type="submit" disabled={!isFormValid}>
					{formProp ? "Add Collateral" : "Farm"}
				</button>
			</div>
		</form>
	);
}

export default form;
