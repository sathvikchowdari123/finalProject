import express from "express";


import { changePasswordHandler } from "../controllers/changepassword.js";
const changePasswordRouter = express.Router();

// login route for both user and admin ,  ROLE = "USER/ADMIN" is the query parameter.
// /api/login  ROLE = "USER/ADMIN" , EMAIL , PASSWORD WILL BE TAKEN IN BODY -> LOGGING IN
changePasswordRouter.post("/",changePasswordHandler);

export default changePasswordRouter;