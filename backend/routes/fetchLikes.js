import express from "express";

import { fetchlikesHanlder } from "../controllers/likesHanler.js";
const fetchlikesRouter = express.Router();

// login route for both user and admin ,  ROLE = "USER/ADMIN" is the query parameter.
// /api/login  ROLE = "USER/ADMIN" , EMAIL , PASSWORD WILL BE TAKEN IN BODY -> LOGGING IN
fetchlikesRouter.get("/", fetchlikesHanlder);

export default fetchlikesRouter;