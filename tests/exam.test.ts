// import app from "../src/app"
// import * as examFactory from "./factories/examFactory"
// import * as userFactory from "./factories/userFactory"
// import supertest from "supertest"
// import { prisma } from "../src/database/postgres"

// beforeEach(async () => {
//     await prisma.$executeRaw`TRUNCATE TABLE "users"`;
//     await prisma.$executeRaw`TRUNCATE TABLE "exams"`;
//     await prisma.$executeRaw`TRUNCATE TABLE "terms"`;
//     await prisma.$executeRaw`TRUNCATE TABLE "teachers"`;
//     await prisma.$executeRaw`TRUNCATE TABLE "disciplines"`;
//     await prisma.$executeRaw`TRUNCATE TABLE "teachersDisciplines"`;
//     await prisma.$executeRaw`TRUNCATE TABLE "categories"`;
// })


// afterAll(async () => {
//     await prisma.$disconnect();
// })

// describe('[TEST] Route post/exam', () => {

//     it('Return status 200 if exam is posted correctly', async () => {

//         const user = await userFactory.user();
//         const exam = await examFactory.exam();

//         await supertest(app).post('/signup').send(user);
//         const token = await supertest(app).post('/login').send(user);

//         const response = await supertest(app).post('/exam').send({
//             name: exam.name,
//             pdfUrl: exam.pdfUrl,
//             categoryId: 1,
//             teacherDisciplineId: 1
//         }).set({Authorization:`Bearer ${token}`});

//         expect(response.status).toBe(200);
//     })

//     // it('Return status 400 if category does not exists.', async () => {

//     //     const user = await userFactory.user();

//     //     const response = await supertest(app).post('/login').send({
//     //         email: user.email,
//     //         password: user.password 
//     //     })

//     //     expect(response.status).toBe(409);

//     // })

//     // it('Return status 400 if teacher/discipline does not exists.', async () => {

//     //     const user = await userFactory.user();

//     //     await supertest(app).post('/signup').send(user);

//     //     const response = await supertest(app).post('/login').send({
//     //         email: user.email,
//     //         password: 'wrong-password' 
//     //     })

//     //     expect(response.status).toBe(409);

//     // })

//     // it('Return status 400 if exam name is already in use.', async () => {

//     //     const user = await userFactory.user();

//     //     const responseOne = await supertest(app).post('/login').send({
//     //         email: '',
//     //         password: user.password
//     //     })
        
//     //     const responseTwo = await supertest(app).post('/login').send({
//     //         email: user.email,
//     //         password: ''
//     //     })

//     //     expect(responseOne.status).toBe(422);
//     //     expect(responseTwo.status).toBe(422);

//     //   })

//     // it('Return status 422 if any data is missing.', async () => {

//     //     const user = await examFactory.exam();

//     //     const responseOne = await supertest(app).post('/login').send({
//     //         email: '',
//     //         password: user.password
//     //     })
        
//     //     const responseTwo = await supertest(app).post('/login').send({
//     //         email: user.email,
//     //         password: ''
//     // })

//     // expect(responseOne.status).toBe(422);
//     // expect(responseTwo.status).toBe(422);

//     // })
// })
