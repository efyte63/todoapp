import React from 'react'
import { Link } from 'react-router-dom';
const navbar = () => {
  return (
    <div>
         <div 
        style={{ 
          height: "100px", 
          width: "68.35%", 
          backgroundColor: "#ffe4ec", 
          position:"absolute",
          display: "flex", 
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img 
            src="https://imgs.search.brave.com/khIjC9C_-HbjDNw9nzUK3QjGt_sZZAeDGLjGwc4oV0E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFEcTJwZzF0/RkEvMS8wLzQwMHct/NjlQQW14Y21sUFEu/anBn" 
            alt="logo"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <h2 style={{ margin: 0 }}>ToDo App</h2>
        </div>

        {/* RIGHT (BUTTONS) */}
        <div style={{ display: "flex", gap: "15px" }}>

          <Link
            to="/Register"
            style={{
              padding: "8px 18px",
              backgroundColor: "#83d49e",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              transition: "0.3s",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
            }}
          >
            REGISTER
          </Link>

          <Link
            to="/Login"
            style={{
              padding: "8px 18px",
              backgroundColor: "#fff",
              color: "#333",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              border: "2px solid #83d49e",
              transition: "0.3s",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
            }}
          >
            LOGIN
          </Link>

        </div>

      </div>

        
    </div>
  )
}

export default navbar