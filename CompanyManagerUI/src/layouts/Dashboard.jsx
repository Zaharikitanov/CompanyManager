import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import AdminFooter from "components/Footers/AdminFooter.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import routes from "../routes";

function DashboardLayout(props) {

  let filteredRoutes = [];

  /*THIS LOGIC IS FOR DEVELOPMENT PURPOSES ONLY*/
  const getRoutes = routes => {
    return routes.map((prop, key) => {
        filteredRoutes.push(prop);
        return (
          <Route exact
            path={prop.path}
            component={prop.component} 
            key={key}
          />
        );
      }
    );
  };
  const getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if ((routes[i].path) === props.location.pathname){
        return routes[i].name;
      }
    }
    return "";
  };

    return(  <>
        <Sidebar
          {...props}
          routes={filteredRoutes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("assets/img/brand/argon-react.png"),
            imgAlt: "..."
          }}
        />
        <AdminNavbar
            {...props}
            brandText={getBrandText(props.location.pathname)}
          />
        <div className="main-content">
          <Container fluid>
            {/*THIS LOGIC IS FOR DEVELOPMENT PURPOSES ONLY*/}
            <Switch>{getRoutes(routes)}</Switch> 
          </Container>
        </div>
      </>
  );
}

export default DashboardLayout;
