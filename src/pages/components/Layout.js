import React, { useState } from "react";
import SideBar from "./SideBar";
import DashboardContainer from "../dashboard/styles/Container";
import Body from "./Body";

import Navbar from "./navbar";
import MobileHeader from "./MobileHeader";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "store/User/actions";

function Layout({ children }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const [showSideBar, setShowSideBar] = useState(false);
  const user = useSelector((state) => state.user.data);
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <DashboardContainer>
        <MobileHeader
          userData={user}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <SideBar
          userData={user}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <Body>{children}</Body>
      </DashboardContainer>
    </div>
  );
}

export default Layout;
