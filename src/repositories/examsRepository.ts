import { prisma } from "../database/postgres";
import { IExamData } from "../types/examTypes";

async function getCategoryById(id: number) {
    return await prisma.categories.findUnique({where: {id}});
}

async function getTeacherDisciplineById(id: number) {
    return await prisma.teachersDisciplines.findUnique({where: {id}});
}

async function getExamByName(name: string) {
    return await prisma.exams.findUnique({where: {name}})
}

async function postExam(object: IExamData) {
    return await prisma.exams.create({data: {
        name: object.name,
        pdfUrl: object.pdfUrl,
        categoryId: object.categoryId,
        teacherDisciplineId: object.teacherDisciplineId
    }})
}

async function getExams(){
    return await prisma.exams.findMany();
}

async function getCategories() {
    return await prisma.categories.findMany();
}

async function getTeachersDisciplines() {
    return await prisma.teachersDisciplines.findMany();
}

async function getTeachers() {
    return await prisma.teachers.findMany();
}

async function getDisciplines() {
    return await prisma.disciplines.findMany();
}

export {
    getCategoryById,
    getTeacherDisciplineById,
    getExamByName,
    postExam,
    getExams,
    getCategories,
    getTeachersDisciplines,
    getTeachers,
    getDisciplines
}