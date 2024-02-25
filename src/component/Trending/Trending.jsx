import React, { useEffect, useState } from "react";
import "./Style.scss";
import useFetch from "../../utils/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { trendingMovies } from "../../store/slice/apiSlice";
import SliderCard from "./SliderCard";
import uuid from "react-uuid";

export default function Trending() {
  const [trendingType, setTrendingType] = useState("day");
  const dispatch = useDispatch();

  const { data, loading } = useFetch(
    `trending/movie/${trendingType}?language=en-US`
  );
  useEffect(() => {
    dispatch(trendingMovies(data));
  }, [loading, data, trendingType]);

  function handleDay() {
    setTrendingType("day");
  }

  function handleWeek() {
    setTrendingType("week");
  }

  return (
    <div>
      <div className="trending">
        <div className="trendingSelect">
          <h1>Trending</h1>
          <div className="trendingBtn">
            <button
              className={trendingType == "day" ? "active" : ""}
              onClick={handleDay}
            >
              Day
            </button>
            <button
              className={trendingType == "week" ? "active" : ""}
              onClick={handleWeek}
            >
              Week
            </button>
          </div>
        </div>

        <div className="slider">
          {data?.results &&
            data?.results.map((item) => {
              return (
                <SliderCard
                  key={uuid()}
                  sliderData={{
                    title: item.original_title,
                    backdrop: item.poster_path,
                    id: item.id,
                    vote: item.vote_average,
                    releaseData: item.release_date,
                    type: item.media_type,
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
