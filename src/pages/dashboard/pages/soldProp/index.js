import React from "react";
import { Select } from "antd";
import DashBoardBody from "../../styles/dashbord_body";
import sold1 from "assets/img/sold1.png";
import sold2 from "assets/img/sold2.png";
import sold3 from "assets/img/sold3.png";
import sold4 from "assets/img/sold4.png";

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default function SoldProperty() {
  return (
    <>
      <DashBoardBody.Header>
        <h1>Sold Properties</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <div className="row-header">
          <h1>Houses for rent</h1>
          <div className="sort-by">
            <img
              src="../assets/icons/sort-by.png"
              alt=""
              className="sort-icon"
            />
            <Select
              defaultValue="Sorted By"
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
        <DashBoardBody.Row>
          {Properties.map((item, index) => (
            <DashBoardBody.SoldCard key={index}>
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <h1>{item.propertyName}</h1>
            </DashBoardBody.SoldCard>
          ))}
        </DashBoardBody.Row>
      </DashBoardBody>
    </>
  );
}
const Properties = [
  {
    image: sold1,
    propertyName: "Amaxzon Duplex",
  },
  {
    image: sold2,
    propertyName: "Open yard ",
  },
  {
    image: sold3,
    propertyName: "Open roof house",
  },
  {
    image: sold4,
    propertyName: "Amaxzon Duplex",
  },
];
