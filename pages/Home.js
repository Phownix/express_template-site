import { Router } from "express";
import { HomeController } from "../controllers/HomeController.js";

export const HomeRouter = Router();

HomeRouter.get('/', HomeController.Home);