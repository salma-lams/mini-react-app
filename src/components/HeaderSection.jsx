import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const HeaderSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (!user) return null;

  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <div style={userSectionStyle}>
        <span style={userTextStyle}>
          <i className="fas fa-user-circle" style={{ marginRight: "10px" }}></i>
          {user.prenom} {user.nom}
        </span>
        <button onClick={handleLogout} style={logoutStyle}>
          Déconnexion
        </button>
      </div>
    </header>
  );
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  backgroundColor: "#1e3a8a",
  color: "#fff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const logoStyle = {
  height: "40px",
  
};

const userSectionStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const userTextStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
};

const logoutStyle = {
  backgroundColor: "#e63946",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "8px 12px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "background-color 0.3s",
};

export default HeaderSection;
