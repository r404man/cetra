import React, { useState } from "react";
import logo1 from "../../assets/usd-coin-usdc-logo1.svg";

import { useForm } from "react-hook-form";

function form(props: any) {
	const formProp = props.props;
	const balance = parseFloat("21.95");

	const { register, handleSubmit } = useForm({
		mode: "onChange"
	});

	const [formState, setFormState] = useState({
		num1Valid: false,
		num2Valid: false,
		formValid: false
	});

	const [secondValue, setSecondValue] = useState<string>("");
	const [value, setValue] = useState<string>("");

	function changeValue(percent: number) {
		const num = (balance * percent) / 100;

		setFormState({ formValid: true, num1Valid: true, num2Valid: true });
		setValue(num.toString());
	}

	function changeSecondValue(percent: number) {
		const num = (balance * percent) / 100;

		setSecondValue(num.toString());
		setFormState({ formValid: true, num1Valid: true, num2Valid: true });
	}

	const handleChange = (event: any) => {
		const inputValue = event.target.value;

		if (isNaN(inputValue)) setValue("");
		else {
			setValue(`${inputValue}`);
		}
		if (parseFloat(inputValue) > balance) {
			setFormState({ ...formState, num2Valid: false });
			addClass(event, "error");
		}
		if (parseFloat(inputValue) <= balance) {
			event.target.classList.remove("error");
			setFormState({ ...formState, num2Valid: true });
		}
	};

	const handleSecondChange = (event: any) => {
		const inputValue = event.target.value;

		if (isNaN(inputValue)) setSecondValue("");
		else {
			setSecondValue(`${inputValue}`);
		}
		if (parseFloat(inputValue) > balance) {
			setFormState({ ...formState, num2Valid: false });
			addClass(event, "error");
		}
		if (parseFloat(inputValue) <= balance) {
			event.target.classList.remove("error");
			setFormState({ ...formState, num2Valid: true });
		}
	};

	const addClass = (event: any, className: string) => {
		event.target.classList.add(className);
	};

	const onSubmit = (data: any) => {
		console.log(value, secondValue);
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
							type="text"
							className="item-input"
							placeholder="0.00"
							value={value}
							{...register("number1", { required: true })}
							onChange={handleChange}
							onClick={(event) => addClass(event, "touched")}
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
							type="text"
							className="item-input"
							placeholder="0.00"
							value={secondValue}
							{...register("number2", { required: true })}
							onChange={handleSecondChange}
							onClick={(event) => addClass(event, "touched")}
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
				<button type="submit">{formProp ? "Add Collateral" : "Farm"}</button>
			</div>
		</form>
	);
}

export default form;
