import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <img src="/logo.png" alt="VRCS Logo" style={styles.logoImg} />
        <Link to="/" style={styles.logoText}>
          Vehicle Route Clearance
        </Link>
      </div>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/map" style={styles.link}>Maps</Link>
        <Link to="/driver" style={styles.link}>Driver</Link>
        <Link to="/admin" style={styles.link}>Admin</Link>

        {user ? (
          <>
            <span style={styles.username}>Hi, {user.username}</span>
            <button onClick={onLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/signup" style={styles.link}>Signup</Link>
          </>
        )}
      </div>
    </nav>
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
  logoImg: {
    height: "40px",
    marginRight: "10px",
    borderRadius: "8px",
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

export default Navbar;
