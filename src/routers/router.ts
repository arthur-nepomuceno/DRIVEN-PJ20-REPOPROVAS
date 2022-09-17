import { Router } from "express";
import { usersRouter } from "./usersRouter";

export const router = Router();

router.use(usersRouter)