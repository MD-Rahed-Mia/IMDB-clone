import React, { useState } from "react";

import "./Header.scss";
import { Link } from "react-router-dom";

import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <div className="menuBtn" onClick={() => setMenu(!menu)}>
        <CiMenuBurger />
      </div>
      <div className={menu ? "header_left active" : "header_left"}>
        <div className="cancelMenu" onClick={() => setMenu(!menu)}>
          <RxCross1 />
        </div>

        <Link to={"/"}>
          <div>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
            />
          </div>
        </Link>
        <div>
          <ul>
            <li>
              Movies
              <ul>
                <li onClick={() => setMenu(!menu)}>
                  <Link to="/popular">Popular</Link>
                </li>
                <li onClick={() => setMenu(!menu)}>Latest</li>
                <li onClick={() => setMenu(!menu)}>Upcoming</li>
              </ul>
            </li>
            <li>
              TV Shows
              <ul>
                <li onClick={() => setMenu(!menu)}>Popular</li>
                <li onClick={() => setMenu(!menu)}>Latest</li>
                <li onClick={() => setMenu(!menu)}>Upcoming</li>
              </ul>
            </li>
            <li>
              People
              <ul>
                <li onClick={() => setMenu(!menu)}>Popular</li>
                <li onClick={() => setMenu(!menu)}>Trending</li>
              </ul>
            </li>
            <li onClick={() => setMenu(!menu)}>More</li>
          </ul>
        </div>
      </div>
      <div className="header_right">
        <ul>
          <li>Login</li>
          <li>Join TMDB</li>
          <li>Search</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
