"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exemplo_mock_1 = __importDefault(require("../src/exemplo-mock"));
test("Exemplo 01 - Mock callback", () => __awaiter(void 0, void 0, void 0, function* () {
    let pessoas = new Array(3);
    pessoas[0] = {
        nome: "João",
        idade: 19,
    };
    pessoas[1] = {
        nome: "Maria",
        idade: 17,
    };
    pessoas[2] = {
        nome: "José",
        idade: 18,
    };
    const mockCallback = jest.fn((p) => p.idade);
    // realizar a execução
    exemplo_mock_1.default.realizarParaAdultos(pessoas, mockCallback);
    // asserts
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(pessoas[0]);
    expect(mockCallback.mock.results[0].value).toBe(pessoas[0].idade);
    expect(mockCallback.mock.calls[1][0]).toBe(pessoas[2]);
    expect(mockCallback.mock.results[1].value).toBe(pessoas[2].idade);
}));
test("Teste 02 - Mock Timer", (done) => {
    jest.useFakeTimers();
    const mockCallback = jest.fn(() => done());
    exemplo_mock_1.default.aguardarTimer(mockCallback);
    jest.advanceTimersByTime(1000);
    expect(mockCallback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(3000);
    expect(mockCallback).toHaveBeenCalledTimes(1);
});
afterEach(() => {
    jest.useRealTimers();
});
