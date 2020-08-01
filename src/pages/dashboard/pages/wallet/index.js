import React, { useState } from "react";
import { Select, Modal, Form, Input } from "antd";
import DashBoardBody from "../../styles/dashbord_body";
import worldImage from "assets/img/wold.png";
import masterImage from "assets/img/MasterCard.png";
import visaImage from "assets/img/Visa.png";
import verveImage from "assets/img/Verve.png";
import walletImage from "assets/img/wallet-colored.png";
import { useSelector, useDispatch } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import { fundWallet } from "store/wallet/actions";
import { toastSuccess } from "utils/Toast";
import NumberFormat from "react-number-format";
import "./style.css";

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default function Wallet() {
  const user = useSelector((state) => state.user.data);
  const [visible, setVisible] = useState(false);
  const [charges, setCharges] = useState(0);
  const [actualAmout, setactualAmout] = useState(0);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const config = {
    reference: "" + Math.floor(Math.random() * 1000000000 + 1),
    email: user?.email,
    amount: actualAmout * 100,
    publicKey: "pk_test_cc5a16f36a9c190775dcc8eeefeeeddd3b209d46",
  };
  const initializePayment = usePaystackPayment(config);
  const onSuccess = (res) => {
    console.log("sksk");
    formData.payment_plan = "save";
    formData.reference = res.reference;
    setFormData({ ...formData });
    dispatch(fundWallet(formData)).then(() => {
      setVisible(false);
      toastSuccess(`You have Added ${actualAmout - charges} to your wallet`);
    });
    console.log(formData);
  };
  return (
    <>
      <Modal
        title="Fund Your Wallet"
        visible={visible}
        onCancel={() => setVisible(!visible)}
        onOk={() => initializePayment(onSuccess)}
        okText="Fund Wallet"
      >
        <Form layout="vertical" className="form-modal">
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: "Please enter An amount" }]}
          >
            <NumberFormat
              thousandSeparator={true}
              prefix={"₦"}
              placeholder="Enter amount"
              onValueChange={(value) => {
                let fees = (1.5 / 100) * value.value;

                if (fees > 2000) {
                  fees = 2000;
                }

                setCharges(fees);
                setactualAmout(value.value);
                formData.amount = value.value - charges;
                setFormData({ ...formData });
              }}
            />
            <br />
            <span>Your fees is {charges}</span>
          </Form.Item>
        </Form>
      </Modal>
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
              <h3>{user?.name}</h3>
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
          <div className="fund-wallet" onClick={() => setVisible(true)}>
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
