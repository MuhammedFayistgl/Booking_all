import React from "react";
import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";
import Login from "../../pages/authentication/login";

const ProtectedRoute = () => {
  const [cookies, setCookie] = useCookies();
  return <>{cookies.token ? <Outlet /> : <Login Order />}</>;
};

export default ProtectedRoute;
