import React from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useCookies } from "react-cookie";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { setCookies } from "../../../Reducs/LoginSlice";
import { useDispatch } from "react-redux";

const Confirmalertbutton = () => {
  const [cookies, setCookie, removCookie] = useCookies();
  const dispach = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!",
          }).then((result) => {
            if (result.isConfirmed) {
              removCookie("token");
              dispach(setCookies());
              Swal.fire("Logout!", "Your Successfully Logouted !.", "success");
            }
          });
        }}
        className="navButton"
      >
        Logout
      </button>
    </>
  );
};

export default Confirmalertbutton;
