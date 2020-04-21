import React from "react";
import DashboardRoutes from "./routes";
import Layout from "./components/Layout";

function Dashboard() {
  return (
    <Layout>
      <DashboardRoutes />
    </Layout>
  );
}

export default Dashboard;
