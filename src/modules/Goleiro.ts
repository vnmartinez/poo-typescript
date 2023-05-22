import { Jogador } from "./Jogador";
import { Posicao } from "../enum/enumPosicao";

export class Goleiro extends Jogador {
  private static numInstancias: number = 0;
  private static readonly LIMITE: number = 3;

  constructor(
      public nome: string,
      public idade: number,
      public numero: number,
      public titular: boolean
  ) {
      super(nome, idade, Posicao.GOLEIRO, numero, titular);
      if (Goleiro.numInstancias < Goleiro.LIMITE) {
          Goleiro.numInstancias++;
      } else {
          throw new Error("Limite de goleiros excedido");
      }
  }
}
