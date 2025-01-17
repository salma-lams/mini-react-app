import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <nav style={{ ...navStyle, backgroundColor: user?.couleur || "#f8f9fa" }}>
      <Link style={linkStyle} to="/home">Accueil</Link>
      <Link style={linkStyle} to="/profile">Mon Profil</Link>
          <Link style={linkStyle} to="/add-request">Ajouter demande</Link>
          {user?.admin && (
        <>
          <Link style={linkStyle} to="/requests">Liste des demandes</Link>
          <Link style={linkStyle} to="/add-user">Ajouter utilisateur</Link>
          <Link style={linkStyle} to="/users">Liste des utilisateurs</Link>
        </>
      )}
    </nav>
  );
};

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "15px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const linkStyle = {
  textDecoration: "none",
  color: "#1e3a8a",
  padding: "10px 15px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "5px",
  transition: "background-color 0.3s, color 0.3s",
  backgroundColor: "#f1f5f9",
  textAlign: "center",
  whiteSpace: "nowrap",
  cursor: "pointer",
};

export default NavigationBar;
