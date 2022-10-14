import { Sequelize } from "sequelize-typescript";

import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  storage: ":memory:",
});

sequelize.addModels([]);

export default sequelize;
