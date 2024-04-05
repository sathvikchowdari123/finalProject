import express from "express";


import { fetchResourcesHanlder } from "../controllers/fetchResources.js";
const fetchResourceRouter = express.Router();


fetchResourceRouter.get("/", fetchResourcesHanlder);

export default fetchResourceRouter;