import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import 'react-day-picker/lib/style.css';

import DashboardLayout from "./layouts/Dashboard";
import { UserContext } from 'userContext';

const history = createBrowserHistory();

const App = (props) => {

  const [data, setData] = useState(null);

  const objectData = useMemo(() => ({ getObjectData: data, setObjectData: setData }), [data, setData]);
  
  return (
    <UserContext.Provider value={{objectData}}>
      <Router history={history}>
        <Switch>
          <Route path="/" render={props => <DashboardLayout {...props} />} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);