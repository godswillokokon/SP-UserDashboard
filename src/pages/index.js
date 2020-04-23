import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Wallet from "./dashboard/pages/wallet";
import Layout from "./components/Layout";
import NoMatchPage from "./notFound";

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" component={Wallet} exact={true} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </Layout>
  );
};
export default App;