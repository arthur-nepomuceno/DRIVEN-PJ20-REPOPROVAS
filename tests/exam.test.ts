import app from "../src/app"
import * as examFactory from "./factories/examFactory"
import * as userFactory from "./factories/userFactory"
import supertest from "supertest"
import { prisma } from "../src/database/postgres"

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users"`;
    await prisma.$executeRaw`TRUNCATE TABLE "exams"`;
})


afterAll(async () => {
    await prisma.$disconnect();
})

describe('[TEST] Route post/exam', () => {

    it('Return status 500 if token is invalid or malformed.', async () => {

        const user = await userFactory.user();
        const exam = await examFactory.exam();

        await supertest(app).post('/signup').send(user);
        const token = await supertest(app).post('/login').send(user);

        const response = await supertest(app).post('/exam').send({
            name: exam.name,
            pdfUrl: exam.pdfUrl,
            categoryId: 1,
            teacherDisciplineId: 1
        }).set({Authorization:`Bearer ${token}`});

        expect(response.status).toBe(500);
    })

    it('Return status 200 if exam is posted successfully.', async () => {

        const user = await userFactory.user();
        const exam = await examFactory.exam();

        await supertest(app).post('/signup').send({
            email: "driven@email.com",
            password: "123456789",
            confirm: "123456789"
        });

        const token = await supertest(app).post('/login').send({
            email: "driven@email.com",
            password: "123456789",
        });

        const response = await supertest(app).post('/exam').send({
            name: exam.name,
            pdfUrl: exam.pdfUrl,
            categoryId: 1,
            teacherDisciplineId: 1
        }).set({Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.MQ.f0V5GG1lMaMt2REPKWrapTqHa-bUB96ecgoUthCeOYo`});

        expect(response.status).toBe(201);
    })
})
