import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardArtisan from "../components/ui/CardArtisans";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/Etapes.scss";
import "../styles/Home.scss";

const categoryNames = {
  1: "Alimentation",
  2: "Bâtiment",
  3: "Fabrication",
  4: "Service"
};

// Image par défaut pour tous les artisans
const defaultImage = "/assets/img/default-artisan.jpg";

const Categorie = () => {
  const { id_categorie } = useParams();
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/artisans/categorie/${id_categorie}`);
        setArtisans(res.data);
      } catch (err) {
        console.error("Erreur récupération artisans :", err);
      }
    };

    fetchArtisans();
  }, [id_categorie]);

  return (
    <div className="categorie">
      <Header />
      <section className="featured-artisans position-relative py-5 bg-light">
        <div className="container position-relative z-1">
          <h2 className="text-center mb-4">
            Artisans de la catégorie {categoryNames[id_categorie]}
          </h2>
          <div className="row g-4">
            {artisans.map((artisan) => (
              <div key={artisan.id_artisan} className="col-12 col-md-4">
                <CardArtisan artisan={{ ...artisan, photo: defaultImage }} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Categorie;
