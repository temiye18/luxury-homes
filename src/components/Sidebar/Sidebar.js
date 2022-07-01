import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./SideBar.module.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ isBarOpen, closeSideBar }) => {
  return (
    <section
      className={`${classes.sidebar} ${isBarOpen && classes.show__sidebar}`}
    >
      <div className={classes.sidebar__header}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <AiOutlineClose
          onClick={closeSideBar}
          className={classes.sidebar__close}
        />
      </div>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#invest">
            Invest <FaAngleDown style={{ marginLeft: "10px" }} />
          </a>
        </li>
        <li>
          <a href="#home">Blog</a>
        </li>
        <div className={classes.contact}>
          <a href="contact">Contact us</a>
        </div>
      </ul>
    </section>
  );
};

export default Sidebar;
