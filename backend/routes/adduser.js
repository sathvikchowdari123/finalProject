import express from "express";

import { registerHandler } from "../controllers/authentication.js";
const adduserRouter = express.Router();

// login route for both user and admin ,  ROLE = "USER/ADMIN" is the query parameter.
// /api/login  ROLE = "USER/ADMIN" , EMAIL , PASSWORD WILL BE TAKEN IN BODY -> LOGGING IN
adduserRouter.post("/", registerHandler);

export default adduserRouter;