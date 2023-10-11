import React from "react";
import "../style/bootstrap.min.css";
import DigitalClock from "../hook/DigitalClock";

const Navbar = () => {

  
  return (
    <div className="pb-5">
        <nav className="navbar custom-font">
          <ul className="nav w-75 flex-column flex-sm-row justify-content-evenly">
            <li className="nav-item"><a className="text-sm-center nav-link custom-link p-0"  href="#">Home</a></li>
            <li className="nav-item"><a className="text-sm-center nav-link custom-link p-0"  href="#">Gallery</a></li>
            <li className="nav-item"><a className="text-sm-center nav-link custom-link p-0"  href="#">Players</a></li>
            <li className="nav-item"><a className="text-sm-center nav-link custom-link p-0"  href="#">Fixture</a></li>
            </ul>

            <DigitalClock />
        </nav>
    </div>
  );
};

export default Navbar;