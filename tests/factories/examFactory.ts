import { faker } from '@faker-js/faker';

async function exam() {
    return {
        name: faker.datatype.string(),
        pdfUrl: faker.internet.url(),
        categoryId: faker.datatype.number(),
        teacherDisciplineId: faker.datatype.number()
    }
}

export {
    exam
}