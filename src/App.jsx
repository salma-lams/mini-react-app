import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import './App.css';


const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <Route path="*" element={<Layout />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
