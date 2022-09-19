import {Request, Response} from "express";
import { IExamData } from "../types/examTypes";
import * as otherServices from "../services/otherServices";
import * as examServices from "../services/examServices"

async function postExam(req: Request, res: Response) {
    
    const body: IExamData = req.body;
    const {name, pdfUrl, categoryId, teacherDisciplineId} = body;


    const token: string | any = req.headers.authorization?.replace(/Bearer |'/g, '');
    const userID = Number(await otherServices.decodeToken(token));
    
    await examServices.checkCategoryId(categoryId);

    await examServices.checkExamName(name);

    await examServices.checkTeacherDisciplineId(teacherDisciplineId);

    const register = await examServices.saveExam(body)

    return res.status(201).send(register);
}

async function getExamsByDiscipline(req: Request, res: Response) {
    const token: string | any = req.headers.authorization?.replace(/Bearer |'/g, '');
    const userID = Number(await otherServices.decodeToken(token));

    const disciplines = await examServices.findExamsByDiscipline();

    return res.status(200).send(disciplines)
}

export {
    postExam,
    getExamsByDiscipline,
}