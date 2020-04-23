import React from "react";
import SideBar from "./SideBar";
import DashboardContainer from "../dashboard/styles/Container";

function Layout() {
	return (
		<DashboardContainer>
			<SideBar />
		</DashboardContainer>
	);
}

export default Layout;
