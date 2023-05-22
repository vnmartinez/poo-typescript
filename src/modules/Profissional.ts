import { IPessoa } from "../interfaces/IPessoa";

export abstract class Profissional implements IPessoa {
  constructor(
      public nome: string,
      public idade: number,
      public funcao: string,
  ) {}

  abstract trabalhar(): void;
}
