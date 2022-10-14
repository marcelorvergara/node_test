import express, { Express } from "express";
import request from "supertest";
import app from "../index";

describe("Testes de integração", () => {
  test("responder http 200 na raiz", () => {
    return request(app)
      .get("/")
      .then((res) => expect(res.status).toBe(200));
  });

  test("responder http 200 na raiz", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });
});
