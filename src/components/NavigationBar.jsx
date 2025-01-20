import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const NavigationBar = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <nav style={{ ...navStyle, backgroundColor: user?.couleur || "#f8f9fa" }}>
      <Link style={linkStyle} className="nav-link" to="/home">Accueil</Link>
      <Link style={linkStyle} className="nav-link" to="/profile">Mon Profil</Link>
      <Link style={linkStyle} className="nav-link" to="/add-request">Ajouter demande</Link>
      {user?.admin && (
        <>
          <Link style={linkStyle} className="nav-link" to="/requests">Liste des demandes</Link>
          <Link style={linkStyle} className="nav-link" to="/add-user">Ajouter utilisateur</Link>
          <Link style={linkStyle} className="nav-link" to="/users">Liste des utilisateurs</Link>
        </>
      )}
    </nav>
  );
};

const navStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "15px 20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
 
};

const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  padding: "12px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "20px",
  textAlign: "center",
  cursor: "pointer",
  transition: "all 0.3s",
};

export default NavigationBar;