import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  isAdmin,
  isAuthenticate,
} from "../../../services/adminService/authService";

const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAdmin() && isAuthenticate() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/user/profile",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default AdminProtectedRoute;
