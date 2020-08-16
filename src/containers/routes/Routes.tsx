import React from "react";
import { Route } from "react-router-dom";
import NotFound from "../../components/ui/not-found/NotFound";
import Home from "../../modules/views/Home";

export const Routes = [
  <Route exact={true} path="/" component={Home} />,
  <Route component={NotFound} />,
];
