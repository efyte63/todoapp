import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "80px",
        backgroundColor: "#ffe4ec",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 25px",
        boxSizing: "border-box",
        flexWrap: "wrap",
        gap: "15px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <img
          src="https://imgs.search.brave.com/khIjC9C_-HbjDNw9nzUK3QjGt_sZZAeDGLjGwc4oV0E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFEcTJwZzF0/RkEvMS8wLzQwMHct/NjlQQW14Y21sUFEu/anBn"
          alt="logo"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />

        <h2
          style={{
            margin: 0,
            color: "#333",
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)"
          }}
        >
          ToDo App
        </h2>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap"
        }}
      >
        <Link
          to="/Register"
          style={{
            padding: "10px 20px",
            backgroundColor: "#83d49e",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "14px"
          }}
        >
          REGISTER
        </Link>

        <Link
          to="/Login"
          style={{
            padding: "10px 20px",
            backgroundColor: "#fff",
            color: "#333",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "2px solid #83d49e",
            fontSize: "14px"
          }}
        >
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Navbar;