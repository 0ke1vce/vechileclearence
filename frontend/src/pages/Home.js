import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.hero}>
        <img src="/logo.png" alt="VRCS Logo" style={styles.logo} />
        <h1 style={styles.title}>Vehicle Route Clearance System 🚦</h1>
        <p style={styles.subtitle}>
          Your partner in ensuring safe and efficient passage for every journey.
        </p>

        {/* Action Buttons */}
        <div style={styles.buttons}>
          <Link to="/map" style={styles.btnPrimary}>
            View Live Map
          </Link>
          <Link to="/login" style={styles.btnSecondary}>
            Login / Signup
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>Key Features</h2>
        <div style={styles.featureGrid}>
          <div style={styles.feature}>
            <span style={styles.featureIcon}>🗺️</span>
            <h3>Real-Time Route Status</h3>
            <p>Get live updates on road blockages, clearances, and maintenance activities.</p>
          </div>
          <div style={styles.feature}>
            <span style={styles.featureIcon}>🔔</span>
            <h3>Instant Notifications</h3>
            <p>Receive immediate alerts about route changes and critical incidents.</p>
          </div>
          <div style={styles.feature}>
            <span style={styles.featureIcon}>🚗</span>
            <h3>Optimized Navigation</h3>
            <p>Find the safest and fastest routes with our intelligent navigation system.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.howItWorks}>
        <h2 style={styles.sectionTitle}>How It Works ⚡</h2>
        <div style={styles.stepsContainer}>
          <div style={styles.step}>
            <span style={styles.stepIcon}>1️⃣</span>
            <h3>Mark Route Status</h3>
            <p>Authorized personnel update road statuses through the admin dashboard.</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepIcon}>2️⃣</span>
            <h3>Instant Broadcast</h3>
            <p>The system instantly broadcasts the updated information to all users.</p>
          </div>
          <div style={styles.step}>
            <span style={styles.stepIcon}>3️⃣</span>
            <h3>Navigate Safely</h3>
            <p>Drivers receive real-time updates and can choose the most efficient routes.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  hero: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #0072ff, #00c6ff)",
    color: "white",
    borderRadius: "0 0 20px 20px",
    marginBottom: "50px",
  },
  logo: {
    width: "120px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    margin: "10px 0",
    textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "40px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  btnPrimary: {
    background: "#ff4757",
    color: "white",
    padding: "15px 30px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "transform 0.2s",
  },
  btnSecondary: {
    background: "white",
    color: "#0072ff",
    padding: "15px 30px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
    border: "2px solid #0072ff",
    transition: "background 0.2s, color 0.2s",
  },
  features: {
    padding: "50px 20px",
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  featureGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  feature: {
    width: "300px",
    padding: "30px",
    background: "#f7f9fc",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  featureIcon: {
    fontSize: "48px",
    display: "block",
    marginBottom: "15px",
  },
  howItWorks: {
    padding: "50px 20px",
    background: "#f7f9fc",
  },
  stepsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  step: {
    width: "300px",
    padding: "30px",
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  stepIcon: {
    fontSize: "36px",
    display: "block",
    marginBottom: "15px",
    color: "#0072ff",
  },
};

export default Home;