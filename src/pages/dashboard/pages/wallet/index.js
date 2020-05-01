import React, { useEffect } from "react";
import { Select } from "antd";
import DashBoardBody from "../../styles/dashbord_body";
import worldImage from "../../../../assets/img/wold.png";
import masterImage from "../../../../assets/img/MasterCard.png";
import visaImage from "../../../../assets/img/Visa.png";
import verveImage from "../../../../assets/img/Verve.png";
import walletImage from "../../../../assets/img/wallet-colored.png";
import Auth from "../../../../helpers/auth";

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default function Wallet() {
  useEffect(() => {
    if (!Auth.isLoggedIn()) {
      window.location = "https://spread-staging.netlify.app/";
      console.log("notlogged in");
    }
    console.log(Auth.user);
  }, []);
  return (
    <>
      <DashBoardBody.Header>
        <h1>Wallet</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <DashBoardBody.Banner>
          <div className="background">
            <div className="wallet-header">
              <div className="circle">
                <img src={walletImage} alt="" />
              </div>
              <h3>ANN ERIM’S WALLET</h3>
              <h2>Current account balance:</h2>
              <h1>15,000.00</h1>
            </div>
            <div className="wallet-card">
              <img src={worldImage} alt="" />
              <div className="cards">
                <img src={masterImage} alt="" />
                <img src={visaImage} alt="" />
                <img src={verveImage} alt="" />
              </div>
            </div>
          </div>
          <div className="fund-wallet">
            <span>Fund Wallet</span>
          </div>
        </DashBoardBody.Banner>
        <DashBoardBody.WalletRecentActivity>
          <div className="row-header">
            <h1>YOUR RECENT ACTIVITIES</h1>
            <div className="sort-by">
              <img
                src="../assets/icons/sort-by.png"
                alt=""
                className="sort-icon"
              />
              <Select
                defaultValue="Filter"
                style={{ width: 160 }}
                onChange={handleChange}
                className="select-sort"
              >
                <Option value="jack">General Listing</Option>
                <Option value="lucy">Spread Exclusive </Option>
                <Option value="lucy">Mortgage </Option>
                <Option value="lucy">For Sale </Option>
                <Option value="lucy">For Rent </Option>
              </Select>
            </div>
          </div>
          <div className="card-container">
            {TranactionHistory.map((items, index) => {
              switch (items.type) {
                case "Add":
                  return (
                    <div
                      className="transaction-card"
                      style={{ borderLeft: "10px solid green" }}
                      key={index}
                    >
                      <div className="leading-item">
                        <h1>{items.title}</h1>
                        <h2>{items.descriptions}</h2>
                      </div>
                      <div className="trailing-item">
                        <h1 style={{ color: "green" }}>N20,000</h1>
                        <div className="date">{items.date}</div>
                      </div>
                    </div>
                  );

                case "purchases":
                  return (
                    <div
                      className="transaction-card"
                      style={{ borderLeft: "10px solid #EB5757" }}
                      key={index}
                    >
                      <div className="leading-item">
                        <h1>{items.title}</h1>
                        <h2>{items.descriptions}</h2>
                      </div>
                      <div className="trailing-item">
                        <h1 style={{ color: "#EB5757" }}>N20,000</h1>
                        <div className="date">{items.date}</div>
                      </div>
                    </div>
                  );

                default:
                  return (
                    <div className="transaction-card" key={index}>
                      <div className="leading-item">
                        <h1>{items.title}</h1>
                        <h2>{items.descriptions}</h2>
                      </div>
                      <div className="trailing-item">
                        <h1>N20,000</h1>
                        <div className="date">{items.date}</div>
                      </div>
                    </div>
                  );
              }
            })}
          </div>
        </DashBoardBody.WalletRecentActivity>
      </DashBoardBody>
    </>
  );
}

const TranactionHistory = [
  {
    type: "Add",
    title: "Added Money",
    amount: 2000,
    date: new Date().toDateString(),
    descriptions: "",
  },
  {
    type: "Transfer",
    amount: 2000,
    title: "Transfer Funds",
    date: new Date().toDateString(),
    descriptions: "to Erim Godswill Uket",
  },
  {
    type: "purchases",
    amount: 2000,
    title: "Land Purchase",
    date: new Date().toDateString(),
    descriptions: "to Erim Godswill Uket",
  },
];
