import React from "react";
import { Menu } from "antd";

const RightMenu = (props) => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="https://spread-staging.netlify.com/">Home</a>
        </Menu.Item>
        <Menu.Item key="mail1">
          <a href="https://spread-staging.netlify.com/properties">Properties</a>
        </Menu.Item>
        <Menu.Item key="mail2">
          <a href="https://spread-staging.netlify.com/services">Services</a>
        </Menu.Item>
        <Menu.Item key="mail3">
          <a href="https://spread-staging.netlify.com/about">About Us</a>
        </Menu.Item>
        <Menu.Item key="mail4">
          <a href="https://spread-staging.netlify.com/careers">Careers</a>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default RightMenu;
