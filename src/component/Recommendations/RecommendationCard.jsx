import React from "react";

export default function RecommendationCard({ details }) {
  return (
    <div className="recommendataion_Card">
      <div>
        <img
          src={"http://image.tmdb.org/t/p/original" + details?.poster_path}
          alt="img"
        />
      </div>
      <div>
        <h2>{details?.original_title}</h2>
      </div>
      <div className="card_Overlay">
        <div>22-02-2024</div>
      </div>
    </div>
  );
}
