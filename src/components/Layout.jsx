import React from "react";
import HeaderSection from "./HeaderSection";
import NavigationBar from "./NavigationBar";
import Footer from "./FooterSection";
import ContentSection from "./ContentSection";
import Index from "./Index";

const Layout = () => {
  return (
    <div style={layoutStyle}>
      {/* Header & Navigation */}
      <HeaderSection />
      <NavigationBar />

      {/* Main Content */}
      <div style={mainContainerStyle}>
        {/* Sidebar */}
        <Index />

        {/* Content Section */}
        <div style={contentContainerStyle}>
          <ContentSection />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Styles
const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const mainContainerStyle = {
  display: "flex",
  flexGrow: 1, 
};

const contentContainerStyle = {
  flexGrow: 1, 
  padding: "20px",
  backgroundColor: "#f8f9fa",
};
export default Layout;
