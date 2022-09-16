import { Router } from "express";
import { dataHandler } from "../middlewares/dataHandler";
import { userSchema } from "../schemas/userSchema";
import { signUp } from "../controllers/usersController";

export const usersRouter = Router();

usersRouter.post('/signup', dataHandler(userSchema), signUp);