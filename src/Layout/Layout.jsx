import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
