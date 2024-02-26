import React from "react";
import "./Style.scss";
import { Link } from "react-router-dom";
export default function LatestCard({ cardDetails }) {
  const { title, id, img } = cardDetails;
  return (
    <div className="latestCard">
      <Link to={`/details/${id}`}>
        <div>
          <img
            src={img && "http://image.tmdb.org/t/p/original" + img}
            alt="img"
          />
          <div>
            <p>{title}</p>
            <p>22-02-2024</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
