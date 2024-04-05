import express from "express";

import { eventRegisterHandler } from "../controllers/registerEvent.js";

const eventRegisterRouter = express.Router();

// login route for both user and admin ,  ROLE = "USER/ADMIN" is the query parameter.
// /api/login  ROLE = "USER/ADMIN" , EMAIL , PASSWORD WILL BE TAKEN IN BODY -> LOGGING IN
eventRegisterRouter.post("/", eventRegisterHandler);

export default eventRegisterRouter;