import React from "react";
import SideBar from "./SideBar";
import DashboardContainer from "../dashboard/styles/Container";
import Body from "./Body";

function Layout({ children }) {
	return (
		<DashboardContainer>
			<SideBar />
			<Body>{children}</Body>
		</DashboardContainer>
	);
}

export default Layout;
