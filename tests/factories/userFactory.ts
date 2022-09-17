import { faker } from '@faker-js/faker';

async function user() {
    const password = faker.datatype.string();
    return {
        email: faker.internet.email(),
        password: password,
        confirm: password
    }
}

export {
    user
}