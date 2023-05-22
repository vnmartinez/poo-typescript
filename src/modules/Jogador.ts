import { Profissional } from "./Profissional";
import { Posicao } from "../enum/enumPosicao";

export class Jogador extends Profissional {
  constructor(
      public nome: string,
      public idade: number,
      public posicao: Posicao,
      public numero: number,
      public titular: boolean
  ) {
      super(nome, idade, posicao );
  }

  trabalhar(): void {
      console.log(`${this.nome} está treinando.`);
  }
}
