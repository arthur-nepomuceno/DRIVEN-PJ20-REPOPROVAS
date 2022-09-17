import { Request, Response } from "express";
import { IUserData, ILoginData } from "../types/userTypes";
import * as userServices from "../services/userServices";

async function signUp(req: Request, res: Response){
    const body: IUserData = req.body;

    await userServices.checkEmailAtSignUp(body.email);

    await userServices.checkPasswordAtSignUp(body.password, body.confirm)

    const user = await userServices.createUser(body)

    return res.status(201).send(user);
}

async function login(req: Request, res: Response){
    
    const body: ILoginData = req.body

    await userServices.checkEmailAtLogin(body),
    await userServices.checkPasswordAtLogin(body)
    const token = await userServices.createToken(body); 

    return res.status(200).send({token});
}

export {
    signUp,
    login
}