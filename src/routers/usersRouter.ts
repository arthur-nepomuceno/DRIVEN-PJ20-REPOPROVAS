import { Router } from "express";
import { dataHandler } from "../middlewares/dataHandler";
import { userSchema } from "../schemas/userSchema";

export const usersRouter = Router();

usersRouter.post('/signup', dataHandler(userSchema))