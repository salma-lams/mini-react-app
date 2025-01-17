import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Index = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <aside style={{ ...asideStyle, backgroundColor: user?.couleur || "#ffffff" }}>
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
    </aside>
  );
};

const asideStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  gap: "10px",
  width: "200px",
  alignItems: "center",
};

const linkStyle = {
  textDecoration: "none",
  color: "#1e3a8a",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "20px",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  transition: "transform 0.3s",
};

export default Index;
