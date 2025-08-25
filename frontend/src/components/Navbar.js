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
      <div style={styles.right}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/map" style={styles.link}>Maps</Link>
        <Link to="/driver" style={styles.link}>Driver</Link>
        <Link to="/admin" style={styles.link}>Admin</Link>
        {user ? (
          <>
            <span style={styles.username}>Hi, {user.username}</span>
            <button
              onClick={onLogout}
              style={styles.logoutBtn}
              onMouseOver={e => e.target.style.background = "#b30000"}
              onMouseOut={e => e.target.style.background = "red"}
            >
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
    padding: "12px 28px",
    background: "linear-gradient(90deg, #222 70%, #444 100%)",
    color: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    flexWrap: "wrap",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
  },
  logoImg: {
    height: "44px",
    marginRight: "10px",
    borderRadius: "10px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
  },
  logoText: {
    color: "white",
    textDecoration: "none",
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "1px",
    transition: "color 0.2s",
  },
  link: {
    color: "white",
    marginLeft: "18px",
    textDecoration: "none",
    fontSize: "17px",
    padding: "6px 10px",
    borderRadius: "4px",
    transition: "background 0.2s, color 0.2s",
    fontWeight: "500",
    cursor: "pointer",
  },
  username: {
    marginLeft: "18px",
    marginRight: "10px",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#ffd700",
    letterSpacing: "0.5px",
  },
  logoutBtn: {
    padding: "7px 16px",
    border: "none",
    background: "red",
    color: "white",
    cursor: "pointer",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "bold",
    marginLeft: "10px",
    transition: "background 0.2s",
    boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
  },
};

// Add hover effect for links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.onmouseover = () => link.style.background = "#333";
    link.onmouseout = () => link.style.background = "transparent";
  });
});

export default Navbar;
