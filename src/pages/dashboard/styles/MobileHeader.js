import styled from "styled-components";

const MobileHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	background-color: #f0f0f0;
	height: 80px;
	z-index: 2;
	position: fixed;
	width: 100vw;
	box-sizing: border-box;
	* {
		margin-right: 10px;
	}
	@media only screen and (min-width: 721px) {
		display: none;
	}
`;

MobileHeader.Avatar = styled.img`
	background-color: #fff;
	height: 30px;
	width: 30px;
	object-fit: scale-down;
	border-radius: 100%;
	border: none;
	box-shadow: 0px 3px 20px #00000029;
	&.fill {
		object-fit: cover;
	}
`;

MobileHeader.TogggleButton = styled.button`
	background-color: transparent;
	border: none;
`;

export default MobileHeader;
