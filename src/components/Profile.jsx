import React from "react";
import { useSelector } from "react-redux";
import ModifierCouleur from "./ModifierCouleur";
import "./Profile.css";

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <p className="loading">Chargement des données...</p>;
  }

  return (
    <div className="profile-container" style={{ backgroundColor: user.couleur }}>
      <h2 className="profile-title">Mon Profil</h2>
      <div className="profile-content">
        <img src={user.avatar} alt="Avatar" className="profile-avatar" />
        <h3 className="profile-name">
          {user.prenom} {user.nom}
        </h3>
        <p className="profile-info">Âge: {user.age}</p>
        <p className="profile-info">Email: {user.email}</p>
        <p className="profile-info">Pays: {user.Pays}</p>
        <p className="profile-info">Couleur préférée: {user.couleur}</p>
        <p className="profile-info">Pseudo: {user.pseudo}</p>

        {/* ModifierCouleur */}
        <ModifierCouleur />
      </div>
    </div>
  );
};

export default Profile;
