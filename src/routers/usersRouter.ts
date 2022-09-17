import { Router } from "express";
import { dataHandler } from "../middlewares/dataHandler";
import { signUpSchema, loginSchema } from "../schemas/userSchema";
import { signUp, login } from "../controllers/usersController";

export const usersRouter = Router();

usersRouter.post('/signup', dataHandler(signUpSchema), signUp);
usersRouter.post('/login', dataHandler(loginSchema), login);