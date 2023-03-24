import TimerContextProvider from "./TimerContextProvider";

import styled from "styled-components";

import TimerForm from "./Components/TimerForm";
import Timer from "./Components/Timer";
import TimerOptions from "./Components/TimerOptions";

function App() {
	return (
		<TimerContextProvider>
			<StyledMain>
				<TimerForm></TimerForm>
				<Timer></Timer>
				<TimerOptions></TimerOptions>
			</StyledMain>
		</TimerContextProvider>
	);
}

export default App;

const StyledMain = styled.main`
	width: 100vw;
	min-height: 100vh;
	display: flex;
	align-items: center;
	padding-top: 7rem;
	flex-direction: column;
	background-image: linear-gradient(120deg, #a8edea 0%, #fed6e3 60%);

	@media (max-width: 768px) {
		padding-top: 5rem;
	}
`;
