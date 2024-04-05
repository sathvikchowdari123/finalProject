import express from "express";


import { interestedNotificationHanlder } from "../controllers/interestedNotification.js";
const interestedNotificationRouter = express.Router();


interestedNotificationRouter.post("/", interestedNotificationHanlder);

export default interestedNotificationRouter;