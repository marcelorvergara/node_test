"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calcual_valor_1 = __importDefault(require("../src/calcual-valor"));
require("./extensoes");
describe("calcularMontante", () => {
    test("Com uma prestação o montante é igual ao capital", () => {
        // operação
        const montante = calcual_valor_1.default.calcularMontante(100, 0.0175, 1);
        // resultado ou comportamento esperado
        expect(montante).toBe(100);
    });
    test("Com quatro prestações o montante é acrescido de juros", () => {
        // operação
        const montante = calcual_valor_1.default.calcularMontante(500, 0.025, 4);
        // resultado ou comportamento esperado
        expect(montante).toBe(538.45);
    });
});
describe("arrendondar", () => {
    test("Arrendondar em duas casas decimais", () => {
        const resultado = calcual_valor_1.default.arrendondar(538.4453124999998);
        expect(resultado).toBe(538.45);
    });
    test("1.005 deve retornar 1.01", () => {
        const resultado = calcual_valor_1.default.arrendondar(1.005);
        expect(resultado).toBe(1.01);
        // expect(resultado).toBe(10);
    });
    // sem Number.EPSILON
    // 1.005 --> esperado: 1.01, recebendo: 1.00
});
describe("Calcular Prestações", () => {
    test("O número de parcelas é igual ao número de prestações", () => {
        // premissas
        const numeroPrestacoes = 6;
        // operação
        const prestacoes = calcual_valor_1.default.calcularPrestacoes(200, numeroPrestacoes);
        // resultado esperado
        expect(prestacoes.length).toBe(numeroPrestacoes);
    });
    test("Uma única prestação, o valor será o montante", () => {
        // premissas
        const numeroPrestacoes = 1;
        // operacao
        const prestacoes = calcual_valor_1.default.calcularPrestacoes(50, numeroPrestacoes);
        // resultado esperado
        expect(prestacoes.length).toBe(numeroPrestacoes);
        expect(prestacoes[0]).toBe(50);
    });
    test("Duas prestações, o valor é igual a metade do montante", () => {
        const numPrestacoes = 2;
        const prestacoes = calcual_valor_1.default.calcularPrestacoes(50, numPrestacoes);
        expect(prestacoes.length).toBe(numPrestacoes);
        // expect(prestacoes[0] + prestacoes[1]).toBe(50);
        expect(prestacoes[0]).toBe(25);
        expect(prestacoes[1]).toBe(25);
    });
    test("O valor da soma das prestações deve ser igual ao montante com duas casa decimais", () => {
        // premissas (given)
        const numeroPrestacoes = 3;
        const montante = 100;
        // quando (when)
        const prestacoes = calcual_valor_1.default.calcularPrestacoes(montante, numeroPrestacoes);
        // então (then)
        expect(prestacoes.length).toBe(numeroPrestacoes);
        expect(prestacoes).tenhaSomaDevaloreIgual(montante);
        expect(prestacoes).sejaDecrescente();
        // for (let i = 0; i < prestacoes.length - 1; i++) {
        //   // para comparar prestações
        //   const j = i + 1;
        //   expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j]);
        // }
    });
    test("Desafio semi-final", () => {
        // given
        const numeroPrestacoes = 3;
        const montante = 101.994;
        // quando (when)
        const prestacoes = calcual_valor_1.default.calcularPrestacoes(montante, numeroPrestacoes);
        // então (then)
        expect(prestacoes.length).toBe(numeroPrestacoes);
        expect(prestacoes).tenhaSomaDevaloreIgual(montante);
        expect(prestacoes).not.tenhaSomaDevaloreIgual(10);
        expect(prestacoes).sejaDecrescente();
        let meuArray = [1, 2, 3, 4];
        expect(meuArray).sejaDecrescente();
        // const soma = calculaValor.arrendondar(
        //  prestacoes[0] + prestacoes[1] + prestacoes[2]
        // );
        // expect(soma).toBe(calculaValor.arrendondar(montante));
        // for (let i = 0; i < prestacoes.length - 1; i++) {
        //   // para comparar prestações
        //   const j = i + 1;
        //   expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j]);
        // }
    });
    test("Desfio final", () => {
        // given
        const numeroPrestacoes = -1;
        const montante = 100;
        // quando (when)
        const prestacoes = calcual_valor_1.default.calcularPrestacoes(montante, numeroPrestacoes);
        // então (then)
        expect(prestacoes.length).toBe(numeroPrestacoes + 2);
        const soma = calcual_valor_1.default.arrendondar(prestacoes[0]);
        expect(soma).toBe(calcual_valor_1.default.arrendondar(montante));
        for (let i = 0; i < prestacoes.length - 1; i++) {
            // para comparar prestações
            const j = i + 1;
            expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j]);
        }
    });
});
