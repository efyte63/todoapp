import {Router} from "express"
import * as apicalls from "../controller/authController.js";

const authRouter = Router();

authRouter.post("/register", apicalls.register);
authRouter.post("/login" ,apicalls.login )

export default authRouter;
