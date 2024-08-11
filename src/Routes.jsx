import React from "react";
import { Routes as AppRoutes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Layout } from "./components/layout/Layout";

function Routes() {
  return (
    <AppRoutes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
      </Route>
    </AppRoutes>
  );
}

export default Routes;
