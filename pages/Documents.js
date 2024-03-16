import { Router } from "express";
import { DocumentsController } from "../controllers/DocumentsController.js";

export const DocumentsRouter = Router();

DocumentsRouter.get('/', DocumentsController.Docs);