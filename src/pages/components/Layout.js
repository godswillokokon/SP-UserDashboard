import React, { useState } from "react";
import SideBar from "./SideBar";
import DashboardContainer from "../dashboard/styles/Container";
import Body from "./Body";
import Auth from "../../helpers/auth";

function Layout({ children }) {
	const [showSideBar, setShowSideBar] = useState(false);
	return (
		<>
			{Auth?.user?.verified ? (
				<div style={{ background: "yellow", width: "100%", height: "30px" }}>
					Verify Email
				</div>
			) : (
				""
			)}
			<DashboardContainer>
				<SideBar
					userData={Auth.user}
					showSideBar={showSideBar}
					setShowSideBar={setShowSideBar}
				/>
				<Body>{children}</Body>
			</DashboardContainer>
		</>
	);
}

export default Layout;
