import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./index.css";
import Wallet from "./dashboard/pages/wallet";
import Layout from "./components/Layout";
import SoldProperties from "./dashboard/pages/soldProp";
import AccountSetting from "./dashboard/pages/settings";
import ChangePassword from "./dashboard/pages/change_password";
import BecomeAnAgent from "./dashboard/pages/become_agent.js";
import NoMatchPage from "./notFound";
import ReservedProperty from "./dashboard/pages/reservedpro";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/wallet" component={Wallet} exact={true} />
          <Route
            path="/sold-properties"
            component={SoldProperties}
            exact={true}
          />
          <Route
            path="/account-settings"
            component={AccountSetting}
            exact={true}
          />
          <Route
            path="/reserved-properties"
            component={ReservedProperty}
            exact={true}
          />
          <Route
            path="/change-password"
            component={ChangePassword}
            exact={true}
          />
          <Route path="/become-agent" component={BecomeAnAgent} exact={true} />
          <Route exact path="/" component={() => <Redirect to="/wallet" />} />
          <Route component={NoMatchPage} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default App;
