import { User } from "@/types/user";
import { faker } from "@faker-js/faker";
import { ListOptions, ListResponse } from "@/types/shared";
import { extractQueryParams } from "@/utils/query";
import { FetchMockStatic } from "fetch-mock/esm/client";

export default function mockUsers(fetchMock: FetchMockStatic) {
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

  return fetchMock.get(
    "path:/api/users",
    (path, opts) => {
      const options = extractQueryParams(path) as ListOptions<User>;
      const { offset = 0, limit = 10 } = options;

      return {
        items: users.slice(offset, offset + limit),
        total: users.length,
        options,
      } as ListResponse<User>;
    },
    { delay: 1000 }
  );
}
