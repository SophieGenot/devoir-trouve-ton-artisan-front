import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/Home.scss";
import "../styles/Artisan.scss";

const handleSubmit = (e) => {
  e.preventDefault();
  alert("✅ Votre message a bien été envoyé !");
};


const Artisan = () => {
  const { id_artisan } = useParams(); 
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtisan = async () => {
      try {
        const res = await fetch(`/api/artisans/${id_artisan}`);
        const data = await res.json();
        console.log("DATA API :", data); 
        setArtisan(data);
      } catch (err) {
        console.error("Erreur API :", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArtisan();
  }, [id_artisan]);

  if (loading) return <p>Chargement...</p>;
  if (!artisan) return <p>Artisan introuvable</p>;

  return (
    <div className="artisan-page">
      <Header />

      <section className="artisan-card p-4 my-4">
        <div className="row align-items-center">
          {/* Image de l'artisan */}
          <div className="col-md-4">
            <img
              src={artisan.photo || "/images/default-artisan.jpg"}
              alt={artisan.nom}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <h2>{artisan.nom}</h2>
            <p> {artisan.specialite?.nom_specialite || "Spécialité inconnue"} </p>
            <p>
              ⭐ {artisan.note || "N/A"} 
            </p>
            <p className=" gap-2 align-items">
          <img
            src="/assets/icons/localisation.svg"
            alt="Localisation"
           style={{ width: "16px", height: "16px" }} />
         {artisan.ville || "Ville inconnue"}
         </p>

            <p>{artisan.a_propos || "Aucune description disponible."}</p>
          </div>

          {/* Actions */}
          <div className="col-md-2 d-flex flex-column gap-2">
              {artisan.site_web && (
              <a href={artisan.site_web} target="_blank" rel="noreferrer" className="btn btn-contact">
                Voir le site web </a>
            )}
            
            <a href={`*`} className="btn-outline-contact">
              Voir le portfolio</a>

          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section
        className="contact-card p-4 my-4">
        <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <input type="text" placeholder="Nom" className="form-control mb-2" />
            <input type="text" placeholder="Prénom" className="form-control mb-2" />
            <input type="email" placeholder="Email" className="form-control mb-2" />
            <input type="tel" placeholder="Téléphone" className="form-control mb-2" />
          </div>
          <div className="col-md-6">
            <select className="form-control mb-2">
               <option value="" disabled selected>
                Objet :
               </option>
               <option value="devis">Demande de devis</option>
               <option value="renseignements">Renseignements</option>
               <option value="disponibilite">Disponibilité</option>
               <option value="autre">Autre</option>
            </select>

            <textarea
              placeholder="Descriptif rapide de la commande"
              className="form-control"
              rows={6}
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-contact mt-3">
          Envoyer
        </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Artisan;


