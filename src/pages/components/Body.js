import React from "react";
import Content from "../dashboard/styles/Content";

export default function Body({ children }) {
	return (
		<Content>
			<Content.InnerCont>{children}</Content.InnerCont>
		</Content>
	);
}
