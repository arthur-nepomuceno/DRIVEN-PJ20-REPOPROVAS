import { Users } from "@prisma/client";

export interface IUserData {
    email: string,
    password: string,
    confirm: string
}

export type ILoginData = Omit<Users, 'id'>