import React, { useEffect, useState } from "react";
import axios from "axios";
import CardArtisan from "../components/ui/CardArtisans";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/Etapes.scss";
import "../styles/Home.scss";

const steps = [
  { 
    title: "Trouver la bonne catégORIE", 
    number: "1", 
    icon: "/assets/icons/iconizer-loupe.svg", 
    bg: "linear-gradient(66deg, #0074C7 0%, #0074C7 66%)", 
    numberColor: "#384050",
    numberStyle: { top: "-45px", left: "0", fontSize: "9rem" } 
  },
  { 
    title: "Choisir votre artisan", 
    number: "2", 
    icon: "/assets/icons/artisan.svg", 
    bg: "linear-gradient(84deg, #0074C7 0%, #0074C7 84%)", 
    numberColor: "#384050",
    numberStyle: { top: "-25px", left: "0", fontSize: "8rem" } 
  },
  { 
    title: "Envoyer un formulaire de contact", 
    number: "3", 
    icon: "/assets/icons/forms.svg", 
    bg: "linear-gradient(100deg, #0074C7 0%, #0074C7 100%)", 
    numberColor: "#384050",
    numberStyle: { top: "-50px", left: "-20px", fontSize: "12rem" }
  },
  { 
    title: "Une réponse sera apportée sous 48H!", 
    number: "4", 
    icon : "/assets/icons/horloge.svg", 
    bg: "linear-gradient(50deg, #0074C7 0%, #0074C7 50%)", 
    numberColor: "#384050",
    numberStyle: { top: "-20px", left: "-10px", fontSize: "5rem" } 
  }
];

const artisanImages = [
  "/assets/img/pain.jpg",       // 1er artisan
  "/assets/img/chocolat.jpg",   // 2e artisan
  "/assets/img/chauffage.jpg"   // 3e artisan
];

const Home = () => {
  const [featuredArtisans, setFeaturedArtisans] = useState([]);

  useEffect(() => {
    const fetchTopArtisans = async () => {
      try {
        const res = await axios.get('/api/artisans/top');
        console.log("Artisans récupérés :", res.data);
        setFeaturedArtisans(res.data);
      } catch (err) {
        console.error("Erreur récupération artisans vedettes :", err);
      }
    };
    fetchTopArtisans();
  }, []);

  return (
    <div className="home">
      <Header />

      {/* SECTION COMMENT TROUVER TON ARTISAN */}
      <section>
        <h2>Comment trouver ton artisan ?</h2>
        <div className="row mt-4 steps container text-center my-5">
          {steps.map((step, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-3">
              <div className="step-card position-relative p-4 h-100" style={{ background: step.bg }}>
                <div className="step-number" style={{ color: step.numberColor, ...step.numberStyle }}>
                  {step.number}
                </div>
                <div className="step-icon">
                  <img src={step.icon} alt={`Icone étape ${step.number}`} />
                </div>
                <h5 className="mt-3">{step.title}</h5>
                {step.desc && <p>{step.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* SECTION ARTISANS EN VEDETTE */}
<section className="featured-artisans position-relative py-5 bg-light">
  <div className="container position-relative z-1">
    <h2 className="text-center mb-4">Artisans en vedette</h2>
    <div className="row g-4">
      {featuredArtisans.slice(0, 3).map((artisan, idx) => (
        <div key={artisan.id_artisan} className="col-12 col-md-4">
          <CardArtisan artisan={{ ...artisan, photo: artisanImages[idx] }} />
        </div>
      ))}
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
};

export default Home;
