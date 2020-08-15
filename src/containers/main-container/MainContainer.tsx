import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Routes } from "../routes/Routes";
import ApplicationNavBar from "../../components/navigations/application-navbar/ApplicationNavBar";

const MainContainer: React.FC = () => {
  return (
    <div>
      <Router>
        <div>
          <ApplicationNavBar />
        </div>
        <div>
          <Switch>{Routes}</Switch>
        </div>
      </Router>
    </div>
  );
};

export default MainContainer;
