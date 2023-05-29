import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileHandler } from "../../../Reducs/registerClice";

const Profile = () => {
  const dispath = useDispatch();
  const state = useSelector((state) => state.register);
  return (
    <>
      <header>
        <label htmlFor="file">
          <img
            className="profileimg"
            src={state.Profile ? state.Profile : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
          />
        </label>
      </header>
      <input
        style={{ display: "none" }}
        type="file"
        name="file"
        id="file"
        onChange={(e) => {
          dispath(setProfileHandler(e.target.files[0]));
        }}
      />
    </>
  );
};

export default Profile;
