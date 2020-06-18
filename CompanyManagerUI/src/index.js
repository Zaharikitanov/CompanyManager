import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import 'react-day-picker/lib/style.css';

import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";
import { UserContext } from 'userContext';

const history = createBrowserHistory();

const App = (props) => {
  const [user, setUser] = useState(null);

  const userData = useMemo(() => ({ getUserData: user, setUserData: setUser }), [user, setUser]);

  const [data, setData] = useState(null);

  const objectData = useMemo(() => ({ getObjectData: data, setObjectData: setData }), [data, setData]);
  
  return (
    <UserContext.Provider value={{userData, objectData}}>
      <Router history={history}>
        <Switch>          
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Route path="/" render={props => <DashboardLayout {...props} />} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);