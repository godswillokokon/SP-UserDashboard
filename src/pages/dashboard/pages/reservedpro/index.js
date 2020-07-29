import React, { useEffect, useState } from "react";
import { Select } from "antd";
import DashBoardBody from "../../styles/dashbord_body";
import sold1 from "assets/img/sold1.png";
import sold2 from "assets/img/sold2.png";
import sold3 from "assets/img/sold3.png";
import sold4 from "assets/img/sold4.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservedHouse } from "store/reserved_propety/actions";

export default function ReservedProperty() {
  const reserved = useSelector((state) => state.reserved.data);
  const [data, setData] = useState([]);
  const [option, setOption] = useState("Properties");
  const { Option } = Select;
  function handleChange(value) {
    const newData = reserved?.house.concat(reserved?.lands);
    switch (value) {
      case "all":
        setData(newData);
        setOption("Properties");
        break;
      case "house":
        setData(reserved?.house);
        setOption("Houses");
        break;
      case "land":
        setData(newData);
        setOption("Lands");
        break;

      default:
        setData(newData);
        setOption("Properties");
        break;
    }
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservedHouse());
  }, [dispatch]);
  console.log(reserved);
  useEffect(() => {
    const newData = reserved?.house.concat(reserved?.lands);
    setData(newData);
  }, [reserved]);

  return (
    <>
      <DashBoardBody.Header>
        <h1>Sold Properties</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <div className="row-header">
          <h1>Reserved {option}</h1>
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
              <Option value="all">All</Option>
              <Option value="house">Houses</Option>
              <Option value="land">Lands </Option>
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
