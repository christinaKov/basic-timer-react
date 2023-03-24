import React, { createContext, useState } from "react";

export const TimerContext = createContext();

function TimerContextProvider(props) {
	const [hours, setHours] = useState(1);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const [startHours, setStartHours] = useState(1);
	const [startMinutes, setStartMinutes] = useState(0);
	const [startSeconds, setStartSeconds] = useState(0);

	const [isTimerActive, setIsTimerActive] = useState(false);

	// Приводим к корректному отображению
	const handleNumFormat = (num) => {
		return Number(num).toLocaleString(undefined, {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});
	};

	return (
		// Pass the state values and setState functions as values to the context provider
		<TimerContext.Provider
			value={{
				hours,
				setHours,
				minutes,
				setMinutes,
				seconds,
				setSeconds,
				startHours,
				setStartHours,
				startMinutes,
				setStartMinutes,
				startSeconds,
				setStartSeconds,
				isTimerActive,
				setIsTimerActive,
				handleNumFormat,
			}}
		>
			{props.children}
		</TimerContext.Provider>
	);
}

export default TimerContextProvider;
