import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Wallet from "./dashboard/pages/wallet";
import Layout from "./components/Layout";
import SoldProperties from "./dashboard/pages/soldProp";
import AccountSetting from "./dashboard/pages/settings";
import ChangePassword from "./dashboard/pages/change_password";
import NoMatchPage from "./notFound";

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" component={Wallet} exact={true} />
          <Route path="/sold-prop" component={SoldProperties} exact={true} />
          <Route path="/settings" component={AccountSetting} exact={true} />
          <Route
            path="/change-password"
            component={ChangePassword}
            exact={true}
          />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </Layout>
  );
};
export default App;
