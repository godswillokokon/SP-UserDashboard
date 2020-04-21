import React from "react";
import SideBar from "./SideBar";
import MobileHeader from "./MobileHeader";
import Body from "./Body";
import DashboardContainer from "../styles/Container";

function Layout() {
	return (
		<DashboardContainer>
			<MobileHeader />
			<SideBar />
			<Body></Body>
		</DashboardContainer>
	);
}

export default Layout;
