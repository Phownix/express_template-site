import { Router } from "express";
import { DocumentsController } from "../controllers/DocumentsController.js";

export const DocumentsRouter = Router();

DocumentsRouter.get('/', DocumentsController.Docs);

DocumentsRouter.get('/introduction', DocumentsController.introduction);
DocumentsRouter.get('/environment-setup', DocumentsController.environmentSetup);
DocumentsRouter.get('/project-structure', DocumentsController.projectStructure);
DocumentsRouter.get('/features', DocumentsController.features);
DocumentsRouter.get('/best-practices', DocumentsController.bestPractices);
DocumentsRouter.get('/faqs', DocumentsController.faqs);