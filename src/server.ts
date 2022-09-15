import express from "express";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const server = express();

server.use(app)

const PORT: number = Number(process.env.PORT) | 5000 ;

server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}.`)
})