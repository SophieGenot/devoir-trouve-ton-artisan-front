import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    try {
      const res = await axios.get(
        `/api/artisans/search?nom=${search}`
      );
      const artisan = res.data;
      navigate(`/artisan/${artisan.id_artisan}`);
    } catch (err) {
      console.error(err);
      alert("Artisan non trouvé !");
    }
  };

  return (
    <header className="header d-flex align-items-center justify-content-between px-3">
      {/* Logo */}
      <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
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
          <button type="submit">
            <img src="/assets/icons/loupe.svg" alt="Recherche" height="20" />
          </button>
        </form>
      </div>

      {/* Menu catégories */}
      <nav className="desktop-menu d-flex gap-3">
        {categories.map((cat) => (
          <Link key={cat.id} className="category-btn" to={`/categorie/${cat.id}`}>
            {cat.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
