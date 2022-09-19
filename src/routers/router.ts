import { Router } from "express";
import { usersRouter } from "./usersRouter";
import { examsRouter } from "./examsRouter";

export const router = Router();

router.use(usersRouter);
router.use(examsRouter)