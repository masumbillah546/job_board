import { faker } from '@faker-js/faker'

// Define the User interface
interface User {
  userId: string
  username: string
  email: string
  avatar: string
  password: string
  birthdate: Date
  registeredAt: Date
}

// Function to create a random user
export function createRandomUser(): User {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  }
}

// Function to generate fake data
export const fakeData = (count: number = 5): User[] =>
  faker.helpers
    .multiple(createRandomUser, {
      count,
    })
    .map((item, i) => ({
      id: i + 1,
      active: true,
      ...item,
    }))
