import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Home.scss";

const categories = [
  { name: "Bâtiments", id: 2 },
  { name: "Fabrication", id: 3 },
  { name: "Service", id: 4 },
  { name: "Alimentation", id: 1 },
];

const Header = () => {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu burger
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    try {
      const res = await axios.get(
        `http://localhost:3000/api/artisans/search?nom=${search}`
      );
      const artisan = res.data;
      navigate(`/artisan/${artisan.id_artisan}`);
    } catch (err) {
      console.error(err);
      alert("Artisan non trouvé !");
    }
  };

  const handleCategoryClick = (id) => {
    navigate(`/categorie/${id}`);
    setIsMenuOpen(false); // Fermer le menu mobile après clic
  };

  return (
    <header className="header d-flex justify-content-between align-items-center p-3">
      {/* Logo */}
      <div className="logo">
        <img src="/assets/img/Logo.png" alt="Logo" />
      </div>

      {/* Barre de recherche */}
      <div className="search-bar flex-grow-1 mx-3">
        <form onSubmit={handleSearch} className="d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher un artisan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="btn ms-2">
            <img src="/assets/icons/loupe.svg" alt="Recherche" height="20" />
          </button>
        </form>
      </div>

      {/* Menu desktop */}
      <nav className="desktop-menu">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className="btn btn-link category-btn"
            onClick={() => handleCategoryClick(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </nav>

      {/* Menu burger mobile */}
      <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      {isMenuOpen && (
        <nav className="mobile-menu">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="btn btn-link category-btn"
              onClick={() => handleCategoryClick(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
