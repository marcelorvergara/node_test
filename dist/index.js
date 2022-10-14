"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./src/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Express + Typescript Server");
});
db_1.default.sync().then(() => {
    // importante para o supertest não tentar iniciar e dar erro de endereço já em uso
    if (process.env.NODE_ENV !== "test") {
        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`);
        });
    }
});
exports.default = app;
