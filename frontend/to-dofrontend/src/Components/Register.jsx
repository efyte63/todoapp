import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
const navigate = useNavigate();
    
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [image , setimage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "/api/auth/register",
      {
        username,
        email,
        password,
        image
      }
    );

    console.log(res.data);

    alert("Registered Successfully ✅");

    setusername("");
    setemail("");
    setpassword("");

    navigate("/login");

  } catch (error) {
    console.log(error);
    if (error.response) {
      alert(error.response.data.msg || "Registration failed ❌");
    } else {
      alert("Server Error ❌");
    }
  }
};

  return (
    <div 
      style={{
        height: "100vh",
        width: "100%",
        background: "#f5f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form 
        onSubmit={handleSubmit}
        style={{
          width: "350px",
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        <h2 style={{ textAlign: "center" }}>Register</h2>

        <input 
          type="text" 
          placeholder="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />

        <input 
          type="url"  
          placeholder="image"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />

        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;