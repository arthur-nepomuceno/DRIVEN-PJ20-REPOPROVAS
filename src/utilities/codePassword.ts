import bcrypt from "bcrypt";

export function codePassword(password: string){
    return bcrypt.hashSync(password, 11);
}