import React from "react";
const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="footer-columns container d-flex flex-column flex-md-row justify-content-between">
        <div className="contact">
          <p><strong>Contact</strong></p>
          <p>101 cours Charlemagne</p>
          <p>+33 (0)4 26 73 40 00</p>
          <p>69269 LYON CEDEX 02</p>
          <p>France</p>
          <p>CS 20033</p>
        </div>
        <div className="legalmention">
          <p>Accessibilité</p>
          <p>Mentions légales</p>
          <p>Cookies</p>
          <p>Données personnelles</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
