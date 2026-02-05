import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/ErrorConst.scss";
import "../styles/Home.scss";

const Construction = () => {
  return (
    <div className="construction-page">
      <Header />
      <div className="construction-content">
        <h1>Site en construction, repassez plus tard !</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Construction;