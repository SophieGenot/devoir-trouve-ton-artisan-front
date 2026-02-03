import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/Home.scss";
import "../styles/Artisan.scss";

const Artisan = () => {
  const { id } = useParams(); // <-- récupère l'id de l'URL
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/artisans/${id}`);
        const data = await res.json();
        console.log("DATA API :", data);
        setArtisan(data);
        setLoading(false);
      } catch (err) {
        console.error("Erreur API :", err);
        setLoading(false);
      }
    };
    fetchArtisan();
  }, [id]); // <-- dépend de l'id

  if (loading) return <p>Chargement...</p>;
  if (!artisan) return <p>Artisan introuvable</p>;

  return (
    <div className="artisan-page">
      <Header />

      <section
        className="artisan-card p-4 my-4"
        style={{ backgroundColor: "#F1F8FC", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
      >
        <div className="row align-items-center">
          <div className="col-md-4">
            <img
              src={artisan.photo || "/images/default-artisan.jpg"}
              alt={artisan.nom}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>{artisan.nom}</h2>
            <p>
              ⭐ {artisan.note} | {artisan.specialite?.nom_specialite} | {artisan.ville}
            </p>
            <p>{artisan.a_propos}</p>
          </div>
          <div className="col-md-2 d-flex flex-column gap-2">
            <a href={`mailto:${artisan.email}`} className="btn btn-primary">
              Contacter
            </a>
            <a href={artisan.site_web} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
              Site web
            </a>
          </div>
        </div>
      </section>

      <section className="contact-card p-4 my-4" style={{ backgroundColor: "#F1F8FC", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="Nom" className="form-control mb-2" />
            <input type="text" placeholder="Prénom" className="form-control mb-2" />
            <input type="email" placeholder="Email" className="form-control mb-2" />
            <input type="tel" placeholder="Téléphone" className="form-control mb-2" />
          </div>
          <div className="col-md-6">
            <select multiple className="form-control mb-2">
              <option>Demande de devis</option>
              <option>Renseignements</option>
              <option>Disponibilité</option>
              <option>Autre</option>
            </select>
            <textarea placeholder="Descriptif rapide de la commande" className="form-control" rows={6}></textarea>
          </div>
        </div>
        <button className="btn btn-primary mt-3">Envoyer</button>
      </section>

      <Footer />
    </div>
  );
};

export default Artisan;
