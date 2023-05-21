import { User } from "@/types/user";
import fetchMock from "fetch-mock";
import { faker } from "@faker-js/faker";
import { ListResponse } from "@/types/shared";

const users = [] as User[];

for (let index = 0; index < 46; index++) {
  users.push({
    id: faker.database.mongodbObjectId(),
    displayName: faker.internet.displayName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    tel: faker.phone.number("84-###-###"),
    avatar: faker.internet.avatar(),
  });
}

fetchMock.get("/api/users", (url, opts) => {
  console.log("🚀 ~ file: users.ts:20 ~ fetchMock.get ~ url:", { url, opts });
  return {
    items: users,
    total: users.length,
  } as ListResponse<User>;
});
