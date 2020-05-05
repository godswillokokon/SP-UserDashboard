import React, { useState } from "react";
import SideBar from "./SideBar";
import DashboardContainer from "../dashboard/styles/Container";
import Body from "./Body";
import Auth from "helpers/auth";
import Navbar from "./navbar";
import MobileHeader from "./MobileHeader";

function Layout({ children }) {
	const [showSideBar, setShowSideBar] = useState(false);
	return (
		<div style={{ overflow: "hidden" }}>
			<Navbar />
			<DashboardContainer>
				<MobileHeader
					userData={Auth.user}
					showSideBar={showSideBar}
					setShowSideBar={setShowSideBar}
				/>
				<SideBar
					userData={Auth.user}
					showSideBar={showSideBar}
					setShowSideBar={setShowSideBar}
				/>
				<Body>{children}</Body>
			</DashboardContainer>
		</div>
	);
}

export default Layout;
