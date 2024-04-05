import express from "express";



import { userEventRegisterHandler } from "../controllers/userEventRegister.js";
const userEventRegisterRouter = express.Router();

// login route for both user and admin ,  ROLE = "USER/ADMIN" is the query parameter.
// /api/login  ROLE = "USER/ADMIN" , EMAIL , PASSWORD WILL BE TAKEN IN BODY -> LOGGING IN
userEventRegisterRouter.post("/", userEventRegisterHandler);

export default userEventRegisterRouter;