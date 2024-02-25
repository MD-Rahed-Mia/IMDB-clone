import React from "react";
import Banner from "../component/HomeBanner/Banner";
import Header from "../component/Header/Header";
import Layout from "../Layout/Layout";
import Trending from "../component/Trending/Trending";
import Latest from "../component/Latest/Latest";
import JoinToday from "../component/JoinToday/JoinToday";

function Home() {
  return (
    <Layout>
      <Banner />
      <Trending />
      <Latest />
      <JoinToday />
    </Layout>
  );
}

export default Home;
