import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import RightMenu from "./rightmenu";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./index.css";
import Logo from "assets/img/logo.png";
import Mail from "assets/icons/mail.png";
import Phone from "assets/icons/phone.png";
import FbIcon from "assets/icons/fbSmall.png";
import IgIcon from "assets/icons/igSmall.png";
import LinkedIn from "assets/icons/in.png";
import Snap from "assets/icons/snapchat.png";
import Twitter from "assets/icons/twitterSmall.png";
import Auth from "helpers/auth";

const Wrap = styled.div`
  display: block;
  @media (max-width: 767px) {
    display: none;
  }
`;
const Contacts = styled.div`
  padding: 0 0 4px 33px;
  background: black;
  font-size: 12px;
  color: white;
  display: flex;
  .contacts-details {
    .details {
      margin-right: 10px;
      img {
        margin: 0 10px;
      }
    }
  }
  .social-cont {
    position: absolute;
    right: 69px;
    .socials {
      margin: 0 10px;
      cursor: pointer;
    }
  }
  @media (max-width: 767px) {
    padding: 6px;
    font-size: 8px;
    justify-content: space-between;
    .contacts-details {
      .details {
        margin-right: 0;
        img {
          margin: 0 5px;
          height: 14px;
        }
      }
    }
    .social-cont {
      position: unset;
      .socials {
        margin: 0 6px;
        cursor: pointer;
      }
    }
  }
`;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const drawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Wrap
        style={{
          position: "absolute",
          width: "-webkit-fill-available",
          zIndex: 10,
        }}
      >
        {Auth?.user?.verified ? (
          <div style={{ background: "yellow" }}>Verify Email</div>
        ) : (
          <Contacts>
            <div className="contacts-details">
              <span className="details">
                <img src={Mail} alt="mail" />
                hello@spreadprolimited.com{" "}
              </span>
              <span className="details">
                <img src={Phone} alt="phone" />
                +2348182739942{" "}
              </span>
            </div>
            <div className="social-cont">
              <img className="socials" src={FbIcon} alt="fb" />
              <img className="socials" src={IgIcon} alt="ig" />
              <img className="socials" src={LinkedIn} alt="in" />
              <img className="socials" src={Twitter} alt="twitter" />
              <img className="socials" src={Snap} alt="snap" />
            </div>
          </Contacts>
        )}
        <nav className="menuBar">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="menuCon">
            <div className="rightMenu">
              <RightMenu />
            </div>
            <Button className="barsMenu" type="primary" onClick={drawer}>
              {React.createElement(
                drawer ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </Button>
            <Drawer
              style={{
                marginTop: `${visible ? "79px" : 0}`,
                height: "300px !important",
              }}
              placement="top"
              closable={false}
              onClose={onClose}
              visible={visible}
              bodyStyle={{ textAlign: "center" }}
            >
              <Menu mode="vertical">
                <Menu.Item key="mail">
                  <Link to="https://spread-staging.netlify.com/">Home</Link>
                </Menu.Item>
                <Menu.Item key="mail1">
                  <Link to="https://spread-staging.netlify.com/properties">
                    Properties
                  </Link>
                </Menu.Item>
                <Menu.Item key="mail2">
                  <Link to="https://spread-staging.netlify.com/services">
                    Services
                  </Link>
                </Menu.Item>
                <Menu.Item key="mail3">
                  <Link to="https://spread-staging.netlify.com/about">
                    About Us
                  </Link>
                </Menu.Item>
                <Menu.Item key="mail4">
                  <Link to="https://spread-staging.netlify.com/careers">
                    Careers
                  </Link>
                </Menu.Item>
              </Menu>
            </Drawer>
          </div>
        </nav>
      </Wrap>
    </>
  );
};

export default Navbar;
