import React, { Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoaderBox from "./components/LoaderBox";
import NotFound from "./pages/notFound";

const Dashboard = lazy(() => import("./pages/dashboard"));

const Routes = () => (
	<Suspense fallback={<LoaderBox />}>
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Dashboard} />
				<Route exact path="/404" component={NotFound} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	</Suspense>
);

export default Routes;
