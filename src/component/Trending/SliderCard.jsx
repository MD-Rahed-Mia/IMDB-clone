import React from "react";
import "./Style.scss";
import { Link } from "react-router-dom";

export default function SliderCard({ sliderData }) {
  const { releaseData, title, type, vote, id } = sliderData;

  return (
    <div className="sliderCard">
      <Link to={`/details/${id}`}>
        <div className="sliderImg">
          <img
            src={sliderData?.backdrop && "http://image.tmdb.org/t/p/original" + sliderData.backdrop}
          />
          <div className="contentType">
            <p>{type}</p>
          </div>
        </div>
      </Link>
      <div className="sliderCardTile">
        <p>Vote: {vote}</p>
        <Link to={`/details/${id}`}>{title}</Link>
        <p>{releaseData}</p>
      </div>
    </div>
  );
}
