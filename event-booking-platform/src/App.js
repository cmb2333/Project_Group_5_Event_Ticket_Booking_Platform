import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Events from "./pages/events";
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
