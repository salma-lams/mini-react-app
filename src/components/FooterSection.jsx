import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <footer
      style={{
        ...footerStyle,
        backgroundColor: user?.couleur || "#1e293b", // تحديث لون الـ Footer بناءً على couleur
      }}
    >
      <p>© 2024 Mini Projet React</p>
    </footer>
  );
};

const footerStyle = {
  textAlign: "center",
  padding: "15px",
  color: "#fff",
  fontSize: "14px",
};

export default Footer;
