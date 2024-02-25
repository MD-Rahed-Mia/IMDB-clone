import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-col">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          alt="tmdb"
        />
        <button>Join our Community</button>
      </div>
      <div className="footer-col">
        <h1>The Basics</h1>
        <ul>
          <li>About TBDB</li>
          <li>Contact Us</li>
          <li>Support Forums</li>
          <li>API</li>
          <li>System Status</li>
        </ul>
      </div>
      <div className="footer-col">
        <h1>Get INvolved</h1>
        <ul>
          <li>Contribution Bible</li>
          <li>add new movie</li>
          <li>add new TV show</li>
        </ul>
      </div>
      <div className="footer-col">
        <h1>Community</h1>
        <ul>
          <li>Discussions</li>
          <li>Guidlines</li>
          <li>Leaderboard</li>
        </ul>
      </div>
      <div className="footer-col">
        <h1>Legal</h1>
        <ul>
          <li>Terms and Users</li>
          <li>API Terms of uses</li>
        </ul>
      </div>
    </div>
  );
}
