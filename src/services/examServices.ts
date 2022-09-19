import { IExamData } from "../types/examTypes";
import * as examsRepository from "../repositories/examsRepository";

async function checkCategoryId(categoryId: number){
    const check = await examsRepository.getCategoryById(categoryId);

    if(!check) throw {
        type: "invalid_category",
        message: "the category you are trying to register your exam does not exists."
    }

    return;
}

async function checkTeacherDisciplineId(teacherDisciplineId: number) {
    const check = await examsRepository.getTeacherDisciplineById(teacherDisciplineId);

    if(!check) throw {
        type: "invalid_teacher_discipline",
        message: "the teacher/discipline you are trying to register your exam does not exists."
    }

    return;
}

async function checkExamName(name: string) {
    const check = await examsRepository.getExamByName(name);

    if(check) throw {
        type: 'invalid_exam_name',
        message: 'the name you are trying to register is already in use.'
    }

    return;
}

async function saveExam(body: IExamData) {

    await examsRepository.postExam(body);
    
    return await examsRepository.getExamByName(body.name);    
}


export {
    checkCategoryId,
    checkTeacherDisciplineId,
    checkExamName,
    saveExam
}