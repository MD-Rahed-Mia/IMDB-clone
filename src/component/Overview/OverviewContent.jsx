import React, { useEffect, useState } from "react";
import "./Style.scss";
import ContentCard from "./ContentCard";
import useFetch from "../../utils/useFetch";
import uuid from "react-uuid";
import Skeleton from "react-loading-skeleton";

export default function OverviewContent() {
  const [fetchData, setFetchData] = useState(null);
  const [page, setPage] = useState(1);

  //fetch data from api
  const { data } = useFetch(
    `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
  );

  useEffect(() => {
    setFetchData(data);
  }, [data]);

  //load more movie
  function handleMore() {
    setPage(page + 1);
  }
  return (
    <>
      <div className="overview-content_cards">
        {fetchData && console.log(fetchData)}
        {fetchData?.results.map((item) => {
          return <ContentCard key={uuid()} data={item} /> || <Skeleton />;
        })}

        <div className="loadMoreBtn">
          <button onClick={handleMore}>load more</button>
        </div>
      </div>
    </>
  );
}
