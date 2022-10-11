import { users } from "./fake.api/mockedUsers"
import { User } from "./types"

export const fetchAllUsers = (): Promise<Array<User>> =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(users);
        }, 100);
    });