import express from "express";


import { eventUpdateHandler } from "../controllers/updateEvent.js";
const eventUpdateRouter = express.Router();

// login route for both user and admin ,  ROLE = "USER/ADMIN" is the query parameter.
// /api/login  ROLE = "USER/ADMIN" , EMAIL , PASSWORD WILL BE TAKEN IN BODY -> LOGGING IN
eventUpdateRouter.post("/", eventUpdateHandler);

export default eventUpdateRouter;