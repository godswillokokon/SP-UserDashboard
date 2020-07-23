import React from "react";
import DashBoardBody from "../../styles/dashbord_body";
import avi from "assets/img/user.png";
import { useSelector } from "react-redux";

export default function AcountSetting() {
  const user = useSelector((state) => state.user.data);
  return (
    <>
      <DashBoardBody.Header>
        <h1>Account Settings</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <DashBoardBody.SettingBanner>
          <div className="background">
            <div className="">
              <h1>{user?.name}</h1>
              <h2>{user?.email}</h2>
            </div>
          </div>
          <div className="circle">
            <img src={avi} alt="" />
            <div className="camera">{/* <CameraFilled size={60} /> */}</div>
          </div>
        </DashBoardBody.SettingBanner>

        <DashBoardBody.Form>
          <div className="input-control">
            <label>First Name:</label>
            <input type="text" value={user?.name} />
          </div>

          <div className="input-control">
            <label>Email:</label>
            <input type="text" value={user?.email} disabled />
          </div>
          <div className="input-group">
            <div className="input-control">
              <label>Phone Number:</label>
              <div className="prefix">
                <span className="input-group-addon">+234</span>
                <input type="text" value={user?.phone} />
              </div>
            </div>
            <div className="input-control">
              <label>Phone Number (Alternative):</label>
              <div className="prefix">
                <span className="input-group-addon">+234</span>
                <input type="text" />
              </div>
            </div>
          </div>
          <button>Save</button>
        </DashBoardBody.Form>
      </DashBoardBody>
    </>
  );
}
