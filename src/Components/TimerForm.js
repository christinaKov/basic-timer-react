import { useState, useContext, useEffect } from "react";

import { TimerContext } from "../TimerContextProvider";

import styled from "styled-components";

const TimerForm = () => {
	const [hoursInput, setHoursInput] = useState("");
	const [hoursInputCorrect, setHoursInputCorrect] = useState(true);
	const [minutesInput, setMinutesInput] = useState("");
	const [minutesInputCorrect, setMinutesInputCorrect] = useState(true);
	const [secondsInput, setSecondsInput] = useState("");
	const [secondsInputCorrect, setSecondsInputCorrect] = useState(true);

	const [isInputCorrect, setisInputCorrect] = useState(true);

	useEffect(() => {
		// При изменении статусов менять отображение ошибки
		setisInputCorrect(
			[hoursInputCorrect, minutesInputCorrect, secondsInputCorrect].every(
				(input) => input
			)
		);
	}, [hoursInputCorrect, minutesInputCorrect, secondsInputCorrect]);

	const {
		setStartHours,
		setStartMinutes,
		setStartSeconds,
		setHours,
		setMinutes,
		setSeconds,
	} = useContext(TimerContext);

	const checkInputs = (e) => {
		const targetId = e.target.id.split("-")[0];
		const newValue = e.target.value;

		switch (targetId) {
			case "hours":
				// Проверка, корректное ли значение
				if ((Number(newValue) && newValue <= 24) || newValue === "") {
					// Проверка, что значение не пустая строка
					if (newValue !== "") {
						setStartHours(newValue);
						setHours(newValue);
					}
					setHoursInputCorrect(true);
				} else {
					setHoursInputCorrect(false);
				}
				setHoursInput(newValue);
				break;
			case "minutes":
				// Проверка, корректное ли значение
				if ((Number(newValue) && newValue <= 59) || newValue === "") {
					// Проверка, что значение не пустая строка
					if (newValue !== "") {
						setStartMinutes(newValue);
						setMinutes(newValue);
					}
					setMinutesInputCorrect(true);
				} else {
					setMinutesInputCorrect(false);
				}
				setMinutesInput(newValue);
				break;
			case "seconds":
				// Проверка, корректное ли значение
				if ((Number(newValue) && newValue <= 59) || newValue === "") {
					// Проверка, что значение не пустая строка
					if (newValue !== "") {
						setStartSeconds(newValue);
						setSeconds(newValue);
					}
					setSecondsInputCorrect(true);
				} else {
					setSecondsInputCorrect(false);
				}
				setSecondsInput(newValue);
				break;
		}
	};

	// Обработка инпута
	const handleInputChange = (e) => {
		checkInputs(e);
	};

	//Сброс инпута
	const handleInputClick = (e) => {
		e.target.value = "";
		checkInputs(e);
	};

	return (
		<StyledForm>
			<StyledInputContainer>
				<label htmlFor="hours-input">hh</label>
				<input
					value={hoursInput}
					onChange={handleInputChange}
					onClick={handleInputClick}
					type="text"
					id="hours-input"
				/>
			</StyledInputContainer>
			<StyledInputContainer>
				<label htmlFor="minutes-input">mm</label>
				<input
					value={minutesInput}
					onChange={handleInputChange}
					onClick={handleInputClick}
					type="text"
					id="minutes-input"
				/>
			</StyledInputContainer>
			<StyledInputContainer>
				<label htmlFor="seconds-input">ss</label>
				<input
					value={secondsInput}
					onChange={handleInputChange}
					onClick={handleInputClick}
					type="text"
					id="seconds-input"
				/>
			</StyledInputContainer>
			<StyledWarningMsg className={isInputCorrect ? "is--hidden" : ""}>
				Пожалуйста, введите корректное значение
			</StyledWarningMsg>
		</StyledForm>
	);
};

export default TimerForm;

const StyledForm = styled.form`
	position: relative;
	width: 70vw;
	display: flex;
	justify-content: center;
	gap: 1.5rem;
	height: 10rem;
`;

const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	label {
		font-size: 2rem;
		padding-bottom: 1rem;
	}

	input {
		min-height: 3rem;
		outline: none;
		padding: 0.5rem 1.5rem;
		text-align: center;
		font-size: 2rem;
		width: 100%;
		border: none;
		background: rgb(247, 245, 245);
	}
`;

const StyledWarningMsg = styled.p`
	position: absolute;
	text-align: center;
	width: 100%;
	bottom: 0;
	transition: opacity 0.2s ease-in-out;
	font-size: 1.8rem;
	font-weight: 300;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;
