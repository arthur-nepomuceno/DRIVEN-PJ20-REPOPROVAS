import { Request, Response } from "express";
import { IUserData } from "../types/userTypes";
import * as userService from "../services/userServices";

async function signUp(req: Request, res: Response){
    const body: IUserData = req.body;

    await userService.checkEmailAtSignUp(body.email);

    await userService.checkPasswordAtSignUp(body.password, body.confirm)

    const user = await userService.createUser(body)

    return res.status(201).send(user);
}

async function login(req: Request, res: Response){

    return res.status(201).send('ok');
}

export {
    signUp,
    login
}