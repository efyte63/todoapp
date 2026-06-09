
import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {

    const [password , setpassword] = useState("");
    const [email , setemail] = useState("");
    const nav = useNavigate();

    const handleevent = async (e)=>
    {
      e.preventDefault();
        
        try
        {
          const res =await axios.post("/api/auth/login",{
            email,
            password
          });
          console.log(res.data);

          localStorage.setItem("token", res.data.token);
          nav("/Todos")
        }
        catch(error)
        {
          console.log(error);
        }

    }

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
        onSubmit={handleevent}
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
        <h2 style={{ textAlign: "center" }}>Login</h2>

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
          login
        </button>
      </form>
    </div>
  )
}

export default Login