import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SideBarWrapper from "../dashboard/styles/SideBar";
import Avatar from "assets/img/avatar.png";
import Auth from "helpers/auth";
import { ReactComponent as CloseIcon } from "assets/img/close-icon-dark.svg";
import Button from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "store/User/actions";

const SideBar = ({ showSideBar, setShowSideBar }) => {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  console.log(user);
  return (
    <SideBarWrapper className={showSideBar ? "open" : ""}>
      <SideBarWrapper.InnerCont>
        <SideBarWrapper.TogggleButton
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <CloseIcon width={15} />
        </SideBarWrapper.TogggleButton>
        <SideBarWrapper.Header>
          <SideBarWrapper.Avatar src={user?.picture || Avatar} alt="avatar" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 className="user-name">{user?.name || "User"}</h4>
            <h5 className="logout" onClick={() => Auth.logout()}>
              Logout
            </h5>
          </div>
        </SideBarWrapper.Header>
        <SideBarWrapper.Links>
          {user?.privileges === "agent"
            ? agentLink.map((link, index) => (
                <li
                  key={index}
                  className={
                    window.location.pathname === `${link.path}` ? "active" : ""
                  }
                >
                  <img src={link.icon} alt={link.name} />
                  <Link
                    to={link.path ? `${link.path}` : ""}
                    onClick={() => {
                      if (link.action) link.action();
                      setShowSideBar(!showSideBar);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))
            : userLink.map((link, index) => (
                <li
                  key={index}
                  className={
                    window.location.pathname === `${link.path}` ? "active" : ""
                  }
                >
                  <img src={link.icon} alt={link.name} />
                  <Link
                    to={link.path ? `${link.path}` : ""}
                    onClick={() => {
                      if (link.action) link.action();
                      setShowSideBar(!showSideBar);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
          {user?.privileges === "agent" ? (
            ""
          ) : (
            <Button round url="/become-agent">
              Become an Agent
            </Button>
          )}
        </SideBarWrapper.Links>
      </SideBarWrapper.InnerCont>
    </SideBarWrapper>
  );
};

export default SideBar;

const userLink = [
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
    path: "/account-settings",
    icon: require("../../assets/img/account.png"),
    matchPaths: ["/account-setting", "/change-password"],
  },
];

const agentLink = [
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
    path: "/account-settings",
    icon: require("../../assets/img/account.png"),
    matchPaths: ["/account-setting", "/change-password"],
  },
];
