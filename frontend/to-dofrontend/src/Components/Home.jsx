import React from 'react';
import Navbar from './navbar';

const Home = () => {
  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "#f5f7fb" }}>
      
      <Navbar />
      <div 
        style={{
          height: "calc(100% - 70px)",   
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "40px", margin: 0 }}>
          Manage Your Tasks Easily ✅
        </h1>
        
        <p style={{ fontSize: "18px", color: "#555", maxWidth: "500px" }}>
          Stay organized and boost your productivity with our simple and powerful Todo App.
        </p>
      </div>

    </div>
  );
};

export default Home;