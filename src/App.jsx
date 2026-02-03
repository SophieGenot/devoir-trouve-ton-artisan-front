import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Artisan from "./pages/Artisan";
import Home from "./pages/Home";
import './styles/main.scss';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisan/:id" element={<Artisan />} />
      </Routes>
    </Router>
  );
}

export default App;
