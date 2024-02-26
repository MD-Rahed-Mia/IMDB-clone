import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import "./../style/detailspage.scss";
import Detailstop from "../component/DetailsPage/Detailstop";
import Recommendation from "../component/Recommendations/Recommendation";

export default function Detailpage() {
  const { id } = useParams();
  const [fetchData, setFetchData] = useState(null);
  const [bg, setBg] = useState(null);
  const { data } = useFetch(`movie/${id}?language=en-US`);
  useEffect(() => {
    setFetchData(data);
    setBg("http://image.tmdb.org/t/p/original" + fetchData?.backdrop_path);
  }, [data]);
  return (
    <Layout>
      <div
        className="details_container"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Detailstop details={data} />

      </div>
        <Recommendation />
    </Layout>
  );
}
