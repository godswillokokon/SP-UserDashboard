import styled from "styled-components";

const DashboardContainer = styled.div`
	display: grid;
	grid-template-columns: 380px 1fr;
	height: 100vh;
	grid-template-areas: "sidebar content";
	@media only screen and (max-width: 720px) {
		grid-template-columns: 1fr;
		grid-template-areas: "content";
	}
`;

export default DashboardContainer;
