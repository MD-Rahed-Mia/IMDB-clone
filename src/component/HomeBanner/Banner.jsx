import React, { useEffect, useState } from "react";
import "./Style.scss";
import useFetch from "../../utils/useFetch";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const { data, loading } = useFetch("trending/movie/day?language=en-US");
  const navigate = useNavigate();


  const [bg, setBg] = useState(null);

  useEffect(() => {
    const baseUrl = "http://image.tmdb.org/t/p/";
    const imgSize = "original";

    setBg(
      baseUrl +
        imgSize +
        data?.results[Math.floor(Math.random() * 20)].backdrop_path
    );
  }, [data, loading]);

  function gotoSearch(event){
    if(event.target == "Enter"){
      navigate('/search');
    }
  }


  return (
    <div>
      <div
        className="wrapper"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>
          <span>Welcome.</span> Millions of movies, <br></br>TV shows and people
          to discover.
        </h1>
        <button>Explore now</button>
        <div className="search-input">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search your favourite movie or shows....."
            onKeyUp={gotoSearch}
          />
          <button>search</button>
        </div>
      </div>
    </div>
  );
}
