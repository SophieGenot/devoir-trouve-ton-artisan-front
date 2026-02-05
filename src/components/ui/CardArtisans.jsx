import React from "react";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE = "/assets/img/default.jpg";

const CardArtisan = ({ artisan }) => {
  if (!artisan) return null;

  const { id_artisan, nom, ville, note, specialite, photo } = artisan;

   return (
    <article className="card h-100 p-3 d-flex flex-column">
      <div className="d-flex align-items-center flex-grow-1">
        {/* Image */}
        <div className="flex-shrink-0 me-3" style={{ width: "100px", maxWidth: "30%" }}>
          <img
            src={photo || DEFAULT_IMAGE}
            alt={nom ? `Artisan ${nom}` : "Artisan"}
            className="img-fluid rounded"
          />
        </div>

        {/* Contenu */}
        <div className="flex-grow-1 d-flex flex-column">
          <h5 className="card-title mb-1">{nom || "Artisan"}</h5>
          <p className="mb-1">{specialite?.nom_specialite || "Spécialisation inconnue"}</p>
          <p className="mb-1 text-muted">⭐ {note ?? 0} | {ville || "Ville inconnue"}</p>
          <div className="mt-auto">
            <Link
              to={`/artisan/${id_artisan}`}
              state={{ artisan }}
              className="btn"
              style={{
                borderRadius: "8px",
                backgroundColor: "#cd2c2e",
                color: "#fff",
                border: "none",
              }}
            >
              Voir le profil
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardArtisan;
