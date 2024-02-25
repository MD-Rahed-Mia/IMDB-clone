import React from "react";
import Layout from "../Layout/Layout";
import OverviewContent from "../component/Overview/OverviewContent";
import './../style/Overview.scss';


export default function OverView() {
  return (
    <Layout>
      <div className="overview">
        <h2>Popular movies</h2>
        <div className="overview-filter">

        </div>
        <div className="overview-content">
          <OverviewContent />
        </div>
      </div>
    </Layout>
  );
}
