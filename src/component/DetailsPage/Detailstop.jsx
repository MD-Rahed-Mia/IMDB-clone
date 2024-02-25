import React from "react";
import "./Style.scss";
export default function Detailstop({ details }) {
  return (
    <div className="details_top">
      <div className="details_top_left">
        <img
          src={"http://image.tmdb.org/t/p/original" + details?.poster_path}
          alt=""
        />
      </div>
      <div className="details_top_right">
        <div className="details_top_title">
          <h1>{details?.original_title}</h1>
          <p>{details?.tagline}</p>
        </div>
        <div className="overview">
          <h3>Overview</h3>
          <p>{details?.overview}</p>
        </div>
        <div className="director_title">
          <a href={`${details?.homepage}`}>{details?.homepage}</a>
          <h3>Release Date: {details?.release_date}</h3>
        </div>
      </div>
    </div>
  );
}
