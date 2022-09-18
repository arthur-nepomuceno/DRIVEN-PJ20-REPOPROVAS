import faker from "@faker-js/faker";
import { prisma } from "../src/database/postgres"


async function main() {

    await prisma.terms.create({ data: { number: 1 } });
    await prisma.terms.create({ data: { number: 2 } });
    await prisma.terms.create({ data: { number: 3 } });
    await prisma.terms.create({ data: { number: 4 } });
    await prisma.terms.create({ data: { number: 5 } });
    await prisma.terms.create({ data: { number: 6 } });

    await prisma.categories.create({data: {name: 'Projeto'}});
    await prisma.categories.create({data: {name: 'Prática'}});
    await prisma.categories.create({data: {name: 'Recuperação'}});

    await prisma.teachers.create({data: {name: 'Diego Pinho'}})
    await prisma.teachers.create({data: {name: 'Bruna Hamori'}})

    await prisma.disciplines.create({data: {name: 'HTML e CSS', termId: 1}})
    await prisma.disciplines.create({data: {name: 'JavaScript', termId: 2}})
    await prisma.disciplines.create({data: {name: 'React', termId: 3}})
    await prisma.disciplines.create({data: {name: 'Humildade', termId: 1}})
    await prisma.disciplines.create({data: {name: 'Planejamento', termId: 2}})
    await prisma.disciplines.create({data: {name: 'Autoconfiança', termId: 3}})

    await prisma.teachersDisciplines.create({data: {teacherId: 1, disciplineId: 1}});
    await prisma.teachersDisciplines.create({data: {teacherId: 1, disciplineId: 2}});
    await prisma.teachersDisciplines.create({data: {teacherId: 1, disciplineId: 3}});
    await prisma.teachersDisciplines.create({data: {teacherId: 2, disciplineId: 4}});
    await prisma.teachersDisciplines.create({data: {teacherId: 2, disciplineId: 5}});
    await prisma.teachersDisciplines.create({data: {teacherId: 2, disciplineId: 6}});
};

main()
    .catch(e => {
        console.log(e);
        process.exit(1)
    })
    .finally(() => {
        prisma.$disconnect()
    })