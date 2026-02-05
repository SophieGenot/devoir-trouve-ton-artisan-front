import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/ErrorConst.scss";
import "../styles/Home.scss";

const NotFound = () => {
  return (
    <div className="error-404">
      <Header />
      <div className="error-content">
       <Helmet>
  <title>Error-404 - Page non trouvée</title>
  <h1>Page non trouvée</h1>
  <p>La page que vous recherchez n'existe pas</p>
  <meta name="description" content="La page que vous recherchez n'existe pas." />
</Helmet>
<a href="/" className="btn-home">Retour à l'accueil</a>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;