import calculaValor from "../src/calcual-valor";

expect.extend({
  tenhaSomaDevaloreIgual(items, soma) {
    const somaReal = calculaValor.arrendondar(
      items.reduce((a: number, t: number) => a + t)
    );
    const passou = somaReal === calculaValor.arrendondar(soma);

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
