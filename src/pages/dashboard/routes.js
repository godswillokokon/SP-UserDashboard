import React, { Suspense, lazy } from "react";
import { Route, Switch, useRouteMatch, Redirect } from "react-router-dom";
import LoadingPage from "./components/LoadingPage";

const Wallet = lazy(() => import("./pages/wallet"));

const Routes = () => {
  const match = useRouteMatch();
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route path={`${match.path}/wallet`} component={Wallet} />
        <Route
          exact
          path={`${match.path}`}
          component={() => <Redirect to={`${match.path}/Wallet`} />}
        />
        <Route component={() => <Redirect to="/404" />} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
