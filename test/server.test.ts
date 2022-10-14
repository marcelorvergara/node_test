import supertest from "supertest";

const request = supertest("http://localhost:8080");

test("Servidor na porta 8080", async () => {
  const resposta = await request.get("/");
  expect(resposta.status).toBe(200);
});
