import React, { useState, useEffect } from 'react';
import axios from "axios";

const Todos = () => {
  const [isactive, setIsActive] = useState(false);
  const [value, setvalue] = useState("");
  const [todos , settodos] = useState([]);
  

  const token = localStorage.getItem("token");

  //get call to todo
  const gettodos = async () =>{
    try {
      const res = await axios.get("/set/todo/gettodos",{
        headers:{
          Authorization : `Bearer ${token}`  
        }
      }) 
      
      console.log(res.data);
      settodos(res.data.todos);
    } catch (error) {
      console.log(error)
    }
  }

  //useeffect
  useEffect(() => {
    gettodos()
  },[]);


  //after clicking addbutton
  const handleclick = async ()=>
  {
     if (value.trim() === "") {
    return;
  }
    try {
      await axios.post("/set/todo/addtodos",
        {addtodo:value},
        {
          headers : {
            Authorization: `Bearer ${token}`
          }
        }
      )

      settodos([...todos, value]);

      setvalue("");
      setIsActive(false)
    } catch (error) {
      console.log(error);
    }
  }
        //on removing 
  const removetodo = async (data ,index) => {
  const updatedTodos = todos.filter((_, i) => i !== index);
  settodos(updatedTodos);

    try {
        await axios.post("/set/todo/removetodos" , 
            {removetodo:data},
            {
          headers : {
            Authorization: `Bearer ${token}`
          }
        }
        )
        
    } catch (error) {
        console.log(error)
    }

};
return (
  <div
    style={{
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#f5f7fb",
      overflowX: "hidden"
    }}
  >
    <div
      style={{
        width: "100%",
        minHeight: "90px",
        backgroundColor: "pink",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "15px 25px",
        boxSizing: "border-box",
        gap: "20px"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px"
        }}
      >
        <img
          style={{
            width: "70px",
            height: "70px",
            border: "2px solid black",
            borderRadius: "50%",
            objectFit: "cover"
          }}
          src="https://imgs.search.brave.com/Bt-QBRSgYqpd-tZhyZLIldFNTjr__pQGbI6p_j9pZsI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlhLm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0ltYWdlX2NyZWF0ZWRfd2l0aF9hX21vYmlsZV9waG9uZS5wbmcvMTI4MHB4LUltYWdlX2NyZWF0ZWRfd2l0aF9hX21vYmlsZV9waG9uZS5wbmc"
          alt=""
        />

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(24px, 4vw, 40px)"
          }}
        >
          To Do App
        </h1>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {!isactive ? (
          <button
            onClick={() => setIsActive(true)}
            style={{
              minHeight: "50px",
              minWidth: "150px",
              padding: "10px 20px",
              border: "4px solid green",
              borderRadius: "10px",
              backgroundColor: "#fff",
              cursor: "pointer"
            }}
          >
            <span
              style={{
                fontFamily: "-apple-system",
                fontSize: "18px",
                color: "orange",
                fontWeight: "bold"
              }}
            >
              Add Items
            </span>
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center"
            }}
          >
            <input
              style={{
                height: "45px",
                flex: 1,
                minWidth: "220px",
                padding: "0 10px",
                border: "3px solid green",
                borderRadius: "10px",
                fontSize: "16px"
              }}
              type="text"
              placeholder="Enter todo"
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            />

            <button
              onClick={handleclick}
              style={{
                height: "45px",
                minWidth: "90px",
                border: "2px solid blue",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "#fff"
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  color: "orange",
                  fontWeight: "bold"
                }}
              >
                Add
              </span>
            </button>
          </div>
        )}
      </div>
    </div>

    {todos.length === 0 ? (
      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          color: "#888",
          marginTop: "50px"
        }}
      >
        No todos found 😕
      </p>
    ) : (
      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        {todos.map((d, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "15px",
              padding: "15px 20px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            <p
              style={{
                margin: 0,
                flex: 1,
                fontSize: "16px",
                fontWeight: "500",
                color: "#333",
                wordBreak: "break-word"
              }}
            >
              {d}
            </p>

            <button
              onClick={() => removetodo(d, i)}
              style={{
                padding: "10px 15px",
                backgroundColor: "#ff4d4d",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
);
};

export default Todos;