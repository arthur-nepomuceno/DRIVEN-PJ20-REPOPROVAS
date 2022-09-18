import { Router } from "express";
import { dataHandler } from "../middlewares/dataHandler";
import { examSchema } from "../schemas/examSchema";

export const examsRouter = Router();

examsRouter.post('/exam', dataHandler(examSchema));
