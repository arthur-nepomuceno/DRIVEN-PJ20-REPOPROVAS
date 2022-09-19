import app from "../src/app"
import * as userFactory from "./factories/userFactory"
import supertest from "supertest"
import { prisma } from "../src/database/postgres"

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE "users"`;
})


afterAll(async () => {
    await prisma.$disconnect();
})

describe('[TEST] Route post/signup', () => {

  it('Return status 201 if user signup correctly.', async () => {

    const user = await userFactory.user();
    
    const response = await supertest(app).post('/signup').send(user);

    expect(response.status).toBe(201);
  })

  it('Return status 409 if email or password are invalid.', async () => {

    const user = await userFactory.user();

    await supertest(app).post('/signup').send(user)

    const response = await supertest(app).post('/signup').send(user);

    expect(response.status).toBe(409);

  })

  it('Return status 422 if any data is missing.', async () => {

    const user = await userFactory.user();

    const responseOne = await supertest(app).post('/signup').send({
        email: '',
        password: user.password,
        confirm: user.confirm
    });

    const responseTwo = await supertest(app).post('/signup').send({
        email: user.email,
        password: '',
        confirm: user.confirm
    });

    const responseThree = await supertest(app).post('/signup').send({
        email: user.email,
        password: user.password,
        confirm: '',
    });

    expect(responseOne.status).toBe(422);
    expect(responseTwo.status).toBe(422);
    expect(responseThree.status).toBe(422);

  })
})

describe('[TEST] Route post/login', () => {

    it('Return status 200 if user login correctly', async () => {

        const user = await userFactory.user();

        await supertest(app).post('/signup').send(user);

        const response = await supertest(app).post('/login').send({
            email: user.email,
            password: user.password
        });

        expect(response.status).toBe(200);
    })

    it('Return status 409 if email is not registered', async () => {

        const user = await userFactory.user();

        const response = await supertest(app).post('/login').send({
            email: user.email,
            password: user.password 
        })

        expect(response.status).toBe(409);

    })

    it('Return status 409 if password is incorrect', async () => {

        const user = await userFactory.user();

        await supertest(app).post('/signup').send(user);

        const response = await supertest(app).post('/login').send({
            email: user.email,
            password: 'wrong-password' 
        })

        expect(response.status).toBe(409);

    })

    it('Return status 422 if any data is missing.', async () => {

        const user = await userFactory.user();

        const responseOne = await supertest(app).post('/login').send({
            email: '',
            password: user.password
        })
        
        const responseTwo = await supertest(app).post('/login').send({
            email: user.email,
            password: ''
        })

        expect(responseOne.status).toBe(422);
        expect(responseTwo.status).toBe(422);

      })
})