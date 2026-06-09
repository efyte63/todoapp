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
      const res = await axios.get("http://localhost:3000/set/todo/gettodos",{
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
      await axios.post("http://localhost:3000/set/todo/addtodos",
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
        await axios.post("http://localhost:3000/set/todo/removetodos" , 
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
        height: "100vh",
        width: "100%"
      }}
    >
      <div style={navstyle}>
        <img style = {{height : "120px" , border :"2px solid black" , borderRadius:"50%" , objectFit:"cover"}} src="https://imgs.search.brave.com/Bt-QBRSgYqpd-tZhyZLIldFNTjr__pQGbI6p_j9pZsI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/MTI4MHB4LUltYWdl/X2NyZWF0ZWRfd2l0/aF9hX21vYmlsZV9w/aG9uZS5wbmc" alt="" />
        <h1>To do app</h1>

        <div style={{ height:"90px" , width:"30%"}}>
          {
            !isactive ? (
              <button onClick={() => setIsActive(true)} style ={buttonstyle}>
                <p style={{fontFamily:"-apple-system" , fontSize:"30px" , color:"orange" }}
                 onMouseOver={(e) => (e.target.style.color = "black")}
                 onMouseOut={(e) => (e.target.style.color = "orange")}>
                  Add Items
                </p>
              </button>
            ) : (

              <div style ={{display:"flex" , gap:"10px"}}>
                <input 
                  style={inputstyle}
                  type="text" 
                  placeholder='Enter todo'
                  value={value}
                  onChange={(e) => setvalue(e.target.value)}
                />

                <button
                  style={button2}
                  onClick={handleclick}
                  onMouseOver={(e) => (e.currentTarget.style.border = "2px solid red")}
                  onMouseOut={(e) => (e.currentTarget.style.border = "2px solid blue")}
                >
                  <span style={textStyle}>Add</span>
                </button>
              </div>
            )
          }
        </div>
      </div>
        {
  todos.length === 0 ? (
    <p style={{
      textAlign: "center",
      fontSize: "20px",
      color: "#888",
      marginTop: "40px"
    }}>
      No todos found 😕
    </p>
  ) : (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      padding: "20px"
    }}>
      {
        todos.map((d, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px 20px",
              borderRadius: "12px",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <p style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: "500",
              color: "#333"
            }}>
              {d}
            </p>

            <button
            onClick={() => removetodo(d,i)}
              style={{
                padding: "8px 14px",
                backgroundColor: "#ff4d4d",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "0.3s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#cc0000"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#ff4d4d"}
            >
              Remove
            </button>
          </div>
        ))
      }
    </div>
  )
}          











    </div>
  );
};

const navstyle = {
  height: "20vh",
  width: "100%",
  backgroundColor: "pink",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

const buttonstyle ={
  height: "10vh",
  width: "50%",
  border:"8px solid green",
  borderRadius:"20%"
}

const inputstyle={
  height:"40px",
  border:"8px solid green",
  borderRadius:"20%"
}

const button2 = {
  height:"60px",
  width:"80px",
  border:"2px solid blue",
  borderRadius:"20%",
}

const textStyle = {
  fontFamily: "-apple-system",
  fontSize: "30px",
  color: "orange"
};

export default Todos;