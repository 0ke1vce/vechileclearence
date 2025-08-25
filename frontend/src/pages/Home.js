import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <img src="/logo.png" alt="VRCS Logo" style={styles.logo} />
        <h1 style={styles.title}>Vehicle Route Clearance System 🚦</h1>
        <p style={styles.subtitle}>
          Smart traffic management for emergency response and city safety.
        </p>

        {/* Action Buttons */}
        <div style={styles.buttons}>
          <Link to="/map" style={styles.btnPrimary}>
            View Live Map
          </Link>
          <Link to="/login" style={styles.btnSecondary}>
            Login
          </Link>
          <Link to="/signup" style={styles.btnSecondary}>
            Signup
          </Link>
        </div>
      </div>

      {/* Info Section */}
      <div style={styles.info}>
        <h2>Why VRCS?</h2>
        <p>
          In critical situations like accidents, medical emergencies, or VIP
          convoys, every second matters.  
          <strong> VRCS </strong> helps authorities clear vehicle routes in
          real-time, ensuring faster movement, less congestion, and safer roads.
        </p>
      </div>

      {/* How It Works Section */}
      <div style={styles.howItWorks}>
        <h2>⚡ How It Works</h2>
        <div style={styles.stepsContainer}>
          <div style={styles.step}>
            <span style={styles.stepIcon}>🛠️</span>
            <h3>Step 1: Admin Marks</h3>
            <p>Admin updates blocked or cleared roads in the system.</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepIcon}>📡</span>
            <h3>Step 2: Data Shared</h3>
            <p>System broadcasts real-time road updates to all users.</p>
          </div>

          <div style={styles.step}>
            <span style={styles.stepIcon}>🚗</span>
            <h3>Step 3: Drivers Guided</h3>
            <p>Drivers see live map updates and choose safe routes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
    color: "#333",
  },
  hero: {
    padding: "60px 20px",
    background: "linear-gradient(to right, #0072ff, #00c6ff)",
    color: "white",
    borderRadius: "12px",
    marginBottom: "40px",
  },
  logo: {
    width: "100px",
    marginBottom: "20px",
    borderRadius: "8px",
  },
  title: {
    fontSize: "36px",
    margin: "10px 0",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "#ff4757",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  btnSecondary: {
    background: "white",
    color: "#0072ff",
    padding: "12px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    border: "2px solid #0072ff",
  },
  info: {
    maxWidth: "700px",
    margin: "40px auto",
    fontSize: "16px",
    lineHeight: "1.6",
  },
  howItWorks: {
    marginTop: "50px",
    padding: "30px 20px",
    background: "#f7f9fc",
    borderRadius: "12px",
  },
  stepsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  step: {
    width: "250px",
    padding: "20px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  stepIcon: {
    fontSize: "40px",
    display: "block",
    marginBottom: "10px",
  },
};

export default Home;
