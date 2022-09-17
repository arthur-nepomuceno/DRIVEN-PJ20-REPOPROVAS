import { Users } from "@prisma/client";
import { ILoginData, IUserData } from "../types/userTypes";
import { codePassword, comparePassword } from "../utilities/password";
import * as usersRepository from "../repositories/usersRepository";
import jsonweboken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function checkEmailAtSignUp(email: string){
    
    const user = await usersRepository.getUserByEmail(email);
    
    if(user) throw {
        type: 'invalid_data',
        message: 'invalid email or password.'
    }

    return;
}

async function checkPasswordAtSignUp(password: string, confirm: string){
    
    const check = password === confirm;

    if(!check) throw {
        type: 'invalid_confirm_password',
        message: 'password and confirm do not match.'
    }

    return;
}

async function createUser(body: IUserData) {
    const {email, password, confirm} = body;
    const secret = codePassword(password);
    const user = {email, password: secret, confirm}
    await usersRepository.postUser(user);
    return await usersRepository.getUserByEmail(email);
}

async function checkEmailAtLogin(body: ILoginData){
    
    const user = await usersRepository.getUserByEmail(body.email);
    
    if(!user) throw {
        type: 'invalid_data',
        message: 'invalid email or password.'
    }

    return;
}

async function checkPasswordAtLogin(body: ILoginData){
    
    const user: Users | any = await usersRepository.getUserByEmail(body.email);
    const check = comparePassword(body.password, user?.password)

    if(!check) throw {
        type: 'invalid_data',
        message: 'invalid email or password..'
    }

    return;
}

async function createToken(body: ILoginData) {

    const user: Users | any  = await usersRepository.getUserByEmail(body.email);
    
    const SECRET_KEY: string | any = process.env.JWT_SECRET;
    
    return jsonweboken.sign(user?.id, SECRET_KEY)
}

export {
    checkEmailAtSignUp,
    checkPasswordAtSignUp,
    createUser,
    checkEmailAtLogin,
    checkPasswordAtLogin,
    createToken
}