import { useContext } from "react";

import { TimerContext } from "../TimerContextProvider";

import styled from "styled-components";

const Timer = () => {
	const { handleNumFormat, hours, minutes, seconds } = useContext(TimerContext);

	return (
		<StyledTimer>
			<p>{handleNumFormat(hours)}</p>
			<p>:</p>
			<p>{handleNumFormat(minutes)}</p>
			<p>:</p>
			<p>{handleNumFormat(seconds)}</p>
		</StyledTimer>
	);
};

export default Timer;

const StyledTimer = styled.div`
	display: flex;
	margin: 5rem;

	@media (max-width: 768px) {
		margin: 3rem;
	}

	p {
		font-size: 6rem;
	}
`;
