import express from "express";


import { addResourceHandler } from "../controllers/addResource.js";
import { addSkillsHandler } from "../controllers/userSkills.js";
const addskillsRouter = express.Router();

// login route for both user and admin ,  ROLE = "USER/ADMIN" is the query parameter.
// /api/login  ROLE = "USER/ADMIN" , EMAIL , PASSWORD WILL BE TAKEN IN BODY -> LOGGING IN
addskillsRouter.post("/", addSkillsHandler);

export default addskillsRouter;