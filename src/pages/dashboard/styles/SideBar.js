import styled from "styled-components";
import Colors from "../../../constants/Colors";

const SideBar = styled.section`
	padding: 24% 7%;
	display: flex;
	flex-direction: column;
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
SideBar.InnerCont = styled.section`
	box-shadow: 0px 4px 9px rgba(81, 92, 111, 0.12);
`;

SideBar.Header = styled.header`
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: space-around;
	height: 60px;
	background-color: #ffffff;
	color: ${Colors.headerColor};
	margin: 9px 0 34px 0;
	padding-right: 67px;
	.user-name {
		font-size: 15px;
		line-height: 20px;
		color: #fcad0a;
		margin: 0;
		margin-top: 5px;
	}
	.logout {
		margin: 0;
		margin-top: 13px;
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
	padding-bottom: 6vh;
	padding-left: 25px;
	box-sizing: border-box;
	font-family: "GT Walsheim", -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
	li {
		opacity: 0.5;
		display: flex;
		align-content: center;
		margin: 8px;
		padding: 12px;
	}
	li.active {
		opacity: 1;
		border-left: 3px solid #fcad0a;
	}
	a {
		color: #515c6f;
		font-weight: 400;
		font-size: 16px;
		text-decoration: none;
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
