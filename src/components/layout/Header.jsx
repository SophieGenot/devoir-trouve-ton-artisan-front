import React from "react";

const categories = ["Bâtiments", "Service", "Fabrication", "Alimentation"];

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <div className="logo">LOGO</div>
      <div className="search-bar flex-grow-1 mx-3">
        <input type="text" className="form-control" placeholder="Rechercher un artisan..." />
        
      </div>
      <nav>
        {categories.map((cat) => (
          <button key={cat} className="btn btn-link">{cat}</button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
