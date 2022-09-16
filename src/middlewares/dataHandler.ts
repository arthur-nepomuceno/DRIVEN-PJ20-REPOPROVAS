import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export function dataHandler(object: Schema){
    return (req: Request, res: Response, next: NextFunction) => {
        
        const check = object.validate(req.body);

        if(check.error) return res.status(422).send(check.error.message);

        next();
    };
}
