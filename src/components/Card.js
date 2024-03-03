import React from "react";
import "../styles/App.css";
import article from "../assets/Article.png";
import user1 from "../assets/user1.png";
import education from "../assets/Education.png";
import user2 from "../assets/user2.png";
import meet from "../assets/Meetup.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";

import { PiNotePencilFill, PiBagSimpleDuotone } from "react-icons/pi";
import { TbMicroscope } from "react-icons/tb";
import { IoMdCalendar } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import {
  BsFillCalendarCheckFill,
  BsThreeDots,
  BsEyeFill,
  BsShareFill,
} from "react-icons/bs";

const cardsDetails = [
  {
    title: "What if famous brands had regular fonts? Meet RegulaBrands!",
    topic: "Article",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    topicImage: article,
    userImage: user1,
    userName: "Sarthak Kamra",
    views: "1.4k views",
    date: "",
    location: "",
    companyName: "",
  },
  {
    title:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    topic: "Education",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    topicImage: education,
    userImage: user2,
    userName: "Sarah West",
    views: "1.4k views",
    date: "",
    location: "",
    companyName: "",
  },
  {
    title: "Finance & Investment Elite Social Mixer @Lujiazui",
    topic: "Meetup",
    description: "",
    topicImage: meet,
    userImage: user3,
    userName: "Ronal Jones",
    views: "1.4k views",
    date: "Fri, 12 Oct, 2018",
    location: "Ahmedabad, India",
    companyName: "",
  },
  {
    title: "Software Developer - II",
    topic: "Job",
    description: "",
    topicImage: "",
    userImage: user4,
    userName: "Joseph Gray",
    views: "1.4k views",
    date: "",
    location: "Noida, India",
    companyName: "Innovaccer Analytics Private Ltd.",
  },
];

function App() {
  return (
    <div>
      {cardsDetails.map((item, index) => {
        return (
          <div className="card mb-2" key={index}>
            {item.topicImage && (
              <img src={item.topicImage} className="card-img-top" alt="..." />
            )}
            <div className="card-body">
              <p className="d-flex gap-2 align-items-center fw-bold">
                {item.topic === "Article" ? (
                  <PiNotePencilFill />
                ) : item.topic === "Education" ? (
                  <TbMicroscope />
                ) : item.topic === "Meetup" ? (
                  <BsFillCalendarCheckFill />
                ) : (
                  <PiBagSimpleDuotone />
                )}
                {item.topic}
              </p>
              <div className="d-flex gap-4 justify-content-between">
                <h5 className="card-title pr-4">{item.title}</h5>
                <div className="dropdown text-black">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    id={`drp${index + 1}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BsThreeDots />
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby={`drp${index + 1}`}
                  >
                    <li>
                      <button className="dropdown-item" onClick={() => {}}>
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => {}}>
                        Report
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={() => {}}>
                        Option3
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                {item.description && (
                  <p className="card-text">{item.description}</p>
                )}
                {item.topic === "Meetup" && (
                  <div className="my-2">
                    <div className="d-flex gap-5 fs-6 fw-bold">
                      <p className="d-flex align-items-center gap-1">
                        <IoMdCalendar />
                        {item.date}
                      </p>
                      <p className="d-flex align-items-center gap-1">
                        <IoLocationOutline />
                        {item.location}
                      </p>
                    </div>
                    <div>
                      <button className="btn border fs-5 fw-bold border-2 text-warning w-100">
                        Visit Website
                      </button>
                    </div>
                  </div>
                )}
                {item.topic === "Job" && (
                  <div className="my-2">
                    <div className="d-flex gap-5 fs-6 fw-bold">
                      <p className="d-flex align-items-center gap-1">
                        <PiBagSimpleDuotone />
                        {item.companyName}
                      </p>
                      <p className="d-flex align-items-center gap-1">
                        <IoLocationOutline />
                        {item.location}
                      </p>
                    </div>
                    <div>
                      <button className="btn border fs-5 fw-bold border-2 text-success w-100">
                        Apply On Timesjobs
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <img src={item.userImage} alt="user img" />
                  <p className="m-0">{item.userName}</p>
                </div>
                <div className="d-flex align-items-center gap-4">
                  <p className="m-0 d-flex align-items-center gap-1">
                    <BsEyeFill />
                    {item.views}
                  </p>
                  <button className="btn btn-light">
                    <BsShareFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
