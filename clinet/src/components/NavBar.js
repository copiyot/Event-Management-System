import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-light bg-white fixed-top navbar-expand-lg">
        <div className="company-title">Fly Events Inc</div>
        <Link to="/event/create/basic">
          <button className="btn btn-primary add-event">
            <i className="plus icon"></i>
            Add an event
          </button>
        </Link>

        <Link to="/events">
          <button className="btn btn-primary events-list">
            <i className="list icon"></i>
            Events
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
