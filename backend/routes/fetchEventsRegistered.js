import express from "express";


import { fetchEventsRegisteredHanlder } from "../controllers/fetchEventsRegistered.js";
const fetchEventRegisteredRouter = express.Router();

// login route for both user and admin ,  ROLE = "USER/ADMIN" is the query parameter.
// /api/login  ROLE = "USER/ADMIN" , EMAIL , PASSWORD WILL BE TAKEN IN BODY -> LOGGING IN
fetchEventRegisteredRouter.get("/", fetchEventsRegisteredHanlder);

export default fetchEventRegisteredRouter;