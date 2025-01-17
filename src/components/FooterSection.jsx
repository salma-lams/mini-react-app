import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Mini Projet React</p>
    </footer>
  );
};

const footerStyle = {
  textAlign: "center",
  padding: "15px",
  backgroundColor: "#1e293b",
  color: "#fff",
  fontSize: "14px",
};

export default Footer;
