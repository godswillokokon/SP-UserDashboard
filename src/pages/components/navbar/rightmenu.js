import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const RightMenu = () => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link to="https://sp-web-sage.vercel.app/">Home</Link>
        </Menu.Item>
        <Menu.Item key="mail1">
          <Link to="https://sp-web-sage.vercel.app/properties">Properties</Link>
        </Menu.Item>
        <Menu.Item key="mail2">
          <Link to="https://sp-web-sage.vercel.app/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="mail3">
          <Link to="https://sp-web-sage.vercel.app/about">About Us</Link>
        </Menu.Item>
        <Menu.Item key="mail4">
          <Link to="https://sp-web-sage.vercel.app/careers">Careers</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default RightMenu;
