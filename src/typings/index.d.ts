export {};
declare global {
  namespace jest {
    interface Matchers<R> {
      tenhaSomaDevaloreIgual(montante: number): R;
      sejaDecrescente(): R;
    }
  }
}
