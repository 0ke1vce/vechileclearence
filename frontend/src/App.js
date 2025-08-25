import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Driver from "./pages/Driver";
import Admin from "./pages/Admin";
import MapPage from "./pages/MapPage";

function App() {
  const [user, setUser] = useState(null);

  // Handle login
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav style={styles.navbar}>
          {/* Left side: Logo + Name */}
          <div style={styles.left}>
            <img src="/logo.png" alt="VRCS Logo" style={styles.logoImg} />
            <Link to="/" style={styles.logoText}>
              Vehicle Route Clearance
            </Link>
          </div>

          {/* Right side: Links */}
          <div style={styles.right}>
            <Link to="/" style={styles.link}>
              Home
            </Link>
            <Link to="/map" style={styles.link}>
              Maps
            </Link>
            <Link to="/driver" style={styles.link}>
              Driver
            </Link>
            <Link to="/admin" style={styles.link}>
              Admin
            </Link>

            {user ? (
              <>
                <span style={styles.username}>Hi, {user.username}</span>
                <button onClick={handleLogout} style={styles.logoutBtn}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" style={styles.link}>
                  Login
                </Link>
                <Link to="/signup" style={styles.link}>
                  Signup
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#222",
    color: "#fff",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  logoImg: {
    height: "40px",
    marginRight: "10px",
    borderRadius: "6px",
  },
  logoText: {
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
  },
  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
    fontSize: "16px",
  },
  username: {
    marginLeft: "15px",
    marginRight: "10px",
    fontWeight: "bold",
  },
  logoutBtn: {
    padding: "6px 12px",
    border: "none",
    background: "red",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px",
  },
};

export default App;
