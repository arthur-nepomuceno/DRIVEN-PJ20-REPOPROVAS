# <p align = "center"> Projeto RepoProvas </p>

<p align="center">
   <img src="https://user-images.githubusercontent.com/72531277/178094665-f46c6a55-c821-42a0-bb9c-d5dd5f2d69fa.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Arthur Nepomuceno-4dae71?style=flat-square" />
</p>


##  :clipboard: Briefing

    This is a simulated platform for students who desire to save and share pdf files of old exams.

    A student must register an email and a password to access. After that, he or she can save and share exams, grouping them by discipline, teacher, time period (term) and type of exam (category).

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- JWTs & refresh tokens
- Node.js
- TypeScript
- Prisma & Postgres
- Nodemon
- Test
- Supertest
- Express
- Heroku

***

## :rocket: Routes

```yml
POST /signup
    - Route to signup a new user.
    - headers: {}
    - body: {
        "email": "driven@email.com",
        "password": "123456789"
        "confirm": "123456789"
}
```
    
```yml 
POST /login
    - Route to login.
    - headers: {}
    - body: {
        "email": "driven@email.com",
        "password": "123456789"
    }
```
    
```yml 
POST /exams
    - Route to list all.
    - headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.MQ.f0V5GG1lMaMt2REPKWrapTqHa-bUB96ecgoUthCeOYo" }
    - body: {}
```
***