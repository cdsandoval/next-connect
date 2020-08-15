import React from "react";
import { Route } from "react-router-dom";
import NotFound from "../../components/ui/not-found/NotFound";

export const Routes = [
  <Route exact={true} path="/" component={NotFound} />,
  <Route component={NotFound} />,
];
