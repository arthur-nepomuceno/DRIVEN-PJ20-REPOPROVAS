import { Router } from "express";
import { dataHandler } from "../middlewares/dataHandler";
import { examSchema } from "../schemas/examSchema";
import { postExam } from "../controllers/examsController";

export const examsRouter = Router();

examsRouter.post('/exam', dataHandler(examSchema), postExam);
