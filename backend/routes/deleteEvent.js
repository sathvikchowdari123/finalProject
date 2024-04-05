import express from "express";

import { eventDeleteHandler } from "../controllers/deleteEvent.js";
const eventDeleteRouter = express.Router();

// login route for both user and admin ,  ROLE = "USER/ADMIN" is the query parameter.
// /api/login  ROLE = "USER/ADMIN" , EMAIL , PASSWORD WILL BE TAKEN IN BODY -> LOGGING IN
eventDeleteRouter.post("/", eventDeleteHandler);

export default eventDeleteRouter;