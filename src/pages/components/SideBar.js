import React from "react";
import { Link } from "react-router-dom";
import SideBarWrapper from "../dashboard/styles/SideBar";
import Avatar from "../../assets/img/avatar.png";

const SideBar = () => {
	return (
		<SideBarWrapper>
			<SideBarWrapper.Header>
				<SideBarWrapper.Avatar src={Avatar} alt="avatar" />
				<div style={{ display: "flex", flexDirection: "column" }}>
					<h4 className="user-name">Erim Anna Ndoma</h4>
					<h5>Logout</h5>
				</div>
			</SideBarWrapper.Header>
		</SideBarWrapper>
	);
};

export default SideBar;

const TopLinks = [
	{
		name: "Wallet",
		path: "/wallet",
		icon: require("../../assets/img/wallet.png"),
		matchPaths: ["/wallet"],
	},
	{
		name: "Bought Properties",
		path: "/bought-properties",
		icon: require("../../assets/img/properties.png"),
		matchPaths: ["/bought-properties"],
	},
	{
		name: "Sold Properties",
		path: "/sold-properties",
		icon: require("../../assets/img/properties.png"),
		matchPaths: ["/sold-properties"],
	},
	{
		name: "Mortgage",
		path: "/mortgage",
		icon: require("../../assets/img/mortgage.png"),
		matchPaths: ["/mortgage"],
	},
	{
		name: "Build With SpreadPro",
		path: "/build-spreadpro",
		icon: require("../../assets/img/properties.png"),
		matchPaths: ["/build-spreadpro"],
	},
	{
		name: "Account Setting",
		path: "/account-setting",
		icon: require("../../assets/img/account.png"),
		matchPaths: ["/account-setting", "/change-password"],
	},
];
