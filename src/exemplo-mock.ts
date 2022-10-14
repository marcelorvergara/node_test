export interface IPessoa {
  nome: string;
  idade: number;
}

/* prettier-ignore */
function realizarParaAdultos(pessoas: IPessoa[], callback: (arg0: IPessoa) => void) {
  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade >= 18) {
      callback(pessoas[i]);
    }
  }
}

function aguardarTimer(callback: () => void) {
  setTimeout(() => {
    callback();
  }, 3000);
}

function somar(a: number, b: number) {
  return a + b;
}
export default {
  realizarParaAdultos,
  aguardarTimer,
  somar,
};
