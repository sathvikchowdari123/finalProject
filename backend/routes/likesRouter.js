import express from "express";

import { eventRegisterHandler } from "../controllers/registerEvent.js";
import { addlikeHandler } from "../controllers/likesHanler.js";
import { removelikeHandler } from "../controllers/likesHanler.js";
const likeRouter = express.Router();

// login route for both user and admin ,  ROLE = "USER/ADMIN" is the query parameter.
// /api/login  ROLE = "USER/ADMIN" , EMAIL , PASSWORD WILL BE TAKEN IN BODY -> LOGGING IN
likeRouter.post("/", addlikeHandler);
likeRouter.post("/remove", removelikeHandler);

export default likeRouter;