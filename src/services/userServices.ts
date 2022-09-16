import { IUserData } from "../types/userTypes";
import { codePassword } from "../utilities/codePassword";
import * as usersRepository from "../repositories/usersRepository";

async function checkEmailAtSignUp(email: string){
    
    const check = await usersRepository.getUserByEmail(email);
    
    if(check) throw {
        type: 'invalid_data',
        message: 'invalid email or password'
    }

    return;
}

async function checkPasswordAtSignUp(password: string, confirm: string){
    
    const check = password === confirm;

    if(!check) throw {
        type: 'invalid_password',
        message: 'password and confirm do not match.'
    }

    return;
}

async function createUser(object: IUserData) {
    const {email, password, confirm} = object;
    const secret = codePassword(password);
    const user = {email, password: secret, confirm}
    await usersRepository.postUser(user);
    return await usersRepository.getUserByEmail(email);
}

export {
    checkEmailAtSignUp,
    checkPasswordAtSignUp,
    createUser
}