import styled from "styled-components";

import Center from "components/Common";
import Button from "components/Button";

const Wrapper = styled.div`
	background-color: #091016;
	color: #e6f3f3;
	height: 100vh;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	gap: 10px;
`;

function App() {
	return (
		<Wrapper>
			<Center>
				<Grid>
					<Button label="Button Primary" variant="primary" />
					<Button label="Button Secondary" variant="secondary" />

					<Button label="Disabled Button Primary" variant="primary" disabled />
					<Button label="Disabled Button Secondary" variant="secondary" disabled />
				</Grid>
			</Center>
		</Wrapper>
	);
}

export default App;
