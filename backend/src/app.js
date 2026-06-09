import express from "express";
import morgan from "morgan";
import cors from "cors";

import authRouter from "./routes/authRouter.js";
import todosrouter from "./routes/todoroutes.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRouter);
app.use("/api/todo", todosrouter);

export default app;