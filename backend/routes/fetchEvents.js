import express from "express";

import { fetchEventsHanlder } from "../controllers/fetchEvents.js";
const fetchEventRouter = express.Router();

// login route for both user and admin ,  ROLE = "USER/ADMIN" is the query parameter.
// /api/login  ROLE = "USER/ADMIN" , EMAIL , PASSWORD WILL BE TAKEN IN BODY -> LOGGING IN
fetchEventRouter.get("/", fetchEventsHanlder);

export default fetchEventRouter;