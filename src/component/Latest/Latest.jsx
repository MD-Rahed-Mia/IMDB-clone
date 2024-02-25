import React, { useEffect } from "react";
import "./Style.scss";
import LatestCard from "./LatestCard";
import useFetch from "../../utils/useFetch";
import { useDispatch } from "react-redux";
import { latest } from "../../store/slice/apiSlice";
import uuid from "react-uuid";

export default function Latest() {
  const { data, loading } = useFetch("movie/top_rated?language=en-US&page=1");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data);
    dispatch(latest(data));
  }, [data, loading]);
  return (
    <div>
      <div className="latest-container">
        <div>
          <h1>Most Popular</h1>
        </div>
        <div className="latest-slider">
          {data &&
            data?.results.map((item) => {
              return (
                <LatestCard
                  key={uuid()}
                  cardDetails={{
                    id: item.id,
                    title: item.original_title,
                    img: item.poster_path,
                    date: item.release_date,
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
