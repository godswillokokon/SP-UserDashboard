import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const RightMenu = (props) => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link to="https://spread-staging.netlify.com/">Home</Link>
        </Menu.Item>
        <Menu.Item key="mail1">
          <Link to="https://spread-staging.netlify.com/properties">
            Properties
          </Link>
        </Menu.Item>
        <Menu.Item key="mail2">
          <Link to="https://spread-staging.netlify.com/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="mail3">
          <Link to="https://spread-staging.netlify.com/about">About Us</Link>
        </Menu.Item>
        <Menu.Item key="mail4">
          <Link to="https://spread-staging.netlify.com/careers">Careers</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default RightMenu;
