import React from 'react';
import Navbar from './navbar';

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f5f7fb",
        overflowX: "hidden"
      }}
    >
      <Navbar />

      <div
        style={{
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            marginBottom: "15px",
            color: "#222"
          }}
        >
          Manage Your Tasks Easily ✅
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#555",
            maxWidth: "600px",
            lineHeight: "1.7"
          }}
        >
          Stay organized and boost your productivity with our simple and
          powerful Todo App.
        </p>
      </div>
    </div>
  );
};

export default Home;