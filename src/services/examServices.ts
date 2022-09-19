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

async function findExamsByDiscipline(){
    const exams = await findExamsWithTeacherAndDiscipline();
    return exams;

}

async function findExamsWithCategoryNames() {
    const exams = await examsRepository.getExams();
    const categories = await examsRepository.getCategories();

    const data = () => {
        let array = [];
        for(let i = 0; i < exams.length; i++){
            const exam = exams[i]

            if(exam.categoryId === 1){
                array.push({
                                id: exam.id,
                                name: exam.name,
                                pdfUrl: exam.pdfUrl,
                                category: 'Projeto',
                                teacherDisciplineId: exam.teacherDisciplineId
                })
            }

            if(exam.categoryId === 2){
                array.push({
                                id: exam.id,
                                name: exam.name,
                                pdfUrl: exam.pdfUrl,
                                category: 'Prática',
                                teacherDisciplineId: exam.teacherDisciplineId
                })
            }

            if(exam.categoryId === 3){
                array.push({
                                id: exam.id,
                                name: exam.name,
                                pdfUrl: exam.pdfUrl,
                                category: 'Recuperação',
                                teacherDisciplineId: exam.teacherDisciplineId
                })
            }
        }
        return array;
    }

    return data();
}

async function findExamsWithTeacherAndDiscipline() {
    const exams = await findExamsWithCategoryNames();
    const teachers = await examsRepository.getTeachers();
    const disciplines = await examsRepository.getDisciplines();
    const teachersDisciplines = await examsRepository.getTeachersDisciplines();

    const data = () => {
        let array = [];
        let arrayTwo = [];
        let arrayThree = []
        for(let i = 0; i < exams.length; i++){
            const exam = exams[i];

            for(let j = 0; j < teachersDisciplines.length; j++){
                const teacherDiscipline = teachersDisciplines[j];

                if(exam.teacherDisciplineId === teacherDiscipline.id){
                    array.push({
                        id: exam.id,
                        name: exam.name,
                        pdfUrl: exam.pdfUrl,
                        category: exam.category,
                        disciplineId: teacherDiscipline.disciplineId,
                        teacherId: teacherDiscipline.teacherId
                    })
                }
            }
        }

        for(let i = 0; i < array.length; i++){
            const exam = array[i];

            for(let j = 0; j < teachers.length; j++){
                const teacher = teachers[j];

                if(exam.teacherId === teacher.id){
                    arrayTwo.push({
                        id: exam.id,
                        name: exam.name,
                        pdfUrl: exam.pdfUrl,
                        category: exam.category,
                        disciplineId: exam.disciplineId,
                        teacher: teacher.name 
                    })   
                }
            }
        }

        for(let i = 0; i < arrayTwo.length; i++){
            const exam = arrayTwo[i];

            for(let j = 0; j < disciplines.length; j++){
                const discipline = disciplines[j];

                if(exam.disciplineId === discipline.id){
                    arrayThree.push({
                        id: exam.id,
                        name: exam.name,
                        pdfUrl: exam.pdfUrl,
                        category: exam.category,
                        discipline: discipline.name,
                        term: discipline.termId,
                        teacher: exam.teacher
                    })   
                }
            }
        }

        return arrayThree;
    }


    return data();
}

export {
    checkCategoryId,
    checkTeacherDisciplineId,
    checkExamName,
    saveExam,
    findExamsByDiscipline
}