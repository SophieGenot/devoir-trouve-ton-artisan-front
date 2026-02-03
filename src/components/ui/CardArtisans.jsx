import React from "react";
import { Link } from "react-router-dom";

const CardArtisan = ({ artisan }) => {
  return (
    <div className="col-12 col-md-4 mb-3">
      <div className="card h-100">
        <img
          src={artisan.photo || "/assets/img/default.jpg"}
          className="card-img-top"
          alt={artisan.nom || "Artisan"}
        />
        <div className="card-body">
         <h5>{artisan.nom || "Nom indisponible"}</h5>
<p>{artisan.specialite?.nom_specialite || "Spécialité indisponible"}</p>
<p>{artisan.specialite?.categorie?.nom_categorie || "Catégorie indisponible"}</p>
<p>⭐ {artisan.note || "0"} | {artisan.ville || "Ville"}</p>
          <Link
            to={`/artisan/${artisan.id_artisan}`}
            className="btn btn-primary"
          >
            Voir le profil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardArtisan;
