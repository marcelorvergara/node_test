"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcularMontante(capital, taxa, periodo) {
    return arrendondar(capital * Math.pow(1 + taxa, periodo - 1));
}
function arrendondar(valor) {
    const precisao = 100;
    return Math.round((valor + Number.EPSILON) * precisao) / precisao;
}
function calcularPrestacoes(montante, numeroParcelas) {
    if (numeroParcelas > 1) {
        const prestacaoBase = arrendondar(montante / numeroParcelas);
        const resultado = Array(numeroParcelas).fill(prestacaoBase);
        let somaPrestacoes = resultado.reduce((a, t) => a + t, 0);
        let diferenca = arrendondar(montante - somaPrestacoes);
        const fator = diferenca > 0 ? 1 : -1;
        let i = diferenca > 0 ? 0 : resultado.length - 1;
        while (diferenca !== 0) {
            resultado[i] = arrendondar(resultado[i] + 0.01 * fator);
            (somaPrestacoes = resultado.reduce((a, t) => a + t)), 0;
            diferenca = arrendondar(montante - somaPrestacoes);
            i += fator;
        }
        return resultado;
    }
    else {
        return Array(1).fill(montante);
    }
}
exports.default = {
    calcularMontante,
    arrendondar,
    calcularPrestacoes,
};
