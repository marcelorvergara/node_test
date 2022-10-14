import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import sequelize from "./src/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

sequelize.sync().then(() => {
  // importante para o supertest não tentar iniciar e dar erro de endereço já em uso
  if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  }
});

export default app;
