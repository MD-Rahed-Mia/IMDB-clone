import React from "react";
import "./Style.scss";
import { Link } from "react-router-dom";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ContentCard({ data }) {
  return (
    <div className="contentCard">
      <Link to={`/details/${data.id}`}>
        <div>
          <img
            src={`https://media.themoviedb.org/t/p/original/${data.poster_path}` || <Skeleton />}
            // onload={handleLoad}
            alt="img"
          />
        </div>
        <div>
          <h1>{data.original_title}</h1>
          <h3>22-02-2024</h3>
        </div>
      </Link>
    </div>
  );
}
