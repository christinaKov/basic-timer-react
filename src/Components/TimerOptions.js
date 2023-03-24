import { useEffect, useContext } from "react";

import { TimerContext } from "../TimerContextProvider";

import styled from "styled-components";

const TimerOptions = () => {
	let intervalId;

	const {
		isTimerActive,
		setIsTimerActive,
		hours,
		setHours,
		minutes,
		setMinutes,
		seconds,
		setSeconds,
		startHours,
		startMinutes,
		startSeconds,
	} = useContext(TimerContext);

	useEffect(() => {
		// Если отсчет идет
		if (isTimerActive) {
			//handlePlay();
			intervalId = setInterval(() => {
				handlePlay();
			}, 1000);
		}

		// Возвращаем функцию очистки
		return () => clearInterval(intervalId);
	}, [isTimerActive, seconds]);

	// Play/pause
	const handlePlay = () => {
		// Проверяем кол-во секунд
		if (seconds <= 0) {
			// Проверяем кол-во минут
			if (minutes <= 0) {
				// Проверяем кол-во часов
				if (hours <= 0) {
					return () => clearInterval(intervalId);
				} else {
					setHours((hours) => hours - 1);
					setMinutes(59);
				}
			} else {
				setMinutes((minutes) => minutes - 1);
			}
			setSeconds(59);
		} else {
			setSeconds((seconds) => seconds - 1);
		}
	};

	const playToggle = () => {
		setIsTimerActive(!isTimerActive);
	};

	// Reset
	const handleReset = () => {
		// Останавливаем интервал
		clearInterval(intervalId);
		setIsTimerActive(false);

		setHours(startHours);
		setMinutes(startMinutes);
		setSeconds(startSeconds);
	};

	return (
		<StyledOptions>
			<div className="toggle-btns">
				<i
					className={"fa-solid fa-play" + (isTimerActive ? "is--hidden" : "")}
					id="play-btn"
					onClick={playToggle}
				></i>
				<i
					className={"fa-solid fa-pause" + (!isTimerActive ? "is--hidden" : "")}
					id="pause-btn"
					onClick={playToggle}
				></i>
			</div>
			<i
				onClick={handleReset}
				id="reset-btn"
				className="fa-solid fa-repeat"
			></i>
		</StyledOptions>
	);
};

export default TimerOptions;

const StyledOptions = styled.div`
	display: flex;
	gap: 1.5rem;

	i {
		font-size: 3rem;
		width: 3rem;
	}

	.toggle-btns {
		position: relative;
		width: 3rem;

		i {
			position: absolute;
			transition: opacity 0.2s ease-in-out;
		}
	}
`;
