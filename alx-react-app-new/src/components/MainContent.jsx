import React from "react";

function MainContent() {
  return (
    <main
      style={{
        padding: "20px",
        margin: "10px",
        backgroundColor: "#e6f2ff",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#003366" }}>
        Welcome to My Favorite Cities App
      </h2>
      <p style={{ fontSize: "16px" }}>
        Explore different cities and learn more about them.
      </p>
    </main>
  );
}

export default MainContent;