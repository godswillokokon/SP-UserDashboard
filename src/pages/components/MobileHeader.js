import React from "react";
import LogoDark from "assets/img/logo.png";
import userSvg from "assets/img/avatar.png";
import MobileHeaderWrapper from "../dashboard/styles/MobileHeader";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

export default function MobileHeader({
	userData,
	showSideBar,
	setShowSideBar,
}) {
	return (
		<MobileHeaderWrapper>
			<div>
				<MobileHeaderWrapper.TogggleButton
					onClick={() => setShowSideBar(!showSideBar)}
				>
					{showSideBar ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				</MobileHeaderWrapper.TogggleButton>
				<img src={LogoDark} alt="logo" width={60} />
			</div>
			<MobileHeaderWrapper.Avatar
				src={userData?.picture || userSvg}
				className={userData?.picture ? "fill" : ""}
				alt="User's Avatar"
			/>
		</MobileHeaderWrapper>
	);
}
