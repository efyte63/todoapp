import express from "express";
import morgan from "morgan";
import authRouter from "./routes/authRouter.js";
import todosrouter from "./routes/todoroutes.js";
import cors from "cors";



const app = express();

app.use(cors());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRouter);
app.use("/set/todo" , todosrouter)

export default app;