import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div>
        <div className="container">
          <div>
            <Link to={"/"}>
              <img
                src="https://preview.colorlib.com/theme/pato/images/icons/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/add-food"}>Add Food</Link>
              </li>
              <li>
                <Link to={"/favorites"}>Favorites</Link>
              </li>
              <li>
                <Link to={"/"}>Reservation</Link>
              </li>
              <li>
                <Link to={"/"}>Galery</Link>
              </li>
            </ul>
          </div>
          <div className="icons">
            <i className="fa-sharp fa-solid fa-binoculars"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
