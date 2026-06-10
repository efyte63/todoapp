import React, { useState, useEffect } from 'react';
import axios from "axios";

const Todos = () => {
  const [isactive, setIsActive] = useState(false);
  const [value, setvalue] = useState("");
  const [todos , settodos] = useState([]);
  

  const token = localStorage.getItem("token");

  //get call to todo

const gettodos = async () => {
  try {
    const res = await axios.get("/api/todo/gettodos", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log(res.data);
    settodos(res.data?.todos || []);
  } catch (error) {
    console.log(error);
  }
};

  //useeffect
  useEffect(() => {
    gettodos()
  },[]);


  //after clicking addbutton
// add todo
const handleclick = async () => {
  if (value.trim() === "") {
    return;
  }

  try {
    await axios.post(
      "/api/todo/addtodos",
      { addtodo: value },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    await gettodos(); // sync with DB

    setvalue("");
    setIsActive(false);
  } catch (error) {
    console.log(error);
  }
};
        //on removing 
  // remove todo
const removetodo = async (data, index) => {
  try {
    await axios.post(
      "/api/todo/removetodos",
      { removetodo: data },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    await gettodos(); // sync with DB
  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
      <style>{`
        .todos-wrapper {
          min-height: 100vh;
          width: 100%;
          box-sizing: border-box;
        }

        .nav {
          width: 100%;
          background-color: pink;
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 10px;
          padding: 12px 16px;
          box-sizing: border-box;
        }

        .nav-logo {
          height: 80px;
          border: 2px solid black;
          border-radius: 50%;
          object-fit: cover;
        }

        .nav h1 {
          font-size: clamp(1.2rem, 4vw, 2rem);
          margin: 0;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          width: clamp(160px, 30%, 340px);
        }

        .add-btn {
          height: 60px;
          width: 100%;
          border: 8px solid green;
          border-radius: 20%;
          background: transparent;
          cursor: pointer;
        }

        .add-btn p {
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: clamp(16px, 3vw, 24px);
          color: orange;
          margin: 0;
          transition: color 0.2s;
        }

        .add-btn p:hover {
          color: black;
        }

        .input-row {
          display: flex;
          gap: 8px;
          align-items: center;
          width: 100%;
        }

        .todo-input {
          flex: 1;
          min-width: 0;
          height: 40px;
          border: 8px solid green;
          border-radius: 20%;
          padding: 0 8px;
          font-size: 14px;
          box-sizing: border-box;
        }

        .confirm-btn {
          height: 50px;
          width: 60px;
          border: 2px solid blue;
          border-radius: 20%;
          background: transparent;
          cursor: pointer;
          flex-shrink: 0;
          transition: border 0.2s;
        }

        .confirm-btn:hover {
          border: 2px solid red;
        }

        .confirm-btn span {
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: clamp(14px, 2.5vw, 22px);
          color: orange;
        }

        .empty-msg {
          text-align: center;
          font-size: 20px;
          color: #888;
          margin-top: 40px;
        }

        .todos-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 20px;
          box-sizing: border-box;
        }

        .todo-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          border-radius: 12px;
          background-color: #ffffff;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s;
          gap: 12px;
        }

        .todo-item:hover {
          transform: scale(1.02);
        }

        .todo-text {
          margin: 0;
          font-size: clamp(14px, 2.5vw, 18px);
          font-weight: 500;
          color: #333;
          word-break: break-word;
          flex: 1;
        }

        .remove-btn {
          padding: 8px 14px;
          background-color: #ff4d4d;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.3s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .remove-btn:hover {
          background-color: #cc0000;
        }

        @media (max-width: 480px) {
          .nav {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .nav-actions {
            width: 90%;
          }

          .todo-item {
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
      `}</style>

      <div className="todos-wrapper">
        <div className="nav">
          <img
            className="nav-logo"
            src="https://imgs.search.brave.com/Bt-QBRSgYqpd-tZhyZLIldFNTjr__pQGbI6p_j9pZsI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2I2L0lt/YWdlX2NyZWF0ZWRf/d2l0aF9hX21vYmls/ZV9waG9uZS5wbmcv/MTI4MHB4LUltYWdl/X2NyZWF0ZWRfd2l0/aF9hX21vYmlsZV9w/aG9uZS5wbmc"
            alt=""
          />
          <h1>To do app</h1>

          <div className="nav-actions">
            {
              !isactive ? (
                <button onClick={() => setIsActive(true)} className="add-btn">
                  <p>Add todos</p>
                </button>
              ) : (
                <div className="input-row">
                  <input
                    className="todo-input"
                    type="text"
                    placeholder='Enter todo'
                    value={value}
                    onChange={(e) => setvalue(e.target.value)}
                  />
                  <button
                    className="confirm-btn"
                    onClick={handleclick}
                  >
                    <span>Add</span>
                  </button>
                </div>
              )
            }
          </div>
        </div>

        {
          todos.length === 0 ? (
            <p className="empty-msg">No todos found 😕</p>
          ) : (
            <div className="todos-list">
              {
                todos.map((d, i) => (
                  <div key={i} className="todo-item">
                    <p className="todo-text">{d}</p>
                    <button
                      onClick={() => removetodo(d, i)}
                      className="remove-btn"
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
    </>
  );
};

export default Todos;
