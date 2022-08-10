import React from "react";

import { Link } from "react-router-dom";

import "./headerStyle.css";

const Header = () => {
  return (
    <div className="container">
      <div className="headerHolder">
        <Link className="linkTitle" to="/">
          <h1 className="title">ARTFACTORY</h1>
        </Link>
        <p className="subTitle">Admin</p>
      </div>
      <ul className="headerButtonList">
        <li>
          <Link className="linkTitle" to="/event">
            {" "}
            <button className="button">Add/Edit Event</button>
          </Link>
        </li>
        <li>
          <Link className="linkTitle" to="/artist">
            {" "}
            <button className="button">Add/Edit Artist</button>
          </Link>
        </li>
        <li>
          <Link className="linkTitle" to="/artwork">
            {" "}
            <button className="button">Add/Edit ArtWork</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
