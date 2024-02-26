import React, { useEffect, useState } from "react";
import "./Style.scss";
import useFetch from "../../utils/useFetch";
import { useParams } from "react-router-dom";
import RecommendationCard from "./RecommendationCard";
import uuid from "react-uuid";

export default function Recommendation() {
  const [fetchData, setFetchData] = useState(null);
  const { id } = useParams();
  const { data } = useFetch(
    `movie/${id}/recommendations?language=en-US&page=1`
  );

  useEffect(() => {
    setFetchData(data);
  }, [data]);

  return (
    <div className="recommendation">
      {console.log(fetchData)}
      <h1>Recommendation</h1>
      <div className="recommendation_Cards">
        {fetchData &&
          fetchData?.results.map((item) => {
            return <RecommendationCard key={uuid()} details={item} />;
          })}
      </div>
    </div>
  );
}
