"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calcual_valor_1 = __importDefault(require("../src/calcual-valor"));
expect.extend({
    tenhaSomaDevaloreIgual(items, soma) {
        const somaReal = calcual_valor_1.default.arrendondar(items.reduce((a, t) => a + t));
        const passou = somaReal === calcual_valor_1.default.arrendondar(soma);
        return {
            message: () => `A soma ${somaReal} deve ser igual a ${soma}`,
            pass: passou,
        };
    },
    sejaDecrescente(itens) {
        for (let i = 0; i < itens.lengt - 1; i++) {
            const j = i + 1;
            if (itens[i] < itens[j]) {
                return {
                    message: () => `O array deve estar em forma decrescente`,
                    pass: false,
                };
            }
        }
        return {
            message: () => `O array deve estar em forma decrescente`,
            pass: true,
        };
    },
});
