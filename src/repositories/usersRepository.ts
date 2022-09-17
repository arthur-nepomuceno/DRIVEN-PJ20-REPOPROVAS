import { prisma } from "../database/postgres";
import { IUserData } from "../types/userTypes";

async function getUserByEmail(email: string){
    return prisma.users.findUnique({where: {email}});
}

async function postUser(object: IUserData) {

    return await prisma.users.create({data: {
        email: object.email, 
        password: object.password
    }})
}

export {
    getUserByEmail,
    postUser
}