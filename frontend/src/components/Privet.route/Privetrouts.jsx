import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Privetrouts = () => {
  const [isLoginID, setisLoginID] = useState(true);
  console.log("isLoginID", isLoginID);
  useEffect(async () => {
    await axios.post("http://localhost:5000/user/Loginverify").then((res) => {
      setisLoginID(res.data.userID);
    });
  }, []);

  return <>{isLoginID ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default Privetrouts;

