import styled from "styled-components";
import Colors from "../../../constants/Colors";

const SideBar = styled.section`
	flex: 0 0 300px;
	max-width: 300px;
	min-width: 300px;
	width: 300px;
	box-shadow: 0px 4px 9px rgba(81, 92, 111, 0.12);
	height: 485px;
	margin: auto;
	background-color: #ffffff;
	color: ${Colors.textColor};
	box-sizing: border-box;
	@media only screen and (max-width: 720px) {
		position: fixed;
		z-index: 1000;
		height: 100vh;
		width: 70vw;
		margin-left: -70vw;
		transition: 0.2s ease all;
		-webkit-transition: 0.2s ease all;
		-moz-transition: 0.2s ease all;
		&.open {
			margin-left: 0;
		}
	}
`;

SideBar.Header = styled.header`
	display: flex;
	flex-direction: row;
	align-content: center;
	height: 60px;
	background-color: #ffffff;
	color: ${Colors.headerColor};
	margin: 40px 0;
	.user-name {
		font-size: 12px;
		line-height: 20px;
		color: #fcad0a;
		margin: 0;
	}
	.logout {
		margin: 0;
	}
	@media only screen and (max-width: 720px) {
		padding: 0 30px;
		padding-left: 40px;
		margin: 20px 0;
	}
`;

SideBar.Avatar = styled.img`
  background-color: ${Colors.customGrey}
  height: 60px;
  width: 60px;
  object-fit: scale-down;
  border-radius: 50px;
  border: none;
  &.fill {
    object-fit: cover;
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

SideBar.Divider = styled.hr`
	border: 0.7px solid #e9e9e9;
	width: 100%;
	opacity: 0.2;
	position: relative;
`;

SideBar.Links = styled.ul`
	flex: 1;
	background-color: ${Colors.textColor};
	width: 100%;
	border-radius: 30px 30px 0 0;
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: auto;
	padding: 20%;
	padding-bottom: 20vh;
	box-sizing: border-box;
	font-family: "GT Walsheim", -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
	li {
		opacity: 0.3;
		display: flex;
		align-content: center;
	}
	li.active {
		opacity: 1;
	}
	a {
		color: #fff;
		font-weight: 400;
		font-size: 16px;
	}
	img {
		width: 16px;
		height: 16px;
		margin-right: 21px;
	}
	@media only screen and (max-width: 720px) {
		border-radius: 0 30px 0 0;
		padding: 30px;
		padding-bottom: 15vh;
		padding-left: 40px;
		li {
			margin-bottom: 10px;
		}
	}
`;

SideBar.TogggleButton = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	text-align: left;
	@media only screen and (min-width: 721px) {
		display: none;
	}
`;

export default SideBar;
