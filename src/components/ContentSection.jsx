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
    <div className="content-wrapper">
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

export default ContentSection;
