import {Request, Response, NextFunction} from "express";

export function errorHandler(error: Error | any, req: Request, res: Response, next: NextFunction){
    console.log(error);

    if(error.type === 'invalid_data') return res.status(409).send(error.message);
    if(error.type === 'invalid_confirm_password') return res.status(422).send(error.message);
    if(error.type === 'invalid_category') return res.status(400).send(error.message);
    if(error.type === 'invalid_teacher_discipline') return res.status(400).send(error.message);
    if(error.type === 'invalid_exam_name') return res.status(400).send(error.message);

    return res.status(500).send(`Unexpected server error: ${error}`)
}