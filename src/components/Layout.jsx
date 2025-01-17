import React from "react";
import HeaderSection from "./HeaderSection";
import NavigationBar from "./NavigationBar";
import Footer from "./FooterSection";
import ContentSection from "./ContentSection";
import Index from "./Index";

const Layout = () => {
  return (
    <div style={layoutStyle}>
      <HeaderSection />
      <NavigationBar />
      <div style={mainContentStyle}>
        <Index />
        <ContentSection />
      </div>
      <Footer />
    </div>
  );
};

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: "#f9f9f9",
};

const mainContentStyle = {
  display: "flex",
  flex: 1,
  padding: "20px",
  gap: "20px",
  backgroundColor: "#eef2f7",
};

export default Layout;
