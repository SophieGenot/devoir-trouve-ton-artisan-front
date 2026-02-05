import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Artisan from "./pages/Artisan";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Categorie from "./pages/Categorie";
import Construction from "./pages/Construction";
import './styles/main.scss';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:id_categorie" element={<Categorie />} />
        <Route path="/artisan/:id_artisan" element={<Artisan />} />
         <Route path="/construction" element={<Construction />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
