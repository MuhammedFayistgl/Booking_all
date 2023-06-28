import React from "react";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

const AuthOutlet = () => {
  const [cookies, setCookie] = useCookies();


  return <>{!cookies.token ? <Outlet /> : <Navigate to={'/'} />   } </>;
};

export default AuthOutlet;
