import { Goleiro } from "./Goleiro";
import { Jogador } from "./Jogador";

export class Elenco {
  private jogadores: Jogador[] = [];
  private goleiros: Goleiro[] = [];

  constructor() {}

  adicionarJogador(jogador: Jogador): void {
      this.jogadores.push(jogador);
  }

  adicionarGoleiro(goleiro: Goleiro): void {
      this.goleiros.push(goleiro);
  }

  removerJogador(jogador: Jogador): void {
      const index = this.jogadores.indexOf(jogador);
      if (index !== -1) {
          this.jogadores.splice(index, 1);
      }
  }

  removerGoleiro(goleiro: Goleiro): void {
      const index = this.goleiros.indexOf(goleiro);
      if (index !== -1) {
          this.goleiros.splice(index, 1);
      }
  }

  imprimirElenco(): void {
      console.log("=== JOGADORES ===");
      this.jogadores.forEach((jogador) => {
          console.log(`${jogador.nome} (${jogador.posicao}) - Número: ${jogador.numero} - Titular: ${jogador.titular ? "Sim" : "Não"}`);
      });
      console.log("\n=== GOLEIROS ===");
      this.goleiros.forEach((goleiro) => {
          console.log(`${goleiro.nome} - Número: ${goleiro.numero} - Titular: ${goleiro.titular ? "Sim" : "Não"}`);
      });
  }
}
