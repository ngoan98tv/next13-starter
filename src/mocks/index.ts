import mockUsers from "./users";

export default async function mockAPI() {
  const fetchMock = (await import("fetch-mock/esm/client")).default;
  fetchMock.config.fallbackToNetwork = true;
  console.log("🚀 ~ Start mocking API");

  mockUsers(fetchMock);
  console.log("🚀 ~ Mocked users");
}
