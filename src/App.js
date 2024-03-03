import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Group from "./components/Group";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ComputerImg from "./assets/Computer.png";
import "./styles/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { IoLocationOutline } from "react-icons/io5";
import { MdEdit, MdInfoOutline } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { BiSolidLike } from "react-icons/bi";

function App() {
  const [filterValue, setFilterValue] = useState("All");
  return (
    <div>
      <Header />
      <SignIn />
      <SignUp />

      <div className="container-fluid p-0 position-relative">
        <img
          src={ComputerImg}
          className="w-100 computer img-fluid"
          alt="computer-img"
        />
        <div className="computer-overlay"></div>
        <div className="computer-content">
          <h3>Computer Engineering</h3>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      <div className="container p-lg-5 py-3 px-md-0">
        <div className="px-lg-5 px-md-0 d-flex justify-content-between">
          <div className="d-flex gap-2">
            <button className="border border-2 border-black border-top-0 border-end-0 border-start-0 bg-white">
              Posts(368)
            </button>
            <button className="border-0 bg-white d-none d-md-block">
              Article
            </button>
            <button className="border-0 bg-white d-none d-md-block">
              Event
            </button>
            <button className="border-0 bg-white d-none d-md-block">
              Education
            </button>
            <button className="border-0 bg-white d-none d-md-block">Job</button>
          </div>
          <div className="d-flex d-md-none gap-4">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle fw-bold text-black"
                type="button"
                id="drpFilter"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter: <span className="me-3">{filterValue}</span>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="drpFilter"
              >
                <li>
                  <button className="dropdown-item " value="All">
                    All
                  </button>
                </li>
                <li>
                  <button className="dropdown-item " value="Article">
                    Article
                  </button>
                </li>
                <li>
                  <button className="dropdown-item " value="Event">
                    Event
                  </button>
                </li>
                <li>
                  <button className="dropdown-item " value="Education">
                    Education
                  </button>
                </li>
                <li>
                  <button className="dropdown-item " value="Job">
                    Job
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-none d-md-flex gap-4">
            <button className="btn btn-light dropdown-toggle">
              Write a Post
            </button>
            <button className="btn btn-primary d-flex align-items-center gap-2">
              <FiUserPlus />
              Join Group
            </button>
          </div>
        </div>
        <div className="px-lg-5 px-md-0 d-none d-md-block">
          <hr />
        </div>
      </div>
      <div className="container px-lg-5 px-md-0 pb-5">
        <div className="row px-lg-5 px-md-0">
          <div className="col-lg-8 col-md-7 col-sm-12">
            <Card />
          </div>
          <div className="col-lg-4 col-md-5 d-none d-md-block ps-5">
            <div className="ms-5 py-2 d-flex align-items-center gap-2 border border-2 border-top-0 border-end-0 border-start-0">
              <IoLocationOutline className="fs-3" />
              <input
                className="border-0 header-searchbar bg-white fw-bold text-black w-100"
                type="search"
                value="Noida, India"
                disabled
              />
              <MdEdit className="fs-3" />
            </div>
            <div className="ms-5 mt-4 d-flex gap-3 text-secondary">
              <MdInfoOutline className="fs-3" />
              <p className="fs-7">
                Your location will help us serve better and extend a
                personalised experience.
              </p>
            </div>
            <div>
              <div className="ms-5 mt-4 d-flex gap-3 text-secondary">
                <BiSolidLike className="fs-3" />
                <p className="text-uppercase fs-7 my-auto">
                  Recommended Groups
                </p>
              </div>
              <div className="ms-5 mt-4">
                <Group />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
