import React from "react";
import Navebar from "../../pages/NSVEBAR/Navebar";
import Posts from "../../pages/Posts/Posts";
import SideBar from "../../pages/SideBar/SideBar";

const Post = () => {
  return (
    <>
      <Navebar />
      <SideBar />
      <div class="container-fluid main-container">
        <Posts />
      </div>
    </>
  );
};

export default Post;
