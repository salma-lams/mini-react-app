import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Home";
import Profile from "./Profile";
import AddRequest from "./AddRequest";
import Requests from "./RequestsList";
import AddUser from "./AddUser";
import UsersList from "./UsersList";

const ContentSection = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={contentSectionStyle}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-request" element={<AddRequest />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
};

const contentSectionStyle = {
  flex: 1,
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

export default ContentSection;
