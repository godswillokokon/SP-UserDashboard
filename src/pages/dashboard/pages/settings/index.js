import React from "react";
import DashBoardBody from "../../styles/dashbord_body";
import avi from "../../../../assets/img/user.png";

export default function AcountSetting() {
  return (
    <DashBoardBody>
      <DashBoardBody.SettingBanner>
        <div className="background">
          <div className="">
            <h1>Erim, Anna Ndoma</h1>
            <h2>annmikaerim@gmail.com</h2>
          </div>
        </div>
        <div className="circle">
          <img src={avi} alt="" />
          <div className="camera">{/* <CameraFilled size={60} /> */}</div>
        </div>
      </DashBoardBody.SettingBanner>

      <DashBoardBody.Form>
        <div className="input-group">
          <div className="input-control">
            <label>First Name:</label>
            <input type="text" />
          </div>
          <div className="input-control">
            <label>Last Name:</label>
            <input type="text" />
          </div>
        </div>
        <div className="input-control">
          <label>Email:</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <div className="input-control">
            <label>Phone Number:</label>
            <div className="prefix">
              <span class="input-group-addon">+234</span>
              <input type="text" />
            </div>
          </div>
          <div className="input-control">
            <label>Phone Number (Alternative):</label>
            <div className="prefix">
              <span class="input-group-addon">+234</span>
              <input type="text" />
            </div>
          </div>
        </div>
        <button>Save</button>
      </DashBoardBody.Form>
    </DashBoardBody>
  );
}
