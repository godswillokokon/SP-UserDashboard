import React from "react";
import DashBoardBody from "../../styles/dashbord_body";

export default function ChangePassword() {
  return (
    <>
      <DashBoardBody.Header>
        <h1>Change Password</h1>
      </DashBoardBody.Header>
      <DashBoardBody>
        <DashBoardBody.Form>
          <div className="input-control">
            <label>Old Password:</label>
            <input type="password" />
          </div>
          <div className="input-group">
            <div className="input-control">
              <label>New Password</label>
              <input type="password" />
            </div>
            <div className="input-control">
              <label>Confirm Password</label>
              <input type="password" />
            </div>
          </div>
          <button>Save</button>
        </DashBoardBody.Form>
      </DashBoardBody>
    </>
  );
}
