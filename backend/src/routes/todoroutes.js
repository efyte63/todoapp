import { Router } from "express";
import * as todoroutes from "../controller/todoControllers.js";
import { middlewareauth } from "../middleware/middleware.js";

const todosrouter = Router();

todosrouter.post("/addtodos", middlewareauth, todoroutes.addtodos);
todosrouter.post("/removetodos", middlewareauth, todoroutes.removetodos);
todosrouter.get("/gettodos", middlewareauth, todoroutes.gettodos);

export default todosrouter;