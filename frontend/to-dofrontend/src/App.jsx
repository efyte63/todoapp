import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Login from "./Components/Login"
import Register from "./Components/Register";
import Todos from "./Components/Todos"


function App() {


  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path = "/register" element={<Register/>}></Route>
        <Route path = "/todos" element={<Todos/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
