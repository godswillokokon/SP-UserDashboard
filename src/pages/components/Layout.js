import React, { useState } from "react";
import SideBar from "./SideBar";
import DashboardContainer from "../dashboard/styles/Container";
import Body from "./Body";

function Layout({ children }) {
	const [showSideBar, setShowSideBar] = useState(false);
	return (
		<DashboardContainer>
			<SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
			<Body>{children}</Body>
		</DashboardContainer>
	);
}

export default Layout;
