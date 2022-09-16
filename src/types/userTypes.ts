import { Users } from "@prisma/client";

export interface IUserData {
    email: string,
    password: string,
    confirm: string
}