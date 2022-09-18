import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function decodeToken(token: string) {

    const SECRET_KEY: string | any = process.env.JWT_SECRET;
    const userID = await jsonwebtoken.verify(token, SECRET_KEY)

    return userID;
}

export {
    decodeToken,
}