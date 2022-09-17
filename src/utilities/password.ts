import bcrypt from "bcrypt";

export function codePassword(password: string){
    return bcrypt.hashSync(password, 11);
}

export function comparePassword(password: string, secret: string){
    return bcrypt.compareSync(password, secret);
}