import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const user = useSelector((state) => state.user?.user);

  return (
    <aside style={{ ...asideStyle, backgroundColor: user?.couleur || "#ffffff" }}>
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
    </aside>
  );
};

const asideStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  padding: "20px",
  borderRadius: "0px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  width: "250px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  padding: "12px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "20px",
  textAlign: "center",
  width: "100%",
  display: "inline-block",
  cursor: "pointer",
  transition: "all 0.3s",
};

export default Sidebar;
