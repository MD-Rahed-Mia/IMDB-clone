import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import useFetch from "../utils/useFetch";
import ContentCard from "../component/Overview/ContentCard";

import "../style/searchpage.scss";
import { useParams } from "react-router-dom";

export default function Search() {
  const [searchData, setSearchData] = useState(null);
  const [page, setPage] = useState(1);

  const { query } = useParams();

  const { data, loading } = useFetch(
    `search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`
  );

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  return (
    <Layout>
      <div>
        <h1>Showing for {query}</h1>
      </div>
      <div className="searchContainer">
        {data && console.log(searchData)}
        {searchData &&
          searchData?.results.map((item) => {
            return <ContentCard data={item} />;
          })}
      </div>
    </Layout>
  );
}
 