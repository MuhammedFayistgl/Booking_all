import React from "react";
import "./navebar.scss";
import StatusCard from "../STATUS_CARD/StatusCard";
import { Link, useNavigate } from 'react-router-dom'

const Navebar = () => {
   
  return (
    <div>
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              Brand
            </a>
          </div>

          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <form class="navbar-form navbar-left" method="GET" role="search">
              <div class="form-group">
                <input
                  type="text"
                  name="q"
                  class="form-control"
                  placeholder="Search"
                />
              </div>
              <button type="submit" class="btn btn-default">
                <i class="glyphicon glyphicon-search"></i>
              </button>
            </form>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="http://www.pingpong-labs.com" target="_blank">
                  Visit Site
                </a>
              </li>
              <li class="dropdown ">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Account
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li class="dropdown-header">SETTINGS</li>
                  <li class="">
                    <a href="#">Other Link</a>
                  </li>
                  <li class="">
                    <a href="#">Other Link</a>
                  </li>
                  <li class="">
                    <a href="#">Other Link</a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </div>
  );
};

export default Navebar;
